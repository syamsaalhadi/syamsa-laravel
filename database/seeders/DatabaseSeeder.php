<?php

namespace Database\Seeders;

use App\Models\Post;
use App\Models\User;
use App\Models\Category;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->call([CategorySeeder::class, UserSeeder::class]);
        Post::factory(100)->recycle([

            Category::all(),
            User::all()
            
            
            ]) ->create();

    }
}