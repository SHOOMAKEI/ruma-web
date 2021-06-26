import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import route from 'ziggy-js';
import { Ziggy } from './ziggy';



InertiaProgress.init({
    delay: 250,
    color: '#0acf97',
    includeCSS: true,
    showSpinner: true,
})

createInertiaApp({
    resolve:  name => {
        let parts = name.split('/')
        let type = parts[0]
        let  module_name = parts[1]
        if(type == 'Module'){
            let  name = parts[2] + '/' + parts[3]
            if(module_name == 'EmployeeManagement') {

                return  import(`@/../../modules/EmployeeManagement/Resources/assets/js/Pages/${name}`)
            }

            if(module_name == 'StoreManagement') {

                return  import(`@/../../modules/StoreManagement/Resources/assets/js/Pages/${name}`)
            }
        }
        return import(`./Pages/${name}`)

    },
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})

route('home', undefined, undefined, Ziggy);
