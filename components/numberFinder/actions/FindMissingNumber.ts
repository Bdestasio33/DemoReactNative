export const findMissingNumber = (input:string) => {
    try{ 
    var isValid = /^[0-9,.]*$/.test(input);  
    if(!isValid){
        throw new Error("Please use only numbers and commas"); 
    }
    //* Trim the commas, split and map to integer value
    let numberArray = input.trim().split(',').map((x:string)=>{
        return parseInt(x,10)
    });

    //* Sort these values
    numberArray=numberArray.sort((a,b)=> a-b);
    
    //* create array with all values
    const n = numberArray.length - 1; 
    let expectedArray = [numberArray[0]];
    while(expectedArray[expectedArray.length-1]!== numberArray[n])
    {
        expectedArray.push(expectedArray[expectedArray.length-1]+1);
    }

    //* Find which integers are not in the array
    let solution = [];    
    for (let i = 0; i < expectedArray.length; i++) {
        if(!numberArray.includes(expectedArray[i])){
            solution.push(expectedArray[i])
        }
    }

    return {input, solution}

    } catch(e){
        const solution=[e]
        return{input,solution}
    }
}

