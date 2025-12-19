import styles from './PublicProof.module.css';
import contactData from '@/data/contact.json';
import { ContactData } from '@/types';

export default function PublicProof() {
    const contact = contactData as ContactData;
    return (
        <section className="section">
            <div className="container">
                <div className={styles.grid}>
                    {/* GitHub Contributions */}
                    <div className={styles.proofCard}>
                        <h3 className={styles.cardTitle}>GitHub Activity</h3>
                        <div className={styles.embedContainer}>
                            {/* Restored native colors by removing color hex from URL */}
                            <img
                                src={`https://ghchart.rshah.org/${contact.github.statsUsername}`}
                                alt="GitHub Contributions"
                                className={styles.githubChart}
                            />
                        </div>

                        {/* New GitHub Stats section to fill vertical space */}
                        <div className={styles.githubStats}>
                            <div className={`${styles.embedContainer} ${styles.alignStart}`} style={{ width: '100%', marginBottom: 0 }}>
                                <img
                                    src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${contact.github.statsUsername}&layout=compact&theme=dark&hide_border=true&bg_color=00000000`}
                                    alt="Top Languages"
                                    className={styles.statsImage}
                                />
                            </div>
                        </div>

                        <a
                            href={contact.github.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            View Full Profile
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>

                    {/* LeetCode Stats */}
                    <div className={styles.proofCard}>
                        <h3 className={styles.cardTitle}>LeetCode Progress</h3>
                        <div className={styles.embedContainer}>
                            <img
                                src={`https://leetcard.jacoblin.cool/${contact.leetcode.username}?theme=dark&font=Ubuntu&ext=activity`}
                                alt="LeetCode Stats"
                                className={styles.leetcodeCard}
                            />
                        </div>
                        <a
                            href={contact.leetcode.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            View Full Profile
                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </a>
                    </div>


                </div>
            </div>
        </section>
    );
}
