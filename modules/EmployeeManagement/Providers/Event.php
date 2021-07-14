<?php


namespace Modules\EmployeeManagement\Providers;

use App\Events\CreateSidebarMenus;
use Illuminate\Foundation\Support\Providers\EventServiceProvider;
use Modules\EmployeeManagement\Listeners\AddMenuToSidebarNav;

class Event extends EventServiceProvider
{
    protected $listen = [
        CreateSidebarMenus::class => [
            AddMenuToSidebarNav::class,
        ],
    ];
}
