import styles from './Select.module.css'

function Select({text, name, options, handleOnChange, value}){
    return(
        <div className={styles.form__control}>
            <label htmlFor={name}>{text} :</label>
            <select name={name} id={name}>
                <option selected disabled>Selecione uma opção</option>
            </select>
        </div>
    )
}


export default Select