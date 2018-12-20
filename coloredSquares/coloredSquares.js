(function() {
    "use strict";
    var maxZ = 1000;//z index of the clicked square

    window.onload = function(){
        var add = document.getElementById("add");
        add.onclick = addSquare;
        var colors = document.getElementById("colors");
        colors.onclick = changeColors;

        var squareCount = parseInt(Math.random()*21) + 30;// 30 to 50 squares
        for(var i = 0; i < squareCount; i++ ){
            addSquare();
        }
    };
    
    //add a new square div to the page
    function addSquare() {
         var square = document.createElement("div");
         square.className = "square";
         square.style.left = parseInt(Math.random() * 650) + "px";// 0 ~ (700 -50)
         square.style.top = parseInt(Math.random() * 250) + "px";//0 ~ (300-50)
         square.style.backgroundColor = getRandomColor();
         square.onclick = squareClick;
        
         var squarearea = document.getElementById("squarearea");
         squarearea.appendChild(square);
    }

    //if clicked, move it to the top or remove
    function squareClick() {
        var oldZ = parseInt(this.style.zIndex);
        if(oldZ == maxZ){
            this.parentNode.removeChild(this);//remove if square is on top
        }else{
            maxZ++;
            this.style.zIndex = maxZ;
        }
    }

    function changeColors(){
        var squares = document.querySelectorAll("#squarearea div");
        for(var i = 0; i < squares.length; i++){
            squares[i].style.backgroundColor = getRandomColor();
        }
    }

    //Generates and returns a random color string such as "#f08a77c"
    function getRandomColor(){
        var letter = "0123456789abcdef";
        var result = "#";

        for(var i = 0; i < 6 ; i++){
            result += letter.charAt(parseInt(Math.random() * letter.length));
        }
        return result;
    }

})();
