import React from 'react'
import Nav from './Nav'
const Header= () => {
    const styles = {
        headerDiv: {
            display: 'flex',
            justifyContent: 'space-between',
            position: 'relative',
            width: '100%',
            height: '60px'
        },
        background: {
            backgroundColor: '#303030',
            opacity: '.5',
            zIndex: '-1',
            position: 'absolute',
            width: '100%',
            height: '60px',
        },
        name: {
            fontSize: '24px',
            fontWeight: 'bold',
            marginTop: '10px',
            marginLeft: '20px',
            padding: '5px'
        },
        accent: {
            color: 'rgb(118, 50, 63)'
        }
    }
    return (
        <div style={styles.headerDiv}>
            <div style={styles.background}></div>
            <h1 style={styles.name}>Reg Garrett</h1>
            <Nav />
        </div>
    )
}

export default Header
