let string ="";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML=="="){
            if(string!=""){

            try{
            string = eval(string);
            document.querySelector('input').value = string;
            string="";
            }
            catch(error){
                string ="";
            document.querySelector('input').value = string;
            }
        }
        else {
                string = eval(document.querySelector('input').value);
                document.querySelector('input').value = string;
                string = "";
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