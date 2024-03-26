import React from "react";
import Profile from './images/portrait.jpg';

const About = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',  
            textAlign: 'center', 
            boxSizing: 'border-box'
        }
    }

    return (
        <div style={styles.container}>
            <h1>beaul.us</h1>
            <p>
                Hello! I'm Sean, a passionate developer with an interest in building and working with software.
            </p>

            <p>
                This website showcases some of my latest posts and my related links. Feel free to browse around and get in touch if you'd like to connect!
            </p>
        </div>
    )
}

export default About