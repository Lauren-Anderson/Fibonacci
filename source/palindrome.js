class Palindrome{
  constructor(){
    this.isPalindrome = function(string){
      if(!string){return false};
      if(string.length == 1){return true};
      var half = Math.floor(string.length/2);
      var lastIndex = string.length - 1;
      for(var i = 0; i < half; i++){
        if(string[i] != string[lastIndex]){
          return false;
        } else {
          lastIndex--;
        }
      }
      return true;
    }
  }

}

export default Palindrome;
