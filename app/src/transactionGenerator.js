import * as driver from 'bigchaindb-driver';
import { HTTP_API_PATH } from './configs/bigchaindb.config';

const alice = new driver.Ed25519Keypair()
const bob = new driver.Ed25519Keypair()

export function createTx(){
    const conn = new driver.Connection(HTTP_API_PATH)

    const tx = driver.Transaction.makeCreateTransaction(
        { city: 'Berlin, DE', temperature: 22, datetime: new Date().toString() },
        { what: 'My first BigchainDB transaction' },
        [ driver.Transaction.makeOutput(
                driver.Transaction.makeEd25519Condition(alice.publicKey))
        ],
        alice.publicKey
    )
    const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
    conn.postTransactionAsync(txSigned).then(tx => console.log(tx.id))
}

export function transferTx(){
    const conn = new driver.Connection(HTTP_API_PATH)

    const tx = driver.Transaction.makeCreateTransaction(
        { city: 'Berlin, DE', temperature: 22, datetime: new Date().toString() },
        { what: 'My first BigchainDB transaction' },
        [ driver.Transaction.makeOutput(
                driver.Transaction.makeEd25519Condition(alice.publicKey))
        ],
        alice.publicKey
    )
    const txSigned = driver.Transaction.signTransaction(tx, alice.privateKey)
    conn.postTransactionCommit(txSigned).then(tx => {
        const txTransferBob = driver.Transaction.makeTransferTransaction(
            [{ tx: tx, output_index: 0 }],
            [driver.Transaction.makeOutput(driver.Transaction.makeEd25519Condition(bob.publicKey))],
            {message: 'Transfered to Bob'}
            )
            let txTransferBobSigned = driver.Transaction.signTransaction(txTransferBob, alice.privateKey)
            conn.postTransactionAsync(txTransferBobSigned).then(tx => console.log(tx.id));
    })
}