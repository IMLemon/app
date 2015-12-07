function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId7(e) {
        if (e && e.fromAdapter) return;
        __alloyId7.opts || {};
        var models = filter(__alloyId6);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId3 = models[i];
            __alloyId3.__transform = {};
            var __alloyId5 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId3.__transform["name"] ? __alloyId3.__transform["name"] : __alloyId3.get("name"),
                eid: "undefined" != typeof __alloyId3.__transform["id"] ? __alloyId3.__transform["id"] : __alloyId3.get("id")
            });
            rows.push(__alloyId5);
        }
        $.__views.__alloyId2.setData(rows);
    }
    function filter(c) {
        return c.where({
            organizer: fid
        });
    }
    function eventsClick(e) {
        var eventListController = Alloy.createController("newsinfo", {
            fid: e.row.eid
        });
        Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "eventsinfo";
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
    $.__views.__alloyId2 = Ti.UI.createTableView({
        id: "__alloyId2"
    });
    $.__views.win.add($.__views.__alloyId2);
    var __alloyId6 = Alloy.Collections["webnews"] || webnews;
    __alloyId6.on("fetch destroy change add remove reset", __alloyId7);
    eventsClick ? $.addListener($.__views.__alloyId2, "click", eventsClick) : __defers["$.__views.__alloyId2!click!eventsClick"] = true;
    exports.destroy = function() {
        __alloyId6.off("fetch destroy change add remove reset", __alloyId7);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    Alloy.Collections.webnews.fetch();
    $.win.title = fid;
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.__alloyId2!click!eventsClick"] && $.addListener($.__views.__alloyId2, "click", eventsClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;