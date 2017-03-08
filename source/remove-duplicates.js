class RemoveDuplicates {
    remove(arr){
      var obj = {};
      var noDuplicateArray = [];
      for(var i = 0; i < arr.length; i++){
        var currentIndex = arr[i];
        if(obj[currentIndex] === undefined){
          obj[currentIndex] = currentIndex;
          noDuplicateArray.push(currentIndex);
        }
      }
      return noDuplicateArray;
    }
}

export default RemoveDuplicates;
