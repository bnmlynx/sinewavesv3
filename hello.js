Module.register("helloworld",{
	// Default module config.
	defaults: {
		text: "Hello World!"
	},



	// Override dom generator.
	getDom: function() {
		var wrapper = document.createElement("div");
		wrapper.innerHTML = this.config.text;
		return wrapper;
	}

	getScripts: function() {
	return [
		'sine-waves.js', // will try to load it from the vendor folder, otherwise it will load is from the module folder.
		//'sine-waves.js', // this file is available in the vendor folder, so it doesn't need to be available in the module folder.
		this.file('sine-waves.js'), // this file will be loaded straight from the module folder.
		//'https://code.jquery.com/jquery-2.2.3.min.js',  // this file will be loaded from the jquery servers.
	]
}
});
