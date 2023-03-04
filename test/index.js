const expect = require('chai').expect;
const indexRoute = require('../index');

//  Testing index.js Module
describe("Wee Personal Server Module", () => {
    // Testing the initial Route
    describe("Initial Route", () => {
        it ("Shows The Index (/) Route", () => {
            console.log(indexRoute);
            // expect(indexRoute)
        });
    });
});