module.exports = {
  "css": {
    "enabled": true,
    "src": [
      "scss/**/*.scss"
    ],
    "dest": "css/",
    "flattenDestOutput": true,
    "lint": {
      "enabled": false,
      "failOnError": true
    },
    "sourceComments": false,
    "sourceMapEmbed": false,
    "outputStyle": "expanded",
    "autoPrefixerBrowsers": [
      "last 2 versions",
      "IE >= 9"
    ],
    "includePaths": [
      "./node_modules"
    ],
    "sassdoc": {
      "enabled": false
    }
  },
  "browserSync": {
    "enabled": true,
    "port": 3050,
    "domain": "https://library.fable.site/",
    "startPath": "preview/1",
    "serveStatic": [
      "./"
    ],
    "watchFiles": [],
    "baseDir": "./",
    "openBrowserAtStart": false,
    "browser": [
      "Google Chrome"
    ],
    "tunnel": false,
    "reloadDelay": 50,
    "reloadDebounce": 750,
    // https://www.browsersync.io/docs/options#option-rewriteRules
    "rewriteRules": [
      // {
      //   match: /css\/app\.css/g,
      //   replace: 'css/style.css'
      // }
    ]
  },
  "js": {
    "enabled": false
  },
  "patternLab": {
    "enabled": false
  },
  "icons": {
    "enabled": false
  },
  "drupal": {
    "enabled": false
  }
};
