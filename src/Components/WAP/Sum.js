export const sum = (a) => (b) => b ? sum(a + b) : a;
console.log(sum(1)(2)(3)(4)())

const Sum = (...arguments) => {
    return arguments.reduce((a,b) => a+b )
}
