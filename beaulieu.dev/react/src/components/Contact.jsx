import React from "react"
import LinkedInIcon from './images/linkedin.png'
import MailIcon from './images/mail.png'

const Contact = () => {
    const styles = {
        container: {
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100vh',
            textAlign: 'center',
        },
        icon: {
            width: '100px', // Adjust size as needed
            height: '100px', // Adjust size as needed
            margin: '20px', // Spacing between icons
        }
    }

    return (
        <div style={styles.container}>
            <a href="https://www.linkedin.com/in/sean-beaulieu-9a9bb9196/" target="_blank" rel="noopener noreferrer">
                <img src={LinkedInIcon} style={styles.icon} alt="LinkedIn" />
            </a>
            <a href="mailto:seanlbeaulieu@email.com">
                <img src={MailIcon} style={styles.icon} alt="Email" />
            </a>
        </div>
    )
}

export default Contact
