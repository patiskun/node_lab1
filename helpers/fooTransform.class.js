const { Transform } = require("stream");

const { shiftedDiff, indexEqualsValue } = require("./foo.js");

class EncryptTransform extends Transform {
    constructor(action){
        super();
        this.action = action;
    }

    _transform(chunk, enc, done){
        let result ='';

        switch (this.action) {
            case "1":
              chunk = chunk.toString();
              chunk = chunk.trim();
              const [str1, str2] = chunk.split(':')
              console.log(str1+" | "+str2);
              result = shiftedDiff(str1, str2);
              break;
            case "2":
              result = indexEqualsValue(JSON.parse(chunk.toString("utf8")));
              break;
            default:
              process.stderr.write(("✘ Erorr") + ' "Action not found :("\n');
              process.exit(1);
          }
        this.push(result.toString());
        done();
    }
}

module.exports = EncryptTransform;
