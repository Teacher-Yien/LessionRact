
export  default  function IF(){
    const name = "crush";
    const age = 20;
    if(age >= 20){
        return <h1>Hello in Cambodia</h1>
    }

    return(
        <div>
            { name === "crush" ? "Hello" : "Hi"}
        </div>
    )
}
