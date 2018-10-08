const pageLayoutModule = (() => {
	const htmlStyle = document.querySelector('html').style;
	const myBody = document.querySelector('body');
	const bodyStyle = myBody.style;
	const myScript = document.querySelectorAll('script');
	const pageContainer = document.createElement('div');
	const headlineContainer = document.createElement('section');
	const myHeadline = document.createElement('h1');

	htmlStyle.maxWidth = '100vw';
	htmlStyle.minWidth = '100vw';
	htmlStyle.height = '100%';
	htmlStyle.fontSize = '16px';

	bodyStyle.width = '99%';
	bodyStyle.height = '99%';
	bodyStyle.margin = 'auto';

	pageContainer.setAttribute('id', 'pageContainer');
	pageContainer.style.height = '100%';
	pageContainer.style.width = '100%';
	pageContainer.style.margin = 'auto';
	pageContainer.style.outline = '1px dashed green';

	headlineContainer.setAttribute('id', 'headlineContainer');
	headlineContainer.style.height = '4em';
	headlineContainer.style.display = 'flex';
	headlineContainer.style.position = 'relative';
	headlineContainer.style.alignContent = 'center';
	headlineContainer.style.outline = '1px dotted red';

	myHeadline.setAttribute('id', 'myHeadline');
	myHeadline.style.position = 'relative';
	myHeadline.style.textAlign = 'center';
	myHeadline.style.width = '5em';
	myHeadline.style.display = 'inline-block';
	myHeadline.style.fontSize = '3.5em';
	myHeadline.style.height = '100%';
	myHeadline.style.margin = 'auto';
	myHeadline.style.outline = '1px solid blue';

	myHeadline.textContent = 'ToDo List';

	myBody.insertBefore(pageContainer, myScript[0]);
	pageContainer.appendChild(headlineContainer);
	headlineContainer.appendChild(myHeadline);

	console.log('Page Layout');
})();

export { pageLayoutModule };
