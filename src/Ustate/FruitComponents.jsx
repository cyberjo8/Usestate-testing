import React,{useState} from "react";

export default function Food(){
    const[foods, setFoods] = useState(["apple","banana","onion"])

    function AddFood(){
        const newFood = document.getElementById("foodinput").value;
        document.getElementById("foodinput").value="";

        setFoods(f =>[...f, newFood])
    }

    function removeFood(index){
        // setFoods(foods.filter((_, i)=> i !== index));  "_" in the expression means that parameter should be
        setFoods([...foods.slice(0,index),...foods.slice(index+1)]);
    }

    return(<div>
    <h2>List of Food</h2>
    <ul>
        {foods.map((food, index)=><li key={index} onClick={() => removeFood(index)}>{food}</li>)}
    </ul>
    <input type="text" id="foodinput" />
    <button onClick={AddFood}>Add food</button>
    
</div>);
}

