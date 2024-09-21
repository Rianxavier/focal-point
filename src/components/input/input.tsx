import styles from './input.module.scss'

interface InputProps {
    label: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const Input = ({ ...props }: InputProps) => {
    return (
        <div className={styles.inputContainer}>
            <label className={styles.label}>{props.label}</label>
            <input
                type={"text"}
                className={styles.input}
                placeholder={"Digite"}
                value={props.value}
                onChange={props.onChange}
            />
        </div>
    )
}