<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Module EmployeeManagement  {{ env('APP_NAME', 'RUMA APP') }}</title>
    <link href="{{asset('assets/css/fonts.css')}}" rel="stylesheet" type="text/css" />
    <link rel="shortcut icon" href="{{asset('assets/images/brand/logo.png')}}">
    <link href="{{asset('assets/css/plugins.bundle.css|')}}" rel="stylesheet" type="text/css" />
    {{--        <link href="{{asset('assets/plugins/global/plugins.bundle.css')}}" rel="stylesheet" type="text/css" />--}}
    <link href="{{asset('assets/css/style.bundle.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/css/base.css')}}" rel="stylesheet" type="text/css" />
    <link href="{{asset('assets/plugins/custom/datatables/datatables.bundle.css')}}" rel="stylesheet" type="text/css"/>
    <link rel="preload" href="{{asset('fonts/EuclidCircularB-Regular.ttf')}}" as="font" crossOrigin=""/>
    <link rel="preload" href="{{asset('fonts/EuclidCircularB-SemiBold.ttf')}}" as="font" crossOrigin=""/>
    <link rel="preload" href="{{asset('fonts/EuclidCircularB-Bold.ttf')}}" as="font" crossOrigin=""/>
    @routes

    <script src="{{asset('assets/js/plugins.bundle.js')}}"></script>
    <script src="{{asset('assets/js/scripts.bundle.js')}}"></script>
    <script src="{{asset('assets/js/custom/chat/chat.js')}}"></script>
    <script src="{{asset('assets/js/custom/api-keys/api-keys.js')}}"></script>
    <script src="{{asset('assets/plugins/custom/datatables/datatables.bundle.js')}}"></script>
    <script src="{{asset('assets/plugins/fslightbox/fslightbox.bundle.js')}}"></script>
    <script src="{{asset('assets/js/base.js')}}"></script>
    {{-- Laravel Mix - JS File --}}
    <script src="{{ mix('js/employee-management.js') }}"></script>
{{--    <script src="{{ mix('js/app.js') }}"></script>--}}

    {{-- Laravel Mix - CSS File --}}
    {{-- <link rel="stylesheet" href="{{ mix('css/employee-management.css') }}"> --}}

</head>
<body>
@inertia


</body>
</html>
