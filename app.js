function getRandomState(){
    if(Math.random() < 0.5) return 0;
    return 1;
}

for(let i=0; i< 101; i++){
    let div = document.createElement('div');
    div.classList.add(getRandomState() ? 'active' : 'inactive');    
    document.querySelector(".cells").appendChild(div);    
}


