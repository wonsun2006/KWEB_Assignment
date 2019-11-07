let condition = (num) => {
        // Code here
        temp=num%2;
        if(temp===0)
        return true;
        else
        return false;

    };
    let filter = (array, conditionFunc) => {
    // Code here
        let result = [];
        for(let number of array)
            if(conditionFunc(number))
                result.push(number);
        return result;
    };

    console.log(filter([1, 3, 4, 6, 7], condition));
    console.log(filter([0, 2, 4, 6, 7], condition));
    console.log(filter([-1, 3, 5, 9], condition));