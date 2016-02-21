@extends('layout.slider-page')
@section('title', trans('title.home'))
@section('content')
@include('partial.slider',['images'=>[
['image'=>'/images/slider/travel1.jpg', 'caption'=>'在出发前就订好景点门票和观光项目，以获得更多优惠!'],
['image'=>'/images/slider/travel2.jpg', 'caption'=>'一起预定机票和酒店，享受高达70%的优惠!'],
['image'=>'/images/slider/travel3.jpg', 'caption'=>'在出发前就订好景点门票和观光项目，以获得更多优惠!']]])
<div id="home-detail">
    <div class="ui grid container">
        <div class="eleven wide column">
            <h3 class="ui left floated red header">{{ trans('home.hot_place') }}</h3>
            <div class="ui clearing divider"></div>
            <div id="home-gallery"></div>
        </div>
        <div class="five wide column" style="padding-left:5em;">
            <h3 class="ui left floated red header">{{ trans('home.partner') }}</h3>
            <div class="ui clearing divider"></div>
            <div id="home-partner">
                <div class="partner blurring dimmable image">
                    <div class="ui dimmer">
                        <div class="content">
                            <div class="center">
                                <h3><a class="ui red header" href="#">Hilton</a></h3>
                                <p style="text-align: center">The Best of LasVegas</p>
                            </div>
                        </div>
                    </div>
                    <img class="ui centered image" src="/images/thumbnails/hilton.jpg">
                </div>
                <div class="ui hidden divider"></div>
                <div class="partner blurring dimmable image">
                    <div class="ui dimmer">
                        <div class="content">
                            <div class="center">
                                <h3><a class="ui red header" href="#">Four Seasons</a></h3>
                                <p style="text-align: center">The Best of London</p>
                            </div>
                        </div>
                    </div>
                    <img class="ui centered image" src="/images/thumbnails/fs.jpg">
                </div>
                <div class="ui hidden divider"></div>
                <div class="partner blurring dimmable image">
                    <div class="ui dimmer">
                        <div class="content">
                            <div class="center">
                                <h3><a class="ui red header" href="#">Drake</a></h3>
                                <p style="text-align: center">The Best of Chicago</p>
                            </div>
                        </div>
                    </div>
                    <img class="ui centered image" src="/images/thumbnails/drake.jpg">
                </div>
            </div>
        </div>
    </div>
</div>
@endsection

@section('scripts')
  @parent
  <script src="/js/home.js"></script>
@endsection
