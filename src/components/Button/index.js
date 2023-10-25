import clsx from 'clsx';
import styles from './Button.module.css';

function Button({ handle }) {

    const classes = clsx(styles.btn, clsx({
        [styles.active]: true,
        'd-flex': true
    }))

    return (
        <>
            <button 
                onClick={handle.handlePlay}
                className={classes}
            >Play</button>
            <button 
                onClick={handle.handlePause}
                className={classes}
            >Pause</button>
        </>
    )
}

export default Button