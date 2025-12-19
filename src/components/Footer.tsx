import styles from './Footer.module.css';
import contactData from '@/data/contact.json';
import { ContactData } from '@/types';

export default function Footer() {
    const contact = contactData as ContactData;
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.links}>
                    <a href={`mailto:${contactData.email}`} className={styles.link}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                d="M3.33333 5.83333C3.33333 5.3913 3.50893 4.96738 3.82149 4.65482C4.13405 4.34226 4.55797 4.16667 5 4.16667H15C15.442 4.16667 15.866 4.34226 16.1785 4.65482C16.4911 4.96738 16.6667 5.3913 16.6667 5.83333V14.1667C16.6667 14.6087 16.4911 15.0326 16.1785 15.3452C15.866 15.6577 15.442 15.8333 15 15.8333H5C4.55797 15.8333 4.13405 15.6577 3.82149 15.3452C3.50893 15.0326 3.33333 14.6087 3.33333 14.1667V5.83333Z"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                            <path
                                d="M3.33333 5.83333L10 10.8333L16.6667 5.83333"
                                stroke="currentColor"
                                strokeWidth="1.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                        Email
                    </a>

                    <a href={contact.github.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M10 0C4.477 0 0 4.477 0 10c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0110 4.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C17.137 18.165 20 14.418 20 10c0-5.523-4.477-10-10-10z"
                                fill="currentColor"
                            />
                        </svg>
                        GitHub
                    </a>

                    <a href={contact.linkedin.url} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"></path>
                        </svg>
                        LinkedIn
                    </a>


                </div>

                <p className={styles.copyright}>
                    © {new Date().getFullYear()} Danish Ahmed. All rights reserved.
                </p>
            </div>
        </footer>
    );
}
