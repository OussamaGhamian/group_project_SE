<?php

namespace Database\Factories;

use App\Models\Project;
use App\Models\Task;
use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

class TaskFactory extends Factory
{
    /**
     * The name of the factory's corresponding model.
     *
     * @var string
     */
    protected $model = Task::class;

    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            'title' => $this->faker->words(2),
            'user_id'=>$this->faker->unique()->numberBetween(1, User::count()),
            'project_id'=>$this->faker->unique()->numberBetween(1, Project::count()),
            'description' => $this->faker->text(),
            'is_done' => $this->faker->boolean(),
            'due_date' => $this->faker->dateTimeBetween('now', '+1 months'),
        ];
    }
}
