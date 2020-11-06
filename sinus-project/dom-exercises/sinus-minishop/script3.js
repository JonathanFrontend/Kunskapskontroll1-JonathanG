let btn = document.querySelector('button');

let art2 = document.querySelector('.art-2');

let artTwoP = art2.children[3];

console.log(art2);
console.log(artTwoP);

btn.addEventListener('click', function(e){
    artTwoP.innerText = 'Hej din knasboll!';
});

art2.addEventListener('mouseenter', function(e){
    art2.style.backgroundColor = 'yellow';
});
art2.addEventListener('mouseleave', function(e){
    art2.style.backgroundColor = 'white';
});

let art3 = document.querySelector('.art-3');

let menu = document.querySelectorAll('#header-navigation a');
console.log(menu);
console.log(menu[2]);
let a = document.createElement('a');
a.setAttribute('href', '#');
a.innerText = 'Account';

art3.addEventListener('mouseleave', function(e){
    menu[2].insertAdjacentElement('afterend', a);
});

//Mouse move
/*

let secondProduct = document.querySelector('.art-2');
secondProduct.addEventListener('mousemove', 
    function(e){
        let hue = ( (e.x) / 3) + 100;
        let sat = e.y/3;
        console.log(hue)
        secondProduct.style.backgroundColor = `hsl(${hue}, ${sat}%, 50%)`;

    }
); 

*/

/* 

let btn = document.querySelector('button');

let art1 = document.querySelector('.art-1');

// console.dir(btn)
// console.log(btn)

btn.addEventListener('mouseenter', 
    function(e){
    e.target.classList.toggle('blue-bg')
    //console.dir(e.target)
    }
);

btn.addEventListener('mouseleave', 
    function(e){
    e.target.classList.remove('blue-bg')
    }
);

 */

let htmlElement = document.querySelector('html');
htmlElement.addEventListener('keydown', function(e){
    console.log(e.key);
    let art1 = document.querySelector('.art-1');
    let art1img = document.querySelector('.art-1 img'); //Letar upp img i just .art-1

    let btn = document.querySelectorAll('button');
    switch (e.key) {
        case 'b':
            art1.style.backgroundColor = 'blue';
            break;
        case 'B':
            art1.style.backgroundColor = 'blue';
            break;
        case 'r':
            art1.style.backgroundColor = 'red';
            break;
        case 'R':
            art1.style.backgroundColor = 'red';
            break;
        case 'Alt':
            art1.style.backgroundColor = 'hotpink';
            break;
        case 'i':
            console.log(art1img);
            art1img.src = 'img/hoodie-forrest.png';
            break;
        case 'I':
            console.log(art1img);
            art1img.src = 'img/hoodie-forrest.png';
            break;
        default: 'nope';
        
    }
    /* if (e.key == 'b' || e.key == 'B'){
        art1.style.backgroundColor = 'blue';
    }
    else if (e.key == 'r' || e.key == 'R'){
        art1.style.backgroundColor = 'red';
    } else if (e.key == 'Alt'){
        art1.style.backgroundColor = 'hotpink';
    }
    else if (e.key == 'f' || e.key == 'F'){
        btn[1].style.backgroundColor = 'white';
    }
    else if (e.key == 'i' || e.key == 'I'){
        console.log(art1img);
        art1img.src = 'img/hoodie-forrest.png'
    } */
});