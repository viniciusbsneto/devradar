const parseStringAsArray = require("./parseStringAsArray")
// @ponicode
describe("parseStringAsArray", () => {
    test("0", () => {
        let callFunction = () => {
            parseStringAsArray("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            parseStringAsArray("Foo bar,")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            parseStringAsArray(",")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            parseStringAsArray("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            parseStringAsArray(",foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            parseStringAsArray(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
