import '..';
export const removeProject = (() => {
	return {
		btnEvent: function(e, myProjects) {
			const myTable = document.querySelector('#myTable');
			const i = e.target.parentNode.parentNode.rowIndex;
			console.log(i);
			myTable.deleteRow(i);
			myProjects.splice(i - 1, 1);
		},
	};
})();
