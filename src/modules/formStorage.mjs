import '..';

export const formStorageModule = (function() {
	const storageValues = function(myProjects) {
		console.log('My storage');

		localStorage.setItem('projects', JSON.stringify(myProjects));
		const data = JSON.parse(localStorage.getItem('projects'));
		return { data: data };
	};
	return { storageValues: storageValues };
})();

/* localStorage.setItem('description', description);
localStorage.setItem('dueDate', dueDate);
localStorage.setItem('priority', priority); */
