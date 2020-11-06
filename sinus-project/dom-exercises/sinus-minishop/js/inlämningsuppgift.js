// En knapp som återställer allt till originalutseendet
// Alla ändringar som du har gjort ska ändras tillbaka
// Byt ut minst ett foto
// Ändra bakgrundsfärg på minst ett element
// Ändra text på minst ett element
// Ändra färg på minst en knapp
// Ta bort minst 1 element (Måste läggas till igen när man trycker på återställningsknappen)
// Lägg till en lista var som helst i DOMen (måste tas bort med resetknappen)
// Listan ska innehålla flera li element
// Varje li element ska ha en synlig border. (Valfritt utseende)

let btn1 = document.querySelector('.art-1 button');

let btns = document.querySelectorAll('button');
let knapp1 = btns[0];
let reset = btns[1];
let knapp3 = document.querySelector('.art-3 button');

let createList = true;

reset.innerText = 'RESET';

//event listener för reset-knappen.
reset.addEventListener('click', resetAll);

//Återställer allt.
function resetAll(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'white';

    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Sinus Hoodie';

    let art3img = document.querySelector('.art-3 img');
    console.log(art3img);
    art3img.src = './img/hoodie-ocean.png';

    let footerText = document.querySelector('footer p');
    footerText.innerHTML = `Sinus skateboards <br>
    Railsvägen 13 <br>
    133 37, Rampnäs`;
    
    knapp3.style.backgroundColor = '#222';
    knapp3.innerText = 'buy';

    let header = document.querySelector('header');
    header.innerHTML = `<img src="img/sinus-logo.svg" alt="sinus" class="logo">
    <nav id="header-navigation">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">Contact</a>
        <img src="img/icon-bag.svg" alt="cart">
    </nav>`;

    let art4 = document.querySelector('.art-4');
    let main = document.querySelector('main');
    // console.log(main);
    // console.log(main.children);
    // main.removeChild(main.children[3])
    main.removeChild(art4)

    createList = true;

}

//event listener första knappen.
knapp1.addEventListener('click', function(e){
    changeArt1toHotPink();
    changeH2inArt2();
    removeHeader();
    addList();
});

//Ändrar h2 i art-2.
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';
}

//Ändrar art-1 bg till hotpink.
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}
//Tar bort headern
function removeHeader(){
    let header = document.querySelector('header');
    header.innerHTML = ``;
}

//Ändrar images, footer text och color på knapp.
knapp3.addEventListener('click', function(e){
    changeImages();
    changesFooterText();
    changesColorOnBtn();
});
function changeImages(){
    let art3img = document.querySelector('.art-3 img');
    art3img.src = './img/hoodie-forrest.png';
}
function changesFooterText(){
    let footerText = document.querySelector('footer p');
    footerText.innerHTML = 'Jupiter';
}
function changesColorOnBtn(){
    knapp3.style.backgroundColor = 'white';
    knapp3.innerText = 'ghost';
}
function addList(){
    if (createList === true) { //kollar om listan skapats
    let art3 = document.querySelector('.art-3');
    art3.insertAdjacentHTML('afterend', '<article class="art-4"><ul><li>lorem</li><li>ipsum</li><li>dolor</li><li>sit</li></ul></article>');
    let item = document.querySelectorAll('article li');
    for (let i = 0; i < item.length; i++){
        console.log(item[i]);
        item[i].style.border = '1px solid black';
    }
    createList = false;
    }
}