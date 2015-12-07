function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function submitClick() {
        var web = Ti.Network.createHTTPClient();
        web.open("POST", "http://localhost:1337/user/signinapp");
        web.send({
            username: $.username.value,
            password: $.password.value,
            type: 1
        });
        web.onload = function(e) {
            console.log(e);
            console.log(this.responseText);
            alert(this.responseText);
            if ("Login Successfully" == this.responseText) {
                Alloy.Globals.log.title = "Logout";
                $.Login.close();
            }
        };
    }
    function regClick() {
        var eventListController = Alloy.createController("reg");
        Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "login";
    this.args = arguments[0] || {};
    if (arguments[0]) {
        {
            __processArg(arguments[0], "__parentSymbol");
        }
        {
            __processArg(arguments[0], "$model");
        }
        {
            __processArg(arguments[0], "__itemTemplate");
        }
    }
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.Login = Ti.UI.createWindow({
        id: "Login"
    });
    $.__views.Login && $.addTopLevelView($.__views.Login);
    var __alloyId68 = [];
    $.__views.__alloyId69 = Ti.UI.createTableViewRow({
        layout: "vertical",
        id: "__alloyId69"
    });
    __alloyId68.push($.__views.__alloyId69);
    $.__views.__alloyId70 = Ti.UI.createLabel({
        text: "Username:",
        id: "__alloyId70"
    });
    $.__views.__alloyId69.add($.__views.__alloyId70);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        left: "40",
        width: "250",
        height: "60"
    });
    $.__views.__alloyId69.add($.__views.username);
    $.__views.__alloyId71 = Ti.UI.createLabel({
        text: "Password:",
        id: "__alloyId71"
    });
    $.__views.__alloyId69.add($.__views.__alloyId71);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        left: "40",
        width: "250",
        height: "60"
    });
    $.__views.__alloyId69.add($.__views.password);
    $.__views.loginButton = Ti.UI.createButton({
        title: "Login",
        id: "loginButton"
    });
    $.__views.__alloyId69.add($.__views.loginButton);
    submitClick ? $.addListener($.__views.loginButton, "click", submitClick) : __defers["$.__views.loginButton!click!submitClick"] = true;
    $.__views.__alloyId72 = Ti.UI.createLabel({
        text: "If you have account,please click here:",
        id: "__alloyId72"
    });
    $.__views.__alloyId69.add($.__views.__alloyId72);
    $.__views.regButton = Ti.UI.createButton({
        title: "Register",
        id: "regButton"
    });
    $.__views.__alloyId69.add($.__views.regButton);
    regClick ? $.addListener($.__views.regButton, "click", regClick) : __defers["$.__views.regButton!click!regClick"] = true;
    $.__views.__alloyId67 = Ti.UI.createTableView({
        data: __alloyId68,
        id: "__alloyId67"
    });
    $.__views.Login.add($.__views.__alloyId67);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.loginButton!click!submitClick"] && $.addListener($.__views.loginButton, "click", submitClick);
    __defers["$.__views.regButton!click!regClick"] && $.addListener($.__views.regButton, "click", regClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;