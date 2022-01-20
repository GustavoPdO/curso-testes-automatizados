class StringManipulations {
  /**
   * Class for string manipulations
   * @param  {String} string
   */
  constructor(string) {
    this.string = string;
  }

  /**
   * Returns the first substring that matches the given string
   * @param  {String} subStr  substring to be matched
   * @return {String}
   */
  findFirstMatch(subStr) {
    const matchIndex = this.string.indexOf(subStr);

    if (matchIndex > -1) {
      return this.string.slice(matchIndex, matchIndex + subStr.length);
    }
    return "";
  }

  /**
   * Returns the last substring that matches the given string
   * @param  {String} subStr  substring to be matched
   * @return {String}
   */
  findLastMatch(subStr) {
    const matchIndex = this.string.lastIndexOf(subStr);

    if (matchIndex > -1) {
      return this.string.slice(matchIndex, matchIndex + subStr.length);
    }
    return "";
  }

  /**
   * Returns the fsubstring between two given other strings
   * @param  {String} subStr1  begining of the match
   * @param  {String} subStr2  ending of the match
   * @return {String}
   */
  substringBetweenMatches(subStr1, subStr2) {
    const firstMatch = this.string.indexOf(subStr1);
    const secondMatch = this.string.lastIndexOf(subStr2);

    if (firstMatch > -1 && secondMatch > -1) {
      return this.string.slice(firstMatch + subStr1.length, secondMatch);
    }
    return "";
  }

  /**
    Given the string attribute of the class, 
    return a string made of the first 2
    and the last 2 chars of the original string.
    If the string length is less than 2, 
    return instead the empty string.
    * @return {String}
    */
  both_ends() {
    if (this.string.length < 2) {
      return "";
    }

    return this.string.slice(0, 2) + this.string.slice(-2);
  }

  /**
     Given a string, return a string
    where all occurences of its first char have
    been changed to '*', except do not change
    the first char itself.
    e.g. 'babble' yields 'ba**le'
    * @param  {String} str1  
    * @return {String}
    */
  fix_start(str1) {
    const initial = str1[0];
    const regex = new RegExp(`${initial}`, "gi");
    return initial + str1.slice(1).replace(regex, "*");
  }
}

module.exports = StringManipulations;
