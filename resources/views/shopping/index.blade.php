@extends('layout.page')
@section('title', trans('title.shopping'))

@section('content')
    <div id="shopping-list" class="ui grid container">
        <div class="ui row">
            <div class="column">
                <h1 class="ui header">{{trans('shopping.title')}}</h1>
            </div>
        </div>
        <div class="ui row">
            <div class="column">
                <div class="ui divided link items">
                    @foreach ($shoppings as $store)
                        <a class="item" href="{{'/shoppings/'.$store['id']}}">
                            <div class="ui image">
                                <img src="{{$store['logo']}}" alt="{{$store['name']}}">
                            </div>
                            <div class="content">
                                <div class="ui header">{{$store['name']}}</div>
                                <div class="description">
                                    <p>{{$store['desc']}}</p>
                                </div>
                            </div>
                        </a>
                    @endforeach
                </div>
            </div>
        </div>
    </div>
@endsection

@section('scripts')
    @parent
    <script type="text/javascript">
        $('#shopping').addClass('active');
    </script>
@endsection
