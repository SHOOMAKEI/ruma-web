<?php

namespace Modules\EmployeeManagement\Listeners;

use App\Events\CreateSidebarMenus;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class AddMenuToSidebarNav
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  object  $event
     * @return void
     */
    public function handle(CreateSidebarMenus $event)
    {
        if(user()->hasPermissionTo('user.read')){
            $event->menu->addMenuBlock(
                [
                    'id'=> "link-sales",
                    'name'=> "Omakei from module",
                    'Icon'=> 'SalesIcon',
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "2", 'name'=> "Reports", 'link'=>  "#"],

                    ]
                ]
            );
        }

    }
}
