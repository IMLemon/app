var args = arguments[0] || {};
var fid = args.fid || {};

Alloy.Collections.webnews.fetch();

$.win.title = "News No." + fid;

var web = Ti.Network.createHTTPClient();
web.open('POST', 'http://localhost:1337/user/show');
web.send({
	pid : fid
});
web.onload = function(e) {
	console.log(e);
	console.log(this.responseText);
	if (this.responseText == "UnReg")
		$.regButton.title = "UnReg";
	else
		$.regButton.title = "Reg";
};

function filter(c) {
	return c.where({
		id : fid
	});
};

function locClick(e) {
	var eventListController = Alloy.createController('location', {
		VenueId : e.source.specific
	});
	Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
};

function regClick(e) {
	if (Alloy.Globals.log.title == "Logout") {
		if ($.regButton.title == "Reg") {
			var web = Ti.Network.createHTTPClient();
			web.open('POST', 'http://localhost:1337/user/addeventapp');
			web.send({
				pid : fid
			});
			web.onload = function(e) {
				console.log(e);
				console.log(this.responseText);
				alert(this.responseText);
				$.win.close();
			};
		} else {
			var web = Ti.Network.createHTTPClient();
			web.open('POST', 'http://localhost:1337/user/unregapp');
			web.send({
				pid : fid,
			});
			web.onload = function(e) {
				console.log(e);
				console.log(this.responseText);
				alert(this.responseText);
				$.win.close();
			};
		}
	} else {
		var eventListController = Alloy.createController('login');
		Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
	}
};