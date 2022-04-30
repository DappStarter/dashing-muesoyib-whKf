require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'good argue sure spot toy note remind protect inflict knock fog shield'; 
let testAccounts = [
"0x18dbf0302891965ebaeda8e3592a540a9d06c661a49e19ebd51196bbec354dec",
"0x0b69800febf03afb7c0681599a22557b86a19cd5583fd29c53c9f924b275141b",
"0x7b36037fdc8ea6da27f58d72435cf61e17579681afa0079dc12f67030b132940",
"0x1462e072c77d94f2197cc8cfdfa61fbd93eda18d76bba20ce1aa294d9ca0d2fe",
"0x7f8310b81b6232b7dae3cb869690b74819549fcad59129408b8d3d05be3f7926",
"0xd27bb1c74169b47823755fff9510aa27f57c897bfd14db9b66141c5510c6f192",
"0x5343919b936a10c00ddfc22786501c84944673dfc4f54fd45a84505f6305e54e",
"0x9192ea39f990ad5c9141658bcbe4d72e007b4f4c409b137273128863029a01d3",
"0x75ca5eba38ed5531df8095c3cabbb5fcf528ee60ccb5426300a09e9b8875e469",
"0x5c93603b378c4a5f1e264b567affe5e920c94070fcc1b51a788bf99898482c0a"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
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

