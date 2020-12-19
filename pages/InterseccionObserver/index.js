import React, { useState, useRef, useEffect } from 'react'
import styles from './styles.module.scss';
import globalStyles from '../styles.module.scss'
import cx from 'classnames';

export default function InterserccionObserver() {
    const [pageTitle, setPageTitle] = useState("Intersection Observer")
    const [info, setInfo] = useState({
        "test": "nothing"
    })
    const objetiveRef = useRef()
    let observer;

    useEffect(() => {
        Promise.resolve(
            typeof IntersectionObserver !== 'undefined'
                ? observer = new IntersectionObserver(onChange, {
                    rootMargin: '100px'
                })
                : setPageTitle("Your browser doesn't support Intersection Observer")
        )
    }, [])

    const onChange = (entries, observer) => {
        const el = entries[0]
        console.log(el);
        console.log(observer);
        if (el.isIntersecting) {
            setInfo({
                time: el.time,
                "rootBounds-X": el.rootBounds.x,
                "rootBounds-Y": el.rootBounds.y,
                "rootBounds-width": el.rootBounds.width,
                "rootBounds-height": el.rootBounds.height,
                "rootBounds-top": el.rootBounds.top,
                "rootBounds-right": el.rootBounds.right,
                "rootBounds-bottom": el.rootBounds.bottom,
                "rootBounds-left": el.rootBounds.left,
                "boundingClientRect-X": el.boundingClientRect.x,
                "boundingClientRect-Y": el.boundingClientRect.y,
                "boundingClientRect-width": el.boundingClientRect.width,
                "boundingClientRect-height": el.boundingClientRect.height,
                "boundingClientRect-top": el.boundingClientRect.top,
                "boundingClientRect-right": el.boundingClientRect.right,
                "boundingClientRect-bottom": el.boundingClientRect.bottom,
                "boundingClientRect-left": el.boundingClientRect.left,
                "intersectionRect-X": el.intersectionRect.x,
                "intersectionRect-Y": el.intersectionRect.y,
                "intersectionRect-width": el.intersectionRect.width,
                "intersectionRect-height": el.intersectionRect.height,
                "intersectionRect-top": el.intersectionRect.top,
                "intersectionRect-right": el.intersectionRect.right,
                "intersectionRect-bottom": el.intersectionRect.bottom,
                "intersectionRect-left": el.intersectionRect.left,
                isIntersecting: el.isIntersecting.toString(),
                intersectionRatio: el.intersectionRatio,
                target: el.target.innerText,
                isVisible: el.isVisible.toString()
            })
        } else {
            setInfo({
                time: el.time,
                "rootBounds-X": el.rootBounds.x,
                "rootBounds-Y": el.rootBounds.y,
                "rootBounds-width": el.rootBounds.width,
                "rootBounds-height": el.rootBounds.height,
                "rootBounds-top": el.rootBounds.top,
                "rootBounds-right": el.rootBounds.right,
                "rootBounds-bottom": el.rootBounds.bottom,
                "rootBounds-left": el.rootBounds.left,
                "boundingClientRect-X": el.boundingClientRect.x,
                "boundingClientRect-Y": el.boundingClientRect.y,
                "boundingClientRect-width": el.boundingClientRect.width,
                "boundingClientRect-height": el.boundingClientRect.height,
                "boundingClientRect-top": el.boundingClientRect.top,
                "boundingClientRect-right": el.boundingClientRect.right,
                "boundingClientRect-bottom": el.boundingClientRect.bottom,
                "boundingClientRect-left": el.boundingClientRect.left,
                "intersectionRect-X": el.intersectionRect.x,
                "intersectionRect-Y": el.intersectionRect.y,
                "intersectionRect-width": el.intersectionRect.width,
                "intersectionRect-height": el.intersectionRect.height,
                "intersectionRect-top": el.intersectionRect.top,
                "intersectionRect-right": el.intersectionRect.right,
                "intersectionRect-bottom": el.intersectionRect.bottom,
                "intersectionRect-left": el.intersectionRect.left,
                isIntersecting: el.isIntersecting.toString(),
                intersectionRatio: el.intersectionRatio,
                target: el.target.innerText,
                isVisible: el.isVisible.toString()
            })
        }
    }


    useEffect(() => {
        if (observer && objetiveRef.current) {
            observer.observe(objetiveRef.current)
        }
    }, [objetiveRef])


    return (
        <div className={cx(
            styles["main-component"],
            globalStyles['background--primary-light-soft'],
            globalStyles['color--primary-light-soft']
        )}>

            <h1>{pageTitle}</h1>
            <div
                className={cx(styles.infoContainer, globalStyles['background--primary-dark-soft'])}>
                <ul className={cx(styles.uList)}>
                    <li>TARGET Element Entries</li>
                    <li></li>
                    <li> -</li>
                    <li> -</li>
                    <li>property</li>
                    <li>value</li>
                    {Object.entries(info).map(entry => <div style={{ display: 'contents' }}>
                        <li>{entry[0]}</li>
                        <li>{entry[1]}</li>
                    </div>
                    )}
                </ul>
            </div>
            <div ref={objetiveRef} className={styles.objetive}>
                Target
            </div>

            <style>
                {`li{
                    text-transform: uppercase;
                }`}
            </style>
        </div>
    )
}
