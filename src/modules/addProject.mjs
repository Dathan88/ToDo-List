import '..';
export const addProjectModule = (() => {
	const submitProject = (
		myProjects,
		projectFactory,
		title,
		description,
		dueDate,
		priority
	) => {
		const newProject = projectFactory(title, description, dueDate, priority);

		myProjects.push(newProject);
		console.log(myProjects);
	};
	return { submitProject: submitProject };
})();
