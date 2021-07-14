<?php

return [

    'styles' => [
        // Boostrap 3
        'bs3-navbar' => \App\Utilities\Presenters\Bootstrap3\Navbar::class,
        'bs3-navbar-right' => \App\Utilities\Presenters\Bootstrap3\NavbarRight::class,
        'bs3-nav-pills' => \App\Utilities\Presenters\Bootstrap3\NavPills::class,
        'bs3-nav-tab' => \App\Utilities\Presenters\Bootstrap3\NavTab::class,
        'bs3-sidebar' => \App\Utilities\Presenters\Bootstrap3\Sidebar::class,
        'bs3-navmenu' => \App\Utilities\Presenters\Bootstrap3\Nav::class,

        // Zurb
        'zurb' => \App\Utilities\Presenters\Foundation\Zurb::class,

        // Admin
        'adminlte' => \App\Utilities\Presenters\Admin\Adminlte::class,
        'argon' => \App\Utilities\Presenters\Admin\Argon::class,
        'metronic-horizontal' => \App\Utilities\Presenters\Admin\MetronicHorizontal::class,
    ],

    'home_urls' => [
        '/',
    ],

    'ordering' => false,

];
