import React from 'react'
import { BsInfoCircleFill } from 'react-icons/bs'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import PageHeader from '../../components/pageHeader/PageHeader';
import './Resume.scss';
import { data } from './utils.js';
import { MdWork } from 'react-icons/md';


const Resume = () => {
  return (
    <section id='resume' className='resume'>
        <PageHeader 
        headerText='My Resume'
        icon= {<BsInfoCircleFill size={40}/>}
        />
        <div className='timeline'>
          <div className='timeline_experience'>
            <h3 className='timeline_experience_headerText'>Experience</h3>
            <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'>
              {
                data.experience.map((item, i)=>(
                  <VerticalTimelineElement
                      key={i} className='timeline_experience_vertical_timeline_element'
                      contentStyle={{
                        background: 'none', color: 'var(--yellow-theme-sub-text-color)',
                        border: '1.5px solid var(--yellow-theme-main-color)',
                      }}

                      icon = {<MdWork />}
                      iconStyle={{
                        background:'#181818',
                        color: 'var(--yellow-theme-main-color)',
                      }}
                      >
                        <div className='vertical_timeline_element_title_wrapper'>
                          <label>
                            {item.title}
                          </label>
                          <h4>
                              {item.subTitle}  
                          </h4>
                          
                        </div>
                        <label className='smallText'>{item.description}</label>
                        <h6 className='smallText'>{item.date}</h6>
                  
                  </VerticalTimelineElement>
                )) 
              }

            </VerticalTimeline>
          </div>

          <div className='timeline_education'>
          <h3 className='timeline_education_headerText'>Education</h3>
         
          <VerticalTimeline
            layout={'1-column'}
            lineColor='var(--yellow-theme-main-color)'>
              {
                data.education.map((item, i)=>(
                  <VerticalTimelineElement
                      key={i} className='timeline_experience_vertical-timeline_element'
                      contentStyle={{
                        background: 'none', 
                        color: 'var(--yellow-theme-sub-text-color)',
                        border: '1.5px solid var(--yellow-theme-main-color)',
                      }}
                      
                      icon={<MdWork />}
                      iconStyle={{
                        background:'#181818',
                        color: 'var(--yellow-theme-main-color)',
                      }}
                      >
                        
                        <div className='vertical_timeline_element_title_wrapper'>
                          <label>
                            {item.title}
                          </label>
                          <h4>
                              {item.subTitle}  
                          </h4>
                          
                        </div>
                        <label className='smallText'>{item.description}</label>
                        <h6 className='smallText'>{item.date}</h6>
                  
                  </VerticalTimelineElement>
                ))}

            </VerticalTimeline>
          </div>
        </div>
    </section>
  )
}

export default Resume