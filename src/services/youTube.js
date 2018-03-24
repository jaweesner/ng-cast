angular.module('video-player')
.service('youTube', function($http){
  this.search = function(){
    $http.get("https://www.googleapis.com/youtube/v3/search", {
     params:{
      part: 'snippet',
      key: 'AIzaSyC6iLUbXvov545FO4CFtTghRIO-jn-rHbQ',
      q: "",
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true
     } 
    }).then(function(response){
        return response.data.items;
        //
        
      }, function(data){
        console.log(data);
    });
  }
});
