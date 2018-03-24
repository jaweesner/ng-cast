angular.module('video-player')

.component('app', {
  bindings: {
  },
  controller: function(youTube){
    this.videos = [];
    this.currentVideo = '';
    this.prevToken;
    this.nextToken;
    
    this.selectVideo = (video) => {
      this.currentVideo = video;
    };
    
    this.searchResults = (data) => {
      this.videos = data.items;
      this.currentVideo = this.videos[0];
      
      this.nextToken = data.nextPageToken;
      
      if (data.prevPageToken) {
        this.prevToken = data.prevPageToken;
      };
    };
    
    this.service = youTube;
    this.apiKey = window.YOUTUBE_API_KEY;
  },
  templateUrl: 'src/templates/app.html'
});
