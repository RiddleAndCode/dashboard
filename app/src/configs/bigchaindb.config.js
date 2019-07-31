/* these are the configuration for the connection to the default server */
export var config = {
    host: "ipdb3.riddleandcode.com",
    ws_port: 80,
    api: "/api/v1/",
    validTx: "streams/valid_transactions",
    secure: false
}

var httpProtocol = config.secure ? 'https://':'http://'
export var HTTP_API_PATH = httpProtocol + config.host + config.api

var wsProtocol = config.secure ? 'wss://':'ws://'
export var WS_API_PATH = wsProtocol + config.host.split(':')[0] +':' + config.ws_port + config.api + config.validTx

export var update_API = (host, port, api, validTx, secure) => {
    config = {
        host: host,
        port: port,
        api: api,
        validTx: validTx,
        secure: secure
    }

    var protocol = secure ? 'https://':'http://'
    HTTP_API_PATH = protocol + host + api

    protocol = secure ? 'wss://':'ws://'
    WS_API_PATH = protocol + host.split(':')[0] +':' + port + api + validTx
}