import { EthTx, getAddress, getPrivateKey, signMessage, signTx } from "."

const mnemonic = 'all all all all all all all all all all all all'

const transaction: EthTx = {
    to: `0x8a65ac0e23f31979db06ec62af62b132a6df4741`,
    data: `0x12345c0e23f31979db06ec62af62b132a6df4741`,
    gasLimit: 200000,
    gasPrice: `0x123`,
    value: '0x456',
    chainId: 1,
}

const message = 'Message to sign'

const main = async () => {
     // defaults to m/44'/60'/0'/0/0
    const address0 = await getAddress(mnemonic)
    const signedTx0 = await signTx(transaction, mnemonic)
    const privateKey0 = await getPrivateKey(mnemonic)
    const signedMessage0 = await signMessage(message, mnemonic)

    // custom bip44 path
    const bip44Path = `m/44'/60'/0'/0/1`
    const address1 = await getAddress(mnemonic, bip44Path)
    const signedTx1 = await signTx(transaction, mnemonic, bip44Path)
    const privateKey1 = await getPrivateKey(mnemonic, bip44Path)
    const signedMessage1 = await signMessage(message, mnemonic, bip44Path)

    console.log('address0', address0)
    console.log('signedTx0', signedTx0)
    console.log('privateKey0', privateKey0)
    console.log('signedMessage0', signedMessage0)

    console.log('address1', address1)
    console.log('signedTx1', signedTx1)
    console.log('privateKey1', privateKey1)
    console.log('signedMessage1', signedMessage1)

}
main()