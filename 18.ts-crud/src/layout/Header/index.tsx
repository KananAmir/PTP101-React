import { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BasketContext } from '../../context/BasketContext'

const Header = () => {

    const { basket } = useContext(BasketContext)

    console.log('basket', basket);
    
    return (
        <header>
            <h1>Movie App</h1>
            <nav>
                <ul>
                    <li>
                        <Link to='/movies'>Movies</Link>
                    </li>
                    <li>
                        <Link to='/movies/new'>Add Movie</Link>
                    </li>
                </ul>
            </nav>
            <span>basket <sup className="text-red-500">{basket.length}</sup></span>
        </header>
    )
}

export default Header