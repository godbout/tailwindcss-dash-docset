<?php

namespace App\Docsets;

use Godbout\DashDocsetBuilder\Docsets\BaseDocset;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class TailwindCSS extends BaseDocset
{
    public const CODE = 'tailwindcss';
    public const NAME = 'Tailwind CSS';
    public const URL = 'tailwindcss.com';
    public const INDEX = 'docs/installation.html';
    public const PLAYGROUND = 'https://play.tailwindcss.com/';
    public const ICON_16 = 'favicon-16x16.png';
    public const ICON_32 = 'favicon-32x32.png';
    public const EXTERNAL_DOMAINS = [
    ];


    public function grab(): bool
    {
        $toIgnore = implode('|', [
            'blog.tailwindcss.com',
            'v1.tailwindcss.com',
            'v2.tailwindcss.com'
        ]);

        system(
            "echo; wget tailwindcss.com/docs \
                --mirror \
                --trust-server-names \
                --reject-regex='{$toIgnore}' \
                --page-requisites \
                --adjust-extension \
                --convert-links \
                --span-hosts \
                --domains={$this->externalDomains()} \
                --directory-prefix=storage/{$this->downloadedDirectory()} \
                -e robots=off \
                --quiet \
                --show-progress",
            $result
        );

        return $result === 0;
    }

    public function entries(string $file): Collection
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $entries = collect();

        $entries = $entries->union($this->resourceEntries($crawler, $file));
        $entries = $entries->union($this->guideEntries($crawler, $file));
        $entries = $entries->union($this->sectionEntries($crawler, $file));

        return $entries;
    }

    protected function resourceEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        if (Str::contains($file, "{$this->url()}/resources.html")) {
            $crawler->filter('h2')->each(function (HtmlPageCrawler $node) use ($entries, $file) {
                $entries->push([
                    'name' => $this->cleanAnchorText($node->text()),
                    'type' => 'Resource',
                    'path' => Str::after($file . '#' . Str::slug($node->text()), $this->innerDirectory()),
                ]);
            });

            $crawler->filter('h3')->each(function (HtmlPageCrawler $node) use ($entries, $file) {
                $entries->push([
                    'name' => $this->cleanAnchorText($node->text()),
                    'type' => 'Section',
                    'path' => Str::after($file . '#' . Str::slug($node->text()), $this->innerDirectory()),
                ]);
            });

            return $entries;
        }
    }

    protected function guideEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        if (Str::contains($file, "{$this->url()}/docs.html")) {
            $itemsToIgnore = collect(['Release Notes', 'Typography', 'Forms', 'Aspect Ratio', 'Line Clamp']);

            $crawler
                ->filter('nav#nav li.mt-8 a')
                ->each(function (HtmlPageCrawler $node) use ($entries, $itemsToIgnore) {
                    if (! $itemsToIgnore->contains($node->text())) {
                        $entries->push([
                            'name' => trim($node->text()),
                            'type' => 'Guide',
                            'path' => $this->url() . '/' . $node->attr('href'),
                        ]);
                    }
                });
        }

        return $entries;
    }

    protected function sectionEntries(HtmlPageCrawler $crawler, string $file)
    {
        $entries = collect();

        $crawler->filter('h2')->each(function (HtmlPageCrawler $node) use ($entries, $file) {
            $entries->push([
                'name' => $this->cleanAnchorText($node->text()),
                'type' => 'Section',
                'path' => Str::after($file . '#' . Str::slug($node->text()), $this->innerDirectory()),
            ]);
        });

        return $entries;
    }

    public function format(string $file): string
    {
        $crawler = HtmlPageCrawler::create(Storage::get($file));

        $this->removeTopbar($crawler);
        $this->removeLeftSidebar($crawler);
        $this->removeRightSidebar($crawler);
        $this->removeClassesOverflow($crawler);

        $this->updateContainerWidth($crawler);
        $this->removeFooter($crawler);

        $this->ignoreDarkModeForSomeColors($crawler);

        $this->removeUnwantedJavaScript($crawler);

        $this->insertOnlineRedirection($crawler, $file);
        $this->insertDashTableOfContents($crawler, $file);

        return $crawler->saveHTML();
    }

    protected function removeTopbar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('div.sticky.top-0')->remove();
    }

    protected function removeLeftSidebar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('div.hidden.fixed.z-20.inset-0.overflow-y-auto')->remove();
    }

    protected function removeRightSidebar(HtmlPageCrawler $crawler)
    {
        $crawler->filter('div.fixed.z-20.bottom-0.py-10.px-8.overflow-y-auto.hidden')->remove();
    }

    protected function removeClassesOverflow(HtmlPageCrawler $crawler)
    {
        $crawler->filter('#class-reference + div')
            ->removeClass('overflow-hidden')
            ->removeClass('lg:overflow-auto')
            ->addClass('overflow-auto')
        ;

        $crawler->filter('#class-reference ~ div:nth-of-type(2)')
            ->remove()
        ;
    }

    protected function updateContainerWidth(HtmlPageCrawler $crawler)
    {
        $crawler->filter('div.max-w-8xl.mx-auto.px-4 > div:first-child')
            ->removeClass('lg:pl-[19.5rem]')
        ;
        $crawler->filter('div.max-w-3xl.mx-auto.pt-10')
            ->removeClass('max-w-3xl')
            ->removeClass('mx-auto')
            ->removeClass('xl:max-w-none')
            ->removeClass('xl:mr-[15.5rem]')
            ->removeClass('xl:pr-16')
        ;
    }

    protected function removeFooter(HtmlPageCrawler $crawler)
    {
        $crawler->filter('footer div.pt-10.pb-28.border-t.justify-between')
            ->remove()
        ;
    }

    protected function ignoreDarkModeForSomeColors(HtmlPageCrawler $crawler)
    {
        $this->ignoreDarkModeForDefaultColorPaletteSection($crawler);
        $this->ignoreDarkModeForVariousColorTables($crawler);
    }

    protected function ignoreDarkModeForDefaultColorPaletteSection(HtmlPageCrawler $crawler)
    {
        $crawler->filter('div.h-10.w-full.rounded.ring-1.ring-inset')->addClass('dash-ignore-dark-mode');
    }

    protected function ignoreDarkModeForVariousColorTables(HtmlPageCrawler $crawler)
    {
        $crawler->filter('h2 + div td:last-child')->addClass('dash-ignore-dark-mode');
    }

    protected function removeUnwantedJavaScript(HtmlPageCrawler $crawler)
    {
        $crawler->filter('script')->remove();
    }

    protected function insertOnlineRedirection(HtmlPageCrawler $crawler, string $file)
    {
        $onlineUrl = Str::substr(Str::after($file, $this->innerDirectory()), 1, -5);

        $crawler->filter('html')->prepend("<!-- Online page at https://$onlineUrl -->");
    }

    protected function insertDashTableOfContents(HtmlPageCrawler $crawler, string $file)
    {
        if (! Str::contains($file, "{$this->url()}/docs.html")) {
            $crawler->filter('body')
                ->before('<a name="//apple_ref/cpp/Section/Top" class="dashAnchor"></a>');

            $crawler->filter('h2, h3')->each(function (HtmlPageCrawler $node) {
                $node->prepend(
                    '<a id="' . Str::slug($node->text()) . '" name="//apple_ref/cpp/Section/' . rawurlencode($this->cleanAnchorText($node->text())) . '" class="dashAnchor"></a>'
                );
            });
        }
    }

    protected function cleanAnchorText($anchorText)
    {
        return trim(preg_replace('/\s+/', ' ', $anchorText));
    }
}
