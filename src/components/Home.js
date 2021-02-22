import React from 'react'
import home from './img/home.png';

const Home = () => {
    return (
        <div>
            <section classna="home" id="home">
                <div class="home__container bd-container bd-grid">
                    <div class="home__data">
                        <h1 class="home__title">Tasty food</h1>
                        <h2 class="home__subtitle">Try the best food of the week.</h2>
                        <a href="#" class="button">View Menu</a>
                    </div>
                    <img src={home} alt="" class="home__img" />
                </div>
            </section>
        </div>
    )
}

export default Home
