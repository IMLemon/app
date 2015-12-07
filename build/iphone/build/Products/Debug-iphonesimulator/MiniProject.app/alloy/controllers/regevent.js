function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId107(e) {
        if (e && e.fromAdapter) return;
        __alloyId107.opts || {};
        var models = __alloyId106.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId103 = models[i];
            __alloyId103.__transform = {};
            var __alloyId105 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId103.__transform["name"] ? __alloyId103.__transform["name"] : __alloyId103.get("name"),
                eid: "undefined" != typeof __alloyId103.__transform["id"] ? __alloyId103.__transform["id"] : __alloyId103.get("id")
            });
            rows.push(__alloyId105);
        }
        $.__views.regeventtable.setData(rows);
    }
    function regeventClick(e) {
        console.log(e.row.eid);
        var eventListController = Alloy.createController("newsinfo", {
            fid: e.row.eid
        });
        Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "regevent";
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
    Alloy.Collections.instance("regevent");
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    $.__views.regeventtable = Ti.UI.createTableView({
        id: "regeventtable"
    });
    $.__views.win.add($.__views.regeventtable);
    var __alloyId106 = Alloy.Collections["regevent"] || regevent;
    __alloyId106.on("fetch destroy change add remove reset", __alloyId107);
    regeventClick ? $.addListener($.__views.regeventtable, "click", regeventClick) : __defers["$.__views.regeventtable!click!regeventClick"] = true;
    exports.destroy = function() {
        __alloyId106.off("fetch destroy change add remove reset", __alloyId107);
    };
    _.extend($, $.__views);
    arguments[0] || {};
    Alloy.Collections.regevent.reset();
    Alloy.Collections.regevent.fetch();
    __defers["$.__views.regeventtable!click!regeventClick"] && $.addListener($.__views.regeventtable, "click", regeventClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;