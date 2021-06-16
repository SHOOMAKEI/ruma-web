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
        if(user()->hasPermissionTo('employee.read')){
            $event->menu->addMenuBlock(
                [
                    'id'=> "link-employees",
                    'name'=> "Employees",
                    'Icon'=> asset('assets/media/icons/duotone/Interface/Briefcase.svg'),
                    'type'=> "dropdown",
                    'subMenus' => [
                        ['id'=> "link-employees-sub-1", 'name'=> "Employees", 'link'=>  '#' ],
                        ['id'=> "link-employees-sub-2", 'name'=> "Attendance", 'link'=>  '#'],
                        ['id'=> "link-employees-sub-3", 'name'=> "Leave Management", 'link'=>  '#' ],
                        ['id'=> "link-employees-sub-4", 'name'=> "Contract Management", 'link'=>  '#' ],
                    ]
                ]
            );
        }

    }
}
