module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['docs/global/css/font-awesome.min.css',
					'docs/global/css/bootstrap.min.css',
					'docs/global/css/full-width.css',
					'docs/global/css/prism.css',
					'docs/global/css/before-after.css',
					'docs/global/css/fonts.css',
					'docs/global/css/extras.css',
					'docs/global/css/masonry.css',
					'docs/global/css/jquery.fancybox.css',
					'docs/global/css/share-button.css'
				],

				dest: 'docs/global/build/css/secondcrop.css'
			},
			js: {
				options: {
					separator: ';',
				},
				src: ['docs/global/js/jquery.min.js',
					'docs/global/js/bootstrap.min.js',
					'docs/global/js/before-after.js',
					'docs/global/js/modernizr.js',
					'docs/global/js/jquery.fancybox.pack.js',
					'docs/global/js/isotope.pkgd.js',
					'docs/global/js/jquery.mobile.custom.min.js',
					'docs/global/js/lazysizes.min.js',
					'docs/global/js/ls.respimg.min.js',
					'docs/global/js/jquery.smooth-scroll.min.js',
					'docs/global/js/share-button.min.js'
				],

				dest: 'docs/global/build/js/secondcrop.js'
			}
		},
		cssmin: {
			css: {
				src: 'docs/global/build/css/secondcrop.css',
				dest: 'docs/global/build/css/min/secondcrop.min.css'
			}
		},
		uglify: {
			js: {
				src: 'docs/global/build/js/secondcrop.js',
				dest: 'docs/global/build/js/min/secondcrop.min.js'
			}
		},
		watch: {
			css: {
				files: ['docs/global/css/*.css'],
				tasks: ['concat:css', 'cssmin:css']
			},
			js: {
				files: ['docs/global/js/*.js'],
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
