function getState(){
    if(Math.random() < 0.5) return 0;
    return 1;
}



// make the first Row
for(let i=0; i< 101; i++){
    let div = document.createElement('div');
    
    document.querySelector(".row").appendChild(div);    
}

function randomizeRow(rowDiv){
    // makes a row randomize with active or inactive states
    let rowDivs = rowDiv.childNodes;
    for(let i=1; i < rowDivs.length; i++){
        let div = rowDivs[i];
        div.classList.add(getState() ? 'active' : 'inactive');        
    }
}

randomizeRow(document.querySelector(".row"));

function duplicateRow(){
    // duplicate a row by cloning it - essentially the last row
    let allRows = document.querySelectorAll(".row");
    let lastRow = allRows[allRows.length - 1];
    let clone = lastRow.cloneNode(true);    
    document.querySelector(".cells").appendChild(clone);
    processRow(clone, lastRow);
}




function processRow(currentDiv, parentDiv){
    // the real meat of the code-
    // here's where we apply the rules to generate Successive generations
    let parentNodes = parentDiv.childNodes;
    let currentNodes = currentDiv.childNodes;
    let len = parentNodes.length;
    for(let i=1; i < len; i++){
        let target = currentNodes[i];
        let topSelf = parentNodes[i];
        let leftSelf = topSelf.previousElementSibling || parentNodes[len-1];
        let rightSelf = topSelf.nextElementSibling || parentNodes[1];
        applyRule(target, topSelf, leftSelf, rightSelf);
    }
}

function applyRule(target, top, left, right){
    // http://atlas.wolfram.com/01/01/73/01_01_1_73.html#01_01_9_73
    if(isActive(top) && isActive(left) && isActive(right)) setState(target, false);
    else if(isActive(top) && isActive(left) && !isActive(right)) setState(target, true);
    else if(!isActive(top) && isActive(left) && isActive(right)) setState(target, false);
    else if(!isActive(top) && isActive(left) && !isActive(right)) setState(target, false);
    else if(isActive(top) && !isActive(left) && isActive(right)) setState(target, true);
    else if(isActive(top) && !isActive(left) && !isActive(right)) setState(target, false);
    else if(!isActive(top) && !isActive(left) && isActive(right)) setState(target, false);
    else setState(target, true);
}

function isActive(cell){    
    return cell.classList.contains('active');
}

function setState(cell, active){
    if(isActive(cell)) cell.classList.remove('active');
    else cell.classList.remove('inactive');
    
    if(active) cell.classList.add('active');
    else cell.classList.add('inactive');
}

setInterval(duplicateRow, 200);