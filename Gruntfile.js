module.exports = function(grunt) {
	grunt.loadNpmTasks("grunt-webpack");
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.initConfig({
		webpack: {
			dev: require("./webpack.dev.js"),
			prod: require("./webpack.prod.js")
		},
        cssmin: {
            prod: {
                files: {
                    "prod/css/main.css" : ["src/css/**/*.css"]
                }
            }
        },
        watch: {
            css: {
                files: ['src/*/*.css'],
                tasks: ['cssmin'],
                options: {
                    interupt: true
                }
            }
        }
	});

	 grunt.registerTask("node-prod", "set env to prod", function () {
	 	//used so reactjs knows to provide min version of code
        process.env.NODE_ENV = "production";
    });

	grunt.registerTask("default", ["cssmin","webpack:dev"]);
	grunt.registerTask("prod", ["node-prod","webpack:prod"]);

};