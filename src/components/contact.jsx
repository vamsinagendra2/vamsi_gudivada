
import styles from './all.module.css';
import {HiPhoneIncoming } from 'react-icons/hi';
import { AiFillMail } from 'react-icons/ai';
import hello from '../video/hello.svg'
import { AiFillGithub } from 'react-icons/ai';
import { AiFillLinkedin } from 'react-icons/ai';
import emailjs from 'emailjs-com';


export function Contact() {

    const sendEmail = (e) => {
        alert(`Thank you`);
        // console.log(e.target.)
        e.preventDefault();
        emailjs.sendForm(`service_gcng0uq`, `template_qzbpbfm`, e.target, `user_xNEecUmU7hYYJWfyJCZ8z`)
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text);
            }, (err) => {
                console.log('FAILED...', err);
            });
    }

    return (
        <div>
            <div className={styles.contact} >
                <span>{"<h1>"}</span>
                <h1>Contact me</h1>
                <span>{"</h1>"}</span>
                <span>{"<p>"}</span>
                <p>Hi there!<br/> If you have some interesting and challenging problems that I can help you with,<br />
                    feel free to connect with me.<br />
                    Thank you....</p>
                <span>{"</p>"}</span>
                <span>{"</a>"}</span>
                <div className={styles.details}>
                    <a href="mailto:vamsinagendra2@gmail.com" target="_blank" rel="noopener noreferrer"><AiFillMail /> vamsinagendra2@gmail.com</a><br />
                    <a href="https://github.com/vamsinagendra2" target="_blank" rel="noopener noreferrer"><AiFillGithub />  Vamsinagendra2</a><br />
                    <a href="https://www.linkedin.com/in/vamsigudivada/" target="_blank" rel="noopener noreferrer"><AiFillLinkedin />  Vamsi Gudivada </a><br />
                    <a href="tel:9658194444"><HiPhoneIncoming/> +91-9658194444,8985681378</a>
                </div>
                <span>{"</a>"}</span>
                
                <span>{"<form>"}</span>
                <div>
                    <form action="" onSubmit={sendEmail}>
                        <input type="text" name ="name" placeholder="Name" />
                        <input type="email" name="mail" placeholder="Email" />
                        <input type="text" name="message" placeholder="Subject" />
                        <input type="submit" value="send message" />
                    </form>
                    
                    {/* <button onClick={sendEmail}>send message</button> */}
                </div>

                <span>{"</form>"}</span>
                <span>{"</body>"}</span>
                <span>{"</html>"}</span>
                <img src={hello} alt="" />
                <p>{"<"}Thank you for visiting{"/>"}<br/> @ Vamsi Gudivada</p>
            </div>
            
                
        </div>
    )
}
