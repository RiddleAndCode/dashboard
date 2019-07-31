import * as driver from 'bigchaindb-driver';
import { HTTP_API_PATH } from '../configs/bigchaindb.config'

// var protocol = bigchaindb.secure?'https://':'http://';

export var conn = new driver.Connection(HTTP_API_PATH);

export var updateConn = (http_api) => {
    conn = new driver.Connection(http_api);
}

export const getTransaction = (txId) => {
    return conn.getTransaction(txId).then(value => {
        return value
    });
}

export const getBlock = (blockHeight) => {
    return conn.getBlock(blockHeight);
}