angular.module('video-player')
.service('youTube', function($http){
  this.search = function({key,query,max}, callback){
    
    $http.get("https://www.googleapis.com/youtube/v3/search", {
     params:{
      part: 'snippet',
      key: key,
      q: query,
      maxResults: max,
      type: 'video',
      videoEmbeddable: true
     } 
    }).then(function(response){
        callback(response.data.items);
        //
        
      }, function(data){
        console.log(data);
    });
  }
});
