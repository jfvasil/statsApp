//value pulls 


let modeValues = document.querySelector('#Mode').value
let minMaxValues = document.querySelector('#Minmax').value
let rangeValues = document.querySelector('#Range').value

//event listeners 
document.querySelector('#mean-button').addEventListener('click', meanPrint)
document.querySelector('#median-button').addEventListener('click', medianPrint)
document.querySelector('#mode-button').addEventListener('click', modePrint)
document.querySelector('#minmax-button').addEventListener('click', minMaxPrint)
document.querySelector('#range-button').addEventListener('click', rangePrint)

//event functions 
function meanPrint(){
let meanValues = document.querySelector('#Mean').value
   let arrString = meanValues.split(' ')
    let arr = arrString.map(x => Number(x))
    let answer = mean(arr)
    document.querySelector('#mean-results').innerHTML = answer.toFixed(2)
    console.log(answer)
}
function medianPrint(){
    let medianValues = document.querySelector('#Median').value
       let arrString = medianValues.split(' ')
        let arr = arrString.map(x => Number(x))
        let answer = median(arr)
        document.querySelector('#median-results').innerHTML = answer
        console.log(answer)
    }
function modePrint(){
let modeValues = document.querySelector('#Mode').value
    let arrString = modeValues.split(' ')
    let arr = arrString.map(x => Number(x))
    let answer = mode(arr)
    document.querySelector('#mode-results').innerHTML = answer
    console.log(answer)
    }
function minMaxPrint(){
let minMaxValues = document.querySelector('#Minmax').value
    let arrString = minMaxValues.split(' ')
    let arr = arrString.map(x => Number(x))
    let firstAnswer = minMax(arr)
    let answer = firstAnswer.toString()
    document.querySelector('#minmax-results').innerHTML = answer
    console.log(answer)
    }
function rangePrint(){
    let rangeValues = document.querySelector('#Range').value
        let arrString = rangeValues.split(' ')
        let arr = arrString.map(x => Number(x))
        let answer = range(arr)
        document.querySelector('#range-results').innerHTML = answer
        console.log(answer)
        }
                          

//calc functions
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

    function range(arr){
        let sorted = arr.sort((a,b) => a -b)
        return Math.abs(sorted[0] - sorted[arr.length - 1])
      }

      