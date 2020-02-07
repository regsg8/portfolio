import React, { Component } from 'react'

export const DataContext = React.createContext()

class DataProvider extends Component {
    constructor() {
        super()
        this.state = {
            resumeView: 'education',
        }

    }

    toggler = (e) => {
        e.preventDefault()
        e.persist()
        this.setState((prevState) => {
            return (
                { [e.target.name]: e.target.value }
            )

        })
    }

    aboutToggler = (e) => {
        e.preventDefault()
        e.persist()
        this.setState(() => {
            return (
                { }
            )
        })
    }

    render() {
        const projects = [
            {
                name: 'ACT Proposal',
                description: `Strategic ACT Prep is a company that provides ACT practice testing for school districts.  They will use this project to see if District Administrators are interested in online tools.  It uses Styled Components which allows developers to write real CSS in JavaScript, meaning you can pass JavaScript properties to CSS.  It also uses Chart.js to render chart, JWT (JSON Web Token) Authentication, and Bcrypt to encrypt user's passwords stored in MongoDB. `,
                used: 'MongoDB, Express, React, Node.js, HTML, and CSS.',
                img: `${require('../resources/act.png')}`,
                group: false,
                teamMembers: '',
                resources: 'Username and password: admin',
                deployed: 'https://actproposal.herokuapp.com/',
                externalLink: '',
                externalLinkText: ''
            },
            {
                name: `task'r`,
                description: `Learning to collaborate using GitHub with my teammates without stepping on each other's code was the key aspect of this project.  This was our first time building a server with Express which serves up the routes, models, and connects the MongoDB database. `,
                used: 'MongoDB, Express, React, Node.js, HTML, and CSS.',
                img: `${require('../resources/taskr.png')}`,
                group: true,
                teamMembers: 'Emma Barash and Cory Henderson',
                resources: 'Username and password: testuser',
                deployed: 'https://taskr-saurus.herokuapp.com/',
                externalLink: '',
                externalLinkText: ''
            },
            {
                name: 'Trivia Challenge',
                description: `This project shows how React can replicate multiple components using API requests to supply unique content. It is a Single Page Application (SPA), demonstrating how React Router can be used to 'navigate' a website by selecting which components to display.  It also illustrates how React State can store and use session data to dynamically render objects and content by saving correct answers and the user's answers to State then comparing them. `,
                used: 'React, Node.js, HTML, and CSS.',
                img: `${require('../resources/trivia.png')}`,
                group: false,
                teamMembers: '',
                resources: 'Made using the Opentdb.com API.',
                deployed: 'http://triviachallenge.surge.sh',
                externalLink: '',
                externalLinkText: ''
            },
            {
                name: 'CSS Zen Garden',
                description: 'The goal here was to reproduce a site without copying the source code.  I wrote all HTML and CSS and used site content like logos, pictures, colors, and fonts.  Links do not work as this was a purely visual exercise, but it is responsive to viewport width.  ',
                used: 'HTML and CSS.',
                img: `${require('../resources/zen.png')}`,
                group: false,
                teamMembers: '',
                resources: '',
                deployed: 'http://regcsszen.surge.sh',
                externalLink: 'http://www.csszengarden.com',
                externalLinkText: 'Compare it'
            },
        ]
        const work = [
            {
                name: 'Wasatch IT',
                title: 'Field Engineer',
                location: 'Murray, UT',
                details: ['Promoted ahead of schedule', '100% positive customer feedback'],
                years: '2018 - 2019',
                img: `${require('../resources/wit.png')}`,
            },
            {
                name: 'CR England',
                title: 'Dedicated Fleet Driver',
                location: 'West Valley City, UT',
                details: ['Trained 9 new drivers', '100% on-time deliveries', 'Consistently surpassed safety goals and metrics'],
                years: '2014 - 2018',
                img: `${require('../resources/cre.png')}`,
            },
            {
                name: 'Utah Army National Guard',
                title: 'Human Intelligence Collector',
                location: 'Draper, UT',
                details: ['Honor Graduate of Advanced Individual Training', 'Army Achievement Medal recipient'],
                years: '2007 - 2014',
                img: `${require('../resources/army.png')}`,
            }
        ]
        const education = [
            {
                name: 'V School',
                description: 'Certificate for 12 week intensive program on the MERN stack.',
                img: `${require('../resources/vs.png')}`,
            },
            {
                name: 'CIW',
                description: 'Site Development Associate certificate for HTML5 and CSS.',
                img: `${require('../resources/ciw.png')}`,
            },
            {
                name: 'CompTIA',
                description: 'A+ certificate for foundational computer hardware and software skills.',
                img: `${require('../resources/compa.png')}`,
            },
            {
                name: 'CompTIA',
                description: 'Network+ certificate for essential networking skills.',
                img: `${require('../resources/compn.png')}`,
            },
            {
                name: 'UVU',
                description: 'Associate in Science for University Studies.',
                img: `${require('../resources/uvu.jpeg')}`,
            }
        ]
        const props = {
            ...this.state,
            projects: projects,
            toggler: this.toggler,
            work: work,
            education: education,
        }
        return (
            <DataContext.Provider value={props}>
                {this.props.children}
            </DataContext.Provider>
        )
    }
}

export default DataProvider

export const withData = C => props => (
    <DataContext.Consumer>
        { value => <C {...value} {...props} />}
    </DataContext.Consumer>
)