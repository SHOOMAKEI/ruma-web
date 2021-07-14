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

            $event->menu->addMenuBlock(
                [
                    'id'=> "link-dashboard",
                    'name'=> "Dashboard",
                    'Icon'=> DashboardIcon(),
                    'type'=> "solo",
                    'subMenus' => [],
                    'link' => '#'
                ]
            );

            $event->menu->addMenuBlock(
                [
                    'id'=> "heading-apps",
                    'name'=> "Apps",
                    'Icon'=> 'ShopsIcon',
                    'type'=> "separator",
                    'subMenus' => [],
                    'link' => '#'
                ]
            );


            if(user()->hasPermissionTo('user.read')){
                $event->menu->addMenuBlock(
                    [
                        'id'=> "link-users",
                        'name'=> "Users",
                        'Icon'=> UsersIcon(),
                        'type'=> "dropdown",
                        'subMenus' => [
                            ['id'=> "link-users-sub-1", 'name'=> "Users", 'link'=>  route('users.index') ],
                            ['id'=> "link-users-sub-2", 'name'=> "Roles", 'link'=>  route('roles.index') ],
                            ['id'=> "link-users-sub-3", 'name'=> "Companies", 'link'=>  route('companies.index') ],
                            ['id'=> "link-users-sub-4", 'name'=> "Operation Years", 'link'=>  route('operation-years.index') ],
                        ]
                    ]
                );
            }

            $event->menu->addMenuBlock(
                [
                    'id'=> "link-sales",
                    'name'=> "Sales",
                    'Icon'=> SalesIcon(),
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "link-sales-sub-1", 'name'=> "Reports", 'link'=>  '#' ],
                        ['id'=> "link-sales-sub-2", 'name'=> "Incentives", 'link'=>  '#' ],
                        ['id'=> "link-sales-sub-3", 'name'=> "Gift Items", 'link'=>  '#' ],
                    ]
                ]
            );


            $event->menu->addMenuBlock(
                [
                    'id'=> "link-inventory",
                    'name'=> "Inventory",
                    'Icon'=> ProductsIcon(),
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "link-inventory-sub-1", 'name'=> "Products", 'link'=>  '#' ],
                        ['id'=> "link-inventory-sub-2", 'name'=> "Catalogue", 'link'=>  '#' ],
                        ['id'=> "link-inventory-sub-3", 'name'=> "Vendors", 'link'=>  '#' ],
                        ['id'=> "link-inventory-sub-4", 'name'=> "Warehouses", 'link'=>  '#' ],
                    ]
                ]
            );

        $event->menu->addMenuBlock(
            [
                'id'=> "link-e-learning",
                'name'=> "E-Learning",
                'Icon'=> YoutubeIcon(),
                'type'=> "dropdown",
                'subMenus' => [
                    ['id'=> "link-e-learning-sub-1", 'name'=> "Resource", 'link'=>  '#' ],
                    ['id'=> "link-e-learning-sub-2", 'name'=> "Assessments", 'link'=>  '#' ],
                    ['id'=> "link-e-learning-sub-3", 'name'=> "Reports", 'link'=>  '#' ],
                ]
            ]
        );

    }
}
