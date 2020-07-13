"use strict"

const config = {
    fbApiKey: 'snfa9f7yh43f30j03t4hg34',
    googleApiKey: '4jhu954htgh39g343g',
    linkedInApiKey: 'jo2045349jnfinl3436787'
};

Object.freeze(config);

console.log(config);

config.googleApiKey = "";

console.log(config);