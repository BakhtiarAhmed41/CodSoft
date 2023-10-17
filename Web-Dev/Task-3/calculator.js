let string = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (evaluate)=>{
       
    if(evaluate.target.innerHTML == '='){
        string = eval(string);
        document.querySelector('input').value = string;
    }
     
    else if(evaluate.target.innerHTML == 'C'){
        string = "";
        document.querySelector('input').value = string;
    }

    else{
        string =string + evaluate.target.innerHTML;
        document.querySelector('input').value =string;
       }
    })
})