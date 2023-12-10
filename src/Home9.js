import { useState } from "react";


const Home9 = () => {

    const [name, setName] = useState('test');
    const [age, setAge] = useState(25);

    const handleClick = (e) => {
        console.log('hello, ninjas',e);
       
    }
    const handleClickAgain =(surname, e) => {
        //console.log('hello ' + surname , e.target);
        setName(surname);
        setAge(30);
    }

    return (  
        <div className="home">
            <h2>Home page</h2>
            {name} is {age} years of age
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => 
                handleClickAgain('mario',e)
            }>Click me again</button>
        </div>
    );
}
 
export default Home9;