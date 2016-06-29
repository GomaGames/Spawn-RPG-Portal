(function(window) {

  firebase.initializeApp(window.FIREBASE_CONFIG);
  var group = (window.location.hash === "")? "la-pietra-summer-2016" : window.location.hash.substring(1);
  var ref = firebase.database().ref("games/"+group);

  $("#upload_button").attr("href", "/upload#"+group);

  ref.on("value", function(snapshot) {
    var games = snapshot.val();
    if(games == null){
      $("#games-list").html("<h2>There are no games for this group yet. upload the first one!</h2>");
    }else{
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
                  href : "/play#"+group+"/"+game,
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
    }
  });

}(window));
