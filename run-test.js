#!/usr/bin/env node
// stolen from: http://trac.osgeo.org/openlayers/browser/trunk/openlayers/tests/node.js/run-test.js?rev=11551
// Requires:
/// 0. nodejs
//  1. jsdom installed (npm install jsdom)
//  2. A build profile with mockdom.js included in [first], and node.js
//     included in [last], at ../../build/OpenLayers.js , like node-tests.js.
//  3. Run with node run-tests.js
//
//  Missing: integration with a solid node.js testrunner.
var jsdom = require('jsdom');
jsdom.env('<html><body></body></html>', function(errors, window) {
    for (var i in window) {
        if (i == "console") {
            continue;
        }
        eval(i+"=window['"+i+"'];");
    }
    OpenLayers = require("./lib/OpenLayers.js").OpenLayers;
    var map = new OpenLayers.Map(document.createElement("map"));
    map.addLayer(new OpenLayers.Layer("", {isBaseLayer:true}));
    map.setCenter(new OpenLayers.LonLat(-71,42), 10);
    var px = map.getPixelFromLonLat(map.getLonLatFromPixel(new OpenLayers.Pixel(100,100)));
    console.log(px);
    px = map.getLonLatFromPixel(map.getPixelFromLonLat(new OpenLayers.LonLat(10,10)));
    console.log(px);

});
