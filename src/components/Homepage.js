import '../styles/Homepage.css'
import pokemoncover from '../assets/pokemoncover.jpg'
import marvelcover from '../assets/marvelcover.jpg'
import harrypottercover from '../assets/harrypottercover.jpg'

function Homepage() {
    return (
        <div className='wholepage'>
            <h1 className='homepage-title'>Devine Tête</h1>
            <div className='homepagebody'>
                {/* card pokemon */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="coverimage" src={pokemoncover} alt='Pokemon couverture' />
                        </div>
                        <div className="flip-card-back">
                            <h2>Pokemon Guessing game</h2>
                            <a className="playlink" href='#'>Play game</a>
                        </div>
                    </div>
                </div>
                {/* card marvel */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="coverimage" src={marvelcover} alt='Marvel couverture' />
                        </div>
                        <div className="flip-card-back">
                            <h2>Marvel Guessing game</h2>
                            <a className="playlink" href='#'>Play game</a>
                        </div>
                    </div>
                </div>
                {/* card harrypotter */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="coverimage" src={harrypottercover} alt='Harry Potter couverture' />
                        </div>
                        <div className="flip-card-back">
                            <h2>Harry Potter Guessing game</h2>
                            <a className="playlink" href='#'>Play game</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Homepage