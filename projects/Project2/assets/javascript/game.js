//Winning number generator (Between 50 and 100)
let winningnumber = Math.floor(Math.random() * 51)+50;
document.getElementById("goal").innerHTML = "Get exactly " + winningnumber +" points to win!";


//Score variable
let score = 0;

//Win Variable
let wins = 0;

//Losses Variable
let losses = 0;

//Array for rng numbers
let random = [];

//Prevent duplicate rng values for crystals using a number generator
function generateRan(){
  const max = 6;
  for(var i = 0;i<max ; i++){
      var temp = Math.floor(Math.random()*max+4);
      if(random.indexOf(temp) == -1){
          random.push(temp);
      }
      else
       i--;
  }
};
generateRan();

//Crystal values (Between 5 and 9 for each crystal)
let rng1 = random[0];
let rng2 = random[1];
let rng3 = random[2];
let rng4 = random[3];

//crystal1 click command
  const one = document.getElementById("crystal1");
  one.addEventListener("click", function() {
  score=score+rng1;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("condition").innerHTML = "Each crystal gives points when clicked!";

    if (score === winningnumber){
        document.getElementById("condition").innerHTML = "You Won!";
        wins = wins+1;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        score=0;
        document.getElementById("score").innerHTML = "Score: " + score;
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                }

    else if (score > winningnumber){
        document.getElementById("condition").innerHTML = "You Lost";
        losses = losses+1;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        score=0;
        document.getElementById("score").innerHTML = "Score: 0";
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                   };
});

//crystal2 click command
  const two = document.getElementById("crystal2");
  two.addEventListener("click", function() {
  score=score+rng2;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("condition").innerHTML = "Each crystal gives points when clicked!";

    if (score === winningnumber){
        document.getElementById("condition").innerHTML = "You Won!";
        wins = wins+1;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        score=0;
        document.getElementById("score").innerHTML = "Score: " + score;
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                }

    else if (score > winningnumber){
        document.getElementById("condition").innerHTML = "You Lost";
        losses = losses+1;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        score=0;
        document.getElementById("score").innerHTML = "Score: 0";
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                   };
});

//crystal3 click command
  const three = document.getElementById("crystal3");
  three.addEventListener("click", function() {
  score=score+rng3;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("condition").innerHTML = "Each crystal gives points when clicked!";

    if (score === winningnumber){
        document.getElementById("condition").innerHTML = "You Won!";
        wins = wins+1;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        score=0;
        document.getElementById("score").innerHTML = "Score: " + score;
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                }

    else if (score > winningnumber){
        document.getElementById("condition").innerHTML = "You Lost";
        losses = losses+1;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        score=0;
        document.getElementById("score").innerHTML = "Score: 0";
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                   };
});

//crystal4 click command
  const four = document.getElementById("crystal4");
  four.addEventListener("click", function() {
  score=score+rng4;
  document.getElementById("score").innerHTML = "Score: " + score;
  document.getElementById("condition").innerHTML = "Each crystal gives points when clicked!";

    if (score === winningnumber){
        document.getElementById("condition").innerHTML = "You Won!";
        wins = wins+1;
        document.getElementById("wins").innerHTML = "Wins: " + wins;
        score=0;
        document.getElementById("score").innerHTML = "Score: " + score;
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                }

    else if (score > winningnumber){
        document.getElementById("condition").innerHTML = "You Lost";
        losses = losses+1;
        document.getElementById("losses").innerHTML = "Losses: " + losses;
        score=0;
        document.getElementById("score").innerHTML = "Score: 0";
        rng1 = Math.floor(Math.random() * 7)+3;
        rng2 = Math.floor(Math.random() * 7)+3;
        rng3 = Math.floor(Math.random() * 7)+3;
        rng4 = Math.floor(Math.random() * 7)+3;
        winningnumber = Math.floor(Math.random() * 51)+50;
        document.getElementById("goal").innerHTML = "Get " + winningnumber +" points to win!";
                                   };
});