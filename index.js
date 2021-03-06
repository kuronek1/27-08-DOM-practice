/* Добавление текста и html:
1) Напишите в html элемент с id
2) найдите этот элемент из JS
3) добавьте разметку внутрь этого элемента (добавьте тэг div, span или p, или любой другой тэг)
4) измените цвет текста внутри найденного элемента на другой цвет (строковыми стилями style)
Посмотрите изменился ли цвет текста */

const content = document.getElementById('main_content');
let div = document.createElement('div');
div.innerText = 'test123';

content.appendChild(div)

content.style.cssText = `
    background-color:black;
    color:white;
    height: 100px;
`;

const list = document.getElementById('list1');

/* 5) добавьте новый тэг в html с новым id
И найдите его из JS
6) добавьте структуру из JS внутри нового элемента:
ul
    li * 3 (3 пункта списка)
        Пункт списка (в каждом из которых текст)
7) найдите все li элементы на странице из JS, получите массив
8) дайте всем элементам массива стиль текста курсив 
(или css классом или строковыми стилями style) */

const container = document.getElementById('main_container');
const ulElement = document.createElement('ul');

const liElement = document.createElement('li');

for (let i = 1; i < 4; i++) {
    const liElement = document.createElement('li');
    liElement.innerText = 'list' + ' ' + i
    ulElement.appendChild(liElement)    
}

container.appendChild(ulElement);

const liGetElemByTags = document.getElementsByTagName('li');

console.log(liGetElemByTags);

document.querySelectorAll('li').forEach(function(element){
    element.style.cssText = `
    margin: 10px 0;
    color: red;
    list-style: none;
    text-decoration: underline 2px black;
    font-size: 20px;
    font-style: italic;
    `;
});

/* Создание элементов из JS:
1) создайте элемент с тэгом span
2) добавьте ему текст внутрь
3) добавьте стили для этого span (css класс)
4) добавить span в конец body
5) создать тэги div 3 шт c атрибутом 
id = ("divElem"+index) зависящим от индекса
добавить элементы в конец body */

const span = document.createElement('span');
span.id = 'idspan1';
span.innerText = '123asd13asd1ads';

document.body.appendChild(span);
span.style.cssText = `
    color: purple;
    font-size: 25px;
`;

const footer = document.createElement('footer');

document.body.appendChild(footer);

for (let i = 0; i < 3; i++) {
    const divElement = document.createElement('div');
    divElement.innerText = 'div' + ' ' + i
    divElement.id = 'div_' + i
    footer.appendChild(divElement) 
    
}