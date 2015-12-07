$.index.open();
Alloy.Collections.webnews.fetch();
Alloy.Collections.Venue.fetch();
Alloy.Globals.Group = $.index;
Alloy.Globals.log = $.log;

function newstransform(m) {
	var transform = m.toJSON();
	if (transform.image == null)
		transform.image = "";

	return transform;
};
function newsClick(e) {
	var eventListController = Alloy.createController('newsinfo', {
		fid : e.row.eid
	});
	Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
};

function eventsClick(e) {
	var eventListController = Alloy.createController('eventsinfo', {
		fid : e.row.fid
	});
	$.eventstab.open(eventListController.getView());
};

var temp;
function loctransform(m) {
	var transform = m.toJSON();
	if (temp == transform.CampusID)
		transform.item = "";
	else
		transform.item = transform.CampusID;

	temp = transform.CampusID;

	return transform;
};
function LocClick(e) {
	var eventListController = Alloy.createController('locinfo', {
		fid : e.row.fid
	});
	$.loctab.open(eventListController.getView());
};

function maptransform(m) {
	var transform = m.toJSON();
	transform.title = transform.VenueID;
	transform.subtitle = transform.VenueName;
	transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;

	return transform;
};
function mapClick(e) {
	if (e.clicksource == 'rightButton') {
		var eventListController = Alloy.createController('locinfo', {
			fid : e.annotation.title
		});
		$.maptab.open(eventListController.getView());
	}
};
function loginClick(e) {
	console.log("run");
	if (Alloy.Globals.log.title == "Logout") {
		var web = Ti.Network.createHTTPClient();
		web.open('POST', 'http://localhost:1337/user/logoutapp');
		web.send({
			type : 1
		});
		web.onload = function(e) {
			console.log(e);
			console.log(this.responseText);
			alert(this.responseText);
			if (this.responseText=="Logout")
				Alloy.Globals.log.title = "Login";
		};
	} else {
		var loginController = Alloy.createController('login');
		$.usertab.open(loginController.getView());
	}
};
function regeventClick(e) {
	if (Alloy.Globals.log.title == "Login") {
		alert("Please login first");
	} else {
		var eventListController = Alloy.createController('regevent');
		$.usertab.open(eventListController.getView());
	}
};