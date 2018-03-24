angular.module('video-player')

.component('search', {
  bindings: {
    result: '<',
    service: '<',
    apiKey: '<',
    nextToken: '<',
    prevToken: '<'
  },
  controller: function(){
    this.search = (query, token) => {
      var obj = {
        key: this.apiKey,
        query: query,
        max: 5,
        pageToken: token
      }; 
      
      this.service.search(obj, this.result)
    }
    
    this.search = _.debounce(this.search, 500);
    
    this.$onInit= function(){
      this.search('');
    }
    
  },

  templateUrl: 'src/templates/search.html'
});
