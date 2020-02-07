import React from 'react'

const Footer= () => {
    const styles = {
        footerDiv: {
            width: '100vw',
            marginTop: '10px',
            padding: '10px',
            textAlign: 'center',
            fontSize: '16px',
        },
        background: {
            backgroundColor: '#303030',
            opacity: '.5',
            zIndex: '-1',
            position: 'absolute',
            width: '100%',
            height: '70px',
        },
        i: {
            color: 'white',
            fontSize: '20px'
        },
        center: {
            padding: '10px',
        }
    }

    /* Colors: 
  Cerulean blue: '#4484CE',
  Aluminum gray: '#D9D9D9',
  Light gold: '#F9Cf00',
  Tangerine orange: '#F19F4D', 
*/

    return (
        <div style={styles.footerDiv}>
            <div style={styles.background}></div>
            <div style={styles.center}>
                This is the end.  Get more of me: &nbsp; 
                <span style={styles.i}>&nbsp;<a style={styles.i} href='https://github.com/regsg8' target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square footer-icon"></i></a> &nbsp;&nbsp;<a style={styles.i} href='http://linkedin.com/in/reggarrett' target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin footer-icon"></i></a>&nbsp;&nbsp; <a style={styles.i} href='mailto:regsg8@gmail.com' target="_blank" rel="noopener noreferrer"><i className="fas fa-envelope footer-icon"></i></a></span>
                <br/>
                Brought to you by: &nbsp;<i className="fab fa-react" style={styles.i}></i> React&nbsp; <i className="fab fa-node-js" style={styles.i}></i> Node.js&nbsp; <i className="fab fa-html5" style={styles.i}></i> HTML&nbsp; <i className="fab fa-css3-alt" style={styles.i}></i> CSS <br/>
            </div>
        </div>
    )
}

export default Footer
