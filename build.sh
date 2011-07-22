#!/bin/sh
cp mockdom.js node.js deps/openlayers3/lib
cp node.cfg deps/openlayers3/build
cd deps/openlayers3/build
python build.py node
cd ../../..

cp deps/openlayers3/build/OpenLayers.js ./lib/
#node run-test.js
rm deps/openlayers3/lib/mockdom.js
rm deps/openlayers3/lib/node.js
rm deps/openlayers3/build/OpenLayers.js
rm deps/openlayers3/build/node.cfg
