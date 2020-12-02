<?php

namespace Database\Seeders;

use Database\Factories\OrganizationFactory;
use Illuminate\Database\Seeder;

class Organization extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeder = new OrganizationFactory();
        $seeder->count(50)->create();
    }
}
