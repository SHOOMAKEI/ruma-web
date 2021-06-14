import React from 'react'
import { render } from 'react-dom'
import { createInertiaApp, App } from '@inertiajs/inertia-react'
import { InertiaProgress } from '@inertiajs/progress'
import route from 'ziggy-js';
import { Ziggy } from './ziggy';



InertiaProgress.init({
    delay: 250,
    color: '#0acf97',
    includeCSS: true,
    showSpinner: true,
})


// const el = document.getElementById('app')
//
// render(
//     <App
//         initialPage={JSON.parse(el.dataset.page)}
//         resolveComponent={name => {
//             let parts = name.split('/')
//             let type = parts[0]
//             let  module_name = parts[1]
//             if(type == 'Module'){
//                 let  name = parts[2]
//                 return  import(`@/../../modules/${module_name}/Resources/assets/js/Pages/${name}`).then(module => module.default)
//             }
//             return import(`@/Pages/${name}`).then(module => module.default)
//
//         }}
//     />,
//     el
// )
//
createInertiaApp({
    resolveComponent:  name => {
        let parts = name.split('/')
        let type = parts[0]
        let  module_name = parts[1]
        if(type == 'Module'){
            let  name = parts[2]
           return  import(`@/../../modules/${module_name}/Resources/assets/js/Pages/${name}`)
        }
        return import(`@/Pages/${name}`)

    },
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})

route('home', undefined, undefined, Ziggy);
