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


// Gallery
const gallery = document.getElementById("gallery_flex");

let all_button = document.getElementById('All_btn');
all_button.addEventListener('click',function(){

    SetButtonColor(all_button);

    RemoveImages(gallery);

    let block_row_1=document.createElement('div');
    block_row_1.className="block-row-1";
    gallery.append(block_row_1);

    let block_row_2=document.createElement('div');
    block_row_2.className="block-row-2";
    gallery.append(block_row_2);

    let img_1=document.createElement('img');
    let img_2=document.createElement('img');
    let img_3=document.createElement('img');
    let img_4=document.createElement('img');
    let img_5=document.createElement('img');
    let img_6=document.createElement('img');
    let img_7=document.createElement('img');
    let img_8=document.createElement('img');

    block_row_1.append(img_1);
    block_row_1.append(img_2);
    block_row_1.append(img_3);
    block_row_1.append(img_4);
    block_row_2.append(img_5);
    block_row_2.append(img_6);
    block_row_2.append(img_7);
    block_row_2.append(img_8);

    img_1.src="content/Gallery/1.png";
    img_2.src="content/Gallery/3.png";
    img_3.src="content/Gallery/5.png";
    img_4.src="content/Gallery/7.png";
    img_5.src="content/Gallery/2.png";
    img_6.src="content/Gallery/4.png";
    img_7.src="content/Gallery/6.png";
    img_8.src="content/Gallery/8.png";

    let images_1 = block_row_1.childNodes;
    [].forEach.call(images_1,function(image){
        image.className="gallery_item";
    })
    let images_2 = block_row_2.childNodes;
    [].forEach.call(images_2,function(image){
        image.className="gallery_item";
    })
})

let web_button = document.getElementById('Web_btn');
web_button.addEventListener('click',function(){

    SetButtonColor(web_button);

    let parNode = document.getElementById("gallery_flex");
    RemoveImages(gallery);

    let block_row=document.createElement('div');
    block_row.className="block-row-1";
    parNode.append(block_row);

    let img_1=document.createElement('img');
    let img_2=document.createElement('img');
    let img_3=document.createElement('img');
    let img_4=document.createElement('img');

    block_row.append(img_1);
    block_row.append(img_2);
    block_row.append(img_3);
    block_row.append(img_4);

    img_1.src="content/Gallery/1.png";
    img_2.src="content/Gallery/3.png";
    img_3.src="content/Gallery/5.png";
    img_4.src="content/Gallery/7.png";

    let images = block_row.childNodes;
    [].forEach.call(images,function(image){
        image.className="gallery_item_web";
    })

});

let brouchers_button = document.getElementById('Brouchers_btn');
brouchers_button.addEventListener('click',function(){

    SetButtonColor(brouchers_button);
    RemoveImages(gallery);

    let block_row_1=document.createElement('div');
    block_row_1.className="block-row-1";
    gallery.append(block_row_1);

    let block_row_2=document.createElement('div');
    block_row_2.className="block-row-brouchers-2";
    gallery.append(block_row_2);

    let img_1=document.createElement('img');
    let img_2=document.createElement('img');
    let img_3=document.createElement('img');
    let img_4=document.createElement('img');

    block_row_1.append(img_1);
    block_row_1.append(img_2);
    block_row_2.append(img_3);
    block_row_2.append(img_4);

    img_1.src="content/Gallery/1.png";
    img_2.src="content/Gallery/7.png";
    img_3.src="content/Gallery/2.png";
    img_4.src="content/Gallery/8.png";

    let images_1 = block_row_1.childNodes;
    [].forEach.call(images_1,function(image){
        image.className="gallery_item_brouchers_1";
    })
    let images_2 = block_row_2.childNodes;
    [].forEach.call(images_2,function(image){
        image.className="gallery_item_brouchers_2";
    })
})

let logos_button = document.getElementById('Logos_btn');
logos_button.addEventListener('click',function(){

    SetButtonColor(logos_button);
    RemoveImages(gallery);

    let block_row=document.createElement('div');
    block_row.className="block-row-1";
    gallery.append(block_row);

    let img_1=document.createElement('img');
    let img_2=document.createElement('img');

    block_row.append(img_1);
    block_row.append(img_2);

    img_1.src="content/Gallery/4.png";
    img_2.src="content/Gallery/6.png";

    let images = block_row.childNodes;
    [].forEach.call(images,function(image){
        image.className="gallery_item_logos";
    })
})

function RemoveImages(images)
{
    while(images.firstChild){
        images.removeChild(images.firstChild);
    }
}

function SetButtonColor(button)
{
    let buttons=document.querySelectorAll('.btn-portfolio');
    let buttons_array=[];
    for(let i=0;i<buttons.length;i++)
    {
        buttons_array[i]=buttons[i];
    }
    buttons_array.forEach(function (elem){
        elem.classList.remove('btn-portfolio-change');
        elem.classList.add('btn-portfolio-default');
    })
    button.classList.remove('btn-portfolio-default');
    button.classList.add('btn-portfolio-change');
}