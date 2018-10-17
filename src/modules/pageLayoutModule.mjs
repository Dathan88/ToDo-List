import $ from 'jquery';
const pageLayoutModule = (() => {
	function createPageOutline() {
		const htmlStyle = document.querySelector('html').style;
		const bodyStyle = document.querySelector('body').style;
		const myScript = document.querySelectorAll('script');
		const pageContainer = document.createElement('div');
		const headlineContainer = document.createElement('section');
		const myHeadline = document.createElement('h1');

		htmlStyle.width = '99.5em';
		htmlStyle.maxWidth = '100vw';
		htmlStyle.height = '56em';
		htmlStyle.maxHeight = '100vh';

		pageContainer.setAttribute('id', 'pageContainer');
		pageContainer.style.height = '100%';
		pageContainer.style.width = '100%';
		pageContainer.style.margin = 'auto';

		headlineContainer.setAttribute('id', 'headlineContainer');
		headlineContainer.style.height = '4em';
		headlineContainer.style.padding = '.5em 1.25em 0px';
		headlineContainer.style.display = 'flex';
		headlineContainer.style.position = 'relative';

		myHeadline.setAttribute('id', 'myHeadline');
		myHeadline.style.position = 'relative';
		myHeadline.style.textAlign = 'center';
		myHeadline.style.width = '6em';
		myHeadline.style.display = 'inline-block';
		myHeadline.style.fontSize = '3.5em';
		myHeadline.style.height = '100%';
		myHeadline.style.margin = 'auto';

		myHeadline.textContent = 'My ToDo List';

		document.body.insertBefore(pageContainer, myScript[0]);
		pageContainer.appendChild(headlineContainer);
		headlineContainer.appendChild(myHeadline);
	}

	console.log('Page Layout');
	createPageOutline();
})();

export { pageLayoutModule };
