const { exportAllDeclaration } = require("@babel/types");
const getURLByLocation = require("./../index");
test("Returns user to located website by country ", () => {
    expect (getURLByLocation("US")).toBe("/home");
});