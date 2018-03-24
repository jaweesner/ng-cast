angular.module('video-player')

.component('search', {
  controller: function(youTube){
    console.log(youTube.search)
    this.data = youTube.search();
  },
  templateUrl: 'src/templates/search.html'
});
