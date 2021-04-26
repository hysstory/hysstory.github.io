import { VerticalTimeline, VerticalTimelineElement }
        from 'react-vertical-timeline-component';

import { IoCode, IoSchoolSharp, IoBriefcaseSharp, IoPower } from 'react-icons/io5'
import { FiGithub } from 'react-icons/fi'
import { FaAward } from 'react-icons/fa'
import { useState } from 'react'

import 'react-vertical-timeline-component/style.min.css'
import './Timeline.css'

const extraInternContent = (
    <div className="extra-content">
        <ul>
            <li>Helped the senior information security engineer
                responding to a recent cyber attack made through 
                a ransomware "SamSam"</li>
            <li>Researched about cybersecurity risks and standards 
                such as NIST and GPO, that pertains to the organization, 
                then presented the findings to the department manager</li>
            <li>Led meetings with interns and managers to plan out projects and schedules</li>
            <li>Audited the Integrated Steering Committee meetings advising on upcoming
                IT projects concerning thier goals, objectives, and risks</li>
        </ul>
    </div>
)

const extraTeachContent = (
    <div className="extra-content">
        <ul>
            <li>
                Prepared teaching plans and taught students of various grades and levels
            </li>
            <li>
                Improved grades and passing rate of students by more than double within the semester
            </li>
        </ul>
    </div>
)

const Timeline = () => {
    const [ readInternMore, setReadInternMore ] = useState(false)
    const internLinkName = readInternMore ? 'Read Less' : 'Read More'

    const [ readTeachMore, setReadTeachMore ] = useState(false)
    const teachLinkName = readTeachMore ? 'Read Less' : 'Read More'
    
    return (
        <div className="timeline">
            <div className="transition-to-timeline"></div>
            <h1 className="timeline-header">Time Line</h1>
            <VerticalTimeline>
                <VerticalTimelineElement
                date="currently working"
                iconStyle={{ background: '#688B8A', color: '#fff'}}
                icon={<IoCode />}>
                    <h2 className="timeline-text">College Community Management Application</h2>
                    <h4 className="timeline-text">Java | React | REST API | Spring Boot | Spring MVC | AWS
                        | MySQL | Thymeleaf</h4>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                date="Aug 2019 ~ Mar 2020"
                iconStyle={{ background: '#1B4B5A', color: '#fff' }}
                icon={<IoBriefcaseSharp />}>
                    <h2 className="timeline-text">Physics & Chemistry Teacher</h2>
                    <h3 className="timeline-text">Norcross High</h3>
                    <a className="read-more-link" onClick={() => {setReadTeachMore(!readTeachMore)}}><h2>{teachLinkName}</h2></a>
                    {readTeachMore && extraTeachContent}
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="September 2019"
                    iconStyle={{ background: '#688B8A', color: '#fff'}}
                    icon={<IoCode />}
                    onTimelineElementClick={ () =>
                                    window.open("https://github.com/hysstory/employee-directory-web-app", "_blank")}>
                        <h2 className="timeline-text">Directory Crud Web Application</h2>
                        <h4 className="timeline-text">Java | REST API | Spring Boot
                         | MySQL | Thymeleaf</h4>
                        <h5><FiGithub />click this box for github <FiGithub /> </h5>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="July 2019"
                    iconStyle={{ background: '#f80000', color: '#fff'}}
                    icon={<FaAward />}>
                        <h2 className="timeline-text">Oracle Certified Associate</h2>
                        <h3 className="timeline-text">Java SE 8 Programmer Certificate</h3>
                        <img className="certificate-image" src="https://images.credly.com/size/340x340/images/a9848abf-f8bd-474d-a9b4-6086da11a916/Oracle_Associates_Badge__1_.png" alt="java certificate"></img>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="Fall & Winter 2018"
                    iconStyle={{ background: '#1B4B5A', color: '#fff' }}
                    icon={<IoBriefcaseSharp />}>
                        <h2 className="timeline-text">City of Atlanta - Information Management</h2>
                        <h3 className="timeline-text">Internship - Team Lead</h3>
                        <a className="read-more-link" onClick={() => {setReadInternMore(!readInternMore)}}><h2>{internLinkName}</h2></a>
                        {readInternMore && extraInternContent}
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    date="December 2018"
                    iconStyle={{ background: '#727077', color: '#fff' }}
                    icon={<IoSchoolSharp />}>
                        <h2 className="timeline-text">B.B.A. in Computer Information System</h2>
                        <h3 className="timeline-text">Concentration in Cybersecurity</h3>
                        <p className="timeline-text">Georgia State University J. Mack Robinson College of Business</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement contentStyle={{ visibility: 'hidden'}}
                    iconStyle={{ background: '#7DA3A1', color: '#fff' }}
                    icon={<IoPower />}>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    )
}

export default Timeline
