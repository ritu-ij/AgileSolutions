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
                    Whether your team has always been distributed or is just getting use to remote work, the need for collaboration and connection is consistent. 
However, with multiple tools implemented in different ways, it can be very difficult to follow all Scrum practices in a fun, cost-effective way. Enter a scalable, easy-to-use, all-in-one tool for supporting each other and our goals, encouraging collaboration, 
                    sharing feedback, tracking metrics, and driving for continuous improvement.
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
