#OpenLayers 3 for node.js.

Thanks to all giants I stand on.

##Build
Checkout the git submodule. Run `build.sh` to build the package.

##Testing
Run `run-test.js` to run a simple test. Make sure to install jsdom via `npm`.

##Using
Just use `npm link` to make the package available fo node. In your node project
use `npm link openlayers` to install it local. Use `require("openlayers").OpenLayers` in your code.
Or use the npm package via `npm install openlayers`. Some functions only work
with a mocked dom. For an example on how to mock the hole dom see `run-test.js`
