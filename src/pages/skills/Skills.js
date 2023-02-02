import React from 'react'
import { Line } from 'rc-progress';
import { BsInfoCircleFill } from 'react-icons/bs';
import PageHeader from '../../components/pageHeader/PageHeader';
import './Skills.scss';
import { Animate, AnimateKeyframes } from 'react-simple-animate';
import { skillsData } from './utils';



const Skills = () => {
  return (
    <section id='skills' className='skills'>
        <PageHeader 
        headerText='My Skills'
        icon= {<BsInfoCircleFill size={40}/>}
        />
        <div className='skills_content_wrapper'>
            {
              skillsData.map((item, i)=>(
                <div key={i} className='skills_content_wrapper_innerContent'>
                    <Animate
                      play
                      duration={1}
                      delay={0.3}
                      start={{
                        transform: 'translateX(-200px)'
                      }}
                      end={{
                        transform: 'translateX(0px)'
                      }}
                    >
                      <h3 className='skills_content_wrapper_innerContent_categoryText'>{item.label}</h3>
                      <div className='skills_content_wrapper_innerContent_progressbar_container'>
                        {item.data.map((skillItem, j)=>(
                          <AnimateKeyframes
                            play 
                            duration={1}
                            keyframes={['opacity: 1', 'opacity: 0']}
                            iterationCount='1'
                          >
                            <div className='progressbar_wrapper' key={j}>
                              <p>{skillItem.skillName}</p>
                              <Line 
                                 percent={skillItem.percentage}
                                 strokeWidth= '2'
                                 strokeColor='var(--yellow-theme-main-color)'
                                 trailWidth={'2'}
                                 strokeLinecap='square'
                                />

                            </div>

                          </AnimateKeyframes>
                        ))}
                      </div>

                    </Animate>
                </div>
              ))
            }
        </div>

    </section>
  )
}

export default Skills