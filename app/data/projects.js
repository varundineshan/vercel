export const projectList = [
  {
    id: 1,
    title: 'Multi-Stage Architecture Diagram Generator',
    des: '7-stage AI pipeline that converts project scope into validated, enterprise-grade architecture diagrams using GPT-4o analysis and Gemini image generation',
    tech: ['GPT-4o', 'Nano Banana Pro', 'Multi-Stage Validation'],
    url: '/projects/1',
    image: '/images/projects/ASD_generator.png'
  },
  {
    id: 2,
    title: 'Hybrid Semantic RAG API',
    des: "A production-ready Retrieval-Augmented Generation (RAG) service using Azure Functions, Azure AI Search hybrid retrieval, and Azure OpenAI.",
    tech: ['Azure AI Search', 'Hybrid Retrieval', 'Azure OpenAI'],
    url: '/projects/2',
    image: '/images/projects/proj5.png'
  },
  {
    id: 3,
    title: 'Vector-Based RAG API',
    des: 'User questions are embedded, matched against a vector index in Azure AI Search, and answered by GPT-4o using only retrieved document context',
    tech: ['Azure AI Search', 'Azure OpenAI', 'RAG'], 
    url: '/projects/3',
    image: '/images/projects/proj3.svg'
  },
  {
    id: 4,
    title: 'Azure API Management Gateway',
    des: 'A production-ready API gateway built using Azure API Management to securely expose backend services, including AI-powered APIs.',
    tech: ['Azure API Management', 'API Gateway', 'Azure'],
    url: '/projects/4',
    image: '/images/projects/proj7.png'
  },
  {
    id: 5,
     title: 'NL2SQL',
    des: 'QueryMaster converts natural language questions into SQL, querying cloud databases like Amazon RDS. It matches questions via Chroma DB or generates queries with GPT-4 using LangChain and LangSmith. With history management, it delivers contextual answers.',
    tech: ['Streamlit',' Chroma DB','Amazon RDS','LLM'],
    url: '',
    image: '/images/projects/NL2SQL.png'
  },
  {
    id: 6,
    title: 'RAG System',
    des: "A document Q&A system using FastAPI, Streamlit, and LangChain. Upload multiple documents (PDF, DOCX, TXT) and ask questions using GPT models. Features include source attribution, session management, intelligent memory handling, and detailed logging. Built with ChromaDB for efficient document processing.",
    tech: ['LLM', 'LangChain', 'Embedding'],
    url: '',
    image: '/images/projects/rag_upscaled.png'
  }

];
