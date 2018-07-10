let { assert } = require("chai");
let objectDeepIteration = require("./index");

describe("object-deep-iteration", function() {

    it("deep object", function() {
       let obj = {
            name: "test",
            flags: {
                checked: true
            }
        };

        let output = [];

        let iteration = function(value, path) {
            output.push({ path: path, value: value });  
        };

        objectDeepIteration(obj, iteration);

        assert.deepEqual(output, [ 
            { path: 'name', value: 'test' },
            { path: 'flags', value: { checked: true } },
            { path: 'flags.checked', value: true } 
        ]);
  });
})
