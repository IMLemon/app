var args = arguments[0] || {};
var fid = args.VenueId || {};
Alloy.Collections.Venue.fetch();

function filter(c) {
	return c.where({
		VenueID : fid
	});
}

function loctransform(m) {
	var transform = m.toJSON();
	transform.title = transform.VenueID;
	transform.subtitle = transform.VenueName;

	return transform;
}