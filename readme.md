### Sign EVM transactions with mnemonic and optional bip44 path

#### Example

```
import { getAddress, getPrivateKey, signTx } from `eth_mnemonic_signer`

const mnemonic = 'all all all all all all all all all all all all'

const transaction = {
    to: `0x8a65ac0e23f31979db06ec62af62b132a6df4741`,
    data: `0x12345c0e23f31979db06ec62af62b132a6df4741`,
    gasLimit: 200000,
    gasPrice: `0x123`,
    value: '0x456',
    chainId: 1,
}

await getAddress(mnemonic)
`0x73d0385f4d8e00c5e6504c6030f47bf6212736a8`

await signTx(transaction, mnemonic)
`0xf8648082012383030d40948a65ac0e23f31979db06ec62af62b132a6df47418201238025a03ab47df7bc1fbc3c491fb35d0261b085ae9840c4ecfe72a2e29543045cd82c2fa003833f1220a80b11ad6eb6b55068604612bedf91dd5480f594aeb1efa0612e4a`

await getPrivateKey(mnemonic)
`759e46263f1505994d11142d70027975c9b9fef15489b09bd987eb8a31aba0db`

// custom hd path
await getAddress(mnemonic, `m/44'/60'/0'/0/1`)
`0xfa01a39f8abaeb660c3137f14a310d0b414b2a15`

```
