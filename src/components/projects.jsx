
import styles from './all.module.css';
import v1 from '../video/videos/Lovodo.mp4'
import v2 from '../video/videos/Monster.mp4'
import v3 from '../video/videos/airbnb.mp4'
import v4 from '../video/videos/LinkedIn.mp4'
import v5 from '../video/videos/freeschool.mp4'
import { AiFillGithub,AiOutlineDeploymentUnit } from 'react-icons/ai';
export function Work() {

    return (
        <div>
            <div className={styles.work} >
                <span>{"<h1>"}</span>
                <h1>Projects</h1>
                <span>{"</h1>"}</span>
                <span>{"<video>"}</span>
                <div >
                    <div style={{marginLeft:"400px"}}>
                        <video autoPlay controls/*loop*/ muted className={styles.video}>
                            <source src={v5} type='video/mp4'/>
                        </video>
                        <h1>FreeSchool</h1>
                        <p>Hackathon project</p>
                        <div>
                            <a href="https://github.com/Abhi15git/freeschool" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            <a href="https://freeschool4u.netlify.app/" target="_blank" rel="noopener noreferrer"><AiOutlineDeploymentUnit /></a>
                        </div>
                        <p>Freeschool is a platform where children can get free education through
                            tuition and our major concern is about making education possible for all.<br/>(own idea implementation)</p>
                        <h4>Front-end: React.js,Javascript,HTML,CSS and npm.<br/>
                            <br/>Back-end: express js(server), mongodb(database)</h4>
                    </div>
                </div>
                <span>{"</video>"}</span>
                <span>{"<h1>"}</span>
                <br />
                <br />
                <br />
                <br />
                <span>{"</h1>"}</span>
                <span>{"<p>"}</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <span>{"</p>"}</span>

                {/* ................................ */}
                <span style={{marginTop:"100px"}}>{"<video>"}</span>
                <div>
                    <div>
                        <video autoPlay muted controls className={styles.video}>
                            <source src={v3} type='video/mp4'/>
                        </video>
                        <h1>Airbnb</h1>
                        <p>Traveller's stay</p>
                        <div>
                            <a href="https://github.com/ks-1007/Airbnb-clone" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            <a href="https://airbnb-clone-one-weld.vercel.app/" target="_blank" rel="noopener noreferrer"><AiOutlineDeploymentUnit /></a>
                        </div>
                        <p>Airbnb is an American company that operates an online marketplace for lodging,
                            primarily homestays for vacation rentals, and tourism activities.</p>
                        <h4>Tech-Stack: React,Redux, Material UI, npm, JavaScript, CSS</h4>
                        
                    </div>
                    <div>
                        <video autoPlay muted controls className={styles.video}>
                            <source src={v4} type='video/mp4'/>
                        </video>
                        <h1>LinkedIn</h1>
                        <p>Social networking</p>
                        <div>
                            <a href="https://github.com/ks-1007/LinkedIn-project/tree/vamsi" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            <a href="https://linkedin-clone-sigma.vercel.app/" target="_blank" rel="noopener noreferrer"><AiOutlineDeploymentUnit /></a>
                        </div>
                        <p>LinkedIn, the world's largest professional network with 774+
                            million members in more than 200 countries and territories worldwide.</p>
                        <h4>Front-end: React.js,Javascript,HTML,CSS and npm.<br/>
                            <br/>Back-end: express js(server), mongodb(database)</h4>
                    </div>
                    
                </div>
                <br />
                <span>{"</video>"}</span>
                <span>{"<h1>"}</span>
                <br />
                <br />
                <br />
                <br />
                <span>{"</h1>"}</span>
                <span>{"<p>"}</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <span>{"</p>"}</span>


                {/* ............... */}

                <span style={{marginTop:"100px"}}>{"<video>"}</span>
                <div>
                    <div>
                        <video autoPlay controls/*loop*/ muted className={styles.video}>
                            <source src={v1} type='video/mp4'/>
                        </video>
                        <h1>Lovodo</h1>
                        <p>E-commerce</p>
                        <div>
                            <a href="https://github.com/vamsinagendra2/Project-LOVODA" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        </div>
                        <p>Lovoda is an E-commerce online store which is located in the US,
                            It has accessories and jewelry for women in a wide range of variants </p>
                        <h4>Tech-Stack: JavaScript, HTML, CSS</h4>
                    </div>
                    <div>
                        <video autoPlay muted controls className={styles.video}>
                            <source src={v2} type='video/mp4'/>
                        </video>
                        <h1>Monster india</h1>
                        <p>Job portal</p>
                        <div>
                            <a href="https://github.com/pallav1998/Monster_Project" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            <a href="https://monsterindia.netlify.app/" target="_blank" rel="noopener noreferrer"><AiOutlineDeploymentUnit /></a>
                        </div>
                        <p>Monster India is India's leading online career and recruitment resource, with its
                            cutting edge technology provides relevant profiles to employers and relevant jobs to jobseekers</p>
                        <h4>Tech-Stack: React, Material UI, npm, JavaScript, CSS</h4>
                    </div>
                </div>
                <span>{"</video>"}</span>
                <span>{"<h1>"}</span>
                <br />
                <br />
                <br />
                <br />
                <span>{"</h1>"}</span>
                <span>{"<p>"}</span>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <span>{"</p>"}</span>
                <br />
                <p>More curious to do a lot in real time....(upcoming)...</p>
            </div>
        </div>
    )
}
