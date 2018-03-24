angular.module('video-player')
.component('videoListEntry', {
  bindings: {
    onClick:"<",
    video: "<"
  },
  controller: function() {
  },
  templateUrl: 'src/templates/videoListEntry.html'
});
