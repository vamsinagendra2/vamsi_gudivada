
import styles from './all.module.css';
import i from '../video/i.mp4'
export function Work() {

    return (
        <div>
            <div className={styles.work} >
                <span>{"<h1>"}</span>
                <h1>Projects</h1>
                <span>{"</h1>"}</span>
                <span>{"<div>"}</span>
                <div>
                    <div>
                        {/* <video autoPlay loop muted className={styles.video}>
                            <source src={i} type='video/mp4'/>
                        </video>  */}
                    </div>
                    <div>
                        <h1>Monster india</h1>
                    </div>
                    <div>
                        <h1>Airbnb</h1>
                    </div>
                </div>
                <span>{"</div>"}</span>
            </div>
        </div>
    )
}