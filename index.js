let modalTimeout;
let currentModal;

function createModal() {
    if(currentModal != null) {
        closeModal();
    }

    let container = document.body;

    currentModal = document.createElement("div");
    currentModal.classList.add("modal");
    currentModal.addEventListener("click", function (event) {
        if (event.target === currentModal)
            closeModal();
    });
    container.append(currentModal);

    let modalContainer =  document.createElement("div");
    modalContainer.classList.add("modal-container");
    currentModal.append(modalContainer);

    let inner =  document.createElement("div");
    inner.classList.add("modal-container-inner");
    modalContainer.append(inner);

    let crossBtn =  document.createElement("button");
    crossBtn.classList.add("modal-cross");
    crossBtn.addEventListener("click", closeModal);
    inner.append(crossBtn);

    let icon =  document.createElement("i");
    icon.classList.add("fa", "fa-times");
    icon.style.color = "white";
    crossBtn.append(icon);

    let content =  document.createElement("div");
    content.classList.add("modal-content");
    inner.append(content);

    return content;
}

function showModalAlert(text, time) {
    let content = createModal();

    let p = document.createElement("p");
    p.textContent = text;
    p.classList.add("modal-alert");
    content.append(p);

    if(modalTimeout) {
        clearTimeout(modalTimeout);
    }

    modalTimeout = setTimeout(closeModal, time);
}

function showPricesForm() {
    if (getCookie("signedin") === "true") {
        showModalAlert("You have been already signed in!", 5000);
        return;
    }

    let content = createModal();

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
    sendBtn.addEventListener("click", submitPricesForm);

    form.append(nameInput, emailInput, telInput, sendBtn);
}

function closeModal() {
    currentModal?.remove();
}

function validateModal() {
    let name = document.getElementById("prices-name").validity.valid;
    let email = document.getElementById("prices-email").validity.valid;
    let telephone = document.getElementById("prices-phone").validity.valid;

    document.getElementById("prices-send").disabled = !(name && email && telephone);
}

function validateContactForm() {
    let name = document.getElementById("contact-name").validity.valid;
    let email = document.getElementById("contact-email").validity.valid;
    let telephone = document.getElementById("contact-phone").validity.valid;

    document.getElementById("contact-submit").disabled = !(name && email && telephone);
}

function submitPricesForm() {
    showModalAlert("You have been signed in successfully!", 5000);

    // Добавление куки
    document.cookie = "signedin=true";
}

function submitContactForm() {
    showModalAlert("You have successfully sent your message!", 5000);
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}

let contactSubmitBtn = document.querySelector(".contact-submit");
contactSubmitBtn.addEventListener("click", submitContactForm);

["contact-name", "contact-email", "contact-phone"]
    .forEach(id => document.getElementById(id).addEventListener("input", validateContactForm));
validateContactForm();

let signUpButtons = document.querySelectorAll('.subscription-btn');
signUpButtons.forEach((value) => {
    value.addEventListener("click", showPricesForm);
});



// Home slider
let homeSliderOffset = 0;
const homeSliderLine = document.querySelector(".home-slider-line");
const homeSlidesCount = homeSliderLine.querySelectorAll("img").length;
function homeSliderMove(ratio) {
    let offset = homeSliderOffset + ratio * 1600;

    if(offset > 1600 * (homeSlidesCount - 1)) return;
    else if(offset < 0) return;

    homeSliderOffset = offset;
    homeSliderLine.style.left = -homeSliderOffset + "px";
}
document.querySelector(".home-next-nav-btn").addEventListener("click", function() {
    homeSliderMove(1);
});
document.querySelector(".home-prev-nav-btn").addEventListener("click", function() {
    homeSliderMove(-1);
});