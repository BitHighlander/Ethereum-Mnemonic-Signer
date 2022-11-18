import { mnemonicToSeed, validateMnemonic } from 'bip39'
import { hdkey } from 'ethereumjs-wallet'
import { ethers } from 'ethers'

export type EthTx = {
    from?: string,
    gasLimit?: number,
    maxFeePerGas?: string,
    maxPriorityFeePerGas?: string,
    gasPrice?: string,
    input?: string,
    nonce?: number,
    to?: string,
    value?: string
    data?: string
    chainId?: number
}

export const signMessage = async (message: string, mnemonic: string, bip44Path: string = `m/44'/60'/0'/0/0`) => {
    const privateKey = await getPrivateKey(mnemonic, bip44Path)
    const ethersWallet = new ethers.Wallet(privateKey)
    return ethersWallet.signMessage(message)
}

export const signTx = async (tx: EthTx, mnemonic: string, bip44Path: string = `m/44'/60'/0'/0/0`) => {
    const privateKey = await getPrivateKey(mnemonic, bip44Path)
    const ethersWallet = new ethers.Wallet(privateKey)
    return ethersWallet.signTransaction(tx)
}

export const getAddress = async (mnemonic: string, bip44Path: string = `m/44'/60'/0'/0/0`) =>{
    if(!validateMnemonic(mnemonic)) throw new Error('invalid mnemonic')
    const hdWallet = hdkey.fromMasterSeed(await mnemonicToSeed(mnemonic))
    const wallet = hdWallet.derivePath(bip44Path).getWallet()
    return '0x' + wallet.getAddress().toString("hex")
}

export const getPrivateKey = async (mnemonic: string, bip44Path: string = `m/44'/60'/0'/0/0`) => {
    if(!validateMnemonic(mnemonic)) throw new Error('invalid mnemonic')
    const hdWallet = hdkey.fromMasterSeed(await mnemonicToSeed(mnemonic))
    return hdWallet.derivePath(bip44Path).getWallet().getPrivateKey().toString("hex")
}
