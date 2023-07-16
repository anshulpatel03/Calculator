let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            if(string!=""){

            try{
            string = eval(string);
            document.querySelector('input').value = string;
            }
            catch(error){
                string ="";
            document.querySelector('input').value = string;
            }
        }
        }

        else if(e.target.innerHTML=="C"){
            string ="";
            document.querySelector('input').value = string;
        }
        else{
            console.log(e.target.innerHTML);
            string = string + e.target.innerHTML;
            document.querySelector('input').value = string;
        }
    })
    
});