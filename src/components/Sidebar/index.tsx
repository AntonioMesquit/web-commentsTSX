import styles from './Siderbar.module.css'
import back from '../../assets/Rectangle 4240.png'
import buttonimage from '../../assets/buttonimage.svg'
import buttomhover from '../../assets/buttonhover.svg'
export function Sidebar(){
    return(
        <aside className={styles.card}>
        <img src={back} alt="background" className={styles.borders}/>
        <img src="https://github.com/AntonioMesquit.png" alt="" className={styles.image}/>
        <div className={styles.info}>
        <strong>Antonio Mesquita</strong>
        <p> Web Developer</p>
        </div>
        <footer className={styles.footer}>
        <button><img src={buttonimage} alt="" className='normal'/> <img src={buttomhover} alt="" className="hover"/> Editar seu perfil</button>

        </footer>
        </aside>
        
    )
   
}