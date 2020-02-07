import React from 'react'
import { withData } from '../context/DataProvider'

const About = props => {
    const styles = {
        aboutDiv: {
            margin: '16px',
            marginTop: '0px',
            padding: '10px',
            paddingTop: '0px',
            color: 'rgb(243, 244, 246)',
        },
        greeting: {
            marginTop: '16px',
            color: 'rgb(243, 244, 246)',
            fontSize: '20px',
            textAlign: 'center'
        },
        i: {
            color: '#76323f',
            fontSize: '20px',
        },
        
        russiaDiv: {
            color: '#black'
        },
        familyDiv: {
            color: '#black'
        },
        hobbyDiv: {
            color: '#black'
        },
        quoteDiv: {
            color: '#black'
        },
        emphasis: {
            color: '#76323f'
        }
    }

//     Colors: 
//   Cerulean blue: '#4484CE',
//   Aluminum gray: '#D9D9D9',
//   Light gold: '#F9Cf00',
//   Tangerine orange: '#F19F4D',
//   Black: 'rgb(4, 10, 17)'

    return (
        <div style={styles.aboutDiv}>
            <div style={styles.greeting}>Alright, here's the good stuff.  Click and hold.</div>
            
            <div className={`aboutDiv${props.farmToggle}`}  name='farmToggle'>
                <h4>
                    My life on a farm <i className="fas fa-chevron-circle-right" style={styles.i}></i>
                </h4> 
                <span>
                    I was what you could call a "free-range" child.  Hardly any adult supervision, 13 acres of farm with horses, and the Wasatch Range of the Uinta National Forest to explore made my childhood quite an adventure.  Amazingly enough, I only had three incidents of almost dying.  
                </span>
            </div>
            <div className={`aboutDiv${props.russiaToggle}`} name='russiaToggle'>
                <h4>
                    My service as a missionary in Russia <i className="fas fa-chevron-circle-right" style={styles.i}></i>
                </h4>
                <span>
                    I had the incredible honor to serve in the Siberian region of Russia for two years. I learned more about life, culture, and grit then the rest of my life at that point combined.  
                </span>
            </div>
            <div className={`aboutDiv${props.familyToggle}`} name='familyToggle'>
                <h4>
                    My Family <i className="fas fa-chevron-circle-right" style={styles.i}></i>
                </h4>
                <span>
                    I was married at the ripe old age of 22 in 2008 to a driven, freckled, curly-headed, gorgeous genius and have been trying to keep up ever since.  We have a boy and a girl who could not be more opposite from each other and are also somehow best friends.  The finishing touch was a Russian Blue cat named Percy who has become my wife's favorite family member.   
                </span>
            </div>
            <div className={`aboutDiv${props.hobbyToggle}`} name='hobbyToggle'>
                <h4>
                    My Favorite Hobby <i className="fas fa-chevron-circle-right" style={styles.i}></i>
                </h4>
                <span>
                    I love to read.  In the 3rd grade I had a 12th grade reading level and couldn't get enough books.  As an adult I don't have the time to sit and read for hours on end, so I reluctantly switched to the dark side: audiobooks.  I now have over 125 audiobooks and have listened to all of them more than once.  My all time favorite is "The Count of Monte Cristo", which makes the movie absolutely unwatchable. 
                </span>
            </div>
            <div className={`aboutDiv${props.quoteToggle}`} name='quoteToggle'>
                <h4>
                    My Favorite Quote <i className="fas fa-chevron-circle-right about-arrow" style={styles.i}></i>
                </h4> 
                <span>
                    "Whatever you are, be a good one."  
                </span>
                <div>
                    &nbsp;&nbsp;&nbsp; - Abraham Lincoln
                </div>
            </div>
        </div>
    )
}

export default withData(About) 
