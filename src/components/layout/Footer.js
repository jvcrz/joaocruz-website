import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.footerContent}>
            <p className={styles.footerText}>© Joao Cruz</p>
            <p className={styles.footerText}>Todos os direitos reservados.</p>
        </footer>
    )
}


export default Footer