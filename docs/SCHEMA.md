# Data Schema Documentation

This document defines the strict structure, data types, and allowed literals for all JSON files in `src/data/`.

---

## 🏛️ Page 1: Portfolio (Home)

### `about.json`
| Property | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Your full professional name. |
| `tagline` | `string` | Sub-header description (e.g. "AI Engineer"). |
| `intro` | `string[]` | Array of paragraphs for the introduction. |
| `interests` | `object` | Categories of personal interests. |
| `interests.technical` | `string[]` | e.g. ["Deep Learning", "Systems"]. |
| `interests.nonTechnical` | `string[]` | e.g. ["Photography", "Hiking"]. |

### `projects.json`
| Property | Type | Allowed Literals / Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier (e.g. "proj-1"). |
| `title` | `string` | Name of the project. |
| `badge` | `string` | **Literals**: `"Active"`, `"Completed"`, `"In Progress"`, `"Ideation"`. |
| `overview` | `string` | 1-2 sentence high-level summary. |
| `details` | `object` | Full technical breakdown block. |

---

## 🏗️ Page 2: Credentials (/background)

### `research.json`
| Property | Type | Allowed Literals / Description |
| :--- | :--- | :--- |
| `id` | `string` | Unique identifier (e.g. "res-1"). |
| `status` | `string` | **Literals**: `"Ideation"`, `"In Progress"`, `"Submitted"`, `"In Review"`, `"Published"`. |
| `venue` | `string` | e.g. "ICML 2024" or "Journal of ML". |

---

## 🧪 Page 3: More (/depth)

### `languages.json`
| Property | Type | Description |
| :--- | :--- | :--- |
| `name` | `string` | Name of the language. |
| `icon` | `string \| null` | Path to flag icon (optional). Fetches from Simple Icons if `null`. |

---

## 🛠️ Global Types Configuration
All interfaces are strictly defined in `../src/types/index.ts`. Any change to JSON structure MUST be reflected there to avoid build failures.
