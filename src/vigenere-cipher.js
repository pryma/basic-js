var regex = /^[A-Z]$/i;
class VigenereCipheringMachine {

    constructor(type = true) {
        this.type = type

    }
    encrypt(message, key) {
        if (!message || !key) {
            throw new Error('Error');
        }
        let result = new Array();
                
        key = this.newKey(message.toUpperCase(), key.toUpperCase());
        message = this.getArray(message.toUpperCase());
        
        for (let i = 0; i < key.length; i++) {
            if (typeof key[i] == 'number') {
                let code = key[i] + message[i];
                if (code >= 26) {
                    code = code - 26;
                }
                result.push(String.fromCodePoint(code + 65));
            }
            else {
                result.push(key[i]);
            }
        }
        if (this.type) {
            return result.join('');
        } else {
            return result.reverse().join('');
        }
    }

    decrypt(message, key) {
        if (!message || !key) {
            throw new Error('Error');
        }
        let result = [];

        key = this.newKey(message.toUpperCase(), key.toUpperCase());
        message = this.getArray(message.toUpperCase());
        
        for (let i = 0; i < key.length; i++) {
            if (typeof key[i] == 'number') {

                let code = message[i] - key[i];

                if (code < 0) {
                    code = 26 - Math.abs(code);
                } 
                result.push(String.fromCodePoint(code + 65));
            }
            else {
                result.push(key[i]);
            }
        }
        if (this.type) {
            return result.join('');
        } else {
            return result.reverse().join('');
        }
    }

    getArray(message) {
        let result = new Array();
        for (let chr of message) {
            if (regex.test(chr)) {
                result.push(chr.codePointAt() - 65)
            } else {
                result.push(chr)
            }
        }
        return result;
    }

    newKey(message, key) {
        let i = 0
        let newKey = new Array();
        for (let chr of message) {
            if (!regex.test(chr)) {
                newKey.push(chr);
            } else {
                newKey.push(key[i]);
                i++;
            }
            if (i > key.length - 1) {
                i = 0;
            }
        }
        return this.getArray(newKey);
    }
}

module.exports = VigenereCipheringMachine;