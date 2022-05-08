const data = [
    {
        id: 0,
        author: 'ALEXANDR PODVALNY',
        image: 'content/clients-background.jpg'

    },
    {
        id: 1,
        author: 'Vlad Verlov',
        image: './2.jpg'
    },
    {
        id: 2,
        author: 'Egor Zavadskij',
        image: './1.jpg'
    }
]

const author = document.querySelector('.clients-quote-author');
const company = document.querySelector('.clients-quote-company');
const quote = document.querySelector('.clients-quote');
const buttons = document.querySelectorAll('.cqb')

show(0);
let currentItem = 0;
let timer = 0;
// switch (getCookie("currentItem")) {
//     case '0':
//         currentItem = 0;
//         break;
//     case '1':
//         currentItem = 1;
//         break;
//     case '2':
//         currentItem = 2;
//         break;
//     default:
//         currentItem = 0;
//         break;
// }

buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.classList.contains('btn-left')) {
            author.innerHTML = data[0].author;
            quote.style.background = `url(${data[0].image}`
            quote.style.backgroundRepeat = 'no-repeat'
            quote.style.backgroundSize = '100% 100%'
            buttons[0].classList.add('active');
            buttons[1].classList.remove('active');
            buttons[2].classList.remove('active');
            makeTimer();
            currentItem = 0
            // document.cookie = "currentItem=0"
        }
        if (e.target.classList.contains('btn-center')) {
            author.innerHTML = data[1].author;
            quote.style.background = `url(${data[1].image})`
            quote.style.backgroundRepeat = 'no-repeat'
            quote.style.backgroundSize = '100% 100%'
            buttons[1].classList.add('active');
            buttons[0].classList.remove('active');
            buttons[2].classList.remove('active');
            makeTimer();
            currentItem = 1
            // document.cookie = "currentItem=1"
        }
        if (e.target.classList.contains('btn-right')) {
            author.innerHTML = data[2].author;
            quote.style.background = `url(${data[2].image})`
            quote.style.backgroundRepeat = 'no-repeat'
            quote.style.backgroundSize = '100% 100%'
            buttons[0].classList.remove('active');
            buttons[1].classList.remove('active');
            buttons[2].classList.add('active');
            makeTimer();
            currentItem = 2
            // document.cookie = "currentItem=2"
        }
    })
})



makeTimer(); //Создаем интервал 
function makeTimer() {
    clearInterval(timer) //Очистим интервал, это позволит прервать его работу и отменить перелистывание
    timer = setInterval(function () {
        currentItem++;
        if (currentItem > data.length - 1)
            currentItem = 0
        show(currentItem);
        // document.cookie = `currentItem=${currentItem}`
    }, 2000);
}


function show(currentItem) {
    author.innerHTML = data[currentItem].author;
    quote.style.background = `url(${data[currentItem].image}) no-repeat center`;
    quote.style.backgroundRepeat = 'no-repeat'
    quote.style.backgroundSize = '100% 100%'
    buttons[currentItem].classList.toggle('active');
    if (currentItem != 0)
        buttons[currentItem - 1].classList.remove('active');
    else
        buttons[data.length - 1].classList.remove('active');
}

function getCookie(name) {
    let matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}