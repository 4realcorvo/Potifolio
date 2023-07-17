import styles from'../styles/QuemSouEu.module.css'

function QuemSouEu(){
    return(
        <div className={styles.bloco}>
            <img src="../public/Profile.jpeg" alt="Imagem de Perfil" className={styles.imgProfile}/>
            <div className={styles.description}>
                <h1>QUEM SOU</h1>
                <h2>Olá, sou Ítalo Marcelo</h2>
                <p>Tenho 19 anos, sou <span>produtor</span> musical, analista de <span>criptomoedas</span> e desenvolvedor <span>front-end</span>. Iniciei meus estudos em front-end no final de 2021,com <span>HTML</span> e <span>CSS</span> básico, mas cada vez mais procuro desenvolver minhas habilidades na área.</p>
            </div>
        </div>
    )
}
export default QuemSouEu