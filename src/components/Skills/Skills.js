import './Skills.css'

const Skills = () => {
    return (
        <div className="skills">
            <div className="transition-to-skills"></div>
            <h1 className="skills-heading">Skills</h1>
            <div className="skills-cards-container">
                <div className="skills-card">
                    <h3>Backened</h3>
                    <div className="skills-bar">
                        <div className="empty"></div>
                        <div className="filled backend"></div>
                    </div>
                    <div className="skills-detail">
                        <ul>
                            <li>
                                Java Oracle Certification
                            </li>
                            <li>
                                Spring Framework & Spring Boot
                            </li>
                            <li>
                                Data Structures
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skills-card">
                    <h3>Frontend</h3>
                    <div className="skills-bar">
                        <div className="empty"></div>
                        <div className="filled frontend"></div>
                    </div>
                    <div className="skills-detail">
                        <ul>
                            <li>
                                React JS
                            </li>
                            <li>
                                HTML & CSS
                            </li>
                            <li>
                                REST API Integration
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="skills-card">
                    <h3>Database</h3>
                    <div className="skills-bar">
                        <div className="empty"></div>
                        <div className="filled database"></div>
                    </div>
                    <div className="skills-detail">
                        <ul>
                            <li>
                                MySQL
                            </li>
                            <li>
                                PostgreSQL
                            </li>
                            <li>
                                AWS RDS Cloud Database Management
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Skills
