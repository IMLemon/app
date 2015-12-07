function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId66(e) {
        if (e && e.fromAdapter) return;
        __alloyId66.opts || {};
        var models = locfilter(__alloyId65);
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId62 = models[i];
            __alloyId62.__transform = {};
            var __alloyId64 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId62.__transform["name"] ? __alloyId62.__transform["name"] : __alloyId62.get("name"),
                eid: "undefined" != typeof __alloyId62.__transform["id"] ? __alloyId62.__transform["id"] : __alloyId62.get("id")
            });
            rows.push(__alloyId64);
        }
        $.__views.__alloyId61.setData(rows);
    }
    function locfilter(c) {
        return c.where({
            venue: fid
        });
    }
    function locClick(e) {
        var eventListController = Alloy.createController("newsinfo", {
            fid: e.row.eid
        });
        Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "locinfo";
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
    $.__views.__alloyId61 = Ti.UI.createTableView({
        id: "__alloyId61"
    });
    $.__views.win.add($.__views.__alloyId61);
    var __alloyId65 = Alloy.Collections["webnews"] || webnews;
    __alloyId65.on("fetch destroy change add remove reset", __alloyId66);
    locClick ? $.addListener($.__views.__alloyId61, "click", locClick) : __defers["$.__views.__alloyId61!click!locClick"] = true;
    exports.destroy = function() {
        __alloyId65.off("fetch destroy change add remove reset", __alloyId66);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.fid || {};
    Alloy.Collections.webnews.fetch();
    $.win.title = fid;
    $.win.addEventListener("close", function() {
        $.destroy();
    });
    __defers["$.__views.__alloyId61!click!locClick"] && $.addListener($.__views.__alloyId61, "click", locClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;