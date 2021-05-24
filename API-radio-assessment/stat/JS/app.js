alert("hello");
var response;
const par = document.querySelector('select');
const addOption = function(response){
    let n = Object.keys(response).length;
    for(let i = 1;i<n;i++)
    {
    let op = document.createElement('option');
    op.text = `${Object.values(response)[i]}`;
    op.value = `${Object.values(response)[i]}`;
    par.appendChild(op);
    }
}
let btn = document.querySelectorAll('input');
for (let i = 0; i <= 2; i++) {
    btn[i].addEventListener('click', (e) => {
        e.stopPropagation();
        const req = new XMLHttpRequest();
        req.onload = function () {
            document.querySelector('select').innerHTML = "";
            response = JSON.parse(this.responseText);
            console.log(response);
            addOption(response);
        }
        req.onerror = function () {
            console.log("Request Failed!!");
            console.log(this);
        }
        
        req.open('POST', '/',true);
        req.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        req.send("c="+btn[i].value);
    })
}