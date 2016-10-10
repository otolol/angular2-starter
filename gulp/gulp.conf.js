module.exports = () => {
    var root = ''
        src = root + 'src/',
        app = src + 'app/',
        tmp = src + 'tmp/',
        tmpApp = tmp + 'app/';

    var browserSync = {
        dev: {
            port: 3000, 
            server: {
                baseDir: './src/',
                routes: {
                    "/node_modules": "node_modules",
                    "/src": "src"
                }
            },
            files: [
                src + 'index.hmtl',
                src + 'systemjs.conf.js',
                app + '**/*.html',
                tmpApp + "**.*.js"
            ]
        }
    };

    tsFiles = [
        src + '**/*.ts'
    ]

    var config = {
        src: src,
        app: app,
        tmp: tmp,
        tsFiles: tsFiles,
        tmpApp: tmpApp,
        browserSync: browserSync
    }

    return config;
}