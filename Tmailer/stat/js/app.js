alert("Welcome");

const form = document.getElementById('myform');
const btn = form.elements[2];

btn.addEventListener('click',(event)=>{
    event.stopPropagation();
    
    const data = {
        mail: `${form.elements[0].value}`,
        pass: `${form.elements[1].value}`
    };
    const config = {
        method: 'POST',
        headers:{
            Accept :'application/json',
            'Content-type' :'application/json'
        },
        body: JSON.stringify(data)
    }

    console.log("button clicked")
    async function fetchToken(){
        try{
            let res = await fetch('http://localhost:3000/home',config);
            const tokendata = await res.json();
            localStorage.setItem("token",tokendata.token);
        }
        catch (e){
            return e;
        }
    }
    fetchToken();
})
   