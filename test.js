var caesar = require('./index')
,   shift = 3
,   plaintext = 'The Quick Brown Fox'
,   ciphertext = caesar.encrypt(shift, plaintext)
,   decrypted = caesar.decrypt(shift, ciphertext)

console.log(plaintext)
console.log(ciphertext)
console.log(decrypted)
