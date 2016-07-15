(function (global) {

    // map tells the System loader where to look for things
    var map = {
        'lib': 'lib', // 'dist',
        'rxjs': 'node_modules/rxjs',
        'angular2-in-memory-web-api': 'node_modules/angular2-in-memory-web-api',
        '@angular': 'node_modules/@angular',
        'ag-grid-ng2': 'node_modules/ag-grid-ng2',
        'ag-grid-enterprise': 'node_modules/ag-grid-enterprise',
        'ag-grid': 'node_modules/ag-grid',
        'angular2-modal': 'node_modules/angular2-modal',
        'angular2-modal/platform-browser': 'node_modules/angular2-modal/platform-browser'
    };

    // packages tells the System loader how to load when no filename and/or no extension
    var packages = {
        'rxjs': { defaultExtension: 'js' },
        'angular2-in-memory-web-api': { defaultExtension: 'js' },
        lib: {
            // format: 'register',
            defaultExtension: 'js',
            main: 'boot.js'
        },
        'ag-grid-ng2': {
            defaultExtension: "js"
        },
        'ag-grid': {
            defaultExtension: "js"
        },
        'ag-grid-enterprise': {
            defaultExtension: "js"
        },
        'angular2-modal': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/platform-browser': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/plugins/bootstrap': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/plugins/vex': { main: 'index.js', defaultExtension: 'js' },
        'angular2-modal/plugins/js-native': { main: 'index.js', defaultExtension: 'js' }
    };

    var packageNames = [
        '@angular/common',
        '@angular/compiler',
        '@angular/core',
        '@angular/http',
        '@angular/platform-browser',
        '@angular/platform-browser-dynamic',
        '@angular/router',
        '@angular/router-deprecated',
        '@angular/testing',
        '@angular/upgrade',
    ];

    // add package entries for angular packages in the form '@angular/common': { main: 'index.js', defaultExtension: 'js' }
    packageNames.forEach(function (pkgName) {
        packages[pkgName] = { main: 'index.js', defaultExtension: 'js' };
    });

    var config = {
        map: map,
        packages: packages
    }

    // filterSystemConfig - index.html's chance to modify config before we register it.
    if (global.filterSystemConfig) { global.filterSystemConfig(config); }

    System.config(config);

})(this);







