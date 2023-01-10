import Input from '../form/Input'
import Select from '../form/Select'
import SubmitButton from '../form/SubmitButton'

import styles from './ProjectForm.module.css'
function ProjectForm({btnText}) {
    return (
        <form action="" className={styles.form}>
            <Input type="text" text="Nome do projeto" name="name" placeholder="Insira o nome do projeto"/>
            <Input type="number" text="orçamento do projeto" name="budget" placeholder="Insira o orçamento do projeto"/>
            <Select name="category_id" text="Selecione a Categoria" />
            <SubmitButton value={btnText}/>
        </form>
    )
}


export default ProjectForm