const button = document.querySelectorAll('.color');
const body = document.querySelector('body');
const dabba = document.querySelector('.dabba');
button.forEach(function(button){
    button.addEventListener('click',function(x){
        if(x.target.id === 'purple'){
            body.style.backgroundColor = x.target.id;
            dabba.textContent = x.target.id;
        }
        if(x.target.id === 'green'){
            body.style.backgroundColor = x.target.id;
            dabba.textContent = x.target.id;
        }
        if(x.target.id === 'yellow'){
            body.style.backgroundColor = x.target.id;
            dabba.textContent = x.target.id;
        }
        if(x.target.id === 'blue'){
            body.style.backgroundColor = x.target.id;
            dabba.textContent = x.target.id;
        }
    })
})