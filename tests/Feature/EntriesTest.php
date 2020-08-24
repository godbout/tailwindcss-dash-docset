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

class EntriesTest extends TestCase
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
    public function it_has_a_table_of_contents()
    {
        Config::set(
            'database.connections.sqlite.database',
            "storage/{$this->docset->databaseFile()}"
        );

        $this->assertNotEquals(0, DB::table('searchIndex')->count());
    }

    /** @test */
    public function the_dash_docset_has_some_entries_of_type_Instruction()
    {
        Config::set(
            'database.connections.sqlite.database',
            "storage/{$this->docset->databaseFile()}"
        );

        $this->assertNotEquals(
            0,
            DB::table('searchIndex')->where('type', 'Instruction')->count()
        );
    }

    /** @test */
    public function it_inserts_dash_anchors_in_the_doc_files()
    {
        $this->assertStringContainsString(
            'name="//apple_ref/',
            Storage::get($this->docset->innerIndex())
        );
    }
}
