import styles from './NewProject.module.css'
import ProjectForm from '../../ProjectForm'

function NewProject(){
    return (
        <div className={styles.newproject__container}>
            <h1>Criar projeto</h1>
            <p>Crie seu projeto apra adicionar o seu serviço.</p>
            <ProjectForm btnText="Criar Projeto"/>
        </div>
        )
}

export default NewProject