export const solveEquation = (input:string) => {
    try{
    //* Catch multiplaction character of (x)
    if(input.includes('x')){
        input=input.toLowerCase().replaceAll('x', '*')
    }
    //* Simple eval for math input
    const solution = eval(input)
    return {input, solution}
    } catch(e){
        const solution="There was an error solving your request."
        return{input,solution}
    }
}

