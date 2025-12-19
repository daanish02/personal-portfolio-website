import languagesData from '@/data/languages.json';
import type { Language } from '@/types';
import EmptyState from '@/components/EmptyState';
import skillStyles from './Skills.module.css';

// Helper to generate language glyph (SVG data URL)
const getLanguageGlyph = (language: string) => {
    // Map to 2-letter ISO or typical code
    const map: Record<string, string> = {
        'english': 'EN',
        'spanish': 'ES',
        'french': 'FR',
        'german': 'DE',
        'chinese': 'ZH',
        'japanese': 'JA',
        'hindi': 'HI',
        'urdu': 'UR',
        'arabic': 'AR'
    };

    const code = map[language.toLowerCase()] || language.substring(0, 2).toUpperCase();

    // Create a clean, sharp SVG badge
    const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="20" fill="#222" />
        <text x="50" y="65" font-family="Arial, sans-serif" font-weight="900" font-size="50" text-anchor="middle" fill="#fff">${code}</text>
    </svg>
    `.trim();

    return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export default function Languages() {
    const data = languagesData as unknown as Language[];
    const hasData = data.length > 0;

    return (
        <section id="languages" className="section">
            <div className="container">
                <h2 className="section-title">Languages</h2>
                {hasData ? (
                    <div className={skillStyles.grid}>
                        {data.map((lang, index) => {
                            const iconUrl = getLanguageGlyph(lang.name);
                            return (
                                <div key={index} className={`${skillStyles.item} ${skillStyles.darkItem} ${skillStyles.languageGlyph}`} tabIndex={0}>
                                    <img
                                        src={iconUrl}
                                        alt={lang.name}
                                        className={skillStyles.flagIcon}
                                    />

                                    <span className={skillStyles.name}>
                                        {lang.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                ) : (
                    <EmptyState message="Language proficiencies to be added" icon="🌍" />
                )}
            </div>
        </section>
    );
}
