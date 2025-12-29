export const projectDetails = {
  2: {
    fullTitle: 'Azure Hybrid Semantic RAG Query Service',
    subtitle: 'Hybrid Search + Grounded Answer Generation for RAG Systems',
    diagram: '/images/projects/proj5.png', // Using existing project image as placeholder
    whatIBuilt: {
      description: 'A production-ready RAG query service using Azure Functions that enables users to ask natural-language questions and receive grounded, source-attributed answers using hybrid semantic retrieval (keyword + vector search) and Azure OpenAI.',
      context: 'This project builds directly on Project 4\'s ingestion pipeline and represents the retrieval + reasoning layer of an enterprise RAG system.'
    },
    theProblem: {
      intro: 'In real-world RAG systems, retrieval quality matters more than the LLM.',
      challenges: [
        'Keyword search misses semantic intent',
        'Vector search retrieves loosely related content',
        'Pure LLM answers hallucinate without grounding',
        'Systems must refuse to answer when data is missing',
        'Retrieval and generation must be cleanly separated'
      ],
      demonstrates: [
        'Combine keyword precision + semantic recall',
        'Use Reciprocal Rank Fusion (RRF) for robust retrieval',
        'Generate grounded answers only from retrieved documents',
        'Safely handle "unknown" questions without hallucination',
        'Expose a clean, production-ready query API'
      ]
    },
    techStack: {
      'Cloud': 'Microsoft Azure',
      'Compute': 'Azure Functions (Python v4, HTTP Trigger)',
      'Search': 'Azure AI Search (Hybrid: BM25 + Vector + RRF)',
      'AI Models': 'Embeddings: Azure OpenAI text-embedding-3-large | Chat: Azure OpenAI (GPT-4o / GPT-4o-mini)',
      'Backend': 'Python',
      'Security': 'Azure Function Auth, App Settings',
      'Observability': 'Application Insights'
    },
    keyFeatures: [
      {
        icon: '🔎',
        title: 'Hybrid Semantic Retrieval (Enterprise-Grade)',
        points: [
          'Combines keyword search (BM25) for precision',
          'Vector search (HNSW ANN) for semantic recall',
          'Uses Azure AI Search\'s built-in Reciprocal Rank Fusion',
          'No manual score tuning or normalization required'
        ]
      },
      {
        icon: '🧠',
        title: 'Vector-Aware Query Understanding',
        points: [
          'User questions embedded using Azure OpenAI',
          'Semantic similarity search across chunked document embeddings',
          'Handles synonyms, paraphrasing, and intent drift'
        ]
      },
      {
        icon: '🧾',
        title: 'Grounded Answer Generation (True RAG)',
        points: [
          'Retrieved chunks are injected into a controlled prompt',
          'GPT instructed to answer only from provided context',
          'If answer is not present → system safely responds: "I don\'t know based on the provided documents."'
        ]
      },
      {
        icon: '🔗',
        title: 'Source Attribution',
        description: 'Returns final answer, source document names, and chunk indices. Enables traceability and trust.'
      },
      {
        icon: '🧩',
        title: 'Clean API Design',
        points: [
          'Stateless HTTP endpoint',
          'JSON request/response',
          'Designed for frontend, chatbot, or API Management integration'
        ]
      }
    ],
    architectureHighlights: [
      'Hybrid Search (Keyword + Vector)',
      'Reciprocal Rank Fusion (Azure-managed)',
      'Strict hallucination control via prompt design',
      'Stateless serverless execution',
      'Separation of ingestion (Project 4) and querying (Project 5)',
      'Production-safe "I don\'t know" behavior'
    ],
    dataFlow: [
      'User sends question to HTTP endpoint',
      'Azure Function embeds the query',
      'Azure AI Search runs keyword search (BM25) and vector search (HNSW ANN)',
      'Results fused using Reciprocal Rank Fusion (RRF)',
      'Top chunks selected as context',
      'Prompt constructed with strict grounding rules',
      'Azure OpenAI generates answer',
      'Answer + sources returned as JSON'
    ],
    security: [
      'Secrets stored in Azure Function App Settings',
      'No credentials committed to source code',
      'HTTPS-only endpoint',
      'Supports anonymous (internal/demo) and function-level auth',
      'Designed for Azure AD / API Management integration'
    ],
    achievements: [
      'Implemented hybrid semantic retrieval using Azure AI Search',
      'Correctly handled Azure AI Search vector query requirements (kind: vector)',
      'Debugged real Azure edge cases: Python v2 Functions auth behavior, Function vs Host key resolution, ZipDeploy + auth middleware issues',
      'Designed hallucination-safe RAG prompt',
      'Built a complete retrieval + generation layer ready for production use'
    ],
    challenges: [
      'Understanding precision vs recall tradeoffs',
      'Vector-only search returning semantically related but irrelevant content',
      'Correct placement of search_text for hybrid search',
      'Azure Functions authentication inconsistencies',
      'Ensuring "no-answer" scenarios behave safely',
      'Debugging Azure AI Search ranking behavior'
    ],
    applications: [
      'Enterprise RAG chatbots',
      'Internal knowledge assistants',
      'Compliance & policy Q&A systems',
      'Technical documentation assistants',
      'Secure internal search APIs',
      'AI-powered support tools'
    ],
    costAnalysis: [
      'Azure Functions: ~$0–5/month',
      'Azure OpenAI (chat + embeddings): Pay-per-token',
      'Azure AI Search: ~$25/month',
      'Estimated Total: ~$30–50/month for moderate usage'
    ],
    futureEnhancements: [
      'Role-based retrieval filtering (RBAC, metadata)',
      'Per-sentence citations',
      'Confidence scoring',
      'Streaming responses',
      'API Management + Azure AD auth',
      'Feedback-driven retrieval tuning',
      'Query analytics & evaluation metrics'
    ]
  }
};
