const content=document.querySelector(".content");
for(let i = 0; i<64 ; i++){
    content.innerHTML += `<div id="${i+1}" class="box"></div>`
}

const boxes = document.querySelectorAll(".box");
boxes.forEach(element=>{
    element.addEventListener("click",(event)=>{
        let currentElement= event.target
        if(currentElement.style.backgroundColor==="grey"){
            currentElement.style.backgroundColor="red"
            currentElement.textContent = currentElement.id
        }
        else{
            currentElement.style.backgroundColor="grey"
            currentElement.textContent = null
        }
        currentElement.style.textAlign="center"
        currentElement.style.color="white"
    })



    //element.addEventListener("mouseenter",(event)=>{event.target.style.backgroundColor="green",event.target.textContent = event.target.id, event.target.style.textAlign="center"})


    
})
