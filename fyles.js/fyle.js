function getMathResult (num,time) { debugger
   if( typeof(time) !== 'number' && time <= 0) { debugger
return num ;debugger
   } 
   let str = '';debugger

   for( let i = 1;i <= time; i++){ debugger
    if( i === time){ debugger
        str += `${num *i}`; debugger
    } else {
        str += `${num *i}---` ;debugger
    }
    
   }
   return str ;debugger
}
console.log(getMathResult(10,5));debugger