
let fahrenheit = 99.20;
let celcius = 37.33;

const formula = (fahrenheit) =>
{
    const convert = 5 / 9 * (fahrenheit - 32);
    return convert;
}
export {fahrenheit, celcius, formula};