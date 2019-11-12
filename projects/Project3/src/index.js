import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

import Button1 from "./components/Button1";
import ButtonExit from "./components/ButtonExit";

function App() {
  let score = 0;
  let lost = false;
  let won = false;
  let clicked1 = false;
  let clicked2 = false;
  let clicked3 = false;
  let clicked4 = false;
  let clicked5 = false;
  let clicked6 = false;
  let clicked7 = false;
  let clicked8 = false;
  let clicked9 = false;
  let clicked10 = false;
  let clicked11 = false;
  let clicked12 = false;

  const buttons = [

//---------------------------------------------------------------------------------------------
<Button1
      onClick={() => {
        if (clicked9 === false && clicked8 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked9 = true;
        }
        else if (clicked9 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked9 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="uranus" src="https://upload.wikimedia.org/wikipedia/commons/1/16/Uranus2-transparent.png"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

        <Button1
      onClick={() => {
        if (clicked4 === false && clicked3 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked4 = true;
        }
        else if (clicked4 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked4 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="Earth" src="http://pngimg.com/uploads/earth/earth_PNG39.png"></img>}</Button1>,

//---------------------------------------------------------------------------------------------       

        <Button1
      onClick={() => {
        if (clicked3 === false && clicked2 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked3 = true;
        }
        else if (clicked3 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked3 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="venus" src="https://upload.wikimedia.org/wikipedia/commons/f/f4/3D_Venus.png"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

        <Button1
      onClick={() => {
        if (clicked2 === false && clicked1 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked2 = true;
        }
        else if (clicked2 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked2 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="mercury" src="https://i1.wp.com/freepngimages.com/wp-content/uploads/2016/05/planet-mercury-transparent-background.png?fit=680%2C680"></img>}</Button1>,

//---------------------------------------------------------------------------------------------        

        <Button1
      onClick={() => {
        if (clicked6 === false && clicked5 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked6 = true;
        }
        else if (clicked6 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked6 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 173,
        height: 200,
        resizeMode: 'contain'
        }} alt="ceres" src="https://pngimage.net/wp-content/uploads/2018/05/ceres-png-3.png"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

    <Button1 onClick={() => {
      if (clicked1 === false && lost === false && score <= 10) {
        score++;
        document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
        document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
        clicked1 = true;
      }
      else if (clicked1 === false && lost === false && score === 11) {
        document.getElementById("win").style.display = "block";
        document.getElementById("scoretable").style.display = "none";
        won = true;
        clicked1 = true;
      }
      else if (won === false) {
        console.log("You Lose")
        document.getElementById("scoretable").style.display = "none";
        document.getElementById("lose").style.display = "block";
        lost = true;
      }
    }} >{<img style={{
      flex: 1,
      width: 200,
      height: 200,
      resizeMode: 'contain'
      }} alt="sun" src="http://pluspng.com/img-png/sun-png-bright-sun-2249.png"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

<Button1
      onClick={() => {
        if (clicked10 === false && clicked9 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked10 = true;
        }
        else if (clicked10 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked10 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="neptune" src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Neptune_cutout.png/1034px-Neptune_cutout.png"></img>}</Button1>,

//---------------------------------------------------------------------------------------------

<Button1
      onClick={() => {
        if (clicked11 === false && clicked10 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked11 = true;
        }
        else if (clicked11 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked11 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >

{<img style={{
  flex: 1,
  width: 200,
  height: 200,
  resizeMode: 'contain'
  }} alt="pluto" src="https://cdn.pixabay.com/photo/2017/04/04/14/26/pluto-2201446_640.png"></img>}

      </Button1>,

//----------------------------------------------------------------------------------------------------

<Button1
onClick={() => {
  if (clicked7 === false && clicked6 === true && lost === false && score <= 10) {
    score++;
    document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
    document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
    clicked7 = true;
  }
  else if (clicked7 === false && lost === false && score === 11) {
    document.getElementById("win").style.display = "block";
    document.getElementById("scoretable").style.display = "none";
    won = true;
    clicked7 = true;
  }
  else if (won === false) {
    console.log("You Lose")
    document.getElementById("scoretable").style.display = "none";
    document.getElementById("lose").style.display = "block";
    lost = true;
  }
}} >{<img style={{
  flex: 1,
  width: 200,
  height: 200,
  resizeMode: 'contain'
  }} alt="jupiter" src="https://upload.wikimedia.org/wikipedia/commons/e/e1/Jupiter_%28transparent%29.png"></img>}</Button1>,

  //---------------------------------------------------------------------------------------------

  <Button1
      onClick={() => {
        if (clicked12 === false && clicked11 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked12 = true;
        }
        else if (clicked12 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked12 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="Eris" src="https://upload.wikimedia.org/wikipedia/commons/1/1c/Eris-transparent.png"></img>}</Button1>,

//----------------------------------------------------------------------------------------------------

    <Button1
      onClick={() => {
        if (clicked5 === false && clicked4 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked5 = true;
        }
        else if (clicked5 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked5 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 200,
        height: 200,
        resizeMode: 'contain'
        }} alt="Mars" src="http://pngimg.com/uploads/mars_planet/mars_planet_PNG15.png"></img>}</Button1>,

//----------------------------------------------------------------------------------------------------

    <Button1
      onClick={() => {
        if (clicked8 === false && clicked7 === true && lost === false && score <= 10) {
          score++;
          document.getElementById("scoretable").innerHTML = "Score: (" + score + ")";
          document.getElementById("lose").innerHTML = "You lose, your score was " + score + ".";
          clicked8 = true;
        }
        else if (clicked8 === false && lost === false && score === 11) {
          document.getElementById("win").style.display = "block";
          document.getElementById("scoretable").style.display = "none";
          won = true;
          clicked8 = true;
        }
        else if (won === false) {
          console.log("You Lose")
          document.getElementById("scoretable").style.display = "none";
          document.getElementById("lose").style.display = "block";
          lost = true;
        }
      }} >{<img style={{
        flex: 1,
        width: 225,
        height: 220,
        resizeMode: 'contain'
        }} alt="saturn" src="https://www.stickpng.com/assets/images/580b585b2edbce24c47b270c.png"></img>}</Button1>,
    
  ];



  //Return Function
  return (
    <>

<div id="instructions" style={{ fontSize: 50, textAlign: "center", }}>{"Click on the objects in our solar system in the correct order."}</div>

<div id="instructions2" style={{ fontSize: 30, textAlign: "center" }}>{"You get 1 point for each correct answer, guess wrong and you lose!"}</div>

<div id="bg">
  <img src="https://wallpaperplay.com/walls/full/8/c/2/12870.jpg" alt=""/>
</div>

      {buttons}

      <br></br>
      <br></br>

      <ButtonExit
        onClick={() => {
          document.location.reload(true)
        }}>
      </ButtonExit>





      <div id="scoretable" style={{ fontSize: 75, textAlign: "center" }}>{"Score: (" + score + ")"}</div>
      <div id="lose" style={{ fontSize: 75, display: "none", textAlign: "center" }}>{"You lose, your score was " + score + "."}</div>
      <div id="win" style={{ fontSize: 75, display: "none", textAlign: "center" }}>{"You win!"}</div>
    </>
  );



  
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);