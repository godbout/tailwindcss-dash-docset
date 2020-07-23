<?php

include 'vendor/autoload.php';

echo <<<EOT

\e[1;33m### Send all the previous .docset to the trash ###


EOT;

foreach (glob(__DIR__ . "/../storage/**/*.docset") as $filename) {
    echo 'Deleting ' . basename($filename) . "...\n";
    print passthru("rm -Rf $filename");
}

echo "\n###\n";
