(function(window) {

  function badGame(){
    window.alert("Game not found! redirecting you back to game list.");
    window.location = "/";
  }

  var game_id = window.location.hash.split("#").pop();

  firebase.initializeApp(window.FIREBASE_CONFIG);
  var ref = firebase.database().ref("games/"+game_id);

  ref.on("value", function(snapshot) {
    var game_data = snapshot.val();

    if(game_data == null){
      badGame();
    } else {
      var args = [window.Spawn];
      for(var i = 0; i < 42; i++){
        args.push(null);
      }
      (function(Spawn,
        window, alert, external, chrome, caches, localStorage, sessionStorage, crypto, postMessage, close,
        applicationCache, console, screen, navigator, parent, opener, toolbar, statusbar, statusbars, personalbar,
        menubar, locationbar, history, location, name, self, stop, open, confirm, prompt,
        print, requestAnimationFrame, cancelAnimationFrame, moveTo, moveBy, resizeTo, resizeBy, find, scroll, scrollTo,
        scrollBy, openDatabase  ){
        eval(game_data.code); // sandboxed
      }).apply({}, args );
      lime.embed ("openfl-content", 920, 680, "FFFFFF");
    }

  }, badGame );

}(window));
