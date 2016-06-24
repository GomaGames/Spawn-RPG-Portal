(function(window) {

  firebase.initializeApp(window.FIREBASE_CONFIG);
  var ref = firebase.database().ref("games");

  ref.on("value", function(snapshot) {
    var games = snapshot.val();
    $("#games-list").html(Object.keys(games).map(function(game){
      return $("<div>", {
        "class" : "column",
        html : $("<div>", {
          "class" : "game",
          html : $("<div>", {
            "class" : "game-inner",
            html : [
              $("<h2>", {
                html : games[game].title
              }),
              $("<h3>", {
                html : games[game].developer
              }),
              $("<a>", {
                href : "/play#"+game,
                "class" : "play-button",
                html : [
                  $("<i>", {
                    "class" : "fa fa-gamepad"
                  }),
                  "Play Game"
                ]
              })
            ]
          })
        })
      });
    }));
  });

}(window));
