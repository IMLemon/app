var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            name: "text",
            venue: "text",
            organizer: "text",
            shortDes: "text",
            fullDes: "text",
            image: "text",
            date: "text",
            quota: "text"
        },
        URL: "http://localhost:1337/user/regevent",
        debug: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "regevent",
            idAttribute: "id",
            lastModifiedColumn: "modified"
        },
        deleteAllOnFetch: true
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

model = Alloy.M("regevent", exports.definition, []);

collection = Alloy.C("regevent", exports.definition, model);

exports.Model = model;

exports.Collection = collection;