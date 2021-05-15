require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'include knock flame success stomach crawl pumpkin unable gown light army gift'; 
let testAccounts = [
"0x91ad93986491f1b463605cbfb50d32d830b07d031d6b2c3e98d7f1f1a9b7c080",
"0x6faea92a6e556ad66d73acf6ecd4ee2d14a3fe2ee99468682fd7def940e59521",
"0x00b9278e653fb75d239ec10350414ce22aec24f24471b88c1707b79ceac8e15b",
"0x96e1a02c21a854b18db7312dfe8a03a841830850fe36b6b8e0ece2866a75af7e",
"0x045de722615cba7245ded315f562bfc3ac2b923b6bcccde65edee002a37dae4f",
"0x0a8a39a8b8829aae3f326519606e24d6efac72e04067acc2698afad559bf4a48",
"0x30748055febf332134d55ea24d70b1c3275c8be75efb5ebd044896115556c18b",
"0x34fe2efbc22d053cea094f2227b0463693a036efbfad49b7e575ef687f0000be",
"0xbbc77278093f456d29c3ca9b66ff1dd13f71ce5ad6b20936aa669e8896c5df17",
"0xe83a7ffbd656000e1133e552666c02bce50db80402c910e26071842d2fef10bb"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
