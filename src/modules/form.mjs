const formModule = (() => {
	const formContainer = document.createElement('section');
	const myForm = document.createElement('form');

	formContainer.setAttribute('id', 'formContainer');
	formContainer.style.margin = '1.25em';
	formContainer.style.padding = '1.25em';
	formContainer.style.height = '15em';
	formContainer.style.border = '1px dotted purple';
	formContainer.style.backgroundColor = 'lightGreen';

	myForm.setAttribute('id', 'myForm');
	myForm.style.margin = 'auto';
	myForm.style.width = '80%';
	myForm.style.height = '100%';
	myForm.style.border = '1px solid black';

	pageContainer.appendChild(formContainer);
	formContainer.appendChild(myForm);

	console.log('Form Module');
})();
export { formModule };
