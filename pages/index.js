import styles from './styles.module.scss'
import { useRouter } from 'next/router';
import {linkList} from "./constants.js"
import Header from 'next-head';

function HomePage() {
    const router = useRouter()

    const redirectToPage = (e) => {
        e.preventDefault()
        router.push(e.target.href)
    }

    return <div className={styles.homepage}>
        <h1>CSS Properties!</h1>
        <ul>
            {linkList.map(link =>
                <li className={styles.ul}>
                    <a href={link.href} onClick={redirectToPage}>{link.title}</a>
                </li>
            )}
        </ul>
    </div>
}

export default HomePage