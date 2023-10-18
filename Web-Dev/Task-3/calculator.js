let expression = "";
let buttons = document.querySelectorAll('.btn');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click', (evaluate)=>{
       
    if(evaluate.target.innerHTML == '='){
        try{expression = eval(expression);
        document.querySelector('input').value = expression;}

        catch(error){
            expression = "Plz enter correct data";
            document.querySelector("input").style.fontSize = "20px";
            document.querySelector('input').value = expression;
        }
    }
     
    else if(evaluate.target.innerHTML == 'C'){
        expression = "";
        document.querySelector('input').value = expression;
    }
    else if(evaluate.target.innerHTML == 'Delete'){
        if (expression.length > 1) {
            expression = expression.slice(0, -1);
            document.querySelector('input').value = expression;
        }
        else{
            expression = '';
            document.querySelector('input').value = expression;
        }
    }

    else{
        expression =expression + evaluate.target.innerHTML;
        document.querySelector('input').value =expression;
       }
    })
})