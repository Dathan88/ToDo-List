$(function() {
	let count = 0;
	const categoryID = ['projectTitle', 'projectDesc', 'projectDue'];
	const categoryLabel = ['Title', 'Description', 'Due Date'];
	const myProjects = [];
	const columnTitles = [
		'Title',
		'Description',
		'Date Created',
		'Due Date',
		'Priority',
		'Remove',
	];

	const projectFactory = (title, description, dueDate, priority) => {
		const dateCreated = new Date().toLocaleDateString('en-US');

		return { title, description, dateCreated, dueDate, priority };
	};

	const groceries = projectFactory(
		'Groceries',
		'Eggs, Bacon, Milk',
		new Date(2018, 11, 15).toLocaleDateString('en-US'),
		'Yes'
	);

	const cleanHouse = projectFactory(
		'Chores',
		'Vacuum, Sweep',
		new Date(2019, 9, 24).toLocaleDateString('en-US'),
		'No'
	);

	const laundry = projectFactory(
		'Laundry',
		'Fold Clothes',
		new Date(2018, 10, 28).toLocaleDateString('en-US'),
		'Yes'
	);

	const rent = projectFactory(
		'Pay Rent',
		'Mail Check',
		new Date(2018, 10, 1).toLocaleDateString('en-US'),
		'Yes'
	);

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
		headlineContainer.style.height = '4em';
		headlineContainer.style.padding = '.5em 1.25em 0px';
		headlineContainer.style.display = 'flex';
		headlineContainer.style.position = 'relative';

		myHeadline.setAttribute('id', 'myHeadline');
		myHeadline.style.position = 'relative';
		myHeadline.style.textAlign = 'center';
		myHeadline.style.width = '7em';
		myHeadline.style.display = 'inline-block';
		myHeadline.style.fontSize = '2.5em';
		myHeadline.style.margin = 'auto';

		myHeadline.textContent = 'My ToDo List';

		document.body.insertBefore(pageContainer, myScript[0]);
		pageContainer.appendChild(headlineContainer);
		headlineContainer.appendChild(myHeadline);
	})();

	(function tableOutline() {
		myProjects.push(groceries, cleanHouse, laundry, rent);
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
		const tableHead = document.createElement('thead');
		tableHead.setAttribute('id', 'tableHead');

		const headRow = document.createElement('tr');
		headRow.setAttribute('id', 'headRow');

		columnTitles.forEach(item => {
			const headerCell = document.createElement('th');
			const titleName = item;

			headerCell.setAttribute('id', titleName.toLowerCase());
			headerCell.style.border = '1px solid black';
			headerCell.style.backgroundColor = '#073B4C';
			headerCell.style.color = 'white';
			headerCell.style.fontSize = '1.75em';
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
		renderTableBody();
	}

	function renderTableBody() {
		const tableBody = document.createElement('tbody');
		tableBody.setAttribute('id', 'tableBody');

		myProjects.forEach((item, index) => {
			const row = tableBody.insertRow(index);
			row.setAttribute('id', item.title);
			row.setAttribute('class', 'rows');
			row.style.height = '2.5em';

			for (const key in item) {
				const projectData = row.insertCell();
				projectData.style.fontSize = '150%';
				projectData.style.border = '1px solid black';
				projectData.style.textAlign = 'center';

				projectData.textContent = item[key];

				//console.log(item[key] + ' - ' + key);
			}

			const remove = document.createElement('td');
			remove.style.padding = '0px';
			remove.style.margin = 'auto';
			remove.style.border = '1px solid black';
			row.insertAdjacentElement('beforeend', remove);

			const removeBtn = document.createElement('button');
			removeBtn.setAttribute('id', item.title + 'Btn');
			removeBtn.setAttribute('class', 'removeBtn');
			removeBtn.style.height = '1.75em';
			removeBtn.style.width = '100%';
			removeBtn.style.fontSize = '2.5em';
			removeBtn.style.backgroundColor = '#FFD166';
			removeBtn.style.textShadow = '-0.065em 0 black';
			removeBtn.textContent = 'X';

			remove.append(removeBtn);
		});

		myTable.appendChild(tableBody);
		tableFx(), removeProject();
	}

	/*function renderTableFoot(){
		have footer display summary info for above
	}*/

	function tableFx() {
		$('tr:odd').css('backgroundColor', '#118AB2');
		$('tr:even').css('backgroundColor', '#06D6A0');
		$('.rows')
			.mouseenter(function() {
				$(this).css({
					backgroundColor: '#EF476F',
					color: 'black',
					/* textShadow:
						'-0.0625em 0 black, 0 0.0625em black, 0.0625em 0 black, 0 -0.0625em black' */
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

	function removeProject() {
		const btns = document.querySelectorAll('.removeBtn');

		btns.forEach(button => {
			button.addEventListener('click', e => {
				const i = e.target.parentNode.parentNode.rowIndex;
				console.log(i);
				document.querySelector('#myTable').deleteRow(i);
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

		pageContainer.appendChild(formContainer);
		formContainer.appendChild(myForm);

		formLayout();
	})();

	function formLayout() {
		const fieldSet = document.createElement('fieldset');
		const legend = document.createElement('legend');
		const priorityContainer = document.createElement('p');

		fieldSet.setAttribute('id', 'fieldSet');
		fieldSet.style.width = '80%';
		fieldSet.style.height = '80%';
		fieldSet.style.margin = 'auto';
		myForm.appendChild(fieldSet);

		legend.setAttribute('id', 'legend');
		legend.style.textAlign = 'center';
		legend.textContent = 'Project Details';
		fieldSet.appendChild(legend);

		priorityContainer.textContent = 'Priority: ';
		fieldSet.appendChild(priorityContainer);

		for (let i = 0; i < 2; i++) {
			const priorityLabel = document.createElement('label');
			const priority = document.createElement('input');
			if (i === 0) {
				priorityLabel.setAttribute('for', 'yesPriority');
				priorityLabel.textContent = 'Yes';

				priority.setAttribute('id', 'yesPriority');
				priority.setAttribute('name', 'yesPriority');
				priority.setAttribute('type', 'radio');
				priority.setAttribute('value', 'Yes');
				priority.textContent = 'Yes';

				priorityContainer.appendChild(priorityLabel);
				priorityLabel.appendChild(priority);
			} else if (i === 1) {
				priorityLabel.setAttribute('for', 'noPriority');
				priorityLabel.textContent = 'No';

				priority.setAttribute('id', 'noPriority');
				priority.setAttribute('name', 'noPriority');
				priority.setAttribute('type', 'radio');
				priority.setAttribute('value', 'No');
				priority.textContent = 'No';

				priorityContainer.appendChild(priorityLabel);
				priorityLabel.appendChild(priority);
			}
		}
		formContent();
	}

	function formContent() {
		categoryID.forEach((item, index) => {
			const inputContainer = document.createElement('p');
			const myInput = document.createElement('input');
			const inputLabel = document.createElement('label');

			fieldSet.appendChild(inputContainer);

			if (count === 2) {
				//duedate
				inputLabel.setAttribute('for', item);
				inputLabel.textContent = categoryLabel[index] + ': ';

				myInput.setAttribute('id', item);
				myInput.setAttribute('type', 'date');

				inputContainer.appendChild(inputLabel);
				inputLabel.appendChild(myInput);
			} else {
				inputLabel.setAttribute('for', item);
				inputLabel.textContent = categoryLabel[index] + ': ';

				myInput.setAttribute('id', item);
				myInput.setAttribute('type', 'text');
				myInput.setAttribute('autocomplete', 'off');

				inputContainer.appendChild(inputLabel);
				inputLabel.appendChild(myInput);
			}

			//console.log(item + ' = ' + index);
			count++;
			return count;
		});
		formButton();
	}

	function formButton() {
		const submitContainer = document.createElement('section');
		const submitBtn = document.createElement('button');

		submitContainer.setAttribute('id', 'submitContainer');
		submitContainer.style.margin = 'auto';
		submitContainer.style.width = '25%';

		submitBtn.setAttribute('id', 'submitBtn');
		submitBtn.style.margin = 'auto';
		submitBtn.style.fontSize = '16px';
		submitBtn.style.height = '2em';
		submitBtn.textContent = 'Add To List';

		submitBtn.addEventListener('click', e => {
			e.preventDefault();
			addProject();
		});

		fieldSet.appendChild(submitContainer);
		submitContainer.append(submitBtn);
	}

	function addProject(e) {
		console.log('Added');
	}

	/* 
	function myIndex() {
		const myClick = document.querySelector('*');
	
		myClick.addEventListener('click', e => {
			const titleChange = document.querySelector('#myHeadline');
			titleChange.textContent = e.target.tagName;
			//console.log(e.target);
		});
	} 
	myIndex();*/
});
