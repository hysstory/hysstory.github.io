import ReactRotatingText from 'react-rotating-text'

import './Home.css'

const Home = () => {
    return (
        <div className="home">
            <div className="home-left-container">
                <h1 className="home-name">DANIEL</h1>
            </div>
            <div className="home-right-container">
                <h1 className="lastname">HAN</h1>
                <ReactRotatingText
                    className='rotate-text'
                    emptyPause='500'
                    typingInterval='150'
                    deletingInterval='75'
                    items={[ 'developer', 'teacher', 'barista', 'musician', 'leader' ]} 
                    />
            </div>
        </div>
    )
}

export default Home
