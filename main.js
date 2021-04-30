canvas=new fabric.Canvas("mycanvas");
player_x=10;
player_y=10;

block_width=30;
block_height=30;

var player_object="";
var block_object="";

function player_update() 
{ fabric.Image.fromURL("player.png", function(Img) 
{    player_object = Img; 
     player_object.scaleToWidth(150);
     player_object.scaleToHeight(140);
     player_object.set({ top:player_y, left:player_x });
     canvas.add(player_object);
     }); }

 function new_image(get_image) 
    { fabric.Image.fromURL(get_image, 

    function(Img) 
    {   block_object = Img; 
        block_object.scaleToWidth(block_width);
        block_object.scaleToHeight(block_height);
        block_object.set({ top:player_y, left:player_x });
        canvas.add(block_object); }); }

    window.addEventListener("keydown",my_keydown);

    function my_keydown(e)
    {
        keypress=e.keyCode

        if(e.shiftKey == true && keypress == "80")
        {
         block_width=block_width +10;
         block_height=block_height+10;
         console.log(block_height,block_width);

         document.getElementById("current_height").innerHTML=block_height;
         document.getElementById("current_width").innerHTML=block_width;
         
        }

        if(e.shiftKey == true && keypress == "77")
        {
         block_width=block_width -10;
         block_height=block_height-10;
         console.log(block_height,block_width);

         document.getElementById("current_height").innerHTML=block_height;
         document.getElementById("current_width").innerHTML=block_width;
         
        }

        if(keypress=="38")
        {
           up();
        }

        if(keypress=="40")
        {
           down();
        }

        if(keypress=="37")
        {
           left();
        }

        if(keypress=="39")
        {
           right();
        }

        if(keypress=="67")
        {
           new_image("cloud.jpg");
        }

        if(keypress=="68")
        {
           new_image("dark_green.png");
        }

        if(keypress=="71")
        {
           new_image("ground.png");
        }

        if(keypress=="76")
        {
           new_image("light_green.png");
        }

       
        if(keypress=="82")
        {
           new_image("roof.jpg");
        }

        if(keypress=="84")
        {
           new_image("trunk.jpg");
        }

        if(keypress=="85")
        {
           new_image("unique.jpg");
        }

        if(keypress=="87")
        {
           new_image("wall.jpg");
        }

        if(keypress=="89")
        {
           new_image("yellow_wall.png");
        }  
      
        if(keypress=="88")
        {
           new_image("door(1).jpg");
        } 
      
        if(keypress=="90")
        {
           new_image("door(2).jpg");
        }  }
        function up()
         { if(player_y >=0)
             {   player_y = player_y - block_height;
                 console.log("block image height = " + block_height);
                 console.log("When Up arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                 canvas.remove(player_object); player_update();
                 } }

         function down()
         { if(player_y <=550)
                     {   player_y = player_y + block_height;
                         console.log("block image height = " + block_height);
                         console.log("When Down arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                         canvas.remove(player_object); player_update();
                         } }
        
         function left()
          { if(player_x >=0)
                     {   player_x = player_x - block_width;
                         console.log("block image height = " + block_width);
                         console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                         canvas.remove(player_object); player_update();
                                 } }
    
         function right()
             { if(player_x <=850)
             {    player_x = player_x + block_width;
                  console.log("block image height = " + block_width);
                  console.log("When Left arrow key is pressed, X = " + player_x + " , Y = "+player_y);
                  canvas.remove(player_object); player_update();
                                                        } }