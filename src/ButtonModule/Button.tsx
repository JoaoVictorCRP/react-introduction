import styles from './Button.module.css'

// Using JSX to make css dynamic

function Button(){
    return(
        <button className={styles.buttonModule}>
            Clique Aqui
        </button>
    );
}

export default Button