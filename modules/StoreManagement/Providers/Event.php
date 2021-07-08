<?php


namespace Modules\StoreManagement\Providers;

use App\Events\CreateSidebarMenus;
use Illuminate\Foundation\Support\Providers\EventServiceProvider;
use Modules\StoreManagement\Listeners\AddMenuToSidebarNav;

class Event extends EventServiceProvider
{
    protected $listen = [
        CreateSidebarMenus::class => [
            AddMenuToSidebarNav::class,
        ],
    ];
}
