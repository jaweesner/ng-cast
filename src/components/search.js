angular.module('video-player')

.component('search', {
  bindings: {
    result: '<'
  },
  controller: function(youTube){
    this.$onInit= function(){
      this.search = (query) => {
        var obj = {
          key: window.YOUTUBE_API_KEY,
          query: query,
          max: 5
        } 
        youTube.search(obj, this.result);
      }
      this.search('');
    }
    
  },

  templateUrl: 'src/templates/search.html'
});
