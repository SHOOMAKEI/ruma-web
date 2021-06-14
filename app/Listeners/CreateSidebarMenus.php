<?php

namespace App\Listeners;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;


class CreateSidebarMenus
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
     * @param CreateSidebarMenus $event
     * @return void
     */
    public function handle(\App\Events\CreateSidebarMenus $event)
    {


            if(!user()->hasPermissionTo('user.read')){
                $event->menu->addMenuBlock(
                    [
                        'id'=> "link-sales",
                        'name'=> "Omakei",
                        'Icon'=> 'SalesIcon',
                        'type'=> "dropdown",
                        'subMenus' => [
                            ['id'=> "2", 'name'=> "Reports", 'link'=>  "#"],

                        ]
                    ]
                );
            }




        $event->menu->addMenuBlock(
            [
                'id'=> "link-sales",
                'name'=> "Sales",
                'Icon'=> 'SalesIcon',
                'type'=> "dropdown",
                'subMenus' => [
                    ['id'=> "2", 'name'=> "Reports", 'link'=>  "#"],

                ]
            ]
        );
        $event->menu->addMenuBlock(
            [
                'id'=> "link-sales",
                'name'=> "Sales",
                'Icon'=> 'SalesIcon',
                'type'=> "dropdown",
                'subMenus' => [
                    ['id'=> "2", 'name'=> "Reports", 'link'=>  "#"],

                ]
            ]
        );
        $event->menu->addMenuBlock(
            [
                'id'=> "link-sales",
                'name'=> "Sales",
                'Icon'=> 'SalesIcon',
                'type'=> "dropdown",
                'subMenus' => [
                    ['id'=> "2", 'name'=> "Reports", 'link'=>  "#"],

                ]
            ]
        );
    }
}
