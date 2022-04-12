function Subm(){
    let form = document.getElementById("form")
    form.contentWindow.postMessage(this.message.value, '*');
    alert('send');
    return false;
}

let name = document.getElementById("Name");
let email = document.getElementById("Email");
let tel = document.getElementById("Tel");
const buttonSubm = document.getElementById("buttonSubmit");
if (name !== '' && email !== '' && tel !== ''){
    buttonSubm.disabled = false;
}