jQuery.fn.FCInstagram.accessData = {
  accessToken: "", // Token
};
$('#instafeed').FCInstagram({
  max: 9, // A number between 1 and 25 of photos to show. Default: 9
  autoplay: true, // Set autoplay video: true/false. Default: false
  complete: function () { // A callback function to execute after the display of the photos.
      console.log('completed');
  }
});