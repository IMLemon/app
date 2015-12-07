var args = arguments[0] || {};
Alloy.Collections.regevent.reset();
Alloy.Collections.regevent.fetch();

function load_page() {
	console.log("test");
	Alloy.Collections.regevent.fetch();
};

function regeventClick(e) {
	console.log(e.row.eid);
	var eventListController = Alloy.createController('newsinfo', {
		fid : e.row.eid
	});
	Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
}
