
import styles from './all.module.css';
export function Contact() {

    return (
        <div>
            <div className={styles.contact} >
                <span>{"<h1>"}</span>
                <h1>Contact me</h1>
                <span>{"</h1>"}</span>
                <span>{"<p>"}</span>
                <p>i am intrested and curious to work with you as a developer and you can contact me for any further details,<br/>Thank you</p>
                <span>{"</p>"}</span>
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