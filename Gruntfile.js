module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['_ROOT/global/css/font-awesome.min.css',
					'_ROOT/global/css/bootstrap.min.css',
					'_ROOT/global/css/full-width.css',
					'_ROOT/global/css/prism.css',
					'_ROOT/global/css/before-after.css',
					'_ROOT/global/css/fonts.css',
					'_ROOT/global/css/extras.css',
					'_ROOT/global/css/masonry.css',
					'_ROOT/global/css/jquery.fancybox.css',
					'_ROOT/global/css/share-button.css'
				],

				dest: '_ROOT/global/build/css/secondcrop.css'
			},
			js: {
				options: {
					separator: ';',
				},
				src: ['_ROOT/global/js/jquery.min.js',
					'_ROOT/global/js/bootstrap.min.js',
					'_ROOT/global/js/before-after.js',
					'_ROOT/global/js/modernizr.js',
					'_ROOT/global/js/jquery.fancybox.pack.js',
					'_ROOT/global/js/isotope.pkgd.js',
					'_ROOT/global/js/jquery.mobile.custom.min.js',
					'_ROOT/global/js/lazysizes.min.js',
					'_ROOT/global/js/ls.respimg.min.js',
					'_ROOT/global/js/jquery.smooth-scroll.min.js',
					'_ROOT/global/js/share-button.min.js'
				],

				dest: '_ROOT/global/build/js/secondcrop.js'
			}
		},
		cssmin: {
			css: {
				src: '_ROOT/global/build/css/secondcrop.css',
				dest: '_ROOT/global/build/css/min/secondcrop.min.css'
			}
		},
		uglify: {
			js: {
				src: '_ROOT/global/build/js/secondcrop.js',
				dest: '_ROOT/global/build/js/min/secondcrop.min.js'
			}
		},
		watch: {
			css: {
				files: ['_ROOT/global/css/*.css'],
				tasks: ['concat:css', 'cssmin:css']
			},
			js: {
				files: ['_ROOT/global/js/*.js'],
				tasks: ['concat:js', 'uglify:js']
			},
		}

	});

	// 2. Where we tell Grunt we plan to use this plug-in.
	/*grunt.loadNpmTasks('grunt-connect');
	grunt.loadNpmTasks('grunt-serve');*/
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');

	// 3. Where we tell Grunt what to do when we type "grunt" into the terminal.
	grunt.registerTask('default', ['concat', 'cssmin', 'uglify', 'watch']);

};
