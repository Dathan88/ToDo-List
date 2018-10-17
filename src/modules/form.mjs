import $ from 'jquery';
const formModule = (() => {
	let count = 0;

	function createFormOutline() {
		const formContainer = document.createElement('section');
		const myForm = document.createElement('form');

		formContainer.setAttribute('id', 'formContainer');
		formContainer.style.margin = 'auto';
		formContainer.style.padding = '1em';
		formContainer.style.width = '50%';
		formContainer.style.height = '21em';

		myForm.setAttribute('id', 'myForm');
		myForm.setAttribute('name', 'myForm');
		myForm.style.margin = 'auto';
		myForm.style.width = '85%';
		myForm.style.height = '100%';
		myForm.style.border = '1px solid black';
		myForm.style.textAlign = 'center';

		pageContainer.appendChild(formContainer);
		formContainer.appendChild(myForm);

		formDisplay();
	}

	function formDisplay() {
		const categoryID = ['projectTitle', 'projectDesc', 'projectDue'];
		const categoryLabel = ['Title', 'Description', 'Due Date'];

		const innerForm = document.createElement('section');
		const formTitle = document.createElement('h2');
		const fieldSet = document.createElement('fieldset');
		const legend = document.createElement('legend');
		const priorityContainer = document.createElement('p');
		const priorityLabel = document.createElement('label');
		const priority = document.createElement('input');
		const noPriority = document.createElement('input');

		innerForm.setAttribute('id', 'innerForm');
		innerForm.style.height = '94%';
		innerForm.style.margin = '.75em auto';

		formTitle.setAttribute('id', 'formTitle');
		formTitle.style.margin = 'auto';
		formTitle.style.textAlign = 'center';
		formTitle.textContent = 'Add New Projects';

		legend.setAttribute('id', 'legend');
		legend.style.textAlign = 'center';
		legend.textContent = 'Project Details';

		fieldSet.setAttribute('id', 'fieldSet');
		fieldSet.style.width = '80%';
		fieldSet.style.height = '80%';
		fieldSet.style.margin = 'auto';

		priorityLabel.setAttribute('for', 'priority');
		priorityLabel.textContent = 'Priority';

		priority.setAttribute('id', 'priority');
		priority.setAttribute('name', 'priority');
		priority.setAttribute('type', 'radio');
		priority.setAttribute('value', 'Yes');
		priority.textContent = 'Yes';

		noPriority.setAttribute('id', 'noPriority');
		noPriority.setAttribute('name', 'noPriority');
		noPriority.setAttribute('type', 'radio');
		noPriority.setAttribute('value', 'No');
		noPriority.textContent = 'No';

		myForm.appendChild(innerForm);
		innerForm.appendChild(formTitle);
		innerForm.appendChild(fieldSet);
		fieldSet.appendChild(legend);

		categoryID.forEach((item, index) => {
			const inputContainer = document.createElement('p');
			const myInput = document.createElement('input');
			const inputLabel = document.createElement('label');

			/* if(count === 2){
				duedate
			} */

			inputLabel.setAttribute('for', item);
			inputLabel.textContent = categoryLabel[index] + ' ';

			myInput.setAttribute('id', item);
			myInput.setAttribute('type', 'text');
			myInput.setAttribute('autocomplete', 'off');

			fieldSet.append(inputContainer);
			inputContainer.append(inputLabel);
			inputLabel.appendChild(myInput);

			console.log(item + ' = ' + index);
			count++;
			return count;
		});
		fieldSet.appendChild(priorityContainer);
		priorityContainer.appendChild(priorityLabel);
		priorityContainer.appendChild(priority);
		priorityContainer.appendChild(noPriority);
	}

	console.log('Form Module');
	createFormOutline();
})();

export { formModule };
