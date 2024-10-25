let textEl = document.getElementById("text");
let timmerEl = document.getElementById("timmer");
let imgEl = document.getElementById("myImg");

let counter = 10;

let timeInterval = setInterval(()=>{
    counter = counter-1;
    timmerEl.textContent = counter;
   
    if(counter === 0){
        clearInterval(timeInterval);
        imgEl.src ="https://media.gettyimages.com/id/148771683/vector/graphic-explosion.jpg?s=612x612&w=gi&k=20&c=SCF--I7-6MkiBb_0PIlt6oO8acWovgQoJYziPWz-b7w=";
        timmerEl.style.display = "none";
    }
},1000);

function savethecity(){

    if(textEl.value =="defuse" && counter > 0){
        imgEl.src = "https://hpbbnews.com/wp-content/uploads/2016/09/happy-people-3.jpg";
        timmerEl.style.display = "none";
        clearInterval(timeInterval);
    }else {
        imgEl.src ="https://media.gettyimages.com/id/148771683/vector/graphic-explosion.jpg?s=612x612&w=gi&k=20&c=SCF--I7-6MkiBb_0PIlt6oO8acWovgQoJYziPWz-b7w=";
        timmerEl.style.display = "none";
        clearInterval(timeInterval);
    }
}
