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
                    'Icon'=> asset('assets/media/icons/duotone/Shopping/Sort2.svg'),
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
                        'Icon'=> asset('assets/media/icons/duotone/Communication/Group.svg'),
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
                    'Icon'=> asset('assets/media/icons/duotone/Interface/Line-03-Up.svg'),
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
                    'id'=> "link-stores",
                    'name'=> "Stores",
                    'Icon'=> asset('assets/media/icons/duotone/Shopping/Box1.svg'),
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "link-stores-sub-1", 'name'=> "Shops", 'link'=>  '#' ],
                        ['id'=> "link-stores-sub-2", 'name'=> "States", 'link'=>  '#' ],
                        ['id'=> "link-stores-sub-3", 'name'=> "Region", 'link'=>  '#' ],
                    ]
                ]
            );

            $event->menu->addMenuBlock(
                [
                    'id'=> "link-inventory",
                    'name'=> "Inventory",
                    'Icon'=> asset('assets/media/icons/duotone/Shopping/Cart4.svg'),
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
                'Icon'=> asset('assets/media/icons/duotone/Media/Youtube.svg'),
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
