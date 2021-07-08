<?php

namespace App\Utilities;

use Closure;
use Countable;
use Illuminate\Contracts\Config\Repository;
use Illuminate\View\Factory;

class Menu implements Countable
{
    /**
     * The menu collections.
     *
     * @var array
     */
    protected $menu = array();


    public function __construct()
    {

    }


    public function addMenuBlock( array $menu)
    {
        array_push($this->menu, $menu);
    }

    /**
     * Get all menus.
     *
     * @return array
     */
    public function all()
    {
        return $this->menu;
    }

    /**
     * Count menus.
     *
     * @return int
     */
    public function count()
    {
        return count($this->menu);
    }

    /**
     * Empty the current menus.
     */
    public function destroy()
    {
        $this->menu = array();
    }
}
