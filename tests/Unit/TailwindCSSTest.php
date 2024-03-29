<?php

namespace Tests\Unit;

use App\Docsets\TailwindCSS;
use Godbout\DashDocsetBuilder\Services\DocsetBuilder;
use Illuminate\Support\Facades\Storage;
use Tests\TestCase;

class TailwindCSSTest extends TestCase
{
    public function setUp(): void
    {
        parent::setUp();

        $this->docset = new TailwindCSS();
        $this->builder = new DocsetBuilder($this->docset);
    }

    /** @test */
    public function it_can_generate_a_table_of_contents()
    {
        // Resource entries
        $toc = $this->docset->entries(
            $this->docset->downloadedDirectory() . '/' . $this->docset->url() . '/resources.html'
        );

        $this->assertNotEmpty($toc);

        // All other entries
        $toc = $this->docset->entries(
            $this->docset->downloadedIndex()
        );

        $this->assertNotEmpty($toc);
    }

    /** @test */
    public function it_can_format_the_documentation_files()
    {
        $topbar = 'sticky top-0';

        $this->assertStringContainsString(
            $topbar,
            Storage::get($this->docset->downloadedIndex())
        );

        $this->assertStringNotContainsString(
            $topbar,
            $this->docset->format($this->docset->downloadedIndex())
        );
    }
}
