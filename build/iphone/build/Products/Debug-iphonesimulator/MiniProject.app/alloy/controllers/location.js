function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId58(e) {
        if (e && e.fromAdapter) return;
        __alloyId58.opts || {};
        var models = filter(__alloyId57);
        var len = models.length;
        for (var i = 0; len > i; i++) {
            var __alloyId56 = models[i];
            __alloyId55.push(require("ti.map").createAnnotation(loctransform(__alloyId56)));
        }
        $.__views.mapView.annotations = __alloyId55;
    }
    function filter(c) {
        return c.where({
            VenueID: fid
        });
    }
    function loctransform(m) {
        var transform = m.toJSON();
        transform.title = transform.VenueID;
        transform.subtitle = transform.VenueName;
        return transform;
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "location";
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
    Alloy.Collections.instance("Venue");
    $.__views.win = Ti.UI.createWindow({
        id: "win"
    });
    $.__views.win && $.addTopLevelView($.__views.win);
    var __alloyId55 = [];
    $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({
        region: {
            latitude: 22.337827,
            longitude: 114.181962,
            latitudeDelta: .006,
            longitudeDelta: .006
        },
        annotations: __alloyId55,
        id: "mapView",
        userLocation: "true"
    });
    $.__views.win.add($.__views.mapView);
    var __alloyId57 = Alloy.Collections["Venue"] || Venue;
    __alloyId57.on("fetch destroy change add remove reset", __alloyId58);
    exports.destroy = function() {
        __alloyId57.off("fetch destroy change add remove reset", __alloyId58);
    };
    _.extend($, $.__views);
    var args = arguments[0] || {};
    var fid = args.VenueId || {};
    Alloy.Collections.Venue.fetch();
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;