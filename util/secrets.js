function getSecret(argName) {
    var value = process.env[argName];
    if ((process.env.IS_DOCKER_SWARM && process.env.IS_DOCKER_SWARM == "true") == true) {
        value = fs.readFileSync('/run/secrets/' + argName.toLowerCase(), 'utf8').trim()
    }
    return value;
}

module.exports = getSecret;