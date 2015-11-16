module.exports = function(grunt) {
grunt.initConfig({
/* Copia os arquivos para o diretorio 'dist'*/
copy: {
projeto: {
expand: true,
cwd: 'app',
src: '**',
dest: 'dist'
}
},
clean: ['dist'],
useminPrepare: {
html: ['dist/**/*.html']
},
usemin: {
html: ['dist/**/*.html']
},
watch: {
options: {
livereload: true
},
todos: {
files: ['loja/**/*']
}
},
connect: {
server: {
options: {
livereload: true
}
}
}
/* inlinecss: {
        main: {
            options: {
            },
            files: {
                'out.html': 'in.html'
            }
        }
    } */
}); 


//registrando task para minificação

grunt.registerTask('default', ['clean', 'copy', 'minifica']);

grunt.registerTask('minifica', ['useminPrepare', 'usemin',
'concat', 'uglify', 'cssmin']);

grunt.registerTask('run', ['connect', 'watch']);

grunt.loadNpmTasks('grunt-contrib-copy');
grunt.loadNpmTasks('grunt-contrib-clean');
grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-usemin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-contrib-connect');
// grunt.loadNpmTasks('grunt-inline-css');
}