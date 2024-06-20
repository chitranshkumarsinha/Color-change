const color = document.querySelectorAll('.color')
const body  = document.querySelector('body');
const text = document.querySelector('.dabba');
color.forEach(function(color){
    color.addEventListener('mouseover',function(x){
        if(x.target.id === 'purple'){
            body.style.backgroundColor=x.target.id
            text.textContent=x.target.id
        }
        if(x.target.id === 'yellow'){
            body.style.backgroundColor=x.target.id
            text.textContent=x.target.id
        }
        if(x.target.id === 'blue'){
            body.style.backgroundColor=x.target.id
            text.textContent=x.target.id
        }
        if(x.target.id === 'green'){
            body.style.backgroundColor=x.target.id
            text.textContent=x.target.id
        }
        // console.log(event.type);
        // console.log(event.timeStamp);
        // event.defaultPrevented
        // event.preventDefault
        // console.log(MouseEvent.clientX);
        // console.log(event.altKey);
        // console.log(event.ctrlKey);
        // console.log(event.shiftKey);
    })
})