<?php

namespace Database\Seeders;

use Database\Factories\ProjectFactory;
use Illuminate\Database\Seeder;

class Project extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeder = new ProjectFactory();
        $seeder->count(3)->create();
    }
}
