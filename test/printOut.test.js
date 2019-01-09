const {printOut, printFrame} = require("../game")


test("Checks if printout works", function () {
    //Arrange
    console.log("hello?")

    //Act

    //Assert
})

test("Check if frames print out", function() {
    //Arrange
    var frame = [3,4]

    const expected = 7

    //Act
    var actual = printFrame(frame)

    //Assert
    expect(actual).toBe(expected)
    // if(actual == expected){
    //     console.log(":)")
    // }
})