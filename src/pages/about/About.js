import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeader from '../../components/pageHeader/PageHeader';
import { Animate } from 'react-simple-animate';
import './About.scss'
import { DiApple, DiAndroid } from 'react-icons/di';
import { FaDev, FaDatabase } from 'react-icons/fa';

const personalDetails = [
  {
    label: 'Name',
    value: 'Tobi Oladipupo Alabi',
  },
  {
    label: 'Address',
    value: '12, Ajagba Street, Ilupeju, Palmgroove, Lagos State',
  },
  {
    label: 'Email',
    value: 'alabitobi0140@gmail.com',
  },
  {
    label: 'Contact No',
    value: '+234 8160903419',
  },

];

const jobSummary = 'Innovative software development professional with proficiency in JavaScript, React & Redux Toolkits, Styled Components, JQuery, HTML, CSS and Node. Talent includes reviewing code, estimating workloads and defining requirements. Highly qualified developer offering 1 years of progressive experience. Good at designing, developing, maintaining and improving a wide range of application software and platforms and good exposure to microservices design patterns.';

const About = () => {
  return (
    <section id='about' className='about'>
        <PageHeader 
        headerText='About Me'
        icon= {<BsInfoCircleFill size={40}/>}
        />
        <div className='about_content'>
          <div className='about_content_personalWrapper'>
          
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(900px',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <h3 className='big_font'>Front End Developer</h3>
            <p>{jobSummary}</p>

          </Animate>

          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateY(500px',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
          <h3 className='personalInformationHeaderText'>Personal Information</h3>
          <ul>
            {personalDetails.map((item, i)=>(
              <li key={i}>
                <span className='title'>{item.label}</span>
                <span className='value'>{item.value}</span>
              </li>
            ))}
          </ul>
          </Animate>
          </div>
          <div className='about_content_servicesWrapper'>
          <Animate
            play
            duration={1.5}
            delay={1}
            start={{
              transform: 'translateX(600px',
            }}
            end={{
              transform: 'translateX(0px)',
            }}
          >
            <div className='about_content_servicesWrapper_innerContent'>
              <div>
                <FaDev size={50} color='var(--yellow-theme-main-color)'/>
              </div>
              <div>
                <DiAndroid size={50} color='var(--yellow-theme-main-color)'/>
              </div>
              <div>
                <FaDatabase size={50} color='var(--yellow-theme-main-color)'/>
              </div>
              <div>
                <DiApple size={50} color='var(--yellow-theme-main-color)'/>
              </div>
            </div>
            </Animate>    
          </div>
        

        </div>
    </section>
  )
}

export default About