module.exports = function(grunt) {

    grunt.initConfig({
        'jsbeautifier': {
            'default': {
                src : ['src/**/*.js'],
                js: {
                    braceStyle: 'collapse',
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: ' ',
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0,
                    endWithNewline: true
                }
            }
        },
        'compress': {
            'default': {
                options: {
                    archive: 'dist/package.zip'
                },
                expand: true,
                cwd: 'src/',
                src: ['**/*']
            }
        }
    });

    grunt.loadNpmTasks('grunt-jsbeautifier');
    grunt.loadNpmTasks('grunt-contrib-compress');

    grunt.registerTask('default', [
        'jsbeautifier',
        'compress'
    ]);

};