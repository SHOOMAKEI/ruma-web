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
        if(user()->hasPermissionTo('store.read')){
            $event->menu->addMenuBlock(
                [
                    'id'=> "link-stores",
                    'name'=> "Stores",
                    'Icon'=> ShopsIcon(),
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "link-stores-sub-1", 'name'=> "Shops", 'link'=>  '#' ],
                        ['id'=> "link-stores-sub-2", 'name'=> "States", 'link'=>  '#' ],
                        ['id'=> "link-stores-sub-3", 'name'=> "Region", 'link'=>  '#' ],
                    ]
                ]
            );
        }

    }
}
