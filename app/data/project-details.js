export const projectDetails = {
  1: {
    fullTitle: 'FranchiseOps AI – Enterprise RAG Platform',
    subtitle: 'Secure, Authenticated RAG System with Analytics, Audit Logs, and Multi-Tenant Support',
    diagram: '/images/projects/franchiseops-rag.gif',
    whatIBuilt: {
      description: 'A fully deployed, production-grade Retrieval-Augmented Generation (RAG) platform that allows authenticated users to query enterprise franchise manuals and receive accurate, citation-backed answers. The system includes role-based access control, admin ingestion workflows, audit logging, and real-time analytics.',
      context: 'This project represents a complete end-to-end RAG system, covering ingestion, retrieval, generation, security, and observability—designed for real enterprise and franchise environments.'
    },
    theProblem: {
      intro: 'Most RAG demos fail when moved into real-world enterprise environments.',
      challenges: [
        'Unauthenticated access to sensitive documents',
        'No role separation between users and administrators',
        'Lack of auditability for compliance-heavy use cases',
        'Hallucinated answers without traceable sources',
        'No visibility into system usage or query behavior'
      ],
      demonstrates: [
        'End-to-end secure RAG architecture',
        'Strict source-grounded answer generation with citations',
        'Role-based access control for admin and users',
        'Immutable audit logging for sensitive operations',
        'Operational analytics for monitoring system usage'
      ]
    },
    techStack: {
      'Frontend': 'Next.js (Vercel), TypeScript, Tailwind CSS',
      'Backend': 'FastAPI (Python)',
      'Authentication': 'Clerk (JWT, JWKS, role-based claims)',
      'Database': 'PostgreSQL with pgvector',
      'Storage': 'Azure Blob Storage',
      'AI Models': 'OpenAI text-embedding-3-large, GPT-4o',
      'Hosting': 'Render (API), Vercel (Frontend)',
      'Observability': 'Custom analytics & audit logging'
    },
    keyFeatures: [
      {
        icon: '🔐',
        title: 'Authentication & Authorization',
        points: [
          'JWT-based authentication using Clerk',
          'Role-based access control (admin vs user)',
          'Protected frontend routes and backend endpoints',
          'Organization-level multi-tenancy via token claims'
        ]
      },
      {
        icon: '📄',
        title: 'Document Ingestion & Indexing',
        points: [
          'Admin-only PDF upload workflow',
          'Automated parsing, chunking, and embedding generation',
          'Version-aware re-indexing of manuals',
          'Cloud-backed document storage using Azure Blob Storage'
        ]
      },
      {
        icon: '🧠',
        title: 'True RAG Retrieval & Generation',
        points: [
          'Semantic vector search using pgvector (cosine similarity)',
          'Top-k chunk retrieval with similarity thresholds',
          'LLM prompted to answer strictly from retrieved context',
          'Safe refusal when answers are not found in documents'
        ]
      },
      {
        icon: '🧾',
        title: 'Source Attribution',
        description: 'Every answer includes page-level citations and section references, ensuring traceability and trust.'
      },
      {
        icon: '📊',
        title: 'Analytics & Audit Logging',
        points: [
          'Query analytics (usage, refusal rate, latency)',
          'Immutable audit logs for uploads, reindexing, auth failures',
          'Time-based filtering and CSV export for compliance',
          'Admin-only analytics dashboard'
        ]
      }
    ],
    architectureHighlights: [
      'End-to-end authenticated RAG system',
      'Multi-tenant data isolation via org_id',
      'Strict hallucination control',
      'Admin-controlled ingestion and re-indexing',
      'Production-grade observability and auditability'
    ],
    dataFlow: [
      'User authenticates via Clerk',
      'JWT token sent to backend with each request',
      'User question embedded using OpenAI embeddings',
      'pgvector performs semantic similarity search',
      'Top chunks selected as context',
      'Prompt constructed with grounding rules',
      'GPT-4o generates answer',
      'Answer, citations, and metrics logged',
      'Response returned to frontend'
    ],
    security: [
      'JWT validation using Clerk JWKS',
      'Role-based endpoint protection',
      'Org-level data isolation',
      'Immutable audit logs for sensitive actions',
      'HTTPS-only communication'
    ],
    achievements: [
      'Delivered a fully deployed, enterprise-ready RAG system',
      'Implemented secure multi-tenant architecture',
      'Built admin ingestion and re-indexing workflows',
      'Designed hallucination-safe prompt strategy',
      'Integrated analytics and audit logging from day one'
    ],
    challenges: [
      'Balancing retrieval accuracy vs recall',
      'Designing safe refusal behavior for missing data',
      'Managing memory usage during large PDF indexing',
      'Implementing RBAC across frontend and backend',
      'Ensuring observability without external monitoring tools'
    ],
    applications: [
      'Enterprise knowledge assistants',
      'Franchise operations support systems',
      'Internal policy and compliance assistants',
      'Training and onboarding platforms',
      'Secure AI-powered document search'
    ],
    costAnalysis: [
      'Render + Vercel: ~$0–15/month',
      'PostgreSQL (pgvector): ~$5–15/month',
      'Azure Blob Storage: Minimal (pay-as-you-go)',
      'OpenAI (chat + embeddings): Usage-based',
      'Estimated Total: ~$30–50/month for moderate usage'
    ],
    futureEnhancements: [
      'Twilio voice-based RAG integration',
      'Streaming responses',
      'Advanced retrieval re-ranking',
      'Per-sentence citations',
      'RBAC-aware retrieval filters',
      'Feedback-driven answer quality evaluation'
    ]
  },
  2: {
    fullTitle: 'AI-Powered Architecture Diagram Generator Pipeline',
    subtitle: 'Production-Ready 7-Stage Pipeline for Enterprise Architecture Diagrams',
    diagram: '/images/projects/ASD_generator.png',
    whatIBuilt: {
      description: 'A production-ready, 7-stage AI pipeline that transforms natural language project descriptions into professional enterprise architecture diagrams with 100% accuracy verification.',
      context: 'The system accepts a text file containing a project scope (describing components, data flows, and technical stack), processes it through multiple AI stages using GPT-4o for semantic analysis and validation, and generates high-fidelity architecture diagrams using Google Gemini Nano Banana Pro—all without using frameworks like LangChain or CrewAI.'
    },
    theProblem: {
      intro: 'Creating professional architecture diagrams manually is time-consuming, error-prone, and requires specialized tools and expertise. Traditional diagramming tools require manual placement, styling, and validation.',
      challenges: [
        'Manual diagram creation takes hours and requires specialized skills',
        'Inconsistent visual styling across team members',
        'Difficult to maintain diagram accuracy with scope changes',
        'No automated validation against requirements',
        'Complex enterprise diagrams need multiple iterations'
      ],
      demonstrates: [
        'Automated entity extraction from natural language',
        'Intelligent swimlane organization and logical flow',
        'Professional visual design following enterprise standards',
        'Multi-stage validation with 100% accuracy verification',
        'Framework-free deterministic AI pipeline design',
        'Cost-efficient multi-model orchestration'
      ]
    },
    techStack: {
      'Language': 'Python 3.11+ (orchestration)',
      'AI Models': 'OpenAI GPT-4o (analysis), GPT-4o Vision (validation), Google Gemini Nano Banana Pro (image generation)',
      'Data Format': 'JSON (intermediate outputs)',
      'Security': 'python-dotenv (secure API key management)',
      'Architecture': 'Framework-free 7-stage pipeline',
      'APIs': '17 API calls per run (~70,000 tokens processed)'
    },
    keyFeatures: [
      {
        icon: '🎯',
        title: 'Stage 1 - The Deconstructor',
        description: 'Reads natural language project description from scope.txt, extracts all entities (services, APIs, databases, users) and connections (data flows, API calls, dependencies), removes ambiguity, and outputs structured JSON with nodes and edges.'
      },
      {
        icon: '🧩',
        title: 'Stage 2 - The Logic Architect',
        description: 'Reorganizes extracted entities into numbered logical flow (01, 02, 03...), assigns swimlanes (User Layer, API Layer, Processing Layer, Storage Layer, Observability), ensures start-to-end traceability, eliminates dead ends, and outputs JSON with sequenced components and swimlane assignments.'
      },
      {
        icon: '🎨',
        title: 'Stage 3 - The Visual Engineer',
        description: 'Defines visual semantics including HEX color codes per component type (storage = teal, compute = purple, AI = orange), shapes (cylinders for databases, rounded rectangles for services), connector styles (solid for synchronous, dotted for asynchronous), layout direction (left-to-right), badge styles (gold numbered circles), and outputs JSON with complete visual specification.'
      },
      {
        icon: '✍️',
        title: 'Stage 4 - Image Prompt Constructor',
        description: 'Combines Stage 2 logical flow and Stage 3 visual rules to generate a detailed 8,000-15,000 character image generation prompt including specific component names, labels, descriptions, colors, shapes, dimensions, connector types, swimlane specifications, and Azure service icons (⚡ Functions, 🤖 OpenAI, 🔍 AI Search, 📦 Storage, etc.).'
      },
      {
        icon: '🖼️',
        title: 'Stage 5 - Intermediate Diagram Generator',
        description: 'Sends the image generation prompt to Google Gemini Nano Banana Pro API, generates 4 diagram variations for comparison, decodes base64-encoded PNG images, validates image integrity, and saves all 4 diagrams (600-650 KB each) to "intermediate ASD" folder along with JSON API responses.'
      },
      {
        icon: '🔍',
        title: 'Stage 6 - Validator & Refiner',
        description: 'Loads all 4 intermediate diagrams, analyzes each against original scope.txt using GPT-4o Vision, rates accuracy (0-100%), identifies correct and incorrect elements, synthesizes corrections from all analyses into unified strategy, generates improved image prompt incorporating all feedback, calls Gemini API to create final corrected diagram, and saves to "final ASD" folder with analysis reports and synthesis.'
      },
      {
        icon: '✅',
        title: 'Stage 7 - Pro Final Validator',
        description: 'Loads final diagram from Stage 6, validates against scope.txt using GPT-4o Vision to calculate final accuracy percentage, identifies any remaining issues (missing components, incorrect flows, layout problems), generates minimally-corrected prompt if accuracy < 100% (preserving existing layout while fixing specific issues), adds Azure service icons if missing, generates Pro Final diagram using Gemini API, and saves to "Pro Final ASD" folder as the 100% accurate final output.'
      }
    ],
    architectureHighlights: [
      'Framework-free design (no external orchestration tools)',
      'Deterministic outputs (Temperature = 0 for GPT calls)',
      'Multi-stage validation (3 quality gates at Stages 5, 6, 7)',
      'Fail-fast error handling (pipeline stops on invalid JSON)',
      'Idempotent execution (can re-run individual stages)',
      'Cost-optimized (~$0.36 per complete pipeline run)',
      'Separation of concerns (each stage is isolated module)',
      'JSON-driven data flow (structured intermediate outputs)'
    ],
    dataFlow: [
      'Read natural language scope.txt file',
      'Stage 1: Extract entities and connections → entities.json',
      'Stage 2: Organize logical flow and swimlanes → logical_flow.json',
      'Stage 3: Define visual rules (colors, shapes, styles) → visual_rules.json',
      'Stage 4: Construct detailed image prompt → image_prompt.txt',
      'Stage 5: Generate 4 diagram variations → intermediate ASD folder',
      'Stage 6: Validate all 4, synthesize feedback, generate refined diagram → final ASD folder',
      'Stage 7: Final validation, achieve 100% accuracy → Pro Final ASD folder'
    ],
    security: [
      'API keys stored in .env file (not in code)',
      'Environment variables validated before execution',
      '.env excluded from version control',
      'No credentials logged or exposed in outputs',
      'HTTPS-only API communication'
    ],
    achievements: [
      'Built 7-stage deterministic AI pipeline without frameworks',
      'Integrated GPT-4o + GPT-4o Vision + Gemini Nano Banana Pro',
      'Implemented multi-stage validation with iterative refinement',
      'Achieved 100% accuracy verification using AI vision models',
      'Generated enterprise-grade diagrams matching professional standards',
      'Debugged OpenAI JSON mode enforcement and Gemini image generation',
      'Optimized prompts from 4K to 11K+ characters for accuracy',
      'Implemented conservative refinement (minimal changes, preserve layout)'
    ],
    challenges: [
      'Ensuring deterministic JSON outputs from GPT-4o',
      'Balancing prompt length vs. diagram accuracy',
      'Handling base64 image decoding and validation',
      'Synthesizing feedback from multiple diagram variations',
      'Implementing conservative refinement without breaking existing layout',
      'Optimizing API call costs while maintaining quality',
      'Debugging Gemini image generation parameters'
    ],
    applications: [
      'Enterprise architecture documentation',
      'Technical proposal diagrams (RFPs)',
      'System design interviews',
      'DevOps pipeline visualization',
      'Cloud migration planning',
      'Solution architecture presentations',
      'Documentation automation'
    ],
    costAnalysis: [
      '~$0.36 per complete pipeline run',
      '10 runs: $3.60',
      '100 runs: $36.00',
      'Time per run: 3-5 minutes',
      '9 OpenAI GPT-4o calls + 2 GPT-4o Vision calls + 6 Gemini calls = 17 API calls'
    ],
    futureEnhancements: [
      'Support for multiple cloud providers (AWS, GCP)',
      'Interactive web UI for scope input',
      'Real-time diagram editing and refinement',
      'Export to draw.io, Lucidchart formats',
      'Team collaboration features',
      'Version control for diagrams',
      'Batch processing for multiple projects',
      'Custom visual style templates'
    ]
  },
  4: {
    fullTitle: 'Azure RAG API with Azure AI Search + Azure OpenAI',
    subtitle: 'Retrieval-Augmented Generation with Static Documents',
    diagram: '/images/projects/proj3.svg',
    whatIBuilt: {
      description: 'A production-ready Retrieval-Augmented Generation (RAG) API deployed on Azure Functions, enabling users to ask natural-language questions and receive grounded, document-based answers sourced from uploaded PDFs.',
      context: 'The system uses Azure AI Search with vector indexing for retrieval and Azure OpenAI for answer generation, following enterprise-grade RAG architecture patterns.'
    },
    theProblem: {
      intro: 'Large Language Models alone can hallucinate and lack awareness of proprietary documents. Enterprises need a secure, scalable way to ground AI responses in approved content such as PDFs, policies, and technical documentation.',
      challenges: [
        'LLMs hallucinate without grounding in real documents',
        'Proprietary knowledge not available in pre-trained models',
        'Manual document search is slow and inefficient',
        'Difficult to verify answer accuracy and sources',
        'Need secure, scalable solution for enterprise use'
      ],
      demonstrates: [
        'Index static documents for vector search',
        'Perform vector similarity search with embeddings',
        'Generate accurate, source-backed answers',
        'Expose the solution as a secure API',
        'Build production-grade RAG architecture'
      ]
    },
    techStack: {
      'Cloud': 'Microsoft Azure',
      'Compute': 'Azure Functions (Python v4)',
      'AI Models': 'Azure OpenAI (GPT-4o + text-embedding-3-large)',
      'Search': 'Azure AI Search (Vector Search + Semantic Ranker)',
      'Storage': 'Azure Blob Storage',
      'Backend': 'Python (Azure Functions v4)',
      'Security': 'Function Keys, Azure App Settings',
      'Observability': 'Application Insights'
    },
    keyFeatures: [
      {
        icon: '🔍',
        title: 'Document-Grounded Q&A (RAG)',
        points: [
          'Questions answered only from indexed documents',
          'Vector similarity search using embeddings',
          'Semantic ranking for improved relevance',
          'Explicit source attribution (PDF names)'
        ]
      },
      {
        icon: '📄',
        title: 'Automated Document Ingestion',
        points: [
          'PDFs stored in Azure Blob Storage',
          'Chunked and indexed automatically',
          'Embeddings generated via Azure OpenAI',
          'Search index optimized for cosine similarity'
        ]
      },
      {
        icon: '🔐',
        title: 'Secure, Serverless API',
        points: [
          'HTTP-triggered Azure Function (POST /ask)',
          'Function-level authentication (no public access)',
          'Secrets stored securely in App Settings',
          'No credentials hardcoded in code'
        ]
      },
      {
        icon: '⚙️',
        title: 'Production-Grade Architecture',
        points: [
          'Stateless serverless execution',
          'Scales automatically with demand',
          'Clear separation of ingestion, retrieval, and generation',
          'Designed for enterprise extensibility'
        ]
      }
    ],
    architectureHighlights: [
      'Serverless Compute – Azure Functions (Python)',
      'Vector Search Engine – Azure AI Search with HNSW',
      'LLM Integration – Azure OpenAI (chat + embeddings)',
      'Secure Configuration – App Settings + AzureWebJobsStorage',
      'High Accuracy – Semantic ranking + vector similarity'
    ],
    dataFlow: [
      'User sends POST /api/ask with question',
      'Azure Function generates embedding using Azure OpenAI',
      'Azure Function performs vector search in Azure AI Search',
      'Azure AI Search returns top relevant document chunks',
      'Azure Function constructs prompt (question + context)',
      'Azure OpenAI GPT-4o generates grounded answer',
      'Azure Function returns JSON response (answer + sources)',
      'Supporting: Blob Storage stores source PDFs, AI Search maintains vector index, Application Insights logs monitoring data'
    ],
    security: [
      'Function Authentication: Function keys required',
      'Secrets Management: Azure App Settings',
      'No Secrets in Code: Keys never committed',
      'HTTPS Only: TLS-secured endpoints',
      'Scoped Access: Search + OpenAI permissions separated'
    ],
    achievements: [
      'Designed and implemented full RAG pipeline on Azure',
      'Configured Azure AI Search vector index with embeddings',
      'Implemented new VectorizedQuery SDK pattern',
      'Built secure Azure Function API for inference',
      'Debugged real-world Azure issues (auth, indexing, SDK changes)',
      'Deployed and validated end-to-end production workflow',
      'Verified responses via Postman and Search Explorer'
    ],
    challenges: [
      'Azure OpenAI Foundry vs Classic endpoint mismatch',
      'Azure AI Search vector query SDK breaking change',
      'Index schema alignment (chunk vs text)',
      'Function App storage dependency (AzureWebJobsStorage)',
      'Secure deployment without leaking secrets',
      'Multi-region service alignment (Search + OpenAI)'
    ],
    applications: [
      'Internal Knowledge Assistants',
      'Policy & Compliance Q&A',
      'Technical Documentation Search',
      'Employee Self-Service Bots',
      'Training Material Assistants',
      'Customer Support Knowledge Bases'
    ],
    costAnalysis: [
      'Azure Functions: ~$0–5/month (low usage)',
      'Azure AI Search (Basic): ~$25/month',
      'Azure OpenAI: Pay-per-token',
      'Estimated Monthly Cost: ~$30–50 for moderate usage'
    ],
    futureEnhancements: [
      'Managed Identity + Key Vault integration',
      'Hybrid search (keyword + vector)',
      'Multi-document citation formatting',
      'Streaming responses',
      'UI integration',
      'Role-based document access',
      'CI/CD pipeline (GitHub Actions / Azure DevOps)'
    ]
  },
  3: {
    fullTitle: 'Azure Hybrid Semantic RAG Query Service',
    subtitle: 'Hybrid Search + Grounded Answer Generation for RAG Systems',
    diagram: '/images/projects/proj5.png', // Using existing project image as placeholder
    whatIBuilt: {
      description: 'A production-ready RAG query service using Azure Functions that enables users to ask natural-language questions and receive grounded, source-attributed answers using hybrid semantic retrieval (keyword + vector search) and Azure OpenAI.',
      context: 'This project builds directly on ingestion pipeline and represents the retrieval + reasoning layer of an enterprise RAG system.'
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
  },
  5: {
    fullTitle: 'Azure API Management Traffic Control & Governance Foundation',
    subtitle: 'Enterprise API Rate Limiting, Quotas & Observability using Azure API Management',
    diagram: '/images/projects/proj7.png',
    whatIBuilt: {
      description: 'A production-ready API governance layer using Azure API Management (APIM) that securely exposes backend services while enforcing rate limiting, usage quotas, and traffic observability at the platform level.',
      context: 'This project demonstrates how real enterprises protect backend systems and control API consumption without modifying application code, using APIM policies to prevent abuse, manage cost, and provide SaaS-style API access. The backend service is an Azure Function, while all traffic control is enforced centrally by APIM, showcasing clean separation between business logic and API governance.'
    },
    theProblem: {
      intro: 'In real-world enterprise environments, APIs face challenges such as abuse through excessive requests, unexpected cost spikes, lack of consistent throttling across consumers, no visibility into usage per client or subscription, and business logic polluted with traffic-control code.',
      challenges: [
        'Implementing rate limits inside application code',
        'Hardcoding request counters',
        'No subscription-level governance',
        'No central visibility into throttled traffic',
        'Backend systems vulnerable to abuse'
      ],
      demonstrates: [
        'Enforce rate limits before requests hit backend systems',
        'Apply usage quotas at the API gateway',
        'Govern access using subscriptions and products',
        'Monitor API usage and throttling centrally',
        'Build APIs the way enterprises and SaaS platforms do'
      ]
    },
    techStack: {
      'Cloud': 'Microsoft Azure',
      'API Gateway': 'Azure API Management (APIM)',
      'Backend': 'Azure Functions (Python)',
      'Protocols': 'HTTPS / REST',
      'Traffic Policies': 'APIM Policy Engine (XML)',
      'Security': 'Subscription Keys',
      'Monitoring': 'Azure Monitor & APIM Analytics'
    },
    keyFeatures: [
      {
        icon: '🚦',
        title: 'Enterprise Rate Limiting (Core Feature)',
        points: [
          'Rate limiting enforced at API gateway level',
          'Example: 5 requests per minute per subscription',
          'Excess requests automatically blocked with HTTP 429 – Too Many Requests',
          'Backend never receives throttled requests',
          'XML policy: <rate-limit calls="5" renewal-period="60" />'
        ]
      },
      {
        icon: '📊',
        title: 'Usage Quotas (SaaS-Style Governance)',
        points: [
          'Configurable request caps over time windows',
          'Examples: 100 calls/min, 1,000 calls/day, 10,000 calls/month',
          'Demonstrates cost control and tiered API plans',
          'Enterprise monetization patterns',
          'XML policy: <quota calls="1000" renewal-period="86400" />'
        ]
      },
      {
        icon: '🔑',
        title: 'Subscription-Based Access Control',
        points: [
          'APIs exposed via APIM Products',
          'Consumers authenticated using Ocp-Apim-Subscription-Key',
          'Subscription-level isolation ensures fair usage',
          'Per-client governance',
          'Traceable consumption'
        ]
      },
      {
        icon: '🧠',
        title: 'Platform-Level Governance (No App Code Changes)',
        points: [
          'Backend Azure Function remains unchanged',
          'No traffic logic in Python code',
          'APIM enforces throttling, quotas, and access validation',
          'Clean separation: APIM = traffic & governance, Backend = business logic'
        ]
      },
      {
        icon: '📈',
        title: 'Monitoring & Observability',
        points: [
          'API-level analytics via APIM',
          'Visibility into total requests, throttled requests (429s), usage per subscription',
          'Enables capacity planning, abuse detection, and SLA enforcement'
        ]
      }
    ],
    architectureHighlights: [
      'Centralized API gateway',
      'Platform-enforced rate limiting',
      'Subscription-based governance',
      'Backend protection without code changes',
      'SaaS-ready API access model',
      'Observability built into the gateway'
    ],
    dataFlow: [
      'Client sends request with subscription key',
      'Azure API Management receives request',
      'APIM evaluates rate limit, quota, and subscription validity',
      'If within limits: Request forwarded to Azure Function',
      'If exceeded: APIM returns 429 Too Many Requests',
      'Backend remains protected at all times'
    ],
    security: [
      'HTTPS-only access',
      'Subscription key validation at gateway',
      'No direct backend exposure',
      'Rate limits applied before backend execution',
      'Centralized policy enforcement',
      'No secrets or keys in application code'
    ],
    achievements: [
      'Designed and enforced APIM policies correctly across scopes',
      'Resolved policy inheritance and scope-related issues',
      'Demonstrated correct use of API-level and Product-level policies',
      'Successfully tested and validated 429 responses and subscription isolation',
      'Debugged real-world APIM challenges: policy scope conflicts, inherited rate limits, UI vs XML policy discrepancies'
    ],
    challenges: [
      'Understanding APIM policy inheritance (Global → Product → API → Operation)',
      'Debugging "ghost" rate limits caused by inherited policies',
      'Correctly resetting and rebuilding APIs cleanly',
      'Differentiating UI-based policy fragments vs full XML policies',
      'Ensuring backend route mappings for Azure Functions',
      'Validating subscription enforcement behavior'
    ],
    applications: [
      'AI inference APIs (cost protection)',
      'SaaS public APIs',
      'Internal enterprise microservices',
      'Partner-facing integrations',
      'Rate-limited OpenAI / LLM gateways',
      'Monetized API platforms'
    ],
    costAnalysis: [
      'Azure API Management (Developer tier): ~$48/month',
      'Azure Functions (Consumption): ~$0–5/month',
      'Monitoring: Minimal',
      'Estimated Total: ~$50–55/month'
    ],
    futureEnhancements: [
      'OAuth 2.0 / Entra ID authentication via APIM',
      'JWT validation policies',
      'Role-based API access',
      'AI backend integration with usage caps',
      'Per-product tiered pricing',
      'Integration with Azure OpenAI',
      'End-to-end audit logging'
    ]
  }
};
