import styles from './styles.module.scss'
import { useRouter } from 'next/router'

function HomePage() {
    const router = useRouter()

    const redirectToPage = (e) => {
        e.preventDefault()
        console.log(e.target.href)
        router.push(e.target.href)
      }

    return <div className={styles.homepage}>
        <h1>CSS Properties!</h1>
        <ul>
            <li className={styles.ul}>
                <a href={"/ScrollSnapping"} onClick={redirectToPage}>Scroll Snapping</a>
            </li>
        </ul>
    </div>
}

export default HomePage