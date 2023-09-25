<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Laravel</title>

        <!-- Fonts -->
        <link rel="preconnect" href="https://fonts.bunny.net">
        <link href="https://fonts.bunny.net/css?family=figtree:400,600&display=swap" rel="stylesheet" />
        <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="{{ asset('css/app.css')}}">
    </head>
        <div class="main">
          <div class="sidebar">
            @include('partials.sidebar')
          </div>
          <div class="p-4 sm:ml-64">
            <div class="p-4">
              <div class="content">
                <div class="page">
                  @yield('content')
                </div>
              </div>
            </div>
          </div>                    
        </div>
        <script src="{{ asset('frontend/bundle.js')}}"></script>
    </body>
</html>
