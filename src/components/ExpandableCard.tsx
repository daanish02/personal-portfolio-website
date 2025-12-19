'use client';

import { useState } from 'react';
import styles from './ExpandableCard.module.css';
import type { Experience, Project, Certification, Volunteering, Award, StudentActivity, Research } from '@/types';

type CardData = Experience | Project | Certification | Volunteering | Award | StudentActivity | Research;

interface ExpandableCardProps {
    data: CardData;
}

export default function ExpandableCard({ data }: ExpandableCardProps) {
    const [isExpanded, setIsExpanded] = useState(false);

    const hasDetails = data.details && Object.keys(data.details).length > 0;
    const isEmpty = data.isEmpty || false;

    const toggleExpand = () => {
        if (hasDetails && !isEmpty) {
            setIsExpanded(!isExpanded);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleExpand();
        }
    };

    return (
        <div
            className={`${styles.card} ${isExpanded ? styles.expanded : ''} ${isEmpty ? styles.empty : ''} ${hasDetails && !isEmpty ? styles.clickable : ''}`}
            onClick={toggleExpand}
            onKeyDown={handleKeyDown}
            tabIndex={hasDetails && !isEmpty ? 0 : -1}
            role={hasDetails && !isEmpty ? 'button' : 'article'}
            aria-expanded={hasDetails && !isEmpty ? isExpanded : undefined}
        >
            {/* Header - Always Visible */}
            <div className={styles.header}>
                <div className={styles.titleRow}>
                    <h3 className={styles.title}>{data.title}</h3>
                    {hasDetails && !isEmpty && (
                        <svg
                            className={`${styles.chevron} ${isExpanded ? styles.rotated : ''}`}
                            width="20"
                            height="20"
                            viewBox="0 0 20 20"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M5 7.5L10 12.5L15 7.5"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            />
                        </svg>
                    )}
                </div>

                {'subtitle' in data && data.subtitle && (
                    <p className={styles.subtitle}>{data.subtitle}</p>
                )}

                {'organization' in data && data.organization && (
                    <p className={styles.subtitle}>{data.organization}</p>
                )}

                {'venue' in data && data.venue && (
                    <p className={styles.subtitle}>{data.venue}</p>
                )}

                {'issuer' in data && data.issuer && (
                    <p className={styles.subtitle}>{data.issuer}</p>
                )}

                {'context' in data && data.context && (
                    <p className={styles.subtitle}>{data.context}</p>
                )}

                {('period' in data && data.period) || ('date' in data && data.date) || ('year' in data && data.year) ? (
                    <p className={styles.period}>
                        {'period' in data && data.period}
                        {'date' in data && data.date}
                        {'year' in data && data.year}
                    </p>
                ) : null}

                {(('status' in data && data.status) || ('badge' in data && data.badge)) && (
                    <span className={`${styles.badge} ${styles[((data as any).status || (data as any).badge).toLowerCase().replace(' ', '-')]}`}>
                        {(data as any).status || (data as any).badge}
                    </span>
                )}

                <p className={styles.overview}>{data.overview}</p>
            </div>

            {/* Details - Expandable */}
            {hasDetails && data.details && !isEmpty && (
                <div className={`${styles.details} ${isExpanded ? styles.visible : ''}`}>
                    <div className={styles.detailsContent}>
                        {(data.details as any).description && (
                            <div className={styles.detailSection}>
                                <p>{(data.details as any).description}</p>
                            </div>
                        )}

                        {'problem' in data.details && (data.details as any).problem && (
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailLabel}>Problem</h4>
                                <p>{(data.details as any).problem}</p>
                            </div>
                        )}

                        {'approach' in data.details && (data.details as any).approach && (
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailLabel}>Approach</h4>
                                <p>{(data.details as any).approach}</p>
                            </div>
                        )}

                        {'impact' in data.details && (data.details as any).impact && (
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailLabel}>Impact</h4>
                                <p>{(data.details as any).impact}</p>
                            </div>
                        )}

                        {'skills' in data.details && (data.details as any).skills && (data.details as any).skills.length > 0 && (
                            <div className={styles.detailSection}>
                                <h4 className={styles.detailLabel}>Technologies</h4>
                                <div className={styles.skillTags}>
                                    {(data.details as any).skills.map((skill: string, index: number) => (
                                        <span key={index} className={styles.skillTag}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(data.details as any).links && (data.details as any).links.length > 0 && (
                            <div className={styles.detailSection}>
                                <div className={styles.links}>
                                    {(data.details as any).links.map((link: any, index: number) => (
                                        <a
                                            key={index}
                                            href={link.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className={styles.link}
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            {link.label}
                                            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                                                <path
                                                    d="M12 8.66667V12.6667C12 13.0203 11.8595 13.3594 11.6095 13.6095C11.3594 13.8595 11.0203 14 10.6667 14H3.33333C2.97971 14 2.64057 13.8595 2.39052 13.6095C2.14048 13.3594 2 13.0203 2 12.6667V5.33333C2 4.97971 2.14048 4.64057 2.39052 4.39052C2.64057 4.14048 2.97971 4 3.33333 4H7.33333M10 2H14M14 2V6M14 2L6.66667 9.33333"
                                                    stroke="currentColor"
                                                    strokeWidth="1.5"
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                />
                                            </svg>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            )}

            {/* Empty State Message */}
            {isEmpty && (
                <p className={styles.emptyMessage}>Details coming soon</p>
            )}
        </div>
    );
}
