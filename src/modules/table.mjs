import $ from 'jquery';
const tableModule = () => {
	const projectFactory = (title, description, dueDate, priority) => {
		const dateCreated = new Date().toLocaleDateString('en-US');

		return { title, description, dateCreated, dueDate, priority };
	};

	const columnTitles = [
		'Title',
		'Description',
		'Date Created',
		'Due Date',
		'Priority',
		'Remove',
	];

	const groceries = projectFactory(
		'Groceries',
		'Eggs, Bacon, Milk',
		new Date(2018, 11, 15).toLocaleDateString('en-US'),
		'Yes'
	);

	const cleanHouse = projectFactory(
		'Chores',
		'Vacuum, Sweep',
		new Date(2019, 3, 12).toLocaleDateString('en-US'),
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

	const myProjects = [];

	function createTable() {
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
		rowFx(), removeProject();
	}

	/*function renderTableFoot(){
		have footer display summary info for above
	}*/

	function rowFx() {
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

	console.log('Table Module');
	createTable();
};

document.addEventListener('DOMContentLoaded', tableModule);
export { tableModule };
