const calc = {};
calc.add = (x,y)=> {
    return x+y;
};
calc.sub = (x,y) => {
    return x-y;
};
calc.mult = (x,y) => {
    return x*y;
};
calc.div = (x,y) => {
    return x/y;
};
module.exports = calc;