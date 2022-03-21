let Button = document. querySelectorAll('.add-btn'); 
const showElem = function(evt)
{
let parentButton = evt.target.parentNode;
	let Element = parentButton.querySelector('.choose-elem');
	Element.classList.toggle('hidden');
};

Button.forEach(function(but)
{
   but.addEventListener('click', showElem);	
}
);


const changeLayoutHandler = function (evt) {
	const newLayout = evt.target.value;
	//console.log('layout--' + newLayout);
	const layoutElement = document.querySelector('layout');
	layoutElement.classList.remove('layout--landing');
	layoutElement.classList.remove('layout--blog');
	layoutElement.classList.remove('layout--shop');
	layoutElement.classList.add('layout--' + newLayout);
	
};

document.querySelector('.grid-select').addEventListener('change',changeLayoutHandler);
/**
const elementTemplate = document.querySelector('#h1-template').content;
const h1BlockElement = h1BlockElement.qurySelector('.element');
const h1CloneElement = h1BlockElement.cloneNode(true);
const headerWrapperElement = document.qurySelector('.header__elements-wrapper');
heaaderWrapperElement.append(h1CloneElement);
heaaderWrapperElement.parentNode.classList.remove('header--empty');
**/

const buttonDeleteHandler = function (evt) {
const element = evt.target.parentNode;
const wrapper = element.parentNode;
const block = wrapper.parentNode;
element.remove();	

const wrapperItems = wrapper.querySelectorAll('.element');
if (wrapperItems.length === 0) {
	if(block.classList.contains('header')) {
		block.classList.add('header--empty');
		
	}
	
	if(block.classList.contains('content')) {
		block.classList.add('content--empty'); 
	
	}	
		
		if(block.classList.contains('footer')) {
		block.classList.add('footer--empty');
		
		}
	
}

};

const editContentHandler = function (evt) {
	const editedElement = evt.target;
	
	let currentValue;
	
	if (editedElement.tagName ===  'IMG') {
		currentVallue = editedElement.src;
	} else {
		currentValue = editedElement.textContent;
	}
	
	
	const newValue = window.prompt('Вы хотите поменять значение?',currentValue);
	
	
	if (editedElement.tagName ===  'IMG') {
		editedElement.src = newValue;
	} else {
		editedElement.textContent = newValue;
	}
}

const ChooseButtonElements = document.querySelectorAll('.choose-elem__btn');

const addElementHandler = function (evt)
{ 
const clickedBtn = evt.target;
const addMenuElement = clickedBtn.parentNode;
addMenuElement.classList.add('hidden');

const blockType = clickedBtn.dataset.type;
console.log ('#' + blockType + '-template');

const blockContainer = clickedBtn.dataset.container;
console.log('.' + blockContainer + '__elements-wrapper');

const template = document.querySelector('#' + blockType + '-template').content;
const templateElement = template.cloneNode(true);
const blockElement = templateElement.querySelector('.element');

const containerWrapperElement = document.querySelector('.' + blockContainer + '__elements-wrapper');
containerWrapperElement.append(blockElement);

if (blockContainer.includes('content')) {
	containerWrapperElement.parentElement.classList.remove('container--empty');
} else {
	containerWrapperElement.parentElement.classList.remove(blockContainer + '--empty');
}

blockElement.querySelector('.delete-btn').addEventListener('click', buttonDeleteHandler);
blockElement.querySelector('.template-content').addEventListener('dblick',editContentHandler);
};



ChooseButtonElements.forEach(function (item){
	return item.addEventListener('click', addElementHandler);
});