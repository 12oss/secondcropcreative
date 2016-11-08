module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['docs/assets/css/font-awesome.min.css',
					'docs/assets/css/bootstrap.min.css',
					'docs/assets/css/full-width.css',
					'docs/assets/css/prism.css',
					'docs/assets/css/before-after.css',
					'docs/assets/css/fonts.css',
					'docs/assets/css/extras.css',
					'docs/assets/css/masonry.css',
					'docs/assets/css/jquery.fancybox.css',
					'docs/assets/css/share-button.css'
				],

				dest: 'docs/dist/css/secondcrop.css'
			},
			js: {
				options: {
					separator: ';',
				},
				src: ['docs/assets/js/jquery.min.js',
					'docs/assets/js/bootstrap.min.js',
					'docs/assets/js/before-after.js',
					'docs/assets/js/modernizr.js',
					'docs/assets/js/jquery.fancybox.pack.js',
					'docs/assets/js/isotope.pkgd.js',
					'docs/assets/js/jquery.mobile.custom.min.js',
					'docs/assets/js/lazysizes.min.js',
					'docs/assets/js/ls.respimg.min.js',
					'docs/assets/js/jquery.smooth-scroll.min.js',
					'docs/assets/js/site.js'
				],

				dest: 'docs/dist/js/secondcrop.js'
			}
		},
		cssmin: {
			css: {
				src: 'docs/dist/css/secondcrop.css',
				dest: 'docs/dist/css/min/secondcrop.min.css'
			}
		},
		uglify: {
			js: {
				src: 'docs/dist/js/secondcrop.js',
				dest: 'docs/dist/js/min/secondcrop.min.js'
			}
		},
		watch: {
			css: {
				files: ['docs/assets/css/*.css'],
				tasks: ['concat:css', 'cssmin:css']
			},
			js: {
				files: ['docs/assets/js/*.js'],
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
