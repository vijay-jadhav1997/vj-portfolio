import './Skills.css';

import javascript from '../../assets/images/js.png'
import typescript from '../../assets/images/typescript.png'
import reactjs from '../../assets/images/reactjs.png'
import reduxjs from '../../assets/images/reduxjs.png'
import html5 from '../../assets/images/html-5.png'
import css3 from '../../assets/images/css-3.png'
import tailwindcss from '../../assets/images/Tailwind.png'
import bootstrap from '../../assets/images/bootstrap.png'

import python from '../../assets/images/python.png'
import django from '../../assets/images/django2.png'
import restframework from '../../assets/images/restframework.png'

import sql from '../../assets/images/sql.png'
import postgresql from '../../assets/images/postgresql.png'
import redis from '../../assets/images/redis.png'

import git from '../../assets/images/git.png'
import github from '../../assets/images/github.png'
import npm from '../../assets/images/npm.png'

const Skills = () => {
  return (
    <section id='skills' className="skills">
      <h2 className='skills-heading'>My Web Development Skills</h2>
      <p className='skills-description'>Passionate about coding and web development, I thrive on exploring new technologies and AI tools.  For me, coding is not just a career path – it is a lifelong pursuit fueled by curiosity, innovation, and a love for problem-solving.</p>

      <div className="skills-container">
        <h3 className='skills-title'>Frontend Technologies</h3>
        <div className="frontend">
          <div className="skill">
            <div className="img-wrapper">
              <img src={html5} alt="HTML 5" />
            </div>
            <h4>HTML 5</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={css3} alt="CSS 3" />
            </div>
            <h4>CSS 3</h4>
          </div>
        
          <div className="skill">
            <div className="img-wrapper">
              <img src={javascript} alt="Javascript" />
            </div>
            <h4>JavaScript</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={typescript} alt="Typescript" />
            </div>
            <h4>Typescript</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={reactjs} alt="React.js" />
            </div>
            <h4>React</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={reduxjs} alt="Redux.js" />
            </div>
            <h4>Redux</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={tailwindcss} alt="Tailwind CSS" />
            </div>
            <h4>Tailwind CSS</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={bootstrap} alt="Bootstrap" />
            </div>
            <h4>Bootstrap</h4>
          </div>
          
        </div>

        <h3 className='skills-title'>Backend Technologies</h3>
        <div className="backend">
          <div className="skill">
            <div className="img-wrapper">
              <img src={python} alt="Python" />
            </div>
            <h4>Python</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={django} alt="Django" />
            </div>
            <h4>Django</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={restframework} style={{backgroundColor: '#fff', padding: '2px', borderRadius: '5px'}} alt="Django Rest Framework" />
            </div>
            <h4>Rest Framework</h4>
          </div>
          
        </div>

        <h3 className='skills-title'>Database</h3>
        <div className="database">
          <div className="skill">
            <div className="img-wrapper">
              <img src={sql} style={{ borderRadius: '5px'}} alt="SQL" />
            </div>
            <h4>SQL</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={postgresql} alt="Postgresql" />
            </div>
            <h4>Postgresql</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={redis} alt="Redis" />
            </div>
            <h4>Redis</h4>
          </div>
          
        </div>

        <h3 className='skills-title' >Other</h3>
        <div className="other" >
          <div className="skill">
            <div className="img-wrapper">
              <img src={git} alt="Git" />
            </div>
            <h4>Git</h4>
          </div>

          <div className="skill">
            <div className="img-wrapper">
              <img src={github} alt="GitHub" />
            </div>
            <h4>GitHub</h4>
          </div>
          
          <div className="skill">
            <div className="img-wrapper">
              <img src={npm} alt="npm" />
            </div>
            <h4>npm</h4>
          </div>
          
        </div>

      </div>
      
      <div className="skills-slider1" style={{'--item-width': '125px', '--item-height': '120px', '--quantity': '18'}}>
        <div className="list">
          <span className="item" style={{'--position': '1'}}>HTML</span>
          <span className="item" style={{'--position': '2'}}>CSS</span>
          <span className="item" style={{'--position': '3'}}>JavaScript</span>
          <span className="item" style={{'--position': '4'}}>TypeScript</span>
          <span className="item" style={{'--position': '5'}}>React.js</span>
          <span className="item" style={{'--position': '6'}}>Redux.js</span>
          <span className="item" style={{'--position': '7'}}>Tailwind CSS</span>
          <span className="item" style={{'--position': '8'}}>Bootstrap</span>
          <span className="item" style={{'--position': '9'}}>Python</span>
          <span className="item" style={{'--position': '10'}}>Django</span>
          <span className="item" style={{'--position': '11'}}>vite</span>
          <span className="item" style={{'--position': '12'}}>Rest Framework</span>
          <span className="item" style={{'--position': '13'}}>SQL</span>
          <span className="item" style={{'--position': '14'}}>PostgreSQL</span>
          <span className="item" style={{'--position': '15'}}>Redis</span>
          <span className="item" style={{'--position': '16'}}>Git</span>
          <span className="item" style={{'--position': '17'}}>GitHub</span>
          <span className="item" style={{'--position': '18'}}>npm</span>
        </div>
      </div>

      <div className="skills-slider2" style={{'--item-width': '50px', '--item-height': '250px', '--quantity':'17'}}>
        <div className="list">
          <div className="item" style={{'--position': '1'}}><img src={html5} alt="HTML" /></div>
          <div className="item" style={{'--position': '2'}}><img src={css3} alt="CSS" /></div>
          <div className="item" style={{'--position': '3'}}><img src={javascript} alt="Javascript" /></div>
          <div className="item" style={{'--position': '4'}}><img src={typescript} alt="Typescript" /></div>
          <div className="item" style={{'--position': '5'}}><img src={reactjs} alt="react js" /></div>
          <div className="item" style={{'--position': '6'}}><img src={reduxjs} alt="redux js" /></div>
          <div className="item" style={{'--position': '7'}}><img src={tailwindcss} alt="Tailwind CSS" /></div>
          <div className="item" style={{'--position': '8'}}><img src={bootstrap} alt="Bootstrap" /></div>
          <div className="item" style={{'--position': '9'}}><img src={python} alt="Python" /></div>
          <div className="item" style={{'--position': '10'}}><img src={django} alt="Django" /></div>
          <div className="item" style={{'--position': '11', backgroundColor: '#fff', padding: '2px'}}><img src={restframework} alt="Django Rest Framework" /></div>
          <div className="item" style={{'--position': '12'}}><img src={sql} alt="SQL" /></div>
          <div className="item" style={{'--position': '13'}}><img src={postgresql} alt="Postgra SQL" /></div>
          <div className="item" style={{'--position': '14'}}><img src={redis} alt="Redis" /></div>
          <div className="item" style={{'--position': '15', backgroundColor: '#fff', padding: '2px'}}><img src={git} alt="Git" /></div>
          <div className="item" style={{'--position': '16', backgroundColor: '#fff', padding: '2px'}}><img src={github} alt="GitHub" /></div>
          <div className="item" style={{'--position': '17', backgroundColor: '#fff', padding: '2px'}}><img src={npm} alt="npm" /></div>
        </div>
      </div>
    </section>
  )
}


export default Skills;