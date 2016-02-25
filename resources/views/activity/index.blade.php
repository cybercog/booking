@extends('layout.slider-page')
@section('title', trans('title.activity'))
@section('content')
{{-- change hotel sider images --}}
@include('partial.slider',['images'=>['/images/slider/activities1.jpg','/images/slider/activities2.jpg','/images/slider/activities3.jpg'],'captions'=>[trans('activity.louvre'),trans('activity.disney'),trans('activity.yellowstone'),]])
<div id="activity_list" class="page_container">
  <div class="ui grid container">
    <div class="ui row">
        <div class="column">
            <h1 class="ui {{config('app.primary_color')}} header">{{ trans('activity.title') }}</h1>
        </div>
    </div>
    <div class="ui divider" style="margin-top:2em;"></div>
    <div class="ui row">
      <div class="ui column">
        <div class="ui divided link items">
          @foreach($activities as $activity)
          <a class="ui item" href="{{action('ActivityController@show',array($activity->id))}}">
            <div class="ui image" style="width:120px;height:auto;">
              <img src="http://placem.at/things?w=120&h=120&random=1&txt=0" alt="place holder" />
            </div>
            <div class="content">
              <div class="header">{{$activity->name}}</div>
              <div class="description">
                <p>
                  {{$activity->desc}}
                </p>
              </div>
             </div>
           </a>
          @endforeach
        </div>
        <div class="ui divider">
        </div>
        @include('partial.pagination',['items'=>$activities])
      </div>
    </div>
  </div>
</div>

@endsection

@section('scripts')
  @parent
  <script type="text/javascript">
      $('#activity').addClass('active');
  </script>
@endsection
