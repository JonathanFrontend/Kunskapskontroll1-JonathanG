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

reset.innerText = 'RESET';

//event listener for reset-button.
reset.addEventListener('click', resetAll);

//Resets Everything.
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
}

//event listener first knappen.
knapp1.addEventListener('click', function(e){
    changeArt1toHotPink();
    changeH2inArt2();
});

//Changes h2 in art-2.
function changeH2inArt2(){
    let h2 = document.querySelector('.art-2 h2');
    h2.innerText = 'Radikalt';

}

//changes art-1 bg to hotpink.
function changeArt1toHotPink(){
    let art1 = document.querySelector('.art-1');
    art1.style.backgroundColor = 'hotpink';
}

//Change images and footer text.
knapp3.addEventListener('click', function(e){
    changeImages();
    changesFooterText();

});
function changeImages(){
    let art3img = document.querySelector('.art-3 img');
    console.log(art3img);
    art3img.src = './img/hoodie-forrest.png';
}
function changesFooterText(){
    let footerText = document.querySelector('footer p');
    footerText.innerHTML = 'Jupiter';
}
