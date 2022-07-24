import { Link } from 'react-router-dom'

const Navbar = () => {

    return ( 
        <header>
            <div className="container">
                <Link to={'./'}>
                <h1> Tour And Road Organiser</h1>
                </Link>
                <Link to={'./Venues'}>
                <h1>Create Venues</h1>
                </Link>
            </div>
        </header>
    );
}
 
export default Navbar;
