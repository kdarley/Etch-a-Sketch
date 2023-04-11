// core
function createRow(){
    row = document.createElement('div')

    row.className = "row";

    row.style.flex = "auto";

    return row
}

function insertRow(){
    row = createRow()

    container = document.querySelector(".container")
    // row.style.borderStyle = "solid";
    // row.style.background = "blue";


    container.appendChild(row)
}


function numerousRow(num){
    for (i=0; i<num; i++){
        insertRow()
    }
}

function createBox(){
    box = document.createElement('div')
    
    box.className = "box";

    box.setAttribute('key-code', 0)

    box.style.borderStyle = "solid";
    // box.style.background = "red";

    box.style.flex = "auto";

    // console.log(box)

    return box
}

function insertBox(boxListeners, num){
    numerousRow(num)

    rows = document.querySelectorAll(".row")
    // rows.style.flex = 1;

    const numCols = rows.length

    for (row of rows){
        for (i=0; i<rows.length; i++){
            box = createBox()
            row.appendChild(box)
        }
        
    }

    boxListeners()
}

function boxListeners(){
    const boxListeners = document.querySelectorAll(".box")
    boxListeners.forEach((box) => {
        box.addEventListener('mouseover', () =>{
            box.style.background = randomColor(getKeyCode(box));
            incrementKeyCode(box);
            
        })
    })
}

// color change
function incrementKeyCode(box){
    code = parseInt(getKeyCode(box))
    code += 1
    box.setAttribute("key-code", code)
    return getKeyCode(box)
}

function getKeyCode(box){
    code = box.getAttribute("key-code")
    return code
}

function randomColor(getKeyCode){
    if (getKeyCode > 5){
        return "rgb(0,0,0)"
    } else {
        let color = [];
        for (let i=0; i<3; i++){
            color.push(Math.floor(Math.random()*256));
        }
        return "rgb("+color.join(", ")+ ")";
    }
}

function removeAllChildren(insertNew){
    let rows = document.querySelectorAll(".row")
    rows.forEach(row => {
        row.remove();
    });

    insertBox(boxListeners, insertNew)
}

//slider
let sliderInput = document.querySelector("input");
let sliderOutput = document.querySelector("output");

sliderOutput.innerHTML = sliderInput.value;

sliderInput.addEventListener("input", ()=>{
    sliderOutput.innerHTML = sliderInput.value;

    removeAllChildren(sliderInput.value);


}, false)


window.onload = insertBox(boxListeners, 5);