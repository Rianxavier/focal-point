import styles from './button.module.scss'

interface ButtonProps {
    label: string;
    cancel?: boolean;
    delete?: boolean;
    onClick: () => void;
    type?: "submit" | "reset" | "button"
}

export const Button = ({ ...props }: ButtonProps) => {

    const buttonStyle = props.cancel ? styles.cancelButton : props.delete ? styles.deleteButton : styles.defaultButton;

    return (
        <button type={props.type} className={`${styles.button} ${buttonStyle}`} onClick={props.onClick}>
            {props.label}
        </button>
    )
}