function createRow(){
    row = document.createElement('div')

    row.className = "row";

    row.style.flex = "auto";

    return row
}

function insertRow(){
    row = createRow()

    container = document.querySelector(".container")

    container.appendChild(row)
}


function numerousRow(){
    for (i=0; i<5; i++){
        insertRow()
    }
}

function createBox(){
    box = document.createElement('div')
    
    box.className = "box";

    box.style.borderStyle = "solid";
    // box.style.background = "red";

    box.style.flex = "auto";

    // console.log(box)

    return box
}

function insertBox(boxListeners){
    numerousRow()

    rows = document.querySelectorAll(".row")
    // rows.style.flex = 1;

    const numCols = rows.length

    for (row of rows){
        for (i=0; i<5; i++){
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
            box.style.background = randomColor();
        })
    })
}

function randomColor(){
    let color = [];
    for (let i=0; i<3; i++){
        color.push(Math.floor(Math.random()*256));
    }
    return "rgb("+color.join(", ")+ ")";
}

window.onload = insertBox(boxListeners);


// window.onload = addListeners;



// function numerousBox(){
//     for (i=0; i<5; i++){
//         insertBox()
//     }
// }

// window.onload = numerousBox;