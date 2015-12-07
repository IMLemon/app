var args = arguments[0] || {};
var fid = args.fid || {};
Alloy.Collections.webnews.fetch();

$.win.title = fid;
$.win.addEventListener("close", function() {
	$.destroy();
});

function locfilter(c) {
	return c.where({
		venue : fid
	});
}

function locClick(e) {

	var eventListController = Alloy.createController('newsinfo', {
		fid : e.row.eid
	});
	Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
}
