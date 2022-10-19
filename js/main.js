function mean(arr){
    let total = arr.length 
    let sum = arr.reduce((a,c) => a + c, 0)
    return sum/total 
  }
  function minMax(arr){
    let sorted = arr.sort((a,b) => a -b)
    return [sorted[0], sorted[sorted.length -1]]
  }
  
  
  function median(arr){
    let sorted = arr.sort((a,b) => a -b)
    let n = sorted.length
    if(n % 2 === 0){
      return (sorted[(n/2) -1] + sorted[(n/2)]) / 2
    } else{
      return sorted[((n +1) /2) - 1]
    }
  }
  
  
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