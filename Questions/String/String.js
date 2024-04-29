//// # String
// # reverse() --> reverse string 
// # lengthOfFirstWord() --> length of first word
// # lengthOfLastWord --> length of last word


class _String{
  constructor(sentence){
    this.sentence = sentence;
  }
  
  reverse(){
    return this.sentence.split(" ").reverse().join(" ");
  }

  lengthOfFirstWord(){
    return this.sentence.split(" ")[0].length;
  }

  lengthOfLastWord(){
    var len = this.sentence.split(" ").filter((a)=> a!=="").length;
    return this.sentence.split(" ").filter((a)=> a!=="")[len - 1].length;
  }
}

const sen = new _String("HelloMYLong World! ohh ");
console.log(sen.lengthOfLastWord());