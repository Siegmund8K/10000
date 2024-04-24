
// Get from PHP the Database results.
let user1object = {
  pushups: 25,
  pullups: 20,
  situps: 5,
  abs: 5,
  run: 5
};



// For each player, find out their top 3 categories (1+2)
function calculateTop3(userObj){
  let object_ordered = {
    pushups: 0,
  };

  // find out the biggest value after Pushups
  let biggestKeyPair = ["exer1", 0]
  for (let key in userObj){

    // grab and copy the "pushups" value and then ignore this key/value pair
    if (key === "pushups") { object_ordered[key] = userObj[key]; continue }
    

    for (let keyD in userObj){
      // ignore the first item, as pushups is always on 1st place
      if (keyD === "pushups") { continue }
      
      // check if the value is the biggest or second biggest
      if (userObj[key] >= userObj[keyD]){
        if (userObj[key] >= biggestKeyPair[1]){
          biggestKeyPair[0] = key
          biggestKeyPair[1] = userObj[key]
        }
      } 
    }
  }
  object_ordered[biggestKeyPair[0]] = biggestKeyPair[1]


  // find out the second biggest value after Pushups
  let secondBiggestKeyPair = ["exer2", 0]
  for (let key in userObj){

    // ignore pushups, and ignore the biggest other value we calculated in the previous step
    if (key === "pushups") { continue }
    if (key === biggestKeyPair[0]) { continue }
    

    for (let keyD in userObj){
      // ignore the first item, as pushups is always on 1st place
      if (keyD === "pushups") { continue }
      if (keyD === biggestKeyPair[0]) { continue }
      
      // check if the value is the biggest or second biggest
      if (userObj[key] >= userObj[keyD]){
        if (userObj[key] >= secondBiggestKeyPair[1]){
          secondBiggestKeyPair[0] = key
          secondBiggestKeyPair[1] = userObj[key]
        }
      } 
    }
  } 
  object_ordered[secondBiggestKeyPair[0]] = secondBiggestKeyPair[1]


  return object_ordered
}

// For each player, express the top 3 categories into a single 0%-100% number
function calculateTotalCompletion (objOrd3){
  let total_percentage = 0
  let total_sum = 0
  for (key in objOrd3){
    total_sum += objOrd3[key]
  }
  return (total_sum / 300) * 100
}


console.log(calculateTop3(user1object))
console.log("Total completion Player 1: " + calculateTotalCompletion(calculateTop3(user1object)))






// The Array which holds each player´s
// challenge completion procentages
let heightInPercent = [80, 24, 31, 61, 21];



// The Default screen on start-up
deactivateScreens()
drawScreen1()



// :::::::::::::::::::::::::::::::::::::::::::
// ::: RE-DRAW ON RESIZE TO BE RESPONSIVE  :::
// :::::::::::::::::::::::::::::::::::::::::::
window.addEventListener('resize', function() {drawScreen1();});




// :::::::::::::::::::::::::::::::::::::::::::
// :::: DRAWING THE SCREENS ::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::
// :::: SCREEN 1 2 3 4 :::::::::::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::
function drawScreen1() {

  // activate button
  document.getElementById("button1icon").src = "Assets/button-1-dark.png"; // Change to the new icon
  
  // Show the screen if it was de-activate
  document.getElementById("svgCanvas1").style.display = "block";

  // Get the size of the parent element
  let parentSizeObject = document.getElementById('svgCanvas1').getBoundingClientRect();
  let parentHeight = parentSizeObject.height;
  let parentWidth = parentSizeObject.width-20; // -20 is to account for padding within the parent svg

  // Convert Percentage to Pixel Height
  let heightInPixels = [
                        (heightInPercent[0] / 100) * parentHeight, 
                        (heightInPercent[1] / 100) * parentHeight,
                        (heightInPercent[2] / 100) * parentHeight, 
                        (heightInPercent[3] / 100) * parentHeight,
                        (heightInPercent[4] / 100) * parentHeight,
                      ]
                                      
  // Set the size and place of the SVG and force re-draw by setting the height attribute
  const playa1 = document.getElementById('player1');
  playa1.setAttribute("y", parentHeight - heightInPixels[0]);
  playa1.setAttribute("x", 0);
  playa1.setAttribute("height", heightInPixels[0]);

  const playa2 = document.getElementById('player2');
  playa2.setAttribute("y", parentHeight - heightInPixels[1]);
  playa2.setAttribute("x", 50+(parentWidth-250)/4);
  playa2.setAttribute("height", heightInPixels[1]);

  const playa3 = document.getElementById('player3');
  playa3.setAttribute("y", parentHeight - heightInPixels[2]);
  playa3.setAttribute("x", 100+((parentWidth-250)/4)*2);
  playa3.setAttribute("height", heightInPixels[2]);

  const playa4 = document.getElementById('player4');
  playa4.setAttribute("y", parentHeight - heightInPixels[3]);
  playa4.setAttribute("x", 150+((parentWidth-250)/4)*3);
  playa4.setAttribute("height", heightInPixels[3]);

  const playa5 = document.getElementById('player5');
  playa5.setAttribute("y", parentHeight - heightInPixels[4]);
  playa5.setAttribute("x", parentWidth - 50);
  playa5.setAttribute("height", heightInPixels[4]);
     
}
function drawScreen2(){
  
  // activate button
  document.getElementById("buttonCicon").src = "Assets/button-c-dark.png"; // Change to the new icon
      
  // Show the screen if it was de-activate
  document.getElementById("svgCanvas2").style.display = "block";
}
function drawScreen3(){
  
  // activate button
  document.getElementById("buttonSicon").src = "Assets/button-s-dark.png"; // Change to the new icon
    
  // Show the screen if it was de-activate
  document.getElementById("svgCanvas3").style.display = "block";
}
function drawScreen4(){
  // activate button
  document.getElementById("buttonINicon").src = "Assets/button-in-dark.png"; // Change to the new icon
    
  // Show the screen if it was de-activate
  document.getElementById("svgCanvas4").style.display = "block";
}


// :::::::::::::::::::::::::::::::::::::::::::
// :::: BUTTON CLICK FUNCTIONS :::::::::::::::
// :::::::::::::::::::::::::::::::::::::::::::
function button1(){
  // deactivate screens & deactivate buttons
  deactivateScreens();
  deactivateButtons();

  // draw own screen
  drawScreen1();
}

function buttonC(){
  // deactivate screens & deactivate buttons
  deactivateScreens();
  deactivateButtons();

  // draw own screen
  drawScreen2()
}

function buttonS(){
  // deactivate screens & deactivate buttons
  deactivateScreens();
  deactivateButtons();

  // draw own screen
  drawScreen3()
}

function buttonIN(){
  // deactivate screens & deactivate buttons
  deactivateScreens();
  deactivateButtons();

  // draw own screen
  drawScreen4()
}




function deactivateScreens(){
  document.getElementById("svgCanvas1").style.display = "none";
  document.getElementById("svgCanvas2").style.display = "none";
  document.getElementById("svgCanvas3").style.display = "none";
  document.getElementById("svgCanvas4").style.display = "none";
}

function deactivateButtons(){
  document.getElementById("button1icon").src = "Assets/button-1.png"; // Change to the new icon
  document.getElementById("buttonCicon").src = "Assets/button-c.png"; // Change to the new icon
  document.getElementById("buttonSicon").src = "Assets/button-s.png"; // Change to the new icon
  document.getElementById("buttonINicon").src = "Assets/button-in.png"; // Change to the new icon
}