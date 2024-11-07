// funzione per loggare in console le data e i tipi di richieste
const logger = (req, res, next) => {
    const now = new Date().toString();
    console.error(`
        Date: ${now}
        Method: ${req.method}
        URL: ${req.url}`);
    next();
}

module.exports = logger;