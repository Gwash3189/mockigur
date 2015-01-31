var webpack = require("webpack");
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
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false,
            },
            sourceMap: false
        })
    ],
    entry: "./src/js/main.js",
    output: {
        path: "prod/js",
        filename: "main.js"
    },

    progress: true, // Don't show progress
    // Defaults to true

    failOnError: true, // don't report error to grunt if webpack find errors
    // Use this if webpack errors are tolerable and grunt should continue

    watch: false, // use webpacks watcher
    // You need to keep the grunt process alive

    keepalive: false, // don't finish the grunt task
    externals: {
	 	//when require("Math") is called, the window.Math object is provided.
	 	//this means that window.Math is now provided as a seperate module & is mockable for testing.
		"Math": "window.Math",
        "Snap": "window.Snap"
    }
   
};