// 1. Grab the save-el paragrah and store it in a variable called saveEl.

let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count-el");
let count = 0;

console.log(saveEl);

function incr(){
    count = count + 1;
    countEl.innerText = count;
  //  console.log(count);
}

function save(){
    // 2. Create a variable that contains both the count and the dash separator, i.e. "12 - "
    let countStr = count + " - " 
    // 3. Render the variable in the saveEl using innerText
    saveEl.textContent += countStr // text content alternative to innertext.but they both are differnt innertext strugles showing hidden space.
    countEl.textContent = 0; 
    count = 0;
    
    // NB: Make sure to not delete the existing content of the paragraph
    console.log(count);
}

