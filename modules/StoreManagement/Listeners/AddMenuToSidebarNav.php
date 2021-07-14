<?php

namespace Modules\StoreManagement\Listeners;

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
        if(user()->hasPermissionTo('employee.read')){
            $event->menu->addMenuBlock(
                [
                    'id'=> "link-stores",
                    'name'=> "Stores",
                    'Icon'=> ShopsIcon(),
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "link-stores-sub-1", 'name'=> "Shops", 'link'=>  route('shops.index') ],
                        ['id'=> "link-stores-sub-2", 'name'=> "States", 'link'=>  route('geopolitical-zones.index') ],
                        ['id'=> "link-stores-sub-3", 'name'=> "Region", 'link'=>  route('sale-zones.index') ],
                    ]
                ]
            );
        }

    }
}
