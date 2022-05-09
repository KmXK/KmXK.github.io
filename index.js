const data = [
    {
        id: 0,
        author: 'ALEXANDR PODVALNY',
        image: 'content/clients-background.jpg'

    },
    {
        id: 1,
        author: 'Vlad Verlov',
        image: 'content/1.jpg'
    },
    {
        id: 2,
        author: 'Egor Zavadskij',
        image: 'content/2.jpg'
    }
]


//Создание слайдера
let clients = document.querySelector('.clients');
let clients_quote = document.createElement('div');
clients_quote.className = "clients-quote";
clients.append(clients_quote);

//Client-quote-image
let clients_quote_image = document.createElement('div');
clients_quote_image.className = "clients-quote-image";
let clients_image = document.createElement('img');
clients_image.src = "content/dsss.png";
clients_quote_image.append(clients_image);
clients_quote.append(clients_quote_image);

//Client-quote-subtitle
let clients_quote_subtitle = document.createElement('div');
clients_quote_subtitle.className = "clients-quote-subtitle";
let clients_quote_subtitle_text = document.createElement('p');
clients_quote_subtitle_text.className = "clients-quote-subtitle-text";
clients_quote_subtitle_text.textContent = " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur eu libero ut erat sodales finibus sed in dolor. Etiam iaculis, nibh a lobortis egestas, est urna sodales";
clients_quote_subtitle.append(clients_quote_subtitle_text);
clients_quote.append(clients_quote_subtitle);

//Clients-quote-author
let clients_quote_author = document.createElement('p');
clients_quote_author.className = "clients-quote-author";
clients_quote_author.textContent = "ALEXANDR PODVALNY";
clients_quote.append(clients_quote_author);

//Clients-quote-company
let clients_quote_company = document.createElement('p');
clients_quote_company.className = "clients-quote-company";
clients_quote_company.textContent = "Free-PSD-Template.com Company";
clients_quote.append(clients_quote_company);

//Clients-quote-radio
let clients_quote_radio = document.createElement('div');
clients_quote_radio.className = "clients-quote-radio";
let btn_left = document.createElement('button');
btn_left.classList.add('cqb', 'cqb-left');
let btn_center = document.createElement('button');
btn_center.classList.add('cqb', 'cqb-center');
let btn_right = document.createElement('button');
btn_right.classList.add('cqb', 'cqb-right');
clients_quote_radio.append(btn_left);
clients_quote_radio.append(btn_center);
clients_quote_radio.append(btn_right);
clients_quote.append(clients_quote_radio);

console.log(clients_quote);
//Конец создания слайдера


const author = document.querySelector('.clients-quote-author');
const company = document.querySelector('.clients-quote-company');
const quote = document.querySelector('.clients-quote');
const buttons = document.querySelectorAll('.cqb')


let currentItem = 0;
let timer = 0;
switch (getCookie("currentItem")) {
    case '0':
        currentItem = 0;
        break;
    case '1':
        currentItem = 1;
        break;
    case '2':
        currentItem = 2;
        break;
    default:
        currentItem = 0;
        break;
}

showQuote(currentItem);

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('cqb-left')) {
            showQuote(0);
        }
        if (e.target.classList.contains('cqb-center')) {
            showQuote(1);
        }
        if (e.target.classList.contains('cqb-right')) {
            showQuote(2);
        }
    })
})

function makeTimer() {
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function () {
        currentItem = (currentItem + 1) % data.length;
        showQuote(currentItem);
    }, 2000);
}


function showQuote(item) {
    currentItem = item;
    document.cookie = `currentItem=${currentItem}`;
    author.textContent = data[currentItem].author;
    quote.style.background = `url(${data[currentItem].image}) no-repeat center`;

    buttons.forEach(b => b.classList.remove('cqb-active'));
    buttons[currentItem].classList.add('cqb-active');

    makeTimer();
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}