import { useEffect } from 'react';
import { Link } from 'react-router-dom'; 

const Navbar = () => {
    useEffect(() => {
        const toggleButton = document.getElementsByClassName('toggle-button')[0];
        const navbarLinks = document.getElementsByClassName('navbar-links')[0];

        toggleButton.addEventListener('click', () => {
            navbarLinks.classList.toggle('active');
        })
    }, []);
    return (
        // <nav className="navbar">
        //     <h2>Welcome!</h2>
        //     <ul>
        //         {/* <li><a href="/">Home</a></li> */}
        //         {/* <li><a href="/Create">New Blog</a></li> */}

        //         {/* <a href="/"><button>Home</button></a>
        //         <a href="/Create"><button>New Blog</button></a> */}
                
        //         <Link to="/"><button>Home</button></Link>
        //         <Link to="/Create"><button>New Blog</button></Link>
        //     </ul>
        // </nav>

        <nav class="navbar">
        <div class="brand-title">
            The Blog
        </div>
        <Link to="#" class="toggle-button">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
        </Link>
        <div class="navbar-links">
            <ul>
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/Create">New Blog</Link> </li>
                <li> <Link to="#">Contact</Link> </li>
                <li> <Link to="#">Extra links</Link> </li>
            </ul>
        </div>
    </nav>
    );
}

export default Navbar;