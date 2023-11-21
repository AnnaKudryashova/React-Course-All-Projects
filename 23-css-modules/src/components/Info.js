import './Info.css';
import styles from './Info.module.css';

console.log(styles);

// {
//     "info": "Info_info__VvL--",
//     "myOtherButton": "Info_myOtherButton__t+uhi"
// }

function Info() {
    return (
        <div className={styles.info}>
            <h1>Hello from Info component</h1>
            <button className="my-button">
                Click me in the Info component
            </button>
            <hr />
            <button className={styles.myOtherButton}>
                Button with local CSS styles
            </button>
        </div>
    );
}

export default Info;
