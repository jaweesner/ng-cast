angular.module('video-player')

.component('app', {
  bindings: {
  },
  controller: function(){
    this.videos = exampleVideoData;
    this.currentVideo = this.videos[0];
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = (videos) => {
      this.videos = videos;
      this.currentVideo = this.videos[0];
    };
  },
  templateUrl: 'src/templates/app.html'
});
