<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        DB::table('users')->insert([
            'name' => "Prashant Gupta",
            'email' => "prashant2621993@gmail.com",
            'password' => bcrypt('123456'),
        ]);

        DB::table('employees')->insert([
            'name' => "Prashant Gupta",
            'email' => "prashant2621993@gmail.com",
            'mobile' => "1234567890",
            'salary' => "20,000",
        ]);

        DB::table('employees')->insert([
            'name' => "Amberish Raj",
            'email' => "ambu@yopmail.com",
            'mobile' => "1234567891",
            'salary' => "40,000",
        ]);
    }
}
