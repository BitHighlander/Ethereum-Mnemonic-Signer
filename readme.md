## Sign Ethereum transactions with a mnemonic and optional HD path, or private key.

### Example 1

Sign with mnemonic and default path `m/44'/60'/0'/0/0`

`
const signedTx = await SignEthTx('all all all all all all all all all all all all', {
    to: '0x8a65ac0e23f31979db06ec62af62b132a6df4741',
    value: '0x111'
    data: '0x222`,
    gasLimit: '0x333'
    gasPrice: '0x444'
})
`
