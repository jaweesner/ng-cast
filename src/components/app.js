angular.module('video-player')

.component('app', {
  bindings: {
  },
  controller: function(){
    this.videos = exampleVideoData;
    this.currentVideo = exampleVideoData[0];
    console.log(this);
  },
  templateUrl: 'src/templates/app.html'
});
