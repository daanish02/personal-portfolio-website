# Content Addition Guide

Use this guide to update your website's content. All data is managed through JSON files in `../src/data/`.

## 📦 How to Add Content

### 1. Identify the Section
Locate the corresponding JSON file for the section you want to edit:
- **Experience**: `experience.json`
- **Projects**: `projects.json`
- **Research**: `research.json`
- **Certifications**: `certifications.json`
- **Personal Info**: `about.json`

### 2. Follow the Schema
Ensure your new entry matches the structure defined in [SCHEMA.md](./SCHEMA.md). 

> [!TIP]
> Always check for the `id` field. Each entry in an array MUST have a unique ID (e.g., `proj-1`, `proj-2`). Duplicate IDs will cause React rendering errors.

### 3. Use Status Literals
To trigger the color-coded status pills, use these exact keywords:

**For Projects:**
- `"Active"` (Blue)
- `"Completed"` (Green)
- `"In Progress"` (Yellow)
- `"Ideation"` (Gray)

**For Research:**
- `"Submitted"` (Green)
- `"In Review"` (Orange)
- `"Published"` (Green)
- `"In Progress"` (Blue)

### 4. Adding Icons
For the **Skills** and **Languages** sections:
1. Provide the exact name (e.g., `"Python"`, `"Next.js"`).
2. The site will automatically fetch the monochromatic icon from Simple Icons.
3. To override, set the `"icon"` field to a local path (e.g., `"/icons/my-tech.svg"`).

## 🚀 Validating Changes
Before deploying, run the following command to catch any syntax or typing errors:
```bash
npm run build
```
If the build fails, check the console for the specific line in your JSON file where a property or type is missing.
