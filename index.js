function createModal() {
    let block = document.querySelector(".prices-modal");
    if(block != null) {
        block.classList.remove("disabled");
    }
}

function closeModal() {
    let block = document.querySelector(".prices-modal");
    if(block != null) {
        block.classList.add("disabled");
    }
}

function validateModal() {
    alert("CHANGE");
    let regexps = [
        "123",
        "234",
        "334"
    ];

    let childs = document.querySelector('.prices-modal-form-container').childNodes;
    for (let i = 0; i < regexps.length; i++) {
        let value = childs.item(i).value;
        if(value === "123")
            alert("PENIS");
    }
}

function showModalAlert(text, color) {
}

let signUpButtons = document.querySelectorAll('.subscription-btn');
signUpButtons.forEach((value) => {
    value.addEventListener("click", createModal);
})

document.querySelector('.prices-modal-cross')
    .addEventListener('click', closeModal);

alert(document.querySelectorAll('.prices-modal-form-container > input'));
    // .forEach((value) => {
    //     value.addEventListener('onchange', validateModal);
    // })