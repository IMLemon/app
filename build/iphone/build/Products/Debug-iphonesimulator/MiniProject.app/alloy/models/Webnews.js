var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            id: "INTEGER PRIMARY KEY",
            name: "text",
            shortDes: "text",
            fullDes: "text",
            image: "text",
            organizer: "text",
            venue: "text"
        },
        URL: "http://localhost:1337/person/json",
        debug: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "webnews",
            idAttribute: "id",
            addModifedToUrl: true,
            lastModifiedColumn: "modified"
        }
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

model = Alloy.M("webnews", exports.definition, []);

collection = Alloy.C("webnews", exports.definition, model);

exports.Model = model;

exports.Collection = collection;