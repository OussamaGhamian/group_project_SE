<?php

namespace Database\Factories;

use App\Models\Organization;
use App\Models\Project;
use App\Models\Team;
use Illuminate\Database\Eloquent\Factories\Factory;

class ProjectFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Project::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->word(),
            'description' => $this->faker->text(),
            'due_date' => $this->faker->dateTimeBetween('+1 weeks', '+1 year'),
            'organization_id' => $this->faker->unique(true)->numberBetween(1, Organization::count()),
        ];
    }
}
