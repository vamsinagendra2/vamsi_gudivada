
import styles from './all.module.css';
import v1 from '../video/videos/Lovodo.mp4'
import v2 from '../video/videos/Monster.mp4'
import v3 from '../video/videos/airbnb.mp4'
import { AiFillGithub,AiOutlineDeploymentUnit } from 'react-icons/ai';
export function Work() {

    return (
        <div>
            <div className={styles.work} >
                <span>{"<h1>"}</span>
                <h1>Projects</h1>
                <span>{"</h1>"}</span>
                <span>{"<video>"}</span>
                <div>
                    <div>
                        <video autoPlay controls/*loop*/ muted className={styles.video}>
                            <source src={v1} type='video/mp4'/>
                        </video>
                        <h1>Lovodo</h1>
                        <div>
                            <a href="https://github.com/vamsinagendra2/Project-LOVODA" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                        </div>
                        <p>Lovoda is an E-commerce online store which is located in the US,
                            It has accessories and jewelry for women in a wide range of varaitants </p>
                    </div>
                    <div>
                        <video autoPlay muted controls className={styles.video}>
                            <source src={v2} type='video/mp4'/>
                        </video>
                        <h1>Monster india</h1>
                        <div>
                            <a href="https://github.com/pallav1998/Monster_Project" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            <a href="https://monsterindia.netlify.app/" target="_blank" rel="noopener noreferrer"><AiOutlineDeploymentUnit /></a>
                        </div>
                        <p>Monster India is the India's leading online career and recruitment resource, with its
                            cutting edge technology provides relevant profiles to employers and relevant jobs to jobseekers</p>
                        
                    </div>
                    <div>
                        <video autoPlay muted controls className={styles.video}>
                            <source src={v3} type='video/mp4'/>
                        </video>
                        <h1>Airbnb</h1>
                        <div>
                            <a href="https://github.com/ks-1007/Airbnb-clone" target="_blank" rel="noopener noreferrer"><AiFillGithub /></a>
                            <a href="https://airbnb-clone-one-weld.vercel.app/" target="_blank" rel="noopener noreferrer"><AiOutlineDeploymentUnit /></a>
                        </div>
                        <p>Airbnb is is an American company that operates an online marketplace for lodging,
                            primarily homestays for vacation rentals, and tourism activities.</p>
                        
                    </div>
                </div>
                <span>{"</video>"}</span>
                <span>{"<h1>"}</span>
                
                <span>{"</h1>"}</span>

            </div>
        </div>
    )
}