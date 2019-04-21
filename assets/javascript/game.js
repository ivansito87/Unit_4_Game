$(document).ready(function() {
    // Variables Befrore the game starts
    var computerNumber = "" ;
    var redValue="";
    var blueValue="";
    var yellowValue="";
    var greenValue="";
    var black;
    var gold;
    var green;
    var blue;
    var userSum;
    var wins=0;
    var loss=0;

    // Welcome the user
    let userName = prompt(`Welcome!
Please Enter your name!`);

    // Save the user Name and make first char upper case
    var uppercaseUserName = userName.charAt(0).toUpperCase() + userName.slice(1);;
    console.log(uppercaseUserName);

    // Here I update the welcome with the uer name
    $("#user").html(uppercaseUserName);
    
    // game starts
    function gameBegins() {
        // we create a random number between 0 and 120 and store it in computerNumber variable
        computerNumber = Math.floor(Math.random() * 101) + 19;
        // here we reset the userSum displayed in the screen every time the computer wins or looses
        userSum = 0;
        // here we are creatinmg an array that contains the images from the html and we
        //query to target the classes 
        let myCrystals = [$(".white_diamond"), $(".gold_diamond"), $(".green_diamond"), $(".red_diamond")];
        // we are creating an array that contains the variables that we initialize in the beginnig 
        let clickableCrystal = [black, gold, green, blue];
        // to assign value to each crystal
        for (let i = 0; i < myCrystals.length; i++) {
            clickableCrystal[i] = myCrystals[i].attr("some-data", Math.floor(Math.random()*12)+2);
        };
        // to print out target number and userSum on screen
        $("#computerNumber").html(computerNumber);
        $("#wins").html(wins);
        $("#loss").html(loss);
        $("#userSum").html(userSum);
        
    }
    gameBegins();
    
    // console.log(redValue +"<br>"+blueValue+"<br>"+yellowValue+"<br>"+greenValue);
    
    $(".crystal").on("click", function(){
        userSum += parseInt($(this).attr("some-data"));
        $("#userSum").html(userSum);
        if(userSum == computerNumber) {
            wins++;
            alert(`            Congratulations! you're a winner
            Would you like to play again?`);
            gameBegins();
        }
        else if (userSum > computerNumber) {
            loss++;
            alert(`            Aww you've lost
            Would you like to play again?`);
            gameBegins();
            
        }
    });
    });

    $(document).ready(function(){
        $(".crystal").mouseover(function(){ $(this).animate({marginLeft:'10px',opacity: 0.6},'fast') });
        $(".crystal").mouseout(function(){ $(this).animate({marginLeft:'0px',opacity: 1},0) });
    });

    /********* Mouse Trail **********/
    $(document).ready(function(){
  
        var mousePos = {};
      
       function getRandomInt(min, max) {
         return Math.round(Math.random() * (max - min + 1)) + min;
       }
        
        $(window).mousemove(function(e) {
          mousePos.x = e.pageX;
          mousePos.y = e.pageY;
        });
        
        $(window).mouseleave(function(e) {
          mousePos.x = -1;
          mousePos.y = -1;
        });
        
        var draw = setInterval(function(){
          if(mousePos.x > 0 && mousePos.y > 0){
            
            var range = 15;
            
            var color = "background: rgb("+getRandomInt(0,255)+","+getRandomInt(0,255)+","+getRandomInt(0,255)+");";
            
            var sizeInt = getRandomInt(1, 7);
            size = "height: " + sizeInt + "px; width: " + sizeInt + "px;";
            
            var left = "left: " + getRandomInt(mousePos.x-range-sizeInt, mousePos.x+range) + "px;";
            
            var top = "top: " + getRandomInt(mousePos.y-range-sizeInt, mousePos.y+range) + "px;"; 
      
            var style = left+top+color+size;
            $("<div class='ball' style='" + style + "'></div>").appendTo('#wrap').one("webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend", function(){$(this).remove();}); 
          }
        }, 1);
      });
      