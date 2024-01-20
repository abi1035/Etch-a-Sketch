let buttonWasCLicked=false;
let id=0;
let resetWasClicked=false;

const randomColorArrayBlue=["#7B68EE","#AFEEEE","#00BFFF","#87CEFA","#7FFFD4","#7B68EE"]
const randomColorArrayPink=["#9F2B68","#F2D2BD","#DE3163","#811331","#FF7F50","#F88379","#DC143C","#AA336A"]

// Resetting the grid
function resetSketch(){
 resetWasClicked=true;
 let userChoiceLimitExceeded=true;

 const elements = document.getElementsByClassName("column");
    while(elements.length > 0){
        elements[0].parentNode.removeChild(elements[0]);
    }

    while(userChoiceLimitExceeded===true){
    let userGridChoice=prompt("Choose a grid size between 1-16");
    if (userGridChoice<=16){
      makeGrids(userGridChoice);
      userChoiceLimitExceeded=false;
    }
    }

}


// Getting button Color
function buttonClick(e){
  buttonWasCLicked=true;
  buttonValue=e.target.value
  return buttonValue
}


// Making the grid
function makeGrids(size) {
  let screen = document.querySelector(".sketch-screen");
  for (let i = 0; i < size; i++) {
    let column = document.createElement("div");
    column.classList.add("column");
    for (let j = 1; j <= size; j++) {
      let row = document.createElement("div");
      // row.classList.add("row");
      // row.style.border = "2px solid black";
      // row.innerText = (i * size) + j;
        row.setAttribute("id", id);
        id++;
      column.appendChild(row);
      
      
      // getting the  corresponding color on mouse entry
      row.onmouseenter = function(e) {
        if(buttonWasCLicked===true){
        let gridId=e.target.id;
        if(buttonValue==="black"){
          document.getElementById(gridId).style.setProperty('background-color', `${buttonValue}`);
        } else if(buttonValue==="RGBBlue"){
          let randomColorChoice=Math.floor(Math.random()*randomColorArrayBlue.length)
          rgbColor=randomColorArrayBlue[randomColorChoice];
          document.getElementById(gridId).style.setProperty('background-color', `${rgbColor}`);
        }else if(buttonValue==="RGBPink"){
          let randomColorChoice=Math.floor(Math.random()*randomColorArrayPink.length)
          rgbColor=randomColorArrayPink[randomColorChoice];
          document.getElementById(gridId).style.setProperty('background-color', `${rgbColor}`);
        }
        
        // console.log(buttonValue)
      }
    };
    }
    screen.appendChild(column);
  }
 
}



// Resets the reset button
if(resetWasClicked===false){
  makeGrids(16);
}else{
  makeGrids(0)
  resetWasClicked=true;
}
