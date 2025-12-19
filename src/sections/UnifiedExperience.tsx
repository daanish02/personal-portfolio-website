import ExpandableCard from '@/components/ExpandableCard';
import EmptyState from '@/components/EmptyState';
import styles from './UnifiedExperience.module.css';
import skillStyles from './Skills.module.css';
import experienceData from '@/data/experience.json';
import certificationsData from '@/data/certifications.json';
import skillsData from '@/data/skills.json';
import projectsData from '@/data/projects.json';
import type { Experience, Certification, SkillsData, Project } from '@/types';

import { getSkillIconUrl } from '@/utils/skillIcons';



export default function UnifiedExperience() {
    const experiences = experienceData as Experience[];
    const certifications = certificationsData as Certification[];
    const skills = skillsData as SkillsData;
    const projects = projectsData as Project[];

    return (
        <section className="section">
            <div className="container">
                <h2 className="section-title">Portfolio</h2>

                {/* 1. Work Experience */}
                <div className={styles.subsection}>
                    <h3 className={styles.subsectionTitle}>Work Experience</h3>
                    {experiences.length > 0 ? (
                        <div className={styles.grid}>
                            {experiences.map((exp) => (
                                <ExpandableCard key={exp.id} data={exp} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Currently focusing on hands-on projects and continuous learning" icon="💼" />
                    )}
                </div>

                {/* 2. Certifications */}
                <div className={styles.subsection}>
                    <h3 className={styles.subsectionTitle}>Certifications and Courses</h3>
                    {certifications.length > 0 ? (
                        <div className={styles.grid}>
                            {certifications.map((cert) => (
                                <ExpandableCard key={cert.id} data={cert} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Exploring new certifications and learning opportunities" icon="📜" />
                    )}
                </div>

                {/* 3. Courses - Combined with Certifications for now */}

                {/* 4. Skills */}
                <div className={styles.subsection}>
                    <h3 className={styles.subsectionTitle}>Skills</h3>
                    {skills.skills && skills.skills.length > 0 ? (
                        <div className={skillStyles.grid}>
                            {skills.skills.map((skill, index) => {
                                const iconUrl = skill.icon || getSkillIconUrl(skill.name);
                                const itemProps = {
                                    key: index,
                                    className: skillStyles.item,
                                    tabIndex: 0
                                };

                                const content = (
                                    <>
                                        <img
                                            src={iconUrl}
                                            alt={skill.name}
                                            className={skillStyles.icon}
                                        />
                                        <span className={skillStyles.name}>{skill.name}</span>
                                    </>
                                );

                                return skill.url ? (
                                    <a {...itemProps} href={skill.url} target="_blank" rel="noopener noreferrer">
                                        {content}
                                    </a>
                                ) : (
                                    <div {...itemProps}>
                                        {content}
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <EmptyState message="Continuously expanding my technical toolkit" icon="🛠️" />
                    )}
                </div>

                {/* 5. Projects */}
                <div className={styles.subsection}>
                    <h3 className={styles.subsectionTitle}>Projects</h3>
                    {projects.length > 0 ? (
                        <div className={styles.grid}>
                            {projects.map((project) => (
                                <ExpandableCard key={project.id} data={project} />
                            ))}
                        </div>
                    ) : (
                        <EmptyState message="Building exciting projects — check back soon!" icon="🚀" />
                    )}
                </div>
            </div>
        </section>
    );
}
