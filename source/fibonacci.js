class Fibonacci {
  getFibonacciNumber(index){
    if(index === 0){
      return 0;
    }else if(index === 1){
      return 1;
    }
    return this.getFibonacciNumber(index-1) + this.getFibonacciNumber(index-2);
  }

  getFibonacci(n){
    let arr = [];
    for(let i = 0; i < n; i++){
      arr.push(this.getFibonacciNumber(i));
    }
    return arr;
  }
}

export default Fibonacci;
