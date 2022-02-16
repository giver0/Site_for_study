arrayDiff([1,2,3,4],[1,3]) /*== [2]*/
//arrayDiff([1,2,2,2,3],[2])/* == [1,3]*/

function arrayDiff(a, b) {
    for (let i = 0; i < b.lenght; i++){
      for (let j = 0; j <a.lenght; j++){
        if (a[j] === b[i]){
            a.splice(j,1)
            
        }  
      }      
    } 
    console.log(a)   
  }
