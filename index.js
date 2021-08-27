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
