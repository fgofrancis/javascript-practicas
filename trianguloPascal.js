class PascalTriangle {
    constructor(n) {
      this.n = n;
    }
  
    factoriel(m) {
      let result = 1;
      if (m === 0) {
        return 1;
      }
      while (m > 0) {
        result *= m;
        m--;
      }
      return result;
    }
    fill() {
      let arr = [];
      for (let i = 0; i < this.n; i++) {
        arr.push([]);
      }
  
      for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
          arr[i].push(this.factoriel(i) / (this.factoriel(j) * this.factoriel(i - j)));
        }
      }
  
      return arr;
    }
  }

  let PascalTriangles = new PascalTriangle(5);
 console.log(PascalTriangles.fill())
