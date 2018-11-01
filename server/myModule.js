module.exports = {
    greet,
    greetAsync
};

function greet(name){
    return `Hello,${name}`;
}

function greetAsync(name, callback){
    var greet = `Hello,${name}`
    callback(greet);
}