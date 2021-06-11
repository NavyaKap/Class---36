class Form{
    constructor(){

    }
       display(){
           var title=createElement('h2')
           title.html("CAR RACING GAME")
           title.position(250,10)
           
       
           var input=createInput("Name")
           var button = createButton("PLAY")
           var greeting= createElement('h3')


           input.position(350,160)
           button.position(350,200)


           button.mousePressed(function(){
            input.hide()
            button.hide()

            var name = input.value();

            playerCount=playerCount+1;
         player.update(name)
         player.updateCount(playerCount);

         greeting.html("Hello "+name);
         greeting.position(130,160)
        }
            
           ) 
            
        }
}