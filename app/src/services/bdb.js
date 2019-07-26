import * as driver from 'bigchaindb-driver';
import bigchaindb from '../configs/bigchaindb.config.json'

var protocol = bigchaindb.secure?'https://':'http://';

var API_PATH = protocol + bigchaindb.host + bigchaindb.api
var conn = new driver.Connection(API_PATH);

export const getTransaction = (txId) => {
    return conn.getTransaction(txId).then(value => {
        return value
    });
}

export const getBlock = (blockHeight) => {
    return conn.getBlock(blockHeight);
}

export const setNewConnection = (host, ws_port, api) => {

}