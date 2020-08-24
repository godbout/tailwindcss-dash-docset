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
    public function the_navbar_gets_removed_from_the_dash_docset_files()
    {
        $navbar = 'id="sidebar-open"';

        $this->assertStringContainsString(
            $navbar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $navbar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_left_sidebar_gets_removed_from_the_dash_docset_files()
    {
        $leftSidebar = 'id="sidebar"';

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
        $rightSidebar = 'hidden xl:text-sm';

        $this->assertStringContainsString(
            $rightSidebar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $rightSidebar,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_tailwind_ui_early_access_alert_gets_removed_from_the_dash_docset_files()
    {
        $tailwindUIAlert = 'transition transform fixed z-100';

        $this->assertStringContainsString(
            $tailwindUIAlert,
            Storage::get($this->docset->downloadedDirectory() . '/' . $this->docset->url() . '/components/buttons.html')
        );

        $this->assertStringNotContainsString(
            $tailwindUIAlert,
            Storage::get($this->docset->innerDirectory() . '/' . $this->docset->url() . '/components/buttons.html')
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

    /** @test */
    public function the_CSS_gets_updated_in_the_dash_docset_files()
    {
        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertTrue(
            $crawler->filter('#__next > div:nth-child(2)')->hasClass('max-w-screen-xl')
        );


        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->innerIndex())
        );

        $this->assertFalse(
            $crawler->filter('#__next > div:nth-child(2)')->hasClass('max-w-screen-xl')
        );
    }
}
