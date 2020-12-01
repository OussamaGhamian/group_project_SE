<?php

namespace Database\Seeders;

use Database\Factories\TeamFactory;
use Illuminate\Database\Seeder;

class Team extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeder = new TeamFactory();
        $seeder->count(5)->create();
    }
}
