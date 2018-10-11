import $ from 'jquery';
export const tableModule = (() => {
	const projectFactory = (title, description, dueDate, priority, notes) => {
		const dateCreated = new Date().toLocaleString('en-US');

		return { title, description, dateCreated, dueDate, priority, notes };
	};

	const columnTitles = [
		'Title',
		'Description',
		'Date Created',
		'Due Date',
		'Priority',
		'Notes',
		'Remove',
	];

	const groceries = projectFactory(
		'Groceries',
		'Eggs, Bacon, Milk',
		new Date(2018, 11, 15).toLocaleDateString('en-US'),
		'Yes',
		'None for now'
	);

	const cleanHouse = projectFactory(
		'Chores',
		'Vacuum, Sweep',
		new Date(2019, 3, 12).toLocaleDateString('en-US'),
		'No',
		'Do a good job'
	);

	const laundry = projectFactory(
		'Laundry',
		'Fold Clothes',
		new Date(2018, 10, 28).toLocaleDateString('en-US'),
		'Yes',
		'Put away after'
	);

	const myProjects = [groceries, cleanHouse, laundry];

	function createTable() {
		const tableContainer = document.createElement('section');
		const myTable = document.createElement('table');

		tableContainer.setAttribute('id', 'tableContainer');
		tableContainer.style.margin = '1.25em';
		tableContainer.style.padding = '1.25em';
		tableContainer.style.height = '15em';
		//tableContainer.style.backgroundColor = 'skyBlue';

		myTable.setAttribute('id', 'myTable');
		myTable.style.margin = 'auto';
		myTable.style.height = '100%';
		myTable.style.width = '90%';
		myTable.style.display = 'table';
		myTable.style.border = '1px solid black';
		myTable.style.borderSpacing = '0px';
		myTable.style.borderCollapse = 'collapse';

		pageContainer.appendChild(tableContainer);
		tableContainer.appendChild(myTable);

		renderTableHead();
	}

	function renderTableHead() {
		const tableHead = document.createElement('thead');
		tableHead.setAttribute('id', 'tableHead');
		const headRow = document.createElement('tr');
		headRow.setAttribute('id', 'headRow');

		columnTitles.forEach(item => {
			const headerCell = document.createElement('th');
			const titleName = item;

			headerCell.setAttribute('id', titleName.toLowerCase());
			headerCell.style.border = '1px solid black';
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
			console.log(item + ' and ' + index);

			const row = tableBody.insertRow(index);
			row.setAttribute('id', item.title);
			row.setAttribute('class', 'rows');

			for (const key in item) {
				const projectData = row.insertCell();
				projectData.style.fontSize = '1.5em';
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
			removeBtn.setAttribute('class', 'removeBtn');
			removeBtn.style.height = '100%';
			removeBtn.style.width = '100%';
			removeBtn.style.fontSize = '2em';
			removeBtn.textContent = 'X';

			remove.append(removeBtn);
		});

		myTable.appendChild(tableBody);
		$('tr:odd').css('backgroundColor', 'skyBlue');
		$('tr:even').css('backgroundColor', 'lightCyan');
		$('.rows')
			.mouseenter(function() {
				$(this).css({ backgroundColor: 'dodgerBlue', color: 'white' });
			})
			.mouseleave(function() {
				$('tr:odd').css({ backgroundColor: 'skyBlue', color: 'black' });
				$('tr:even').css({ backgroundColor: 'lightCyan', color: 'black' });
			});
	}

	console.log('Table Module');
	createTable();
})();
