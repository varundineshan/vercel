import { FaDribbble, FaGithub, FaLinkedin, FaRegEnvelope } from 'react-icons/fa';

export const featuredRepositories = [
  'myportfolio',
  'shahriarshafin',
  'nodemcu-esp8266-fake-sign-in',
  'face-hand-tracker'
];

export const companies = [
  {
    id: 1,
    institution: 'Tata Consultancy Services',
    logo: '/images/companies/tcs.png',
    degree: 'Business Analyst for CIBC',
    startDate: 'Feb 2022',
    endDate: 'Present'
  },
  {
    id: 2,
    institution: 'Taskeasy Technologies',
    logo: '/images/companies/taskeasy.png',
    degree: 'Junior Software Engineer',
    startDate: 'Apr 2023',
    endDate: 'Sep 2024'
  },
  {
    id: 3,
    institution: 'Pridesys IT Limited',
    logo: '/images/companies/pridesys.png',
    degree: 'Software Engineer - Intern',
    startDate: 'Aug 2022',
    endDate: 'Nov 2022'
  }
];

export const institutions = [
  {
    id: 1,
    institution: 'MG University',
    logo: '/images/institutions/uap.png',
    degree: 'Bachelor of Computer Science & Engineering (CSE)',
    startDate: '2013',
    endDate: '2017'
  }
  // {
  // 	id: 2,
  // 	institution: 'Cantonment Public School & College, BUSMS',
  // 	logo: '/images/institutions/busms.png',
  // 	degree: 'Higher Secondary Certificate, Science',
  // 	startDate: '2016',
  // 	endDate: '2018',
  // },
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
  {
    id: 3,
    label: 'Dribbble',
    icon: <FaDribbble />,
    url: 'https://dribbble.com/shahriarshafin'
  },
  {
    id: 4,
    label: 'Mail to Varun',
    icon: <FaRegEnvelope />,
    url: 'mailto:connect.varun4dinesh@gmail.com'
  }
];
