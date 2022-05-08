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
        elem.classList.remove('btn_portfolio_change');
        elem.classList.add('btn_portfolio_default');
    })
    button.classList.remove('btn_portfolio_default');
    button.classList.add('btn_portfolio_change');
}
