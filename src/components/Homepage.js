import '../styles/Homepage.css'
import pokemoncover from '../assets/pokemoncover.jpg'
import animecover from '../assets/animecover.jpg'
import harrypottercover from '../assets/harrypottercover.jpg'
import GOTcover from '../assets/GOTcover.jpg'

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
                            <a className="playlink" href={"./pokemon"}>Play game</a>
                        </div>
                    </div>
                </div>
                {/* card marvel */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="coverimage" src={animecover} alt='Marvel couverture' />
                        </div>
                        <div className="flip-card-back">
                            <h2>Anime</h2>
                            <a className="playlink" href={"./anime"}>Play game</a>
                        </div>
                    </div>
                </div>
                {/* card harrypotter */}
                <div className="flip-card">
                    <div className="flip-card-inner">
                        <div className="flip-card-front">
                            <img className="coverimage" src={GOTcover} alt='Game of Thrones couverture' />
                        </div>
                        <div className="flip-card-back">
                            <h2>Game Of Thrones</h2>
                            <a className="playlink" href={"./GOT"}>Play game</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default Homepage