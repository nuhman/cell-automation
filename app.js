function getRandomState(){
    if(Math.random() < 0.5) return 0;
    return 1;
}

// make the first Row
for(let i=0; i< 71; i++){
    let div = document.createElement('div');
    
    document.querySelector(".row").appendChild(div);    
}

function randomizeRow(rowDiv){
    // makes a row randomize with active or inactive states
    let rowDivs = rowDiv.childNodes;
    for(let i=1; i < rowDivs.length; i++){
        let div = rowDivs[i];
        div.classList.add(getRandomState() ? 'active' : 'inactive');        
    }
}

randomizeRow(document.querySelector(".row"));

function duplicateRow(){
    // duplicate a row by cloning it
    let firstRow = document.querySelector(".cells");
    let clone = firstRow.cloneNode(true);
    randomizeRow(document.querySelector(".row"));
    document.querySelector(".cells").appendChild(clone);
}

duplicateRow();