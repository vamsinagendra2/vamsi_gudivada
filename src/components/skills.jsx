
import styles from './all.module.css';
import pro from '../video/data.svg'
export function Skills() {

    return (
        <div>
            
            <div className={styles.skills}>
                <span>{"<h1>"}</span>
                <h1>Skills</h1>
                <span>{"</h1>"}</span>
                <span>{"<div>"}</span>
                <div>
                    <div>
                        <i class="fab fa-html5"></i>
                        <h1>HTML</h1>
                    </div>
                    <div>
                        <i class="fab fa-css3-alt"></i>
                        <h1>CSS</h1>
                    </div>
                    <div>
                        <i class="fab fa-js-square"></i>
                        <h1>Javascript</h1>
                    </div>
                    <div>
                        <i class="fab fa-react"></i>
                        <h1>React JS</h1>
                    </div>
                    <div>
                        <div className={styles.redux}>
                            <i class="devicon-redux-original" ></i>
                        </div>
                        <h1>Redux</h1>
                    </div>
                </div>
                <span>{"</div>"}</span>
                <span>{"<h1>"}</span>
                <h1>Proficiencies</h1>
                <span>{"</h1>"}</span>
                <span>{"<div>"}</span>
                <div>
                    <div>
                        <i class="fas fa-laptop-code"></i>
                       <h1>Frontend</h1>
                    </div>
                    <div>
                        <i class="fas fa-database"></i>
                        <h1>Mongo DB</h1>
                    </div>
                    <div>
                        <i class="fab fa-node-js"></i>
                        <h1>Node JS</h1>
                    </div>
                </div>
                <span>{"</div>"}</span>
                <img src={pro} alt="" />
           </div>
        </div>
    )
}