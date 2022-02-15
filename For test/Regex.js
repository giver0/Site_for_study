
function PassLength(email) 
    {
        let ret = /.{8,}/
        return ret.test(email)
    }
console.log(PassLength("1234567"))

    