import styles from './styles.module.scss'

function HomePage() {
    console.log(styles)

    return <div className={styles.homepage}>
        <h1>CSS Properties!</h1>
        <ul>
            <li className={styles.ul}>
                Test
            </li>
        </ul>
    </div>
}

export default HomePage