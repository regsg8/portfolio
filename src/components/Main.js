import React from 'react'

const Main = () => {
    const styles = {
        mainDiv: {
            justifyContent: 'center',
            textAlign: 'center',
            marginBottom: '0px',
            padding: '16px',
            paddingBottom: '0px',
            fontSize: '20px',
        },
        greeting: {
            color: 'rgb(243, 244, 246)',
        },
        emphasis: {
            color: '#76323f',
        },
        mainGreetingDiv: {
            margin: '16px 0px 16px 0px',
            width: 'auto',
            marginBottom: '0px',
            padding: '10px',
            color: 'rgb(243, 244, 246)'
        },
        greetingDivs: {
            textAlign: 'center',
        },
        accent: {
            color: '#76323f'
        }
    }

// Colors: 
// Cerulean blue: '#4484CE',
// Aluminum gray: '#D9D9D9',
// Light gold: '#F9Cf00',
// Tangerine orange: '#F19F4D', 


    return (
        <div style={styles.mainDiv}>
            <div style={styles.greetingDivs}>
                <span style={styles.greeting}>Hi, my name is Reg.</span>&nbsp;  Thanks for stopping by!<br/><br/>
            </div>
            <div>
                What I do: <br/>
                Javascript - MongoDB - Express - React - Node - HTML - CSS
            </div>
            <div>
                <br/>
                Here are my projects. There are many like them, but these are mine.
            </div>
        </div>
    )
}

export default Main
