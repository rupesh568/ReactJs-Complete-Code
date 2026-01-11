function Dynamic(){
    let fullName="Rupesh";
    const myAge=()=>{
        return 20;
    }
    return <p>
        I am {fullName} and I am {myAge()}
    </p>
}
export default Dynamic;