import noPoster from '../images/TMDB-logo.svg';


function AboutPage() {
    return (
        <section className="about-page">
            <h2>About</h2>
            <p className="about-p">FilmFan is a movie database that is regularly updated to provide film fans around the world with the most accurate information and ratings. <br/> FilmFan uses <span className='tmdb-color'>TMDB</span> api but is not endorsed or certified by <span className='tmdb-color'>TMDB</span>
            <img src={noPoster} className="tmdb-logo" />
            </p>
            
            

        </section>
    )
}

export default AboutPage
