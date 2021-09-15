
import styles from './all.module.css';
import {HiPhoneIncoming } from 'react-icons/hi';
import { AiFillMail } from 'react-icons/ai';
// import i from '../video/i2.mp4'
export function Contact() {

    return (
        <div>
            <div className={styles.contact} >
                {/* <video autoPlay loop muted className={styles.bgvideo}>
                <source src={i} type='video/mp4'/>
                </video> */}
                <span>{"<h1>"}</span>
                <h1>Contact me</h1>
                <span>{"</h1>"}</span>
                <span>{"<p>"}</span>
                <p>i am intrested and curious to work as a developer and you can contact me,<br/>
                    if you have something intresting and challenging for me.<br />Thank you</p>
                <span>{"</p>"}</span>
                <span>{"</a>"}</span>
                <div className={styles.details}>
                    <a href="mailto:vamsinagendra2@gmail.com"><AiFillMail/> vamsinagendra2@gmail.com</a><br/>
                    <a href="#."><HiPhoneIncoming/> +91-9658194444</a>
                </div>
                <span>{"</a>"}</span>

                
                <span>{"<form>"}</span>
                <div>
                    <input type="text" placeholder="Name" />
                    <input type="email" placeholder="Email" />
                    <input type="text" placeholder="Subject" />
                    <button>send message</button>
                </div>

                <span>{"</form>"}</span>
                <span>{"</body>"}</span>
                <span>{"</html>"}</span>
            </div>
        </div>
    )
}