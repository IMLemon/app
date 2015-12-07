var args = arguments[0] || {};
function submitClick(e) {
	var web = Ti.Network.createHTTPClient();
	web.open('POST', 'http://localhost:1337/user/signinapp');
	web.send({
		username : $.username.value,
		password : $.password.value,
		type : 1
	});
	web.onload = function(e) {
		console.log(e);
		console.log(this.responseText);
		alert(this.responseText);
		if (this.responseText == "Login Successfully") {
			Alloy.Globals.log.title = "Logout";
			$.Login.close();
		}
	};
};
function regClick(e) {
	var eventListController = Alloy.createController('reg');
		Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
};