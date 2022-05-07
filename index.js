/*

<div class="prices-modal">
    <div class="prices-modal-container">
        <div class="prices-modal-container-inner">
            <button class="prices-modal-cross">
                <i class="fa fa-times" style="color: white"></i>
            </button>

            <div class="prices-modal-content">
                <p>Hello world!</p>
                <!--<form class="prices-modal-form">
                    <input name="name" placeholder="Name" id="name">
                    <input name="email" placeholder="Email" id="email">
                    <input name="tel" placeholder="Phone number" id="phoneNumber">
                    <button type="submit" disabled>Send</button>
                </form>-->
            </div>
        </div>
    </div>
</div>

 */

let modal = null;
let timeout = null;

function createPricesModal() {
    if(modal != null) {
        closeModal();
    }

    let container = document.querySelector(".prices > .container");

    modal = document.createElement("div");
    modal.classList.add("prices-modal");
    modal.addEventListener("click", function (event) {
        if (event.target === modal)
            closeModal();
    });
    container.append(modal);

    let modalContainer =  document.createElement("div");
    modalContainer.classList.add("prices-modal-container");
    modal.append(modalContainer);

    let inner =  document.createElement("div");
    inner.classList.add("prices-modal-container-inner");
    modalContainer.append(inner);

    let crossBtn =  document.createElement("button");
    crossBtn.classList.add("prices-modal-cross");
    crossBtn.addEventListener("click", closeModal);
    inner.append(crossBtn);

    let icon =  document.createElement("i");
    icon.classList.add("fa", "fa-times");
    icon.style.color = "white";
    crossBtn.append(icon);

    let content =  document.createElement("div");
    content.classList.add("prices-modal-content");
    inner.append(content);

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
    if (getCookie("signedin") === "true") {
        showModalAlert("You have been already signed in!");
        return;
    }

    let content = createPricesModal();

    let form = document.createElement("form");
    form.classList.add("prices-modal-form");
    content.append(form);

    let nameInput = document.createElement("input");
    nameInput.name = "name";
    nameInput.type = "text";
    nameInput.placeholder = "Name";
    nameInput.required = true;
    nameInput.id = "prices-name";
    nameInput.addEventListener("input", validateModal);

    let emailInput = document.createElement("input");
    emailInput.name = "email";
    emailInput.type = "email";
    emailInput.placeholder = "Email";
    emailInput.required = true;
    emailInput.id = "prices-email";
    emailInput.addEventListener("input", validateModal);

    let telInput = document.createElement("input");
    telInput.name = "tel";
    telInput.type = "tel";
    telInput.placeholder = "Phone number";
    telInput.required = true;
    telInput.id = "prices-phone";
    telInput.pattern = "\\+375[0-9]{9}";
    telInput.addEventListener("input", validateModal);

    let sendBtn = document.createElement("input")
    sendBtn.type = "submit";
    sendBtn.id = "prices-send";
    sendBtn.disabled = true;
    sendBtn.addEventListener("click", submitPricesModal);

    form.append(nameInput, emailInput, telInput, sendBtn);
}

function closeModal() {
    modal?.remove();
}

function validateModal() {
    let name = document.getElementById("prices-name").validity.valid;
    let email = document.getElementById("prices-email").validity.valid;
    let telephone = document.getElementById("prices-phone").validity.valid;

    document.getElementById("prices-send").disabled = !(name && email && telephone);
}

function submitPricesModal() {
    showModalAlert("You have been signed in successfully!");

    // Добавление куки
    document.cookie = "signedin=true";

    if(timeout) {
        clearTimeout(timeout);
    }

    timeout = setTimeout(closeModal, 5000);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let signUpButtons = document.querySelectorAll('.subscription-btn');
signUpButtons.forEach((value) => {
    // value.addEventListener("click", createPricesModal);
    value.addEventListener("click", showPricesForm);

})

/*document.querySelector('.prices-modal-cross')
    .addEventListener('click', closeModal);*/

/*
alert(document.querySelectorAll('.prices-modal-form > input'));
    // .forEach((value) => {
    //     value.addEventListener('onchange', validateModal);
    // })*/
