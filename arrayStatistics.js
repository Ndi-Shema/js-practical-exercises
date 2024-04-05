function arrayStats(arr){
    if (arr.length === 0){
       
        return {
            sum: 0,
            average: 0,
            min: undefined,
            max: undefined
        };
    }

    let sum = 0;
    let min = arr[0];
    let max = arr[0];

    for (let i = 0; i < arr.length; i++){
        const num = arr[i];
        sum += num;
        if (min > num){
            min = num;
        }

        if (max < num){
            max = num;
        }
        
    }

    const average = (sum / arr.length);

    return {
        "sum":sum,
        "average":average,
        "min":min,
        "max":max
    }

}
let arr = [1, 2, 3, 4, 4];
console.log(arrayStats(arr));