<?php

namespace App\Console\Commands;

use Akaunting\Menu\Menu;
use App\Events\CreateSidebarMenus;
use App\Utilities\MenuItem;
use App\Utilities\Sidebar;
use Illuminate\Console\Command;

class testMenues extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'menu:test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test if menu return proper array without views';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        menu()->create('admin', function ($menu) {
            $menu->setPresenter(Sidebar::class);

            $menu->route('companies.index', trans_choice('general.reports', 2), [], 60, ['icon' => 'fa fa-chart-pie']);

            $menu->dropdown('Apps', function ($sub) {
                $sub->url('settings/account', 'Account');
                $sub->url('settings/password', 'Password');
                $sub->url('settings/design', 'Design');
            }, 50, [
                'title' => trans('general.banking'),
                'icon' => 'fa fa-briefcase',
            ]);

            dd(menu('admin'));

        });
//        $items = app(MenuItem::class);
//        $menu = app(Menu::class);
//        $menu->route('companies.index', trans_choice('general.reports', 2), [], 60, ['icon' => 'fa fa-chart-pie']);
//
//        $menu->dropdown(trim(trans('general.banking')), function ($sub) {
//            $sub->route('users.index', trans_choice('general.accounts', 2), [], 10);
//            $sub->route('roles.index', trans_choice('general.transfers', 2), [], 20);
//            $sub->route('departments.index', trans_choice('general.transactions', 2), [], 30);
//            $sub->route('operation-years.index', trans_choice('general.reconciliations', 2), [], 40);
//
//        }, 50, [
//            'title' => trans('general.banking'),
//            'icon' => 'fa fa-briefcase',
//        ]);
////        event(new CreateSidebarMenus($menu));
//        echo "omakei";
        dd($menu->all());
        return  $menu->all();
    }
}
