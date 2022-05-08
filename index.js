let modal = document.getElementById("Modal");
let btn = document.getElementById("btnSubmit");
let span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

modal = null;
let timeout = null;

function createPricesModal() {
    if(modal != null) {
        closeModal();
    }

    let container = document.querySelector(".container > .contact-form-grid");

    modal = document.getElementById("Modal");
    modal.addEventListener("click", function (event) {
        if (event.target === modal)
            closeModal();
    });
    container.append(modal);

    return content;
}

function showModalAlert(text) {
    let content = createPricesModal();

    let p = document.createElement("p");
    p.textContent = text;
    p.classList.add("prices-alert");
    content.append(p);
}

function showPricesForm() {
    let content = createPricesModal();

    let form = document.getElementById("form");
    form.classList.add("prices-modal-form");
    content.append(form);

    let nameInput = document.getElementById("Name");
    nameInput.addEventListener("input", validateModal);

    let emailInput = document.getElementById("Email");
    emailInput.addEventListener("input", validateModal);

    let telInput = document.getElementById("Tel");
    telInput.pattern = "\\+375[0-9]{9}";
    telInput.addEventListener("input", validateModal);

    let sendBtn = document.getElementById("btnSubmit")
    sendBtn.disabled = true;
    sendBtn.addEventListener("click", submitPricesModal);

    //form.append(nameInput, emailInput, telInput, sendBtn);
}

function closeModal() {
    modal?.remove();
}

function validateModal() {
    let name = document.getElementById("Name").validity.valid;
    let email = document.getElementById("Email").validity.valid;
    let telephone = document.getElementById("Tel").validity.valid;

    document.getElementById("btnSubmit").disabled = !(name && email && telephone);
}

function submitPricesModal() {
    showModalAlert("Form send");

    // Добавление куки
    document.cookie = "signedin=true";

    if(timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(closeModal, 5000);
}