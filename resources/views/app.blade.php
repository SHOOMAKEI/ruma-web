<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>{{ env('APP_NAME', 'RUMA APP') }}</title>
        <link href="{{asset('assets/css/fonts.css')}}" rel="stylesheet" type="text/css" />
        <link rel="shortcut icon" href="{{asset('assets/images/brand/logo.png')}}">
        <link href="{{asset('assets/css/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
        <link href="{{asset('assets/css/base.css')}}" rel="stylesheet" type="text/css" />
        @routes
        <script src="{{ mix('/js/app.js') }}" defer></script>
    </head>
    <body>
        @inertia


        <script src="{{asset('assets/js/plugins.bundle.js')}}"></script>
        <script src="{{asset('assets/js/scripts.bundle.js')}}"></script>
        <script src="{{asset('assets/js/custom/chat/chat.js')}}"></script>
        <script src="{{asset('assets/js/custom/api-keys/api-keys.js')}}"></script>
        <script src="{{asset('assets/plugins/datatables/datatables.bundle.js')}}"></script>
        <script src="{{asset('assets/plugins/fslightbox/fslightbox.bundle.js')}}"></script>
        <script src="{{asset('assets/js/base.js')}}"></script>
    </body>
</html>
