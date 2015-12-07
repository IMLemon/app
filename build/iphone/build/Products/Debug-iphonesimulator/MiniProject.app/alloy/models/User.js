var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

exports.definition = {
    config: {
        columns: {
            username: "text primary key",
            password: "text",
            dept: "text"
        },
        URL: "http://localhost:1337/user/json",
        debug: 1,
        adapter: {
            type: "sqlrest",
            collection_name: "user",
            idAttribute: "username",
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

model = Alloy.M("user", exports.definition, []);

collection = Alloy.C("user", exports.definition, model);

exports.Model = model;

exports.Collection = collection;