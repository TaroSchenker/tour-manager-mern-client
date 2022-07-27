import { Link } from 'react-router-dom'

const Navbar = () => {

    return ( 
        <header>
            <div className="container">
                <Link to={'./'}>
                <h2> Tour Dates</h2>
                </Link>
                <h1> Tour And Road Organiser</h1>
                <Link to={'./Venues'}>
                <h2>Create Venues</h2>
                </Link>
            </div>
        </header>
    );
}
 
export default Navbar;
