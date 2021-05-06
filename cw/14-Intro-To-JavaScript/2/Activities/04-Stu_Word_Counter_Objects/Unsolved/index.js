function wordCount(myString) {
    // Convert string to an array of words
    var stringArray = myString.split(" ")

  
    // An object to hold word frequency
    var wordFreq = {}
  
    // Iterate through the array
    for (var i = 0; i < stringArray.length; i++) {
      var currWord = stringArray[i]
      if (currWord in wordFreq) {
        wordFreq[currWord] += 1
      }
      else wordFreq[currWord] = 1
    }
    return wordFreq

  }
  
  console.log(wordCount("I yam what I yam and always will be what I yam"));
  