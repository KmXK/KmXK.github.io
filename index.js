

function Subm(){
    let form = document.getElementById("form")
    form.contentWindow.postMessage(this.message.value, '*');
    alert('send');
    return false;
}

form.onsubmit = function() {
    form.contentWindow.postMessage(this.message.value, '*');
    alert('Form send');
    return false;
};