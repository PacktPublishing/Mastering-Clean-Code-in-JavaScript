function draw(element, config) {
    element.style.width = config.width;
    element.style.height = config.height;
    element.style.backgroundColor = config.backgroundColor;
    element.style.color = config.color;
    //Do something else to draw the shape
    //.......
    //.......
    return element;
}

draw(document.getElementById("whatever"), {
    width: 240,
    height: 300,
    backgroundColor: 'red',
    color: 'green',
    margin: 14,
    padding: {
        paddingLeft: 20,
        paddingRight: 20,
        paddingTop: 0,
        paddingBottom: 0
    }
});