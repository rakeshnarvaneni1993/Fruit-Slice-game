// A fruit slicer game using javascript, jquery, CSS, html
//Rules:
//1. CLick start game button to start the game.
//2. An apple starts coming down from top with decreasing width.
//3. You have 3 lives.
//4. YOu have to try and hover your mouse pointer over the fruit before it reaches the bottom.
//5. If you manage to hover the pointer over apple before it reaches bottom, your score will be updated. If not your life will be reduced.


$("#apple").hide()
$("#gameOver").fadeOut(-100)
var lifes = 3;    //variable to monitor the lives left of the player.
var score = 0;    //variale to track the score of the player.



$("button").on("click",function(){
  $(".border").fadeIn(1000)
  $("#gameOver").fadeOut(1000) //Removing the gameOver screen.
  score = 0; //resettin the score to 0
  $("#screenScore").html(score);  // Displaying score in the screenScore element.
  lifes = 3; //Resetting Lives left
  $("#lives").html(lifes); //Displaying lives left.
  start() //calling start function.
  })

//This function starts the animation
  function start(){
    var interval = setInterval(function(){   //setting interval to run the animation every 3 seconds.
            $("#apple").show();
      $("#apple").delay(500).css({           //setting properties for the image.
        "margin-top":"0px",
        "visibility":"visible",
        "margin-left":function(){               //function for selecting the position of fruit random.
          return Math.floor(Math.random()*500)+"px"
        }})
      $("#apple").animate({         //starting the animation for the margin top and width of friut image
        marginTop:"+480px",
        width:"-0.2px"
      },2000,function(){          //once the animation is complete, checking the lives left, getting imag back to top.
          $("#apple").css("width", "80px")
          $("#apple").css("margin-top","-50px")
          $("#apple").css("visibility","hidden")
          lifes = lifes - 1;   // If the image reaches bottom, one life is substracted.
          $("#lives").html(lifes);
          if(lifes === 0){              //If the lives reaches 0, gameover screen is displayed.
            $(".border").fadeOut(1000)
            $("#gameOver").fadeIn(1000);
            $("#score").html(score);
            clearInterval(interval)   //stopping the interval.
          }
  })

},3000)
  }

//At any time, if user hovers mouse over the image, below function is triggered.

  $("#apple").on("mouseover",function(){
    $(this).css( "width","80px");
    $(this).prop('disabled',true);
    $(this).stop();
    $(this).hide();
    score = score+1;
    $("#screenScore").html(score);
    $("#score").html(score);
 })
