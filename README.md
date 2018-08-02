# Chatbot

Chat bot is a simple chat response app which user will gets a reply from bot
working under angularJS / NodeJS/ JQuery

#how to use
- clone the project
- go to the project folder
- run npm install
- run ng serve
- open locahost:4200 in your browser (chrome recomended)

#usage
- say Hi on message text box then hit send or either hit "use voice" and say "hi" and bot will reply you "Sup Man"
- say Bye then hit send or hit "use voice" and say bye then bot wont ever miss you, he's so meanie :(
    
    but doesnt matter. we can edit him anyway

    how to edit him?
    
    go to src/api/responseDatabase.JS, you will see some code like this
    
      switch (temp.toUpperCase()) {
          
          case "HI":


            return "Sup man";


            break;
      }

    you can add any text you want from there, lets say. 
    
      Case "BOI" :

        "its a God of War 4 reference dude , seriously";
  
        break;
    

    remember, the required case must be entirely uppercase

    you can even add a swears!, but i warn you. dont use swears unless everyone near you are okay with it


#side note
- you can ignore webpack : failed to compile. we dont need it at the moment. but im working on fixing that part at the moment
- also, suggestion are very open. feel free to talk in issues
- besides of those stuff above and below, i'd like to apologize for everything that im wrongly done. and im wiling to improve and change for better

#planed to do
- add voice to text compability on opera browser
