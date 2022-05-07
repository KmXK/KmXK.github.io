var all_button=document.getElementById('All_btn');
all_button.addEventListener('click',function(){
    var parNode=document.getElementById("gallery_flex");
    while(parNode.firstChild){
        parNode.removeChild(parNode.firstChild);
    }

    let block_row_1=document.createElement('div');
    block_row_1.className="block-row-1";
    parNode.append(block_row_1);

    let block_row_2=document.createElement('div');
    block_row_2.className="block-row-2";
    parNode.append(block_row_2);

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

    var images_1=block_row_1.childNodes;
    [].forEach.call(images_1,function(image){
        image.className="gallery_item";
    })
    var images_2=block_row_2.childNodes;
    [].forEach.call(images_2,function(image){
        image.className="gallery_item";
    })
})

var web_button=document.getElementById('Web_btn');
web_button.addEventListener('click',function(){
    var parNode=document.getElementById("gallery_flex");
    while(parNode.firstChild){
        parNode.removeChild(parNode.firstChild);
    }

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

    var images=block_row.childNodes;
    [].forEach.call(images,function(image){
        image.className="gallery_item_web";
    })

});

var brouchers_button=document.getElementById('Brouchers_btn');
brouchers_button.addEventListener('click',function(){
    var parNode=document.getElementById("gallery_flex");
    while(parNode.firstChild){
        parNode.removeChild(parNode.firstChild);
    }
    let block_row_1=document.createElement('div');
    block_row_1.className="block-row-1";
    parNode.append(block_row_1);

    let block_row_2=document.createElement('div');
    block_row_2.className="block-row-brouchers-2";
    parNode.append(block_row_2);

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

    var images_1=block_row_1.childNodes;
    [].forEach.call(images_1,function(image){
        image.className="gallery_item_brouchers_1";
    })
    var images_2=block_row_2.childNodes;
    [].forEach.call(images_2,function(image){
        image.className="gallery_item_brouchers_2";
    })
})

var logos_button=document.getElementById('Logos_btn');
logos_button.addEventListener('click',function(){
    var parNode=document.getElementById("gallery_flex");
    while(parNode.firstChild){
        parNode.removeChild(parNode.firstChild);
    }
    let block_row=document.createElement('div');
    block_row.className="block-row-1";
    parNode.append(block_row);

    let img_1=document.createElement('img');
    let img_2=document.createElement('img');

    block_row.append(img_1);
    block_row.append(img_2);

    img_1.src="content/Gallery/4.png";
    img_2.src="content/Gallery/6.png";

    var images=block_row.childNodes;
    [].forEach.call(images,function(image){
        image.className="gallery_item_logos";
    })
})
