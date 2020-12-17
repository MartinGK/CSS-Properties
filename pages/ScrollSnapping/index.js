import styles from './styles.module.scss'
import globalStyles from '../styles.module.scss'
import cx from 'classnames';

export default function index() {
    return (
        <div className={styles.container}>
            <section className={cx(styles.childSection, globalStyles['background--primary-light'])} >
                <div className={cx(styles.child)}>CHILD</div></section>
            <section className={cx(styles.childSection, globalStyles['background--primary-light-soft'])} ><div className={cx(styles.child)}>CHILD</div></section>
            <section className={cx(styles.childSection, globalStyles['background--primary-medium'])} ><div className={cx(styles.child)}>CHILD</div></section>
            <section className={cx(styles.childSection, globalStyles['background--primary-light'])} ><div className={cx(styles.child)}>CHILD</div></section>
            <section className={cx(styles.childSection, globalStyles['background--primary-light-soft'])} ><div className={cx(styles.child)}>CHILD</div></section>
            <section className={cx(styles.childSection, globalStyles['background--primary-medium'])} ><div className={cx(styles.child)}>CHILD</div></section>
        </div>
    )
}
