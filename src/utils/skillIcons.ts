/**
 * Central utility for mapping skill names to Simple Icons slugs.
 * To add a new skill icon, simply add it to the `ICON_MAP` below.
 */

const ICON_MAP: Record<string, string> = {
    'c': 'c',
    'c++': 'cplusplus',
    'agile/scrum': 'jira', // Symbolic
    'airflow': 'apacheairflow',
    'amazon dynamodb': 'amazondynamodb',
    'anthropic': 'anthropic',
    'apache airflow': 'apacheairflow',
    'apache beam': 'apachebeam',
    'apache flink': 'apacheflink',
    'apache hadoop': 'apachehadoop',
    'apache hive': 'apachehive',
    'apache spark': 'apachespark',
    'aws': 'amazonwebservices',
    'azure': 'microsoftazure',
    'beam': 'apachebeam',
    'bigquery': 'googlebigquery',
    'ci/cd': 'githubactions', // Symbolic
    'databricks': 'databricks',
    'dbt': 'dbt',
    'django': 'django',
    'docker': 'docker',
    'dynamodb': 'amazondynamodb',
    'elasticsearch': 'elasticsearch',
    'express.js': 'express',
    'fastapi': 'fastapi',
    'flask': 'flask',
    'flink': 'apacheflink',
    'git': 'git',
    'github actions': 'githubactions',
    'bash': 'gnubash',
    'graphql': 'graphql',
    'hadoop': 'apachehadoop',
    'html/css': 'html5',
    'hugging face': 'huggingface',
    'java': 'openjdk',
    'javascript': 'javascript',
    'jenkins': 'jenkins',
    'jupyter': 'jupyter',
    'kafka': 'apachekafka',
    'kaggle': 'kaggle',
    'keras': 'keras',
    'kubernetes': 'kubernetes',
    'langchain': 'langchain',
    'langflow': 'langflow',
    'langgraph': 'langgraph',
    'linux': 'linux',
    'matplotlib': 'matplotlib',
    'microservices': 'docker', // Symbolic
    'milvus': 'milvus',
    'mlflow': 'mlflow',
    'mongodb': 'mongodb',
    'mysql': 'mysql',
    'next.js': 'nextdotjs',
    'n8n': 'n8n',
    'nginx': 'nginx',
    'node.js': 'nodedotjs',
    'numpy': 'numpy',
    'openai': 'openai',
    'pandas': 'pandas',
    'parquet': 'apacheparquet',
    'pinecone': 'pinecone',
    'postgresql': 'postgresql',
    'power bi': 'powerbi',
    'presto': 'presto',
    'pytorch': 'pytorch',
    'python': 'python',
    'r': 'r',
    'rabbitmq': 'rabbitmq',
    'react': 'react',
    'redis': 'redis',
    'rest apis': 'openapiinitiatives', // Symbolic
    'redux': 'redux',
    'scikit-learn': 'scikitlearn',
    'seaborn': 'seaborn',
    'snowflake': 'snowflake',
    'spark': 'apachespark',
    'streamlit': 'streamlit',
    'superset': 'apachesuperset',
    'system design': 'excalidraw', // Symbolic
    'tableau': 'tableau',
    'tailwind css': 'tailwindcss',
    'tensorflow': 'tensorflow',
    'terraform': 'terraform',
    'trino': 'trino',
    'typescript': 'typescript',
    'vue.js': 'vuedotjs',
    'weaviate': 'weaviate',
    'weights & biases': 'weightsandbiases'
};

/**
 * Generates a Simple Icons CDN URL for a given skill name.
 * Uses the manual map first, then falls back to a generated slug.
 */
export const getSkillIconUrl = (name: string) => {
    const normalize = (s: string) => s.toLowerCase();

    // Default slugify for unmapped
    const slug = normalize(name)
        .replace(/\+/g, 'plus')
        .replace(/\./g, 'dot')
        .replace(/[^a-z0-9]/g, '');

    const finalSlug = ICON_MAP[normalize(name)] || slug;

    return `https://cdn.simpleicons.org/${finalSlug}`;
};
