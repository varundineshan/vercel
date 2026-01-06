import { FaDribbble, FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

export const featuredRepositories = [
  'NaturalLanguage2SQL',
  'Databricks-RAG-System',
  'RAG-AI-Document-Chat',
  'OntarioVaccine2021 '
];

export const companies = [
  {
    id: 1,
    institution: 'Tata Consultancy Services',
    logo: '/images/companies/tcs.png',
    degree: 'Data Engineering Analyst for CIBC',
    startDate: 'Feb 2022',
    endDate: 'Present'
  },
  {
    id: 2,
    institution: 'Infosys Limited',
    logo: '/images/companies/infosys_logo.png',
    degree: 'Data Analyst',
    startDate: 'Dec 2017',
    endDate: 'Jul 2019'
  },
  {
    id: 3,
    institution: 'Apps Root Technologies',
    logo: '/images/companies/apps_root.png',
    degree: 'Data Analyst',
    startDate: 'Jul 2016',
    endDate: 'Dec 2017'
  }
];

export const institutions = [
  {
    id: 1,
    institution: 'MG University',
    logo: '/images/institutions/mg_logo.png',
    degree: 'Bachelor of Computer Science & Engineering (CSE)',
    startDate: '2013',
    endDate: '2017'
  },
  {
  	id: 2,
  	institution: 'Centennial College',
  	logo: '/images/institutions/busms.png',
  	degree: 'PG Diploma in Software Engineering',
  	startDate: '2020',
  	endDate: '2022',
  }
  // {
  // 	id: 3,
  // 	institution: 'Cantonment Public School & College, Saidpur',
  // 	logo: '/images/institutions/cpscs.png',
  // 	degree: 'Secondary School Certificate, Science',
  // 	startDate: '2014',
  // 	endDate: '2016',
  // },
];

export const socialMedia = [
  {
    id: 1,
    label: 'Github',
    icon: <FaGithub />,
    url: 'https://github.com/varundineshan'
  },
  {
    id: 2,
    label: 'Linkedin',
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/varundineshan/'
  },
//  {
//    id: 3,
//    label: 'Dribbble',
//    icon: <FaDribbble />,
//    url: 'https://dribbble.com/'
//  },
  {
    id: 3,
    label: 'Mail to Varun',
    icon: <FaRegEnvelope />,
    url: 'mailto:connect.varun4dinesh@gmail.com'
  }
];
