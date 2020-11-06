// Code here!

//1
let h3Elements = document.querySelector('h3');
h3Elements.innerText = 'Potato';

console.log(h3Elements);

//2
let navElement = document.querySelector('#header-navigation');
let navElementChildren = navElement.children;
navElementChildren[0].innerText = 'Start';

//3
navElementChildren[2].innerText = 'Mail Us';

//4
let article2 = document.querySelector('.art-2');
let articleTwoChildren = article2.children;
articleTwoChildren[3].innerText = 'This is a test.';

//5
articleTwoChildren[4].style.backgroundColor = 'coral';
articleTwoChildren[4].innerText = '50% Off!';

//6
article2.style.backgroundColor = 'pink';

//7
let section = document.querySelector('section');
let sectionChildren = section.children;
let secondArticle = sectionChildren[1];
let secondArticleChild = secondArticle.children;
console.log(secondArticleChild)
secondArticleChild[1].innerText = 'Jupiter';

//8
let p = document.querySelectorAll('p');
for (let i = 0; i < p.length; i++){
    p[i].style.color = 'green';
}

//9
let btn = document.querySelectorAll('button');
console.log(btn)
for (let i = 0; i < btn.length; i++){
    btn[i].innerText = 'Add to Cart'
}

//10
navElementChildren[0].classList.add('active');
console.log(navElementChildren);

//11

let logo = document.querySelector('img');
console.log(logo);
logo.classList.remove('logo');

//12
let menuItems = document.querySelectorAll('#header-navigation a');
let newItem = document.createElement('a');
newItem.innerText = 'New Item';
newItem.setAttribute('href', '#');
menuItems[2].insertAdjacentElement('afterend', newItem);

/* let menuItem = document.createElement('a');
menuItem.innerText = 'Account';
menuItem.setAttribute('href', '#');
navElement.appendChild(menuItem);
console.log(navElementChildren); */

//13

let lastProduct = document.querySelector('.art-3');
lastProduct.insertAdjacentHTML('afterend', `<article class="art-4">
<figure><img src="img/hoodie-forrest.png" alt="hoodie"></figure>
<h2>Sinus Hoodie</h2>
<h3>Forrest</h3>
<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dignissimos saepe ratione possimus nobis?</p>
<button>buy</button>
</article>`);

let forrestHoodie = document.querySelector('.art-4');
let forrestP = document.querySelector('.art-4 p');
forrestP.innerText = 'Ny Text!'

let newHeading = document.createElement('h2');
newHeading.innerText = 'new h2';
// forrestP.appendChild(newHeading)
forrestP.insertAdjacentElement('afterend', newHeading);

/* let main = document.querySelector('main');
let art4 = document.createElement('article');
let figure = document.createElement('figure');
art4.appendChild(figure);
let image = document.createElement('img');
image.setAttribute('src', 'img/hoodie-forrest.png');
figure.appendChild(image);
let h2 = document.createElement('h2');
h2.innerText = 'Sinus Hoodie';
art4.appendChild(h2);
let h3 = document.createElement('h3');
h3.innerText = 'Forrest';
art4.appendChild(h3);
let artText = document.createElement('p');
artText.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.';
art4.appendChild(artText);
let button = document.createElement('button');
button.innerText = 'Add to cart';
art4.appendChild(button);

art4.setAttribute('class', 'art-4');

main.appendChild(art4); */