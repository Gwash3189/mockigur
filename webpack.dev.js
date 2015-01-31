module.exports = {
    // webpack options
    module: {
        loaders: [ // required for react jsx
        //use harmany flag so i can use es6 
            {
                test: /\.js$/,
                loader: "jsx-loader?harmony"
            }, {
                test: /\.jsx$/,
                loader: "jsx-loader?harmony"
            }
        ]
    },
    entry: "./src/js/main.js",
    output: {
        path: "prod/js",
        filename: "main.js"
    },

    progress: true, // Don't show progress
    // Defaults to true

    failOnError: false, // don't report error to grunt if webpack find errors
    // Use this if webpack errors are tolerable and grunt should continue

    watch: true, // use webpacks watcher
    // You need to keep the grunt process alive

    keepalive: true, // don't finish the grunt task
    // Use this in combination with the watch option
     externals: {
 	//when require("Math") is called, the window.Math object is provided.
 	//this means that window.Math is now provided as a seperate module & is mockable for testing.
	    "Math": "window.Math",
        "Snap": "window.Snap"
	}
};