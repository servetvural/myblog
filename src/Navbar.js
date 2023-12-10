import { Link } from 'react-router-dom';
// import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'; 
const Navbar = () => {

    // const history = useHistory();

    // const handleHistoryClick = () => {
    //     history.go(-1);
    // }
    return (  
        <nav className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/create" >New Blog</Link>
            </div>
            {/* <button onClick={handleHistoryClick}>Go Back</button> */}
        </nav>
    );
}
 
export default Navbar;