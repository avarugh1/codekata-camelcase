String.prototype.camelCase=function(){
    let ret = "";

    if(this.length < 1) return ret;
    let foundSpace = true; // to capitalize the first letter
    for(let i = 0;i < this.length; i++){
        if(this[i] !== " "){
            if(foundSpace){
                ret += this[i].toUpperCase();
            }else{
                ret += this[i];
            }
            foundSpace = false;
        }else{
            foundSpace = true;
        }
    }

    return ret;
  }

console.log("test case".camelCase());
console.log(" camel case word".camelCase());
console.log("say hello ".camelCase());
