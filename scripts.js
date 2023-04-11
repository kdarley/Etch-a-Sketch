function createRow(){
    row = document.createElement('div')

    row.className = "row"

    // row.style.background = "blue";
    // row.style.borderStyle = "solid";
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

    box.style.borderStyle = "solid";
    // box.style.background = "red";

    box.style.flex = "auto";

    console.log(box)

    return box
}

function insertBox(){
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
}



window.onload = insertBox;

// function numerousBox(){
//     for (i=0; i<5; i++){
//         insertBox()
//     }
// }

// window.onload = numerousBox;