<?php

namespace App\Console\Commands;

use App\Models\User;
use Carbon\Carbon;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Spatie\Permission\Models\Role;

class CreateAdministratorAccount extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:system-admin';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command for creating system administrator';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }


    public function confirm_passwords($password, $confirm_password)
    {
        if ($password != $confirm_password) {
            $error = $this->error('Passwords do not match!');
            $password = $this->secret('Insert password');
            $password = $this->validatePassword($password);
            $confirm_password = $this->secret('Confirm your password');
            return $this->confirm_passwords($password, $confirm_password);
        }
        return $password;
    }

    // Validating if the emails does not repeat
    public function validateEmails($email)
    {
        $email_validator = Validator::make(
            ['email' => $email],
            ['email' => ['required', 'string', 'email', 'max:255', 'unique:users,email']]
        );

        if ($email_validator->fails()) {
            $this->error('Email is Invalid or already exist!');
            $email = $this->ask('Insert valid email:');
            return $this->validateEmails($email);
        }

        return $email;
    }

//    public function validateMobileNumber($mobile_number)
//    {
//        $mobile_number_validator = Validator::make(
//            ['mobile_number' => $mobile_number],
//            ['mobile_number' => ['required', 'string','regex:/^([0-9\s\-\+\(\)]*)$/','max:255', 'unique:users,mobile_number']]
//        );
//
//        if ($mobile_number_validator->fails()) {
//            $this->error('Mobile Number is Invalid or already exist!');
//            $mobile_number = $this->ask('Insert valid Mobile Number:');
//            return $this->validateEmails($mobile_number);
//        }
//
//        return $mobile_number;
//    }

    public function validatePassword($password)
    {
        $password_validator = Validator::make(
            ['password' => $password],
            ['password' => ['required', 'min:8']]
        );

        if ($password_validator->fails()) {
            $this->error('Password required and atleast 8 characters Needed');
            $password = $this->secret('Enter Password:');
            return $this->validatePassword($password);
        }

        return $password;
    }

    public function validateUserName($username)
    {
        $name_validator = Validator::make(
            ['username' => $username],
            ['username' => ['required', 'string', 'max:255', 'unique:users,username']]
        );

        if ($name_validator->fails()) {
            $this->error('Username is required or its already exists');
            $username = $this->ask('Insert Username:');
            return $this->validateUserName($username);
        }

        return $username;
    }


    /**
     * Execute the console command.
     *
     * @return mixed
     * @throws \Throwable
     */
    public function handle()
    {
        $username = $this->ask('Insert Username:');
        $username = $this->validateUserName($username);

        $email = $this->ask('Insert Email:');
        $email = $this->validateEmails($email);

//        $mobile_number = $this->ask('Insert Mobile Number:');
//        $mobile_number = $this->validateMobileNumber($mobile_number);

        $password = $this->secret('Insert password');
        $password = $this->validatePassword($password);

        $confirm_password = $this->secret('Confirm your password');
        $password = $this->confirm_passwords($password, $confirm_password);

        DB::transaction(function () use ($username, $email, $password) {
            $user =  User::create([
                'username' => $username,
                'email' => $email,
                'password' => Hash::make($password),
                'email_verified_at' => Carbon::now(),
            ]);

            $user->assignRole('system-administrator');
        });

        $this->info('Congratulations, Now you are the system administrator of this system.');

        return 0;
    }
}
