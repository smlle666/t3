(function() {
  $(".search__icon").click(function() {
    $(".header__search").show(300);
});
    
$(document).mouseup(function(e){
    if ($(".header__search").has(e.target).length === 0 && $(".search__icon").has(e.target).length === 0)
        $(".header__search").hide(300);
});
    
  let count1 = 1;
  $(".minus1").click(function(){
      if (count1 > 1) {
        count1--;
        $(".count1").text(function(){
          return count1;
        });
      }
  });

  $(".plus1").click(function(){
        count1++;
        $(".count1").text(function(){
          return count1;
        });
  });


  let count2 = 1;
  $(".minus2").click(function(){
      if (count2 > 1) {
        count2--;
        $(".count2").text(function(){
          return count2;
        });
      }
  });

  $(".plus2").click(function(){
        count2++;
        $(".count2").text(function(){
          return count2;
        });
  });

})()
