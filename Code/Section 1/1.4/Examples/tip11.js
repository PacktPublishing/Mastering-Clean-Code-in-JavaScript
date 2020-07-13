function getSensorAData(cb) {
    setTimeout(() => {
        cb({
            min: 8, 
            max: 118
        });
    }, 2000);
}

function getSensorBData(cb) {
    setTimeout(() => {
        cb({
            temp: 78,
            value: 26
        });
    }, 500);
}

function getSensorCData(cb) {
    setTimeout(() => {
        cb({
            min: 14,
            max: 92,
            temp: 64,
            value: 12
        });
    }, 2000)
}

function combineSensorData() {
    getSensorAData((sensorAData) => {
        console.log("Sensor A Data: ", sensorAData);
        
        getSensorBData(sensorBData => {
            console.log("Sensor B Data: ", sensorBData);

            getSensorCData(sensorCData => {
                console.log("Sensor C Data: ", sensorCData);

                //Do some computation with sensor data
            })
        });
    });
}