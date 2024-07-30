// const forge = require('node-forge');
// class RSAOAEP2048 {
//     constructor() {
//         this.RSA = forge.pki.rsa;
//         this.generateKeyPair();
//         this.publicKeyPem = forge.pki.publicKeyToPem(this.publicKey)
//         this.privateKeyPem = forge.pki.privateKeyToPem(this.privateKey)
//     }

//     generateKeyPair() {
//         this.RSAHandle = this.RSA.generateKeyPair({ bits: 256, e: 0x3e9 });
//         this.publicKey = this.RSAHandle.publicKey;
//         this.privateKey = this.RSAHandle.privateKey;
//     }

//     encrypt(data) {
//         return this.publicKey.encrypt(data, 'RSA-OAEP', {
//             md: forge.md.sha256.create(),
//             mgf1: {
//                 md: forge.md.sha1.create()
//             }
//         });
//     }
//     decrypt(data) {
//         return this.privateKey.decrypt(data, 'RSA-OAEP', {
//             md: forge.md.sha256.create(),
//             mgf1: {
//                 md: forge.md.sha1.create()
//             }
//         });
//     }

// }
// a = new RSAOAEP2048()
// console.log(a.privateKey.p.toString(16))
// console.log(a.privateKey.q.toString(16))

let p = BigInt(`0xfe28b82fe610d2b5518217be32d10e87`)
let q = BigInt(`0xb82a3d03b283eaa01905245cf8b1b0f5`)
let g =Buffer.from('Hacek40rEqs', 'utf8').toString('hex')
//486163656b343072457173
g = BigInt(`0x${g}`)
let phi = (p-BigInt("1"))*(q-BigInt("1"))
console.log(phi.toString(16))
p = p*q
console.log(p.toString(16))
let x = BigInt("0x3e9")
let y = g**x % p
console.log(y.toString(16))
