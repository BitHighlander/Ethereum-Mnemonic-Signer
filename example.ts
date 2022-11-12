import { EthTx, getAddress, getPrivateKey, signTx } from "."

const mnemonic = 'all all all all all all all all all all all all'

const transaction: EthTx = {
    to: `0x8a65ac0e23f31979db06ec62af62b132a6df4741`,
    data: `0x12345c0e23f31979db06ec62af62b132a6df4741`,
    gasLimit: 200000,
    gasPrice: `0x123`,
    value: '0x456',
    chainId: 1,
}

const main = async () => {
     // defaults to m/44'/60'/0'/0/0
    const address0 = await getAddress(mnemonic)
    const signedTx0 = await signTx(transaction, mnemonic)
    const privateKey0 = await getPrivateKey(mnemonic)

    const address1 = await getAddress(mnemonic, `m/44'/60'/0'/0/1`)
    const signedTx1 = await signTx(transaction, mnemonic, `m/44'/60'/0'/0/1`)
    const privateKey1 = await getPrivateKey(mnemonic, `m/44'/60'/0'/0/1`)

    console.log('address1', address0)
    console.log('signedTx1', signedTx0)
    console.log('privateKey1', privateKey0)

    console.log('address2', address1)
    console.log('signedTx2', signedTx1)
    console.log('privateKey2', privateKey1)
}
main()