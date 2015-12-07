exports.definition = {
	config : {
		"columns" : {
			"id" : "INTEGER PRIMARY KEY",
			"name" : "text",
			"shortDes" : "text",
			"fullDes" : "text",
			"image" : "text",
			"organizer" : "text",
			"venue" : "text"
		},
		"URL" : "http://localhost:1337/person/json",
		"debug" : 1,
		"adapter" : {
			"type" : "sqlrest",
			"collection_name" : "webnews",
			"idAttribute" : "id",

			"addModifedToUrl" : true,
			"lastModifiedColumn" : "modified"
		}
	},
	extendModel : function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection : function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here

			// For Backbone v1.1.2, uncomment the following to override the
			// fetch method to account for a breaking change in Backbone.
			/*
			 fetch: function(options) {
			 options = options ? _.clone(options) : {};
			 options.reset = true;
			 return Backbone.Collection.prototype.fetch.call(this, options);
			 }
			 */
		});

		return Collection;
	}
};
