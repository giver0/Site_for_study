
function PassLength(email) 
    {
        let ret = /(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
        return ret.test(email)
    }
console.log(PassLength("qweasdzx!"))

    