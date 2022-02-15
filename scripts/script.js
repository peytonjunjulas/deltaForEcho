$(function() {
  console.log("document is ready!");
  
  $("#btnGetFacts").click(function () {

    let userName = $("#userName").val();
    let coolFacts = generateCoolNameFacts(userName);
    
    console.log("youclickedbutton");
    console.log(generateCoolNameFacts(userName));
    $("#coolNameFactsOutput").html(coolFacts);
  });

  let userGreeting = "Hello There, ";

  $("button").click(function(){
    userGreeting += $("#fname").val();

    $("#greetingOuput").text(userGreeting);
  });
});

function generateCoolNameFacts(userName){
  console.log("in this gcnf function");
  
  let coolFacts = '';
  coolFacts = "<h5>" + nameLength(userName) + "</h5>";
  coolFacts += "<h5>" + nameStart(userName) + "</h5>";
  coolFacts += "<h5>" + nameLast(userName) + "</h5>";
  coolFacts += "<h5>" + nameReverse(userName) + "</h5>";
  coolFacts += "<h5>" + findSpiritAnimal(userName) + "</h5>";
  coolFacts += "<h5>" + bendingStyle(userName) + "</h5>";
  console.log("initializd cool facts var: " + coolFacts);

  return coolFacts;

}

function nameLength(name){
  return "The length of your name is: " + name.length;
}

function nameStart(name){
  return "The first letter of your name is: " + name[0];
}

function nameLast(name){
  let lastIndex = name.length - 1

  return "The last letter of your name is: " + name[lastIndex]
}

function nameReverse(name) {
  return "Your name reversed is: " + name.split("").reverse().join("");
}

function findSpiritAnimal(name){

  switch(name.length){
    case 2:
      return "Your spirit animal is a cow!";
      break;
    case 3: 
      return "Your spirit animal is a dog!";
      break;
    case 4: 
      return "Your spirit animal is a pig!";
      break;
    case 5:
      return "Your spirit animal is a goat!";
      break;
    case 6: 
      return "Your spirit animal is a eagle!";
      break;
    case 7: 
      return "Your spirit animal is a racoon!";    
      break;
    case 8:
      return "Your spirit animal is a eel!";
      break;
    case 9:
      return "Your spirit animal is a raven!";
      break;
    case 10:
      return "Your spirit animal is a lion!";
      break;
    case 11:
      return "Your spirit animal is a spider!";
      break;
    case 12:
      return "Your spirit animal is a pokemon!";
      break;
    default:
      return "you aint got one :/";
  }
}

function bendingStyle(name){

  switch (name.length){
    case 1:
    case 2:
    case 3:
    case 4:
      return "You are a fire bender!";
      break;
    case 5:
    case 6:
    case 7:
    case 8:
      return "You are an air bender!";
      break;
    case 9:
    case 10:
      return "You are a water bender!";
      break;
    case 11:
    case 12:
      return "You are an earth bender!";  
      break;
    default:
      return "you aint got a bending style :(";
  }


}
