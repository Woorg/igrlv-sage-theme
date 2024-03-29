module.exports = {
    "postcss": [
    {
        "name": "postcss-animation",
        "options": {

        }
    },
    {
        "name": "postcss-preset-env",
        "options": {
            "preset": "safe"
        }
    },
    {
        "name": "postcss-fixes",
        "options": {

        }
    },
    {
        "name": "postcss-flexbugs-fixes",
        "options": {

        }
    }

    ],
    "svg": {
        "active": true,
        "workflow": "symbols",
        "symbolsConfig": {
            "loadingType": "inject",
            "usePolyfillForExternalSymbols": true,
            "pathToExternalSymbolsFile": ""
        }
    },
    "css": {
        "workflow": "manual"
    },
    "js": {
        "workflow": "modular",
        "bundler": "webpack",
        "lint": false,
        "useBabel": true,
        "removeConsoleLog": false,
        "webpack": {
            "useHMR": false,
            "providePlugin": {}
        },
        "jsPathsToConcatBeforeModulesJs": [],
        "lintJsCodeBeforeModules": false,
        "jsPathsToConcatAfterModulesJs": [],
        "lintJsCodeAfterModules": false
    },
    "sourcemaps": {
        "js": {
            "active": true,
            "inline": true
        },
        "css": {
            "active": true,
            "inline": true
        }
    },
    "notifyConfig": {
        "useNotify": false,
        "title": "TARS notification",
        "sounds": {},
        "taskFinishedText": "Task finished at: "
    },
    "minifyHtml": false,
    "generateStaticPath": true,
    "devPath": "./static/dev/",
    "buildPath": "./static/prod/",
    "useBuildVersioning": false,
    "useArchiver": false,
    "ulimit": 4096,
    "templater": "pug",
    "cssPreprocessor": "scss",
    "useImagesForDisplayWithDpi": [
        96,
        192,
        288
    ],
    "fs": {
        "staticFolderName": "assets",
        "imagesFolderName": "images",
        "componentsFolderName": "blocks"
    },
    "staticPrefix": "../assets/"
};