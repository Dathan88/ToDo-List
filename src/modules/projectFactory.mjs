import '..';

export const pfModule = (() => {
	const projectFactory = (title, description, dueDate, priority) => {
		return { title, description, dueDate, priority };
	};

	let myProjects = [];

	console.log(myProjects);

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

	const _pushProject = (() => {
		myProjects.push(groceries, cleanHouse, laundry, rent);
	})();

	return { myProjects: myProjects, projectFactory: projectFactory };
})();
