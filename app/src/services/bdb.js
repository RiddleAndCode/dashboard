import * as driver from 'bigchaindb-driver';
import { HTTP_API_PATH } from '../configs/bigchaindbConfig'

// var protocol = bigchaindb.secure?'https://':'http://';

export var conn = new driver.Connection(HTTP_API_PATH);

export const getTransaction = (txId) => {
    return conn.getTransaction(txId).then(value => {
        return value
    });
}

export const getBlock = (blockHeight) => {
    return conn.getBlock(blockHeight);
}