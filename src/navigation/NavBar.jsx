import { Link } from "react-router-dom";

 export default function NavBar(){
    return (

    <nav style={{ display: "flex", gap: "1rem", marginBottom: "20px" }}>
        <Link to="/">Counter</Link>
        <Link to="/carcomps">MyCar</Link>
        <Link to="/food">Food</Link> 
        <Link to="components">Components</Link>
    </nav>
);
}