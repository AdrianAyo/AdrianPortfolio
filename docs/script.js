$(document).ready(function(){
    $(".icons_element").hover(function() {
            $(this).addClass("icons_card_active");
      }, function() {
          $(".icons_element").removeClass('icons_card_active');
      });

    $(".projects_photo").hover(function () {
        $(this).children(".projects_desc").addClass("desc_active");
    }, function () {
        $(".projects_desc").removeClass("desc_active");
    });
});