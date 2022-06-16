 function getMathResult(num, times) { debugger
    if (typeof(times) !== 'number' || times <= 0) { debugger
        return num; debugger
    }

    let str = ''; debugger

    for (let i = 1; i <= times; i++) { debugger
        if (i === times) { debugger
            str += `${num * i}`; debugger
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`; debugger
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str; debugger
} 
getMathResult(10, 5);