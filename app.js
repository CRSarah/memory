var app = {

  init: function () {
    app.getDOMReferences();

    app.createCards();

    app.returnCards();
  },

  getDOMReferences: function () {
    app.board = document.getElementById('container');
  },

// 1: on installe
  createCards: function() {
    for(var line = 0; line < 7; line++) {
      for(var column = 0; column < 4; column++) {
        var carte = document.createElement('div');
        carte.className = 'carte';
        app.board.appendChild(carte);
        console.log(carte);
      }
    }
    $( ".carte" ).append( '<div class="cache"></div>' );
    $( ".carte" ).append( '<div class="image"></div>' );
    $( ".image" ).hide();
    var obj = $(".carte");
    var arr = $.makeArray(obj);
    console.log(arr);
  },

// 2: on retourne (également un peu dans le 1)
  returnCards: function() {
    var hiddenCard = $(this).find('.cache');
    $( ".carte" ).on("click", function(event) {
      $(this).find( ".cache" ).hide();
      $(this).find( ".image" ).show();
      var obj2 = $(".image");
      var arr2 = $.makeArray(obj2);
      console.log(arr2);
      $(".image").eq(0).css('backgroundPosition', '0 0');
      $(".image").eq(1).css('backgroundPosition', '0 0');
      $(".image").eq(2).css('backgroundPosition', '0 -100px');
      $(".image").eq(3).css('backgroundPosition', '0 -100px');
      $(".image").eq(4).css('backgroundPosition', '0 -200px');
      $(".image").eq(5).css('backgroundPosition', '0 -200px');
      $(".image").eq(6).css('backgroundPosition', '0 -300px');
      $(".image").eq(7).css('backgroundPosition', '0 -300px');
      $(".image").eq(8).css('backgroundPosition', '0 -400px');
      $(".image").eq(9).css('backgroundPosition', '0 -400px');
      $(".image").eq(10).css('backgroundPosition', '0 -500px');
      $(".image").eq(11).css('backgroundPosition', '0 -500px');
      $(".image").eq(12).css('backgroundPosition', '0 -600px');
      $(".image").eq(13).css('backgroundPosition', '0 -600px');
      $(".image").eq(14).css('backgroundPosition', '0 -700px');
      $(".image").eq(15).css('backgroundPosition', '0 -700px');
      $(".image").eq(16).css('backgroundPosition', '0 -800px');
      $(".image").eq(17).css('backgroundPosition', '0 -800px');
      $(".image").eq(18).css('backgroundPosition', '0 -900px');
      $(".image").eq(19).css('backgroundPosition', '0 -900px');
      $(".image").eq(20).css('backgroundPosition', '0 -1000px');
      $(".image").eq(21).css('backgroundPosition', '0 -1000px');
      $(".image").eq(22).css('backgroundPosition', '0 -1100px');
      $(".image").eq(23).css('backgroundPosition', '0 -1100px');
      $(".image").eq(24).css('backgroundPosition', '0 -1200px');
      $(".image").eq(25).css('backgroundPosition', '0 -1200px');
      $(".image").eq(26).css('backgroundPosition', '0 -1300px');
      $(".image").eq(27).css('backgroundPosition', '0 -1300px');
    });
    console.log(hiddenCard);
  },

// 3: la face visible (voir dans le 2 également)






};

app.init();