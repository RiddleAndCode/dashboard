/* these are the configuration for the connection to the default server */
const initialConfig = {
    host: "ipdb3.riddleandcode.com",
    ws_port: 80,
    api: "/api/v1/",
    validTx: "streams/valid_transactions",
    secure: false
}


var httpProtocol = initialConfig.secure ? 'https://':'http://'
export var HTTP_API_PATH = httpProtocol + initialConfig.host + initialConfig.api

var wsProtocol = initialConfig.secure ? 'wss://':'ws://'
export var WS_API_PATH = wsProtocol + initialConfig.host.split(':')[0] +':' + initialConfig.ws_port + initialConfig.api + initialConfig.validTx

export var update_API = (host, port, api, validTx, secure) => {
    var protocol = secure ? 'https://':'http://'
    HTTP_API_PATH = protocol + host + api

    protocol = secure ? 'wss://':'ws://'
    WS_API_PATH = protocol + host.split(':')[0] +':' + port + api + validTx
}