module.exports = function(grunt) {

	// 1. All configuration goes here 
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		concat: {
			css: {
				src: ['_gh_pages/assets/css/font-awesome.min.css',
					'_gh_pages/assets/css/bootstrap.min.css',
					'_gh_pages/assets/css/full-width.css',
					'_gh_pages/assets/css/prism.css',
					'_gh_pages/assets/css/before-after.css',
					'_gh_pages/assets/css/fonts.css',
					'_gh_pages/assets/css/extras.css',
					'_gh_pages/assets/css/masonry.css',
					'_gh_pages/assets/css/jquery.fancybox.css'
				],

				dest: '_gh_pages/dist/css/secondcrop.css'
			},
			js: {
				options: {
					separator: ';',
				},
				src: ['_gh_pages/assets/js/jquery.min.js',
					'_gh_pages/assets/js/bootstrap.min.js',
					'_gh_pages/assets/js/before-after.js',
					'_gh_pages/assets/js/modernizr.js',
					'_gh_pages/assets/js/jquery.fancybox.pack.js',
					'_gh_pages/assets/js/isotope.pkgd.js',
					'_gh_pages/assets/js/jquery.mobile.custom.min.js',
					'_gh_pages/assets/js/lazysizes.min.js',
					'_gh_pages/assets/js/ls.respimg.min.js',
					'_gh_pages/assets/js/jquery.smooth-scroll.min.js',
					'_gh_pages/assets/js/clipboard.min.js',
					'_gh_pages/assets/js/site.js'
				],

				dest: '_gh_pages/dist/js/secondcrop.js'
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
				src: '_gh_pages/dist/js/secondcrop.js',
				dest: '_gh_pages/dist/js/min/secondcrop.min.js'
			}
		},
		watch: {
			css: {
				files: ['_gh_pages/assets/css/*.css'],
				tasks: ['concat:css', 'cssmin:css']
			},
			js: {
				files: ['_gh_pages/assets/js/*.js'],
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
