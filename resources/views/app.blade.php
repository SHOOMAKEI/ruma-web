<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="shortcut icon" href="{{asset('assets/images/brand/logo.png')}}">

        <title>{{ env('APP_NAME', 'RUMA APP') }}</title>

        <link rel="preload" href="{{asset('fonts/EuclidCircularB-Regular.ttf')}}" as="font" crossOrigin=""/>
        <link rel="preload" href="{{asset('fonts/EuclidCircularB-SemiBold.ttf')}}" as="font" crossOrigin=""/>
        <link rel="preload" href="{{asset('fonts/EuclidCircularB-Bold.ttf')}}" as="font" crossOrigin=""/>

        <link href="{{asset('assets/css/fonts.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/plugins/custom/datatables/datatables.bundle.css')}}" rel="stylesheet" type="text/css"/>
        <link href="{{asset('assets/css/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/base.css')}}" rel="stylesheet" type="text/css" />
       
        @routes
        
    </head>
    <body   
        id="kt_body"
        class="
        header-fixed
        header-tablet-and-mobile-fixed
        toolbar-enabled toolbar-fixed
        toolbar-tablet-and-mobile-fixed
        aside-enabled aside-fixed">

        <div class="d-flex flex-column flex-root">
            @inertia
        </div>

        <script src="{{asset('assets/js/plugins.bundle.js')}}"></script>
        <script src="{{asset('assets/js/scripts.bundle.js')}}"></script>
        <script src="{{asset('assets/js/custom/chat/chat.js')}}"></script>
        <script src="{{asset('assets/js/custom/api-keys/api-keys.js')}}"></script>
        <script src="{{asset('assets/plugins/custom/datatables/datatables.bundle.js')}}"></script>
        <script src="{{asset('assets/plugins/fslightbox/fslightbox.bundle.js')}}"></script>
        <script src="{{asset('assets/js/base.js')}}"></script>
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </body>
</html>
