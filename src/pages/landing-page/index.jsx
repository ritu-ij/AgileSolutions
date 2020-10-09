import React from 'react';
import './index.css';

const LandingPage = (props) => {
    const { history } = props;
    const route = (event, link) => {
        if (event) {
            event.stopPropagation();
        }
        history.replace(link);
    }

    const routeLink = (event, link) => {
        if (event) {
            event.stopPropagation();
        }
        window.location.href = link;
    }

    return (
        <div id="landing-container">
            <header>
                <h1>Agile Solutions</h1>
                <p className="intro-para">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet viverra elit, in varius sapien. Pellentesque enim quam, semper laoreet dignissim in, commodo a velit. Nunc commodo quam non eros mattis convallis. Fusce aliquam metus diam, convallis accumsan mi accumsan ac. Pellentesque vel nunc lectus. Aenean tempus dolor sit amet massa porta, non varius ligula tempor. Duis sed posuere urna.

                    Fusce sapien ante, faucibus sit amet dui vitae, malesuada suscipit risus. Vivamus dignissim nulla vel est cursus efficitur. Praesent rhoncus sit amet urna sit amet pellentesque. Duis condimentum ligula ac felis placerat, in dapibus leo porttitor. Aenean non nulla id tortor facilisis viverra. Etiam quis vestibulum tortor. Aliquam erat volutpat. Etiam quis malesuada justo. Phasellus laoreet ipsum turpis, in sodales metus hendrerit at. Etiam convallis est eget tincidunt aliquet. Vestibulum a justo eu dui tristique porttitor in non est. Suspendisse et neque nec eros cursus tristique vel sit amet magna. Etiam varius justo ligula, volutpat lobortis dui eleifend ac. Duis tellus magna, viverra sed nibh quis, commodo aliquam orci. In sagittis posuere porta.
                </p>
            </header>
            <section className="solutions-container">
                <button className="solution" onClick={(ev) => { routeLink(ev, `https://atlas-planning-poker.herokuapp.com`) }}>Planning Poker</button>
                <button className="solution" onClick={(ev) => { route(ev, `/Retrospective/Dashboard`) }}>Retrospective</button>
            </section>
            <footer>
                by Agile Agents
            </footer>
        </div>
    )

}
export default LandingPage;