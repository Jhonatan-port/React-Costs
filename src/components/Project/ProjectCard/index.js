import styles from './ProjectCard.module.css'
import { Link } from 'react-router-dom'
import {BsPencil, BsFillTrashFill} from 'react-icons/bs'

function ProjectCard({id, name, budget, category, handleRemove}){
    return (
        <div className={styles.project__card}>
            <h4>{name}</h4>
            <p>
                <span>orçamento: </span> R${budget}
            </p>
            <p className={styles.category__text}>
                <span className={`${styles[category.toLowerCase()]}`}></span> {category}
            </p>
            <div className={styles.project__card__actions}>
                <Link to='/'>
                    <BsPencil /> Editar
                </Link>
                <button>
                    <BsFillTrashFill /> Excluir
                </button>
            </div>
        </div>
    )
}

export default ProjectCard