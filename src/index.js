import { pfModule } from './modules/projectFactory.mjs';
import { removeProject } from './modules/removeProject.mjs';
import { addProjectModule } from './modules/addProject.mjs';
//import { formStorageModule } from './modules/formStorage.mjs';

//console.log();

$(function() {
	(function pageOutline() {
		const htmlStyle = document.querySelector('html').style;
		const myScript = document.querySelectorAll('script');
		const pageContainer = document.createElement('div');
		const headlineContainer = document.createElement('section');
		const myHeadline = document.createElement('h1');

		htmlStyle.width = '100%';
		htmlStyle.maxWidth = '100vw';
		htmlStyle.fontFamily = 'Arial';

		pageContainer.setAttribute('id', 'pageContainer');
		pageContainer.style.height = '100%';
		pageContainer.style.width = '100%';
		pageContainer.style.margin = 'auto';

		headlineContainer.setAttribute('id', 'headlineContainer');
		//headlineContainer.style.height = '4em';
		headlineContainer.style.padding = '.5em 1.25em 0px';
		headlineContainer.style.display = 'flex';
		headlineContainer.style.position = 'relative';

		myHeadline.setAttribute('id', 'myHeadline');
		myHeadline.style.position = 'relative';
		myHeadline.style.textAlign = 'center';
		myHeadline.style.width = '7em';
		myHeadline.style.display = 'inline-block';
		myHeadline.style.fontSize = '2.3em';
		myHeadline.style.margin = 'auto';

		myHeadline.textContent = 'My ToDo List';

		document.body.insertBefore(pageContainer, myScript[0]);
		pageContainer.appendChild(headlineContainer);
		headlineContainer.appendChild(myHeadline);
	})();

	(function tableOutline() {
		const tableContainer = document.createElement('section');
		const myTable = document.createElement('table');

		tableContainer.setAttribute('id', 'tableContainer');
		tableContainer.style.margin = '0px 1.25em';
		tableContainer.style.padding = '1em';

		myTable.setAttribute('id', 'myTable');
		myTable.style.margin = 'auto';
		myTable.style.width = '90%';
		myTable.style.border = '1px solid black';
		myTable.style.borderSpacing = '0px';
		myTable.style.borderCollapse = 'collapse';
		myTable.style.tableLayout = 'fixed';

		pageContainer.appendChild(tableContainer);
		tableContainer.appendChild(myTable);

		tableHeader();
	})();

	function tableHeader() {
		const columnTitles = [
			'Title',
			'Description',
			'Due Date',
			'Priority',
			'Remove',
		];
		const tableHead = document.createElement('thead');
		tableHead.setAttribute('id', 'tableHead');

		const headRow = document.createElement('tr');
		headRow.setAttribute('id', 'headRow');
		headRow.setAttribute('class', 'rows');

		columnTitles.forEach(item => {
			const headerCell = document.createElement('th');
			const titleName = item;

			headerCell.setAttribute('id', titleName.toLowerCase());
			headerCell.style.border = '1px solid black';
			headerCell.style.backgroundColor = '#073B4C';
			headerCell.style.color = 'white';
			headerCell.style.fontSize = '1.3em';
			headerCell.style.letterSpacing = '.035em';
			headerCell.style.fontVariant = 'small-caps';
			headerCell.style.fontTransform = 'capitalize';
			headerCell.style.fontFamily = 'Arial';
			headerCell.style.fontWeight = '500';
			//headerCell.style.textShadow = '-0.025em 0 black';
			headerCell.textContent = titleName;

			headRow.appendChild(headerCell);
		});

		myTable.appendChild(tableHead);
		tableHead.appendChild(headRow);
		tableContent();
	}

	function tableContent() {
		const tbody = document.createElement('tbody');
		tbody.setAttribute('id', 'tbody');

		pfModule.myProjects.forEach((item, index) => {
			const tBodyRow = tbody.insertRow(index);
			tBodyRow.setAttribute('id', item.title);
			tBodyRow.setAttribute('class', 'rows');

			for (const key in item) {
				const projectData = tBodyRow.insertCell();

				projectData.style.border = '1px solid black';
				projectData.style.textAlign = 'center';
				projectData.textContent = item[key];
			}

			const remove = document.createElement('td');
			remove.style.padding = '0px';
			remove.style.margin = 'auto';
			remove.style.border = '1px solid black';
			tBodyRow.insertAdjacentElement('beforeend', remove);

			const removeBtn = document.createElement('button');
			removeBtn.setAttribute('id', item.title + 'Btn');
			removeBtn.setAttribute('class', 'removeBtn');
			//removeBtn.style.height = '1.75em';
			removeBtn.style.width = '100%';
			removeBtn.style.fontSize = '2em';
			removeBtn.style.backgroundColor = '#FFD166';
			removeBtn.style.textShadow = '-0.065em 0 black';
			removeBtn.textContent = 'X';

			removeBtn.addEventListener('click', e => {
				removeProject.btnEvent(e, pfModule.myProjects);
			});

			remove.append(removeBtn);
		});

		myTable.appendChild(tbody);
		tableFx();
	}

	function tableFx() {
		//removeProject;
		$('tr:odd').css('backgroundColor', '#118AB2');
		$('tr:even').css('backgroundColor', '#06D6A0');
		$('.rows')
			.mouseenter(function() {
				$(this).css({
					backgroundColor: '#EF476F',
					color: 'black',
				}),
					$(this.lastChild.firstChild).css({
						backgroundColor: 'black',
						color: 'white',
					});
			})
			.mouseleave(function() {
				$('tr:odd').css({
					backgroundColor: '#118AB2',
					color: 'black',
					textShadow: 'none',
				});
				$('tr:even').css({
					backgroundColor: '#06D6A0',
					color: 'black',
					textShadow: 'none',
				}),
					$('.removeBtn').css({
						backgroundColor: '#FFD166',
						color: 'black',
					});
			});
	}

	(function formOutline() {
		const formContainer = document.createElement('section');
		const myForm = document.createElement('form');

		formContainer.setAttribute('id', 'formContainer');
		formContainer.style.margin = 'auto';
		formContainer.style.padding = '1em';
		formContainer.style.width = '40%';

		myForm.setAttribute('id', 'myForm');
		myForm.setAttribute('name', 'myForm');
		myForm.style.margin = 'auto';
		myForm.style.width = '85%';
		myForm.style.height = '100%';
		myForm.style.textAlign = 'center';

		myForm.onsubmit = e => {
			e.preventDefault();

			console.log(pfModule.myProjects);

			const tbody = document.getElementById('tbody');
			const title = document.querySelector('input[name="title"]').value;
			const description = document.querySelector('input[name="description"]')
				.value;
			const dueDate = document.querySelector('input[name="dueDate"]').value;
			const priority = document.querySelector('input[name="priority"]:checked')
				.value;

			addProjectModule.submitProject(
				pfModule.myProjects,
				pfModule.projectFactory,
				title,
				description,
				dueDate,
				priority
			);
			console.log(pfModule.myProjects);

			myForm.reset();
			tbody.remove();
			tableContent();
			document.getElementById('priorityYes').checked = true;
		};

		pageContainer.appendChild(formContainer);
		formContainer.appendChild(myForm);
		formLayout();
	})();

	function formLayout() {
		const fieldSet = document.createElement('fieldset');
		const legend = document.createElement('legend');
		const priorityContainer = document.createElement('p');
		const priorityYesLabel = document.createElement('label');
		const priorityNoLabel = document.createElement('label');
		const priorityYes = document.createElement('input');
		const priorityNo = document.createElement('input');
		const br = document.createElement('br');

		// fieldSet and legend config
		fieldSet.setAttribute('id', 'fieldSet');
		fieldSet.style.width = '80%';
		fieldSet.style.height = '80%';
		fieldSet.style.margin = 'auto';
		myForm.appendChild(fieldSet);

		legend.setAttribute('id', 'legend');
		legend.style.textAlign = 'center';
		legend.textContent = 'Project Details';
		fieldSet.appendChild(legend);

		// priority config
		priorityContainer.style.margin = '.5em auto auto';
		priorityContainer.textContent = 'Priority:';
		//priorityContainer.style.textDecorationLine = 'underline';
		fieldSet.appendChild(priorityContainer);
		priorityContainer.appendChild(br);

		priorityYesLabel.setAttribute('for', 'yes');
		priorityYesLabel.textContent = 'Yes';

		priorityYes.setAttribute('id', 'priorityYes');
		priorityYes.setAttribute('name', 'priority');
		priorityYes.setAttribute('type', 'radio');
		priorityYes.checked = true;
		priorityYes.value = 'Yes';
		priorityYes.textContent = 'Yes';

		priorityContainer.appendChild(priorityYesLabel);
		priorityYesLabel.appendChild(priorityYes);

		priorityNoLabel.setAttribute('for', 'no');
		priorityNoLabel.textContent = 'No';

		priorityNo.setAttribute('id', 'priorityNo');
		priorityNo.setAttribute('name', 'priority');
		priorityNo.setAttribute('type', 'radio');
		priorityNo.value = 'No';
		priorityNo.textContent = 'No';

		priorityContainer.appendChild(priorityNoLabel);
		priorityNoLabel.appendChild(priorityNo);

		formContent();
	}

	function formContent() {
		const categoryLabel = ['Title', 'Description', 'Due Date'];
		const categoryID = ['title', 'description', 'dueDate'];

		categoryID.forEach((item, index) => {
			const inputContainer = document.createElement('p');
			const br = document.createElement('br');
			const myInput = document.createElement('input');
			const inputLabel = document.createElement('label');

			fieldSet.appendChild(inputContainer);

			if (item === 'dueDate') {
				//duedate
				inputLabel.setAttribute('for', item);
				inputLabel.textAlign = 'left';
				inputLabel.textContent = categoryLabel[index] + ': ';

				myInput.setAttribute('id', item);
				myInput.setAttribute('name', item);
				myInput.setAttribute('type', 'date');
				myInput.required = true;

				inputContainer.appendChild(inputLabel);
				inputContainer.appendChild(br);
				inputContainer.appendChild(myInput);
			} else {
				inputLabel.setAttribute('for', item);
				inputLabel.textAlign = 'left';
				inputLabel.textContent = categoryLabel[index] + ': ';

				myInput.setAttribute('id', item);
				myInput.setAttribute('name', item);
				myInput.setAttribute('type', 'text');
				myInput.required = true;
				myInput.setAttribute('autocomplete', 'off');

				inputContainer.appendChild(inputLabel);
				inputContainer.appendChild(br);
				inputContainer.appendChild(myInput);
			}
			//console.log(item + ' = ' + index);
		});
		formButtons();
	}

	function formButtons() {
		const formBtnContainer = document.createElement('section');
		const submitBtn = document.createElement('input');
		const resetBtn = document.createElement('input');

		formBtnContainer.setAttribute('id', 'formBtnContainer');
		formBtnContainer.style.margin = 'auto';
		formBtnContainer.style.width = '70%';

		submitBtn.setAttribute('id', 'submitBtn');
		submitBtn.setAttribute('type', 'submit');
		submitBtn.style.margin = 'auto 2%';
		submitBtn.style.padding = '0px';
		submitBtn.style.fontSize = '16px';
		submitBtn.style.height = '2em';
		submitBtn.style.width = '7.5em';
		submitBtn.value = 'Submit Project';

		resetBtn.setAttribute('id', 'resetBtn');
		resetBtn.setAttribute('type', 'button');
		resetBtn.style.margin = 'auto 2%';
		resetBtn.style.padding = '0px';
		resetBtn.style.fontSize = '16px';
		resetBtn.style.height = '2em';
		resetBtn.style.width = '7.5em';
		resetBtn.value = 'Reset';

		resetBtn.onclick = () => {
			document.getElementById('myForm').reset();
			document.getElementById('priorityYes').checked = true;
		};

		fieldSet.appendChild(formBtnContainer);
		formBtnContainer.append(resetBtn);
		formBtnContainer.append(submitBtn);
	}
});
