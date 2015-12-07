function __processArg(obj, key) {
    var arg = null;
    if (obj) {
        arg = obj[key] || null;
        delete obj[key];
    }
    return arg;
}

function Controller() {
    function __alloyId23(e) {
        if (e && e.fromAdapter) return;
        __alloyId23.opts || {};
        var models = __alloyId22.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId15 = models[i];
            __alloyId15.__transform = newstransform(__alloyId15);
            var __alloyId17 = Ti.UI.createTableViewRow({
                layout: "vertical",
                eid: "undefined" != typeof __alloyId15.__transform["id"] ? __alloyId15.__transform["id"] : __alloyId15.get("id")
            });
            rows.push(__alloyId17);
            var __alloyId19 = Ti.UI.createImageView({
                image: "undefined" != typeof __alloyId15.__transform["image"] ? __alloyId15.__transform["image"] : __alloyId15.get("image"),
                top: "20dp"
            });
            __alloyId17.add(__alloyId19);
            var __alloyId21 = Ti.UI.createLabel({
                width: Ti.UI.SIZE,
                height: Ti.UI.SIZE,
                color: "#000",
                font: {
                    fontSize: 20,
                    fontFamily: "Helvetica Neue"
                },
                textAlign: "left",
                text: "undefined" != typeof __alloyId15.__transform["shortDes"] ? __alloyId15.__transform["shortDes"] : __alloyId15.get("shortDes"),
                bottom: "20dp"
            });
            __alloyId17.add(__alloyId21);
        }
        $.__views.__alloyId14.setData(rows);
    }
    function __alloyId43(e) {
        if (e && e.fromAdapter) return;
        __alloyId43.opts || {};
        var models = __alloyId42.models;
        var len = models.length;
        var rows = [];
        for (var i = 0; len > i; i++) {
            var __alloyId37 = models[i];
            __alloyId37.__transform = loctransform(__alloyId37);
            var __alloyId41 = Ti.UI.createTableViewSection({
                headerTitle: "undefined" != typeof __alloyId37.__transform["item"] ? __alloyId37.__transform["item"] : __alloyId37.get("item")
            });
            rows.push(__alloyId41);
            var __alloyId40 = Ti.UI.createTableViewRow({
                title: "undefined" != typeof __alloyId37.__transform["VenueName"] ? __alloyId37.__transform["VenueName"] : __alloyId37.get("VenueName"),
                fid: "undefined" != typeof __alloyId37.__transform["VenueID"] ? __alloyId37.__transform["VenueID"] : __alloyId37.get("VenueID")
            });
            __alloyId41.add(__alloyId40);
        }
        $.__views.__alloyId36.setData(rows);
    }
    function __alloyId48(e) {
        if (e && e.fromAdapter) return;
        __alloyId48.opts || {};
        var models = __alloyId47.models;
        var len = models.length;
        for (var i = 0; len > i; i++) {
            var __alloyId46 = models[i];
            __alloyId45.push(require("ti.map").createAnnotation(maptransform(__alloyId46)));
        }
        $.__views.mapView.annotations = __alloyId45;
    }
    function newstransform(m) {
        var transform = m.toJSON();
        null == transform.image && (transform.image = "");
        return transform;
    }
    function newsClick(e) {
        var eventListController = Alloy.createController("newsinfo", {
            fid: e.row.eid
        });
        Alloy.Globals.Group.getActiveTab().open(eventListController.getView());
    }
    function eventsClick(e) {
        var eventListController = Alloy.createController("eventsinfo", {
            fid: e.row.fid
        });
        $.eventstab.open(eventListController.getView());
    }
    function loctransform(m) {
        var transform = m.toJSON();
        transform.item = temp == transform.CampusID ? "" : transform.CampusID;
        temp = transform.CampusID;
        return transform;
    }
    function LocClick(e) {
        var eventListController = Alloy.createController("locinfo", {
            fid: e.row.fid
        });
        $.loctab.open(eventListController.getView());
    }
    function maptransform(m) {
        var transform = m.toJSON();
        transform.title = transform.VenueID;
        transform.subtitle = transform.VenueName;
        transform.rightButton = Titanium.UI.iPhone.SystemButton.DISCLOSURE;
        return transform;
    }
    function mapClick(e) {
        if ("rightButton" == e.clicksource) {
            var eventListController = Alloy.createController("locinfo", {
                fid: e.annotation.title
            });
            $.maptab.open(eventListController.getView());
        }
    }
    function loginClick() {
        console.log("run");
        if ("Logout" == Alloy.Globals.log.title) {
            var web = Ti.Network.createHTTPClient();
            web.open("POST", "http://localhost:1337/user/logoutapp");
            web.send({
                type: 1
            });
            web.onload = function(e) {
                console.log(e);
                console.log(this.responseText);
                alert(this.responseText);
                Alloy.Globals.log.title = "Login";
            };
        } else {
            var loginController = Alloy.createController("login");
            $.usertab.open(loginController.getView());
        }
    }
    function regeventClick() {
        if ("Login" == Alloy.Globals.log.title) alert("Please login first"); else {
            var eventListController = Alloy.createController("regevent");
            $.usertab.open(eventListController.getView());
        }
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "index";
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
    Alloy.Collections.instance("Venue");
    var __alloyId12 = [];
    $.__views.__alloyId13 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "HKBU",
        id: "__alloyId13"
    });
    $.__views.__alloyId14 = Ti.UI.createTableView({
        id: "__alloyId14"
    });
    $.__views.__alloyId13.add($.__views.__alloyId14);
    var __alloyId22 = Alloy.Collections["webnews"] || webnews;
    __alloyId22.on("fetch destroy change add remove reset", __alloyId23);
    newsClick ? $.addListener($.__views.__alloyId14, "click", newsClick) : __defers["$.__views.__alloyId14!click!newsClick"] = true;
    $.__views.newtab = Ti.UI.createTab({
        window: $.__views.__alloyId13,
        title: "News",
        icon: "KS_nav_ui.png",
        id: "newtab"
    });
    __alloyId12.push($.__views.newtab);
    $.__views.__alloyId24 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Events",
        id: "__alloyId24"
    });
    var __alloyId26 = [];
    $.__views.__alloyId27 = Ti.UI.createTableViewSection({
        headerTitle: "University Offices",
        id: "__alloyId27"
    });
    __alloyId26.push($.__views.__alloyId27);
    $.__views.__alloyId28 = Ti.UI.createTableViewRow({
        title: "Office of Student Affair",
        fid: "Office of Student Affair",
        id: "__alloyId28"
    });
    $.__views.__alloyId27.add($.__views.__alloyId28);
    $.__views.__alloyId29 = Ti.UI.createTableViewRow({
        title: "Academic Registry",
        fid: "Academic Registry",
        id: "__alloyId29"
    });
    $.__views.__alloyId27.add($.__views.__alloyId29);
    $.__views.__alloyId30 = Ti.UI.createTableViewRow({
        title: "Music Society",
        fid: "Music Society",
        id: "__alloyId30"
    });
    $.__views.__alloyId27.add($.__views.__alloyId30);
    $.__views.__alloyId31 = Ti.UI.createTableViewSection({
        headerTitle: "Faculty of Science",
        id: "__alloyId31"
    });
    __alloyId26.push($.__views.__alloyId31);
    $.__views.__alloyId32 = Ti.UI.createTableViewRow({
        title: "Computer",
        fid: "comp",
        id: "__alloyId32"
    });
    $.__views.__alloyId31.add($.__views.__alloyId32);
    $.__views.__alloyId33 = Ti.UI.createTableViewRow({
        title: "Maths",
        fid: "Maths",
        id: "__alloyId33"
    });
    $.__views.__alloyId31.add($.__views.__alloyId33);
    $.__views.__alloyId34 = Ti.UI.createTableViewRow({
        title: "Social Science",
        fid: "gis",
        id: "__alloyId34"
    });
    $.__views.__alloyId31.add($.__views.__alloyId34);
    $.__views.__alloyId25 = Ti.UI.createTableView({
        data: __alloyId26,
        id: "__alloyId25"
    });
    $.__views.__alloyId24.add($.__views.__alloyId25);
    eventsClick ? $.addListener($.__views.__alloyId25, "click", eventsClick) : __defers["$.__views.__alloyId25!click!eventsClick"] = true;
    $.__views.eventstab = Ti.UI.createTab({
        window: $.__views.__alloyId24,
        title: "Events",
        icon: "KS_nav_views.png",
        id: "eventstab"
    });
    __alloyId12.push($.__views.eventstab);
    $.__views.__alloyId35 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Location",
        id: "__alloyId35"
    });
    $.__views.__alloyId36 = Ti.UI.createTableView({
        id: "__alloyId36"
    });
    $.__views.__alloyId35.add($.__views.__alloyId36);
    var __alloyId42 = Alloy.Collections["Venue"] || Venue;
    __alloyId42.on("fetch destroy change add remove reset", __alloyId43);
    LocClick ? $.addListener($.__views.__alloyId36, "click", LocClick) : __defers["$.__views.__alloyId36!click!LocClick"] = true;
    $.__views.loctab = Ti.UI.createTab({
        window: $.__views.__alloyId35,
        title: "Location",
        icon: "KS_nav_views.png",
        id: "loctab"
    });
    __alloyId12.push($.__views.loctab);
    $.__views.__alloyId44 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Map",
        id: "__alloyId44"
    });
    var __alloyId45 = [];
    $.__views.mapView = (require("ti.map").createView || Ti.UI.createView)({
        region: {
            latitude: 22.337827,
            longitude: 114.181962,
            latitudeDelta: .006,
            longitudeDelta: .006
        },
        annotations: __alloyId45,
        id: "mapView",
        userLocation: "true"
    });
    $.__views.__alloyId44.add($.__views.mapView);
    var __alloyId47 = Alloy.Collections["Venue"] || Venue;
    __alloyId47.on("fetch destroy change add remove reset", __alloyId48);
    mapClick ? $.addListener($.__views.mapView, "click", mapClick) : __defers["$.__views.mapView!click!mapClick"] = true;
    $.__views.maptab = Ti.UI.createTab({
        window: $.__views.__alloyId44,
        title: "Map",
        icon: "KS_nav_views.png",
        id: "maptab"
    });
    __alloyId12.push($.__views.maptab);
    $.__views.__alloyId49 = Ti.UI.createWindow({
        backgroundColor: "#fff",
        title: "Profile",
        id: "__alloyId49"
    });
    var __alloyId51 = [];
    $.__views.log = Ti.UI.createTableViewRow({
        id: "log",
        title: "Login"
    });
    __alloyId51.push($.__views.log);
    loginClick ? $.addListener($.__views.log, "click", loginClick) : __defers["$.__views.log!click!loginClick"] = true;
    $.__views.__alloyId52 = Ti.UI.createTableViewRow({
        title: "Myregistered Event",
        id: "__alloyId52"
    });
    __alloyId51.push($.__views.__alloyId52);
    regeventClick ? $.addListener($.__views.__alloyId52, "click", regeventClick) : __defers["$.__views.__alloyId52!click!regeventClick"] = true;
    $.__views.__alloyId50 = Ti.UI.createTableView({
        data: __alloyId51,
        id: "__alloyId50"
    });
    $.__views.__alloyId49.add($.__views.__alloyId50);
    $.__views.usertab = Ti.UI.createTab({
        window: $.__views.__alloyId49,
        title: "Profile",
        icon: "KS_nav_views.png",
        id: "usertab"
    });
    __alloyId12.push($.__views.usertab);
    $.__views.index = Ti.UI.createTabGroup({
        tabs: __alloyId12,
        id: "index"
    });
    $.__views.index && $.addTopLevelView($.__views.index);
    exports.destroy = function() {
        __alloyId22.off("fetch destroy change add remove reset", __alloyId23);
        __alloyId42.off("fetch destroy change add remove reset", __alloyId43);
        __alloyId47.off("fetch destroy change add remove reset", __alloyId48);
    };
    _.extend($, $.__views);
    $.index.open();
    Alloy.Collections.webnews.fetch();
    Alloy.Collections.Venue.fetch();
    Alloy.Globals.Group = $.index;
    Alloy.Globals.log = $.log;
    var temp;
    __defers["$.__views.__alloyId14!click!newsClick"] && $.addListener($.__views.__alloyId14, "click", newsClick);
    __defers["$.__views.__alloyId25!click!eventsClick"] && $.addListener($.__views.__alloyId25, "click", eventsClick);
    __defers["$.__views.__alloyId36!click!LocClick"] && $.addListener($.__views.__alloyId36, "click", LocClick);
    __defers["$.__views.mapView!click!mapClick"] && $.addListener($.__views.mapView, "click", mapClick);
    __defers["$.__views.log!click!loginClick"] && $.addListener($.__views.log, "click", loginClick);
    __defers["$.__views.__alloyId52!click!regeventClick"] && $.addListener($.__views.__alloyId52, "click", regeventClick);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;