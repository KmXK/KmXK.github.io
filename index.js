let form = document.getElementById("form")

function Subm(){
    //form.contentWindow.postMessage(this.message.value, '*');
    alert('send');
    return false;
}

form.onsubmit = function() {
    form.contentWindow.postMessage(this.message.value, '*');
    alert('Form send');
    return false;
};