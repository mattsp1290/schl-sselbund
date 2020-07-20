function isDocker(args) {
    return (process.env.IS_DOCKER && process.env.IS_DOCKER == "true") == true;
}

module.exports = isDocker;