(function(window) {

  firebase.initializeApp(window.FIREBASE_CONFIG);
  var ref = firebase.database().ref("games");

  $.fn.serializeObject = function()
  {
    var o = {};
    var a = this.serializeArray();
    $.each(a, function() {
      if (o[this.name] !== undefined) {
        if (!o[this.name].push) {
          o[this.name] = [o[this.name]];
        }
        o[this.name].push(this.value || '');
      } else {
        o[this.name] = this.value || '';
      }
    });
    return o;
  };

  $('#upload_form').on( "submit", function( event ) {
    event.preventDefault();
    var payload = $( this ).serializeObject();
    ref.push(payload, function(){
      window.location = "/";
    });
  });

}(window));
