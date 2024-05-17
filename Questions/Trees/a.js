class Trie {
  Javascript_keywords = [
    "const",
    "let",
    "var",
    "function",
    "Function",
    "for",
    "class",
  ];

  typing(typedWord) {
    var list = [];
    this.Javascript_keywords.forEach((keyword) => {
      var isWordTrue = false;
      /// for all keywords
      for (var i = 0; i < typedWord.length; i++) {
        /// for check typedWord
        if (typedWord[i] === keyword.toLowerCase()[i]) {
          /// for if already added || not
          if (list[0] !== keyword) {
            isWordTrue = true;
          }
        }
        /// for check other words
        else {
          isWordTrue = false;
          break;
        }
      }
      /// if typedWord === keyword
      if (isWordTrue) {
        list.push(keyword);
      }
    });
    return list;
  }
}

const trie = new Trie();
console.log(trie.typing("fun"));
