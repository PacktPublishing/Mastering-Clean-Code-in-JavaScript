function draw(element, config) {
    let defaults = {
        width: 200,
        height: 200,
        margin: 28,
        padding: 14
    };
    // config = Object.assign(defaults, config);
    config = {
        ...defaults,
        ...config       //WARNING: config must come second!!
    }
    console.log(config);
}

draw(null, {margin: 0, padding: 0});