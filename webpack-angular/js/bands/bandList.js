module.export = function(app) {
	app.factory('bandList', function() {
		return [
			{name: 'Cinderella', formed: 1983},
			{name: 'BonJovi', formed: 1984}
		]
	})
}