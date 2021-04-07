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
    public function the_announcement_bar_gets_removed_from_the_dash_docset_files()
    {
        $announcementBar = 'py-2 bg-gradient-to-r from-indigo-600 to-light-blue-500 overflow-hidden';

        $this->assertStringContainsString(
            $announcementBar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $announcementBar,
            Storage::get($this->docset->innerIndex())
        );
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
    public function the_bottom_button_to_slide_the_left_sidebar_gets_removed_from_the_dash_docset_files()
    {
        $bottomButton = 'class="fixed z-50 bottom-4 right-4';

        $this->assertStringContainsString(
            $bottomButton,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $bottomButton,
            Storage::get($this->docset->innerIndex())
        );
    }

    /** @test */
    public function the_container_width_gets_updated_in_the_dash_docset_files()
    {
        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertFalse(
            $crawler->filter('#content-wrapper')->hasClass('px-4')
        );


        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->innerIndex())
        );

        $this->assertTrue(
            $crawler->filter('#content-wrapper')->hasClass('px-4')
        );
    }

    /** @test */
    public function the_bottom_padding_gets_updated_in_the_dash_docset_files()
    {
        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertTrue(
            $crawler->filter('#content-wrapper > div > div')->hasClass('pb-24')
        );


        $crawler = HtmlPageCrawler::create(
            Storage::get($this->docset->innerIndex())
        );

        $this->assertTrue(
            $crawler->filter('#content-wrapper > div > div')->hasClass('pb-10')
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
