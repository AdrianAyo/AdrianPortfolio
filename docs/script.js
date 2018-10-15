$(document).ready(function(){
    $(".fa-html5").hover(function() {
        $(".fa-html5").fadeIn("slow", function () {
            $(".icons_card").addClass("icons_card_active");
        });
      }, function() {
          $('.icons_card').removeClass('icons_card_active');
      });
});