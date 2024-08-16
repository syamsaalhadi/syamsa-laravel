<?php

namespace Database\Seeders;

use App\Models\Category;
use Illuminate\Database\Seeder;


class CategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Category:: factory (3)->create();

        Category::create([
            'name' => 'Web Design',
            'slug' => 'web-design',
            'color' => 'green'

        ]);

        Category::create([
            'name' => 'Machine Learning',
            'slug' => 'machine-learning',
            'color' => 'blue'
        ]);

        Category::create([
            'name' => 'Ui Ux',
            'slug' => 'ui-ux',
            'color' => 'orange'
        ]);

        Category::create([
            'name' => 'Data Structures',
            'slug' => 'data-structures',
            'color' => 'yellow'
        ]);
    }
}
