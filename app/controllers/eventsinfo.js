var args = arguments[0] || {};
var fid = args.fid || {};
Alloy.Collections.webnews.fetch();

$.win.title = fid;
$.win.addEventListener("close", function() {
	$.destroy();
});

function filter(c) {
	return c.where({
		organizer : fid
	});
}

function eventsClick(e) {

	var eventListController = Alloy.createController('newsinfo', {
		fid : e.row.eid
	});
	Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
}
