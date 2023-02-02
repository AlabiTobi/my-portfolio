import React from 'react'
import { BsFillPersonLinesFill, BsInfoCircleFill } from 'react-icons/bs'
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { Animate } from 'react-simple-animate';
import PageHeader from '../../components/pageHeader/PageHeader';
import './Contact.scss';

const Contact = () => {

  const links = [
    {
      id: 1,
      child: (
        <div className='color'>
        <div>
           <FaLinkedin size={70} /> Linkedin
        </div>
        </div>
      ),
      href: "https://linkedin.com/in/alabi-tobi",
    },
    {
      id: 2,
      child: (
        <div className='color'>
        <div>
           <FaGithub size={70} /> Github
        </div>
        </div>
      ),
      href: "https://github.com/AlabiTobi",
    },
    {
      id: 3,
      child: (
        <div className='color'>
        <div>
           <HiOutlineMail size={70} /> Gmail
        </div>
        </div>
      ),
      href: "mailto:alabitobi0140@gmail.com",
    },
    {
      id: 4,
      child: (
        <div className='color'>
        <div>
           <BsFillPersonLinesFill size={70} /> Resume
        </div>
        </div>
      ),
      href: "/tobialabi.pdf",
      download: true,
    },
  ];

  return (
    <section id='contact' className='contact'>
      <PageHeader 
      headerText='My Contact'
      icon= {<BsInfoCircleFill size={40}/>}
      />
      <div className='contact_content'>
        <Animate
        play
        duration={1}
        delay ={0}
        start={{
          transform : 'translateX(-200px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}
        >
          <div className='container'>
            <h3 className='headerText'>Contact Tobi Oladipupo Alabi</h3>
            <h6 className='small'> Get in touch  with me for Frontend Engineer Job</h6>
          </div>
        </Animate>
        <Animate
        play
        duration={1}
        delay ={0}
        start={{
          transform : 'translateX(200px)'
        }}
        end={{
          transform : 'translateX(0px)'
        }}
        >
          <div className='linkContainer'>
          {links.map(({ id, child, href,download }) => (
              <div key={id} className='linkId'>
                <a href={href} className="others" download={download} target="_blank" rel='noreferrer'>
                  {child}
                </a>
              </div>
            ))}

          </div>
        
          <div className="right">
            &#169; {new Date().getFullYear()} alabitobi All rights reserved.

          </div>
        </Animate>

      </div>
    </section>
  )
}

export default Contact