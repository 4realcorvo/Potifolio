import styles from'../styles/Menu.module.css'

function Menu(){
    return(
        <div className={styles.headerMenu}>
            <h1><span>Meu</span> Portifólio</h1>
            <div className={styles.navbar}>
                <p onClick={() => tabBar("home")}>Quem sou</p>
                <p onClick={() => tabBar("conhecimentos")}>Conhecimentos</p>
                <p onClick={() => tabBar("projetos")}>Projetos</p>
                <p onClick={() => tabBar("social")}>Redes Sociais</p>
            </div>
        </div>
    )
}
export default Menu