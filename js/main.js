function mean(arr){
    let total = arr.length 
    let sum = arr.reduce((a,c) => a + c, 0)
    return sum/total 
  }
  
  //console.log(mean([14,45,59,12,34]))
  
  function median(arr){
    let sorted = arr.sort((a,b) => a -b)
    let n = sorted.length
    if(n % 2 === 0){
      return ((n/2) + ((n/2) +1)) / 2
    } else{
      return (n +1) /2
    }
  }
  
  //console.log(median([12, 3, 4, 6, 89, 90]))
  
  function mode(arr){
    let maxCount = 0
    let modeNums= []
    let obj = {}
    arr.forEach(x => {
      if(!obj[x]){
        obj[x] = 1
      } else{
        obj[x] += 1
      }
      if(obj[x] > maxCount){
        maxCount = obj[x]
        modeNums = [x]
     } else if(obj[x] === maxCount){
        modeNums.push(x)
      
      }
    })  
    return modeNums
    }