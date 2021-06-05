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
    resolve: name => import(`./Pages/${name}`),
    setup({ el, App, props }) {
        render(<App {...props} />, el)
    },
})

route('home', undefined, undefined, Ziggy);
