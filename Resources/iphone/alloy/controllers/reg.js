function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function showOptions() {
        $.options.show();
    }
    function registerClick() {
        var web = Ti.Network.createHTTPClient();
        web.open("POST", "http://localhost:1337/user/registerapp");
        web.send({
            "User[username]": $.username.value,
            "User[password]": $.password.value
        });
        web.onload = function() {
            alert(this.responseText);
            "Register Successfully!" == this.responseText && $.Register.close();
        };
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "reg";
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
    Alloy.Collections.instance("user");
    $.__views.Register = Ti.UI.createWindow({
        id: "Register"
    });
    $.__views.Register && $.addTopLevelView($.__views.Register);
    var __alloyId91 = [];
    $.__views.__alloyId92 = Ti.UI.createTableViewRow({
        layout: "vertical",
        id: "__alloyId92"
    });
    __alloyId91.push($.__views.__alloyId92);
    $.__views.__alloyId93 = Ti.UI.createLabel({
        text: "Username:",
        id: "__alloyId93"
    });
    $.__views.__alloyId92.add($.__views.__alloyId93);
    $.__views.username = Ti.UI.createTextField({
        id: "username",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        left: "40",
        width: "250",
        height: "60"
    });
    $.__views.__alloyId92.add($.__views.username);
    $.__views.__alloyId94 = Ti.UI.createLabel({
        text: "Password:",
        id: "__alloyId94"
    });
    $.__views.__alloyId92.add($.__views.__alloyId94);
    $.__views.password = Ti.UI.createTextField({
        id: "password",
        passwordMask: "true",
        borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
        color: "#336699",
        left: "40",
        width: "250",
        height: "60"
    });
    $.__views.__alloyId92.add($.__views.password);
    var __alloyId96 = [];
    __alloyId96.push("Staff");
    __alloyId96.push("Student");
    __alloyId96.push("cancel");
    $.__views.options = Ti.UI.createOptionDialog({
        options: __alloyId96,
        id: "options",
        title: "Dept",
        cancel: "2"
    });
    $.__views.__alloyId100 = Ti.UI.createButton({
        title: "Options",
        id: "__alloyId100"
    });
    $.__views.__alloyId92.add($.__views.__alloyId100);
    showOptions ? $.addListener($.__views.__alloyId100, "click", showOptions) : __defers["$.__views.__alloyId100!click!showOptions"] = true;
    $.__views.registerButton = Ti.UI.createButton({
        title: "Submit",
        id: "registerButton"
    });
    $.__views.__alloyId92.add($.__views.registerButton);
    registerClick ? $.addListener($.__views.registerButton, "click", registerClick) : __defers["$.__views.registerButton!click!registerClick"] = true;
    $.__views.__alloyId90 = Ti.UI.createTableView({
        data: __alloyId91,
        id: "__alloyId90"
    });
    $.__views.Register.add($.__views.__alloyId90);
    exports.destroy = function() {};
    _.extend($, $.__views);
    arguments[0] || {};
    __defers["$.__views.__alloyId100!click!showOptions"] && $.addListener($.__views.__alloyId100, "click", showOptions);
    __defers["$.__views.registerButton!click!registerClick"] && $.addListener($.__views.registerButton, "click", registerClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;