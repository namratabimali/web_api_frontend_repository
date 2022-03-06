import React from 'react'
import styles from './Home.module.css'
import screen from "../.././Screen.png"

const Home = () => {

    return (
        <div className={styles.pageContainer}>

            <section className={styles.hero}>
                <h1>Easiest invoicing for your businesses</h1>
                <div className={styles.paragraph}>

                    <p></p>
                </div>
                <div className={styles.imgContainer} style={{ marginTop: "50px" }}>
                    <img src={screen} className='img-fluid' style={{ objectFit: 'cover', width: "800px" }} alt="invoicing-app" />
                </div>
            </section >
        </div >
    )
}

export default Home
