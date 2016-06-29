(function(window) {

  firebase.initializeApp(window.FIREBASE_CONFIG);
  var group = (window.location.hash === "")? "la-pietra-summer-2016" : window.location.hash.substring(1);
  var ref = firebase.database().ref("games/"+group);

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
      window.location = "/#"+group;
    });
  });

}(window));
