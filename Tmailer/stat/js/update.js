let form = document.getElementById('myform');
let btn = form.elements[3];
let data = {};
btn.addEventListener('click',(event)=>{
    event.preventDefault();
    let pass1 = form.elements[1].value;
    let pass2 = form.elements[2].value;
    let token = localStorage.getItem('token');
   if(pass1===pass2){

    data = {
        newpassword:`${pass1}`
        }

        let config = {
            method: 'POST',
            headers: {
                Accept :'application/json',
                'content-type':'application/json',
                Authorisation: 'Bearer ' + token
            },
            body: JSON.stringify(data)
        }
        async function updateData(){
            try{
                let res = await fetch('http://localhost:3000/api/update',config);
                let info = res.json();
                
            }
            catch{

            }
        }
    }
    else{
        let mydiv = document.createElement('DIV');
        mydiv.innerHTML = '<div> PASSWORD NOT MATCHING<div>';
        mydiv.style.color = "red";
        form.append(mydiv);
    }
   
   
})