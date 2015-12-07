var args = arguments[0] || {};
function showOptions(){
    $.options.show();
};
function registerClick(e) {
	var web = Ti.Network.createHTTPClient();
	web.open('POST', 'http://localhost:1337/user/registerapp');
	web.send({
		"User[username]" : $.username.value,
		"User[password]" : $.password.value
		//"User[dept]" : $.dept.value
	});
	web.onload = function(e) {
		alert(this.responseText);
		if (this.responseText == "Register Successfully!") {
			$.Register.close();
		}
	};
};
