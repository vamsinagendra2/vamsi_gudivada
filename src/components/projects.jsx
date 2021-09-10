
import styles from './all.module.css';
import v1 from '../video/videos/Lovodo.mp4'
import v2 from '../video/videos/Monster.mp4'
import v3 from '../video/videos/airbnb.mp4'
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
                        <video autoPlay /*loop*/ muted className={styles.video}>
                            <source src={v1} type='video/mp4'/>
                        </video>
                        <h1>Lovodo</h1>
                    </div>
                    <div>
                        <video autoPlay muted className={styles.video}>
                            <source src={v2} type='video/mp4'/>
                        </video>
                        <h1>Monster india</h1>
                    </div>
                    <div>
                        <video autoPlay muted className={styles.video}>
                            <source src={v3} type='video/mp4'/>
                        </video>
                        <h1>Airbnb</h1>
                    </div>
                </div>
                <span>{"</video>"}</span>
                <span>{"<h1>"}</span>
                
                <span>{"</h1>"}</span>
            </div>
        </div>
    )
}