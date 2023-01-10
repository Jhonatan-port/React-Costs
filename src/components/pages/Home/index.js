import styles from './Home.module.css'

import savings from '../../../img/savings.svg'
import LinkButton from '../../layout/LinkButton'

function Home() {
    return (
        <div>
            <section className={styles.home__container}>
                <h1>Bem-vindo ao <span>Costs</span></h1>
                <p>Comece a gerenciar os seus projetos agora mesmo!</p>

                <LinkButton to="/newproject" text="Criar Projetos"/>
                <img src={savings} alt="Costs" />
            </section>
        </div>
    )
}

export default Home