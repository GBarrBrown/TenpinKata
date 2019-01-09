
function printOut(frame) {
    console.log(frame);
}

function printFrame(frame) {
    console.log(frame);
    return frame[0] + frame[1]
}

module.exports = {
    printOut,
    printFrame
}