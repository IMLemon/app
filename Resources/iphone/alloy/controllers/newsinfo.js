function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId87(e) {
        if (e && e.fromAdapter) return;
        __alloyId87.opts || {};
        var models = filter(__alloyId86);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId77 = models[i];
            __alloyId77.__transform = {};
            var __alloyId79 = Ti.UI.createTableViewRow({
                layout: "vertical"
            });
            rows.push(__alloyId79);
            var __alloyId81 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId77.__transform["image"] ? __alloyId77.__transform["image"] : __alloyId77.get("image"),
                top: "20dp"
            });
            __alloyId79.add(__alloyId81);
            var __alloyId83 = Ti.UI.createLabel({
                text: "undefined" != typeof __alloyId77.__transform["fullDes"] ? __alloyId77.__transform["fullDes"] : __alloyId77.get("fullDes"),
                bottom: "20dp"
            });
            __alloyId79.add(__alloyId83);
            var __alloyId85 = Ti.UI.createButton({
                title: "Address",
                specific: "undefined" != typeof __alloyId77.__transform["venue"] ? __alloyId77.__transform["venue"] : __alloyId77.get("venue"),
                left: "5dp"
            });
            __alloyId79.add(__alloyId85);
            locClick ? $.addListener(__alloyId85, "click", locClick) : __defers["__alloyId85!click!locClick"] = true;
        }
        $.__views.__alloyId76.setData(rows);
    }
    function filter(c) {
        return c.where({
            id: fid
        });
    }
    function locClick(e) {
        var eventListController = Alloy.createController("location", {
            VenueId: e.source.specific
        });
        Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
    }
    function regClick() {
        if ("Logout" == Alloy.Globals.log.title) if ("Reg" == $.regButton.title) {
            var web = Ti.Network.createHTTPClient();
            web.open("POST", "http://localhost:1337/user/addeventapp");
            web.send({
                pid: fid
            });
            web.onload = function(e) {
                console.log(e);
                console.log(this.responseText);
                alert(this.responseText);
                $.win.close();
            };
        } else {
            var web = Ti.Network.createHTTPClient();
            web.open("POST", "http://localhost:1337/user/unregapp");
            web.send({
                pid: fid
            });
            web.onload = function(e) {
                console.log(e);
                console.log(this.responseText);
                alert(this.responseText);
                $.win.close();
            };
        } else {
            var eventListController = Alloy.createController("login");
            Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "newsinfo";
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
    Alloy.Collections.instance("webnews");
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.regButton = Ti.UI.createButton({
        id: "regButton"
    });
    regClick ? $.addListener($.__views.regButton, "click", regClick) : __defers["$.__views.regButton!click!regClick"] = true;
    $.__views.win.rightNavButton = $.__views.regButton;
    $.__views.__alloyId76 = Ti.UI.createTableView({
        id: "__alloyId76"
    });
    $.__views.win.add($.__views.__alloyId76);
    var __alloyId86 = Alloy.Collections["webnews"] || webnews;
    __alloyId86.on("fetch destroy change add remove reset", __alloyId87);
    exports.destroy = function() {
        __alloyId86.off("fetch destroy change add remove reset", __alloyId87);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    Alloy.Collections.webnews.fetch();
    $.win.title = "News No." + fid;
    var web = Ti.Network.createHTTPClient();
    web.open("POST", "http://localhost:1337/user/show");
    web.send({
        pid: fid
    });
    web.onload = function(e) {
        console.log(e);
        console.log(this.responseText);
        $.regButton.title = "UnReg" == this.responseText ? "UnReg" : "Reg";
    };
    __defers["$.__views.regButton!click!regClick"] && $.addListener($.__views.regButton, "click", regClick);
    __defers["__alloyId85!click!locClick"] && $.addListener(__alloyId85, "click", locClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;