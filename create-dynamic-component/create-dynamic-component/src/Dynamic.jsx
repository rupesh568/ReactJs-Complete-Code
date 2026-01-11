function Dynamic(){
    let fullName="Rupesh Kumar Chaudhary";
    const myAge=()=>{
        return 20;
    }
    let myNumber=()=>{
        return 888;
    }
    return <h2>
        my name is {fullName} and I am {myAge()} and my phone number is{myNumber()}
    </h2>
}
export default Dynamic;