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

function closeModal() {
    modal?.remove();
}

function validateModal() {
    let name = document.getElementById("Name").validity.valid;
    let email = document.getElementById("Email").validity.valid;
    let telephone = document.getElementById("Tel").validity.valid;

    document.getElementById("submit").disabled = !(name && email && telephone);
}

function submButtonClick() {
    showModalAlert('hui');
}

let buttonSubm = document.querySelector(".contact-submit");
buttonSubm.addEventListener("click", submButtonClick);

["Name", "Email", "Tel"].forEach(id => document.getElementById(id).addEventListener("input", validateModal));