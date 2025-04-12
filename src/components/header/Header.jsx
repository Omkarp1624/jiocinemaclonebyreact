import styles from './Header.module.css'
import JCLogo from '../../assets/jc_logo_v2.svg'
import crown from '../../assets/crown.svg'
import searchIcon from '../../assets/ic_search.svg'
import voiceSearchIcon from '../../assets/voice-search.svg'
import jioIcon from '../../assets/jio-logo.png'
const Header = () => {

    let navLinks = ["Home","Sports","Movies","Tv Shows","More"]
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.navigation}>
                    <div className={styles.logo}>
                        <img src={JCLogo} alt='logo'/>
                        <div className={styles.premium}>
                            <img src={crown} alt="image"/>
                            <p>Go Premium</p>
                            </div>
                    </div>
                    <ul className={styles.navLinks}>
                        {
                        navLinks.map((link)=>{
                            return <li className={styles.navLink}>{link}</li>
                        })
                        }
                    </ul>
                </nav>
                <div className={styles.search}>
                    <div className={styles.searchBox}>
                        <div className={styles.headerIcon}>
                            <img src={searchIcon} alt="Icon"/>
                        </div>
                        <input type="text" className={styles.searchInput} placeholder='Movies, Shows and More'/>
                        <div className={styles.headerIcon}>
                            <img src={voiceSearchIcon} alt="icon"/>
                        </div>
                    </div>
                    <img className={styles.userIcon} src={jioIcon} alt="icon"/>
                </div>
            </header>
        </>
    )
}
export default Header