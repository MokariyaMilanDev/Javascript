//// # String
// # reverse() --> reverse string 
// # lengthOfFirstWord() --> length of first word
// # lengthOfLastWord() --> length of last word
// # countCharcters() --> count charcters of string
// # countWords() --> count words of string


class _String{
  constructor(sentence){
    this.sentence = sentence;
  }
  
  reverse(){
    return this.sentence.split(" ").reverse().join(" ");
  }

  countCharcters(){
    return this.sentence.split("").length;
  }

  countWords(){
    return this.sentence.split(" ").length;
  }

  lengthOfFirstWord(){
    return this.sentence.split(" ")[0].length;
  }

  lengthOfLastWord(){
    var len = this.sentence.split(" ").filter((a)=> a!=="").length;
    return this.sentence.split(" ").filter((a)=> a!=="")[len - 1].length;
  }

  isPalindrome(){
    const reversedString = this.sentence.split("").reverse().join("");
    return this.sentence === reversedString;
  }
}




const sen = new _String("mererem");
console.log(sen.isPalindrome());