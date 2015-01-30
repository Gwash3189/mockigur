module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-webpack");
	var webpack = require("webpack");
	var webpackConfig = {};
    webpackConfig.prod = 
    
	grunt.initConfig({
		webpack: {
			dev: require("./webpack.dev.js"),
			prod: require("./webpack.prod.js")
		}
	});

	 grunt.registerTask("node-prod", "set env to prod", function () {
	 	//used so reactjs knows to provide min version of code
        process.env.NODE_ENV = "production";
    });

	grunt.registerTask("default", ["webpack:dev"]);
	grunt.registerTask("prod", ["node-prod","webpack:prod"]);

}