function shiftedDiff(string1, string2){

    for (let i = 0; i < string2.length; i++) {

        string1 = string1.charAt(string1.length - 1) + string1.substr(0, string1.length - 1);
        console.log(string1,string2,i+1);
        if (string1 === string2){
            console.log(i+1)
            return (i+1)
        }
    }
    return -1;
}
  
module.exports.shiftedDiff = shiftedDiff;

function indexEqualsValue(params){
    
    for (i=0; i<params.length; i++) {
        if (params[i]==i){
            // console.log("result"+ params[i]);
            return params[i];
        }
    }
    return -1;
}

module.exports.indexEqualsValue = indexEqualsValue;
  