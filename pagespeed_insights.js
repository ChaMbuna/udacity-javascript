/**
 * @param {Object} results Google pagespeed insights results.
 */
function ruleList(results) {
    /** @type {Array} */
    var resultsRuleName = [];
    /** @type {Object} Isolates objects in rule results */
    var obj = results.formattedResults.ruleResults;
    for (var prop in obj) {
        /**
         * 
         * Cycle through all ruleResults.
         *
         * @type {Object} obj2
         * @property {Object} obj2.prop
         */
        var obj2 = obj[prop]; // 
        /**
         * Cycle through nested objects in ruleResults.
         */
        for (var prop2 in obj2) {
            /**
             * Find value for all localizedRuleName keys.
             */
            if (prop2.indexOf('localizedRuleName') > -1) {
                /**
                 * Add value to results.
                 */
                resultsRuleName.push(obj2[prop2]);
            }
        }
    }
    /** @returns {Array} resultsRuleName All values found for localizedRuleName. */
    return resultsRuleName;
}

function totalBytes(results) {
    /** @type {Number} */
    var byteCount = 0;
    /** @type {Object} */
    var obj = results.pageStats;
    /**
     * Cycle through pageStats.
     */        
    for (var prop in obj) {
        /**
         * Find value for each key containing the string 'Bytes'.
         */
        if (prop.indexOf('Bytes') > -1) {
                /**
                 * Add the number of bytes to the total.
                 */
                byteCount += parseInt(obj[prop]);
        }
    }
    /** @returns {Number} byteCount Total number of bytes. */
    return byteCount;
}

// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
 "kind": "pagespeedonline#result",
 "id": "/speed/pagespeed",
 "responseCode": 200,
 "title": "PageSpeed Home",
 "score": 90,
 "pageStats": {
  "numberResources": 22,
  "numberHosts": 7,
  "totalRequestBytes": "2761",
  "numberStaticResources": 16,
  "htmlResponseBytes": "91981",
  "cssResponseBytes": "37728",
  "imageResponseBytes": "13909",
  "javascriptResponseBytes": "247214",
  "otherResponseBytes": "8804",
  "numberJsResources": 6,
  "numberCssResources": 2
 },
 "formattedResults": {
  "locale": "en_US",
  "ruleResults": {
    "AvoidBadRequests": {
      "localizedRuleName": "Avoid bad requests",
      "ruleImpact": 0.0
    },
    "MinifyJavaScript": {
      "localizedRuleName": "Minify JavaScript",
      "ruleImpact": 0.1417,
      "urlBlocks": [
      {
        "header": {
       "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
       "args": [
        {
         "type": "BYTES",
         "value": "1.3KiB"
        },
        {
         "type": "INT_LITERAL",
         "value": "0"
        }
       ]
        },
        "urls": [
        {
          "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
          },
          {
           "type": "BYTES",
           "value": "717B"
          },
          {
           "type": "INT_LITERAL",
           "value": "1"
          }
         ]
        }
       },
       {
        "result": {
         "format": "Minifying $1 could save $2 ($3% reduction).",
         "args": [
          {
           "type": "URL",
           "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
          },
          {
           "type": "BYTES",
           "value": "258B"
          },
          {
           "type": "INT_LITERAL",
           "value": "0"
          }
         ]
        }
       }
      ]
     }
    ]
   },
   "SpriteImages": {
    "localizedRuleName": "Combine images into CSS sprites",
    "ruleImpact": 0.0
   }
  }
 },
 "version": {
  "major": 1,
  "minor": 11
 }
}

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));