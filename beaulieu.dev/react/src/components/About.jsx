import React from "react";
import Profile from './images/portrait.jpg';

const About = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',  // This makes the container take the full height of the viewport
            textAlign: 'center', // Centers the text inside the div
            padding: '20px', // Optional padding for better spacing
            boxSizing: 'border-box' // Ensures padding doesn't affect overall height
        }
    }

    return (
        <div style={styles.container}>
            <h1>beaul.dev</h1>
            <p>
                Hello! I'm Sean, a passionate developer with an interest in building b2b saas. I have a rich background in various domains of technology.
            </p>
            <p>
                This website showcases some of my latest projects and my journey in the world of life. Feel free to browse around and get in touch if you'd like to connect!
            </p>
        </div>
    )
}

export default About