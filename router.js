function route(handle, pathname) {
	console.log("Im going to route to :" + pathname);

	if ( typeof handle[pathname] === 'function' ) {
		// if the pathname exists as a function then execute it
		handle[pathname]();
	} else {
		console.log("not request handler for " + pathname);
	}
}
exports.route = route;