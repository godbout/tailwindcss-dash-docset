<?php

namespace Tests\Feature;

use App\Docsets\TailwindCSS;
use Godbout\DashDocsetBuilder\Services\DocsetBuilder;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Config;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;
use Wa72\HtmlPageDom\HtmlPageCrawler;

class UITest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->docset = new TailwindCSS();
        $this->builder = new DocsetBuilder($this->docset);

        if (! Storage::exists($this->docset->downloadedDirectory())) {
            fwrite(STDOUT, PHP_EOL . PHP_EOL . "\e[1;33mGrabbing tailwindcss..." . PHP_EOL);
            Artisan::call('grab tailwindcss');
        }

        if (! Storage::exists($this->docset->file())) {
            fwrite(STDOUT, PHP_EOL . PHP_EOL . "\e[1;33mPackaging tailwindcss..." . PHP_EOL);
            Artisan::call('package tailwindcss');
        }
    }

    /** @test */
    public function the_topbar_gets_removed_from_the_dash_docset_files()
    {
        $topbar = 'sticky top-0';

        $this->assertStringContainsString(
            $topbar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $topbar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_left_sidebar_gets_removed_from_the_dash_docset_files()
    {
        $leftSidebar = '<div class="hidden lg:block fixed z-20 inset-0 top-';

        $this->assertStringContainsString(
            $leftSidebar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $leftSidebar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_right_sidebar_gets_removed_from_the_dash_docset_files()
    {
        $rightSidebar = '<div class="fixed z-20 top-';

        $this->assertStringContainsString(
            $rightSidebar,
            Storage::get(
                $this->docset->downloadedDirectory() . '/' . $this->docset->url() . '/docs/background-color.html'
            )
        );

        $this->assertStringNotContainsString(
            $rightSidebar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_container_width_gets_updated_in_the_dash_docset_files()
    {
        $crawler = HtmlPageCrawler::create(
            Storage::get(
                $this->docset->downloadedDirectory() . '/' . $this->docset->url() . '/docs/background-color.html'
            )
        );

        $this->assertTrue(
            $crawler->filter('div.max-w-3xl.mx-auto.pt-10')->hasClass('mx-auto')
        );


        $crawler = HtmlPageCrawler::create(
            Storage::get(
                $this->docset->innerDirectory() . '/' . $this->docset->url() . '/docs/background-color.html'
            )
        );

        $this->assertFalse(
            $crawler->filter('div.max-w-3xl.mx-auto.pt-10')->hasClass('mx-auto')
        );
    }

    /** @test */
    public function the_footer_gets_removed_from_the_dash_docset_files()
    {
        $footer = '<div class="pt-10 pb-28 border-t border-gray-200';

        $this->assertStringContainsString(
            $footer,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $footer,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function some_colors_will_not_be_affected_by_Dash_dark_mode()
    {
        $ignoreDarkMode = 'dash-ignore-dark-mode';

        $this->assertStringNotContainsString(
            $ignoreDarkMode,
            Storage::get(
                $this->docset->downloadedDirectory() . '/' . $this->docset->url() . '/docs/background-color.html'
            )
        );

        $this->assertStringContainsString(
            $ignoreDarkMode,
            Storage::get(
                $this->docset->innerDirectory() . '/' . $this->docset->url() . '/docs/background-color.html'
            )
        );
    }
}
