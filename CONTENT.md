# Content Guide

All site content lives in `src/data/`. Edit the relevant JSON file, save, and the site rebuilds automatically on push to `main`.

---

## Field rules (apply everywhere)

| Field | Length | Rule |
|---|---|---|
| `overview` | 1 sentence | Shown in the collapsed row. Lead with the outcome or what it is. |
| `approach` | 1–2 sentences | Key tech decisions only. No soft skills. |
| `impact` | 1 sentence | The number. "Cut X from A to B" or "+23% engagement". |
| `description` | 1–2 sentences | Use only when there's no approach/impact split. |
| `skills[]` | 3–8 tags | Tool/tech names only. |

---

## Experience — `src/data/experience.json`

Add new jobs at the **top** of the array. Most recent first.

```json
{
  "id": "exp-N",
  "title": "Your Role",
  "subtitle": "Company Name",
  "period": "Mon YYYY - Present",
  "overview": "One sentence: what you built and the headline outcome.",
  "details": {
    "approach": "Key tech stack and architectural decisions. 1-2 sentences.",
    "impact": "The metric. Numbers preferred.",
    "skills": ["Tool1", "Tool2", "Tool3"],
    "links": []
  }
}
```

---

## Projects — `src/data/projects.json`

**Always exactly 5 show on site** (code takes the first 5). The rest stay in the file as a bench.

- New project ready → add at position 1 (top of array)
- Remove or demote whatever falls off position 5
- Order by impact/impressiveness, not date

```json
{
  "id": "project-N",
  "title": "Short Name (3-5 words)",
  "period": "YYYY",
  "overview": "One sentence: what it does + key metric.",
  "details": {
    "approach": "Key tech decisions. 1-2 sentences.",
    "impact": "The number/outcome. 1 sentence.",
    "skills": ["Tag1", "Tag2", "Tag3"],
    "links": [{ "label": "Code", "url": "https://github.com/..." }]
  }
}
```

---

## Leadership — `src/data/student-activities.json`

Most recent / most senior first.

```json
{
  "id": "activity-N",
  "title": "Role Title",
  "organization": "Org Name",
  "period": "Mon YYYY - Mon YYYY",
  "overview": "One sentence: scope of responsibility.",
  "details": {
    "impact": "One sentence: what improved or was achieved.",
    "links": []
  }
}
```

---

## Credentials — `src/data/certifications.json`

```json
{
  "id": "cert-N",
  "title": "Certification Name",
  "issuer": "Issuing Body",
  "date": "YYYY",
  "overview": "One sentence: what it covers.",
  "details": {
    "links": [{ "label": "Certificate", "url": "https://..." }]
  }
}
```

---

## Education — `src/data/education.json`

Most recent first.

```json
{
  "degree": "Degree Name",
  "institution": "University, City",
  "period": "YYYY - YYYY",
  "gpa": "9.22 / 10"
}
```

---

## Skills — `src/data/skills.json`

Add/remove items in the `skills` array. Icons are fetched automatically from SimpleIcons via the skill name.

```json
{ "name": "ToolName" }
```

If the icon doesn't load correctly, add an explicit URL:
```json
{ "name": "ToolName", "icon": "https://cdn.simpleicons.org/toolname" }
```

---

## About / Intro — `src/data/about.json`

Edit `intro[0]` to change the lede paragraph. Update the bullets in `src/sections/Hero.tsx` directly (they're hardcoded since they're marketing copy, not structured data).

---

## Publications (future)

When you publish something:
1. Create `src/data/publications.json`
2. Add the type to `src/types/index.ts`
3. Add a section in `src/sections/UnifiedExperience.tsx` between Projects and Credentials
4. Add `<a href="#publications">Publications</a>` to `src/components/Header.tsx`
