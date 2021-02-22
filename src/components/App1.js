import React from 'react'
import movilapp from './img/movil-app.png';
import app1 from './img/app1.png';
import app2 from './img/app2.png';

const App1 = () => {
    return (
        <div>
            <section class="app section bd-container">
                <div class="app__container bd-grid">
                    <div class="app__data">
                        <span class="section-subtitle app__initial">App</span>
                        <h2 class="section-title app__initial">App is aviable</h2>
                        <p class="app__description">Find our application and download it, you can make reservations, food orders, see your deliveries on the way and much more.</p>
                        <div class="app__stores">
                            <a href="#"><img src={app1} alt="" class="app__store" /></a>
                            <a href="#"><img src={app2} alt="" class="app__store" /></a>
                        </div>
                    </div>

                    <img src={movilapp} alt="" class="app__img" />
                </div>
            </section>
        </div>
    )
}

export default App1
