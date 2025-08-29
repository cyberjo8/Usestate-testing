import React, {useState} from "react"
export default function  Components(){

    const [name, setName] = useState("");
    const [age, setAge] = useState(1)
    const[isEmployed, setIsEmployed] = useState(false)
    const[regards, setRegards]= useState("")
    const[gender, setGender] = useState("")

    // function updateAge(){
    //      setAge(age=>age+1);
    //      setAge(age=>age+1);
    // }

    function handleNameChange(event){
        setName(event.target.value)
    }

    function handleAgeChange(event){
        setAge(event.target.value)
    }
    function handleRegards(event){
        setRegards(event.target.value)
    }

      function handleGender(event){
        setGender(event.target.value)
    }

       

    return(
        <div>
            <input type="text" value={name} placeholder="name"onChange={handleNameChange} />
            
            <p>Name: {name}</p>
            {/* <button onChange={() => setName(name)}>click for name</button> */}
            
            <input type="number" value={age} onChange={handleAgeChange} />
            <p>Age: {age}</p>
            {/* <button onClick={() => setAge(age+1)}>click for Age</button> */}

            <p>Employed: {isEmployed ?"Yes" : "no"}</p>
            <button onClick={() => setIsEmployed(!isEmployed)}>Toggle status</button> <br></br>

            <textarea value={regards} placeholder="right regards here" onChange={handleRegards}/>
            <p>Regards: {regards}</p>

            <label >
                <input type="radio" value="Male" checked={gender === "Male"}
                onChange={handleGender} />
                Male
            </label> <br/>
            <label >
                   <input type="radio" value="Female" checked={gender === "Female"}
                onChange={handleGender} />
                Female
                </label>
        </div>

        // <div>
            
        //      <p>Age: {age}</p>
        //      <button onClick={updateAge}>click for Age</button>
        // </div>
    )
}