const futureMath = async () => {
    try {

        let value = await slowMath.add(6, 2)
        console.log(value);
        value = await slowMath.multiply(value, 2)
        console.log(value)
        value = await slowMath.divide(value, 4)
        console.log(value)
        value = await slowMath.subtract(value, 3)
        console.log(value)
        value = await slowMath.add(value, 98)
        console.log(value)
        value = await slowMath.remainder(value, 2)
        console.log(value)
        value = await slowMath.multiply(value, 50)
        console.log(value)
        value = await slowMath.remainder(value, 40)
        console.log(value)
        value = await slowMath.add(value, 32)
        console.log(`The final result is ${value}!`);
    
    } catch(e) {

        console.log(e)

    };
};

futureMath();











