let saveElement= document.getElementById("save-element");
let countElement = document.getElementById("count-element");
let count = 0;
function increment() {
    count = count+1;
    countElement.textContent = count;
}
function save() {
    let countStr= count + " - ";
    saveElement.textContent+= countStr;
    countElement.textContent=0;
    count=0;
}