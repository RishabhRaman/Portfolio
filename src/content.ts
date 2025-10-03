export type Social = {
  label: 'GitHub' | 'LinkedIn' | 'Twitter' | 'Instagram' | 'Portfolio' | 'Email'
  href: string
}

export type Project = {
  title: string
  description: string
  href: string
  tags: string[]
}

export type Certificate = {
  title: string
  issuer: string
  year: string
  link?: string
}

export type Education = {
  institution: string
  degree: string
  period: string
  details?: string
}

export const profile = {
  name: 'Rishabh Raman Jha',
  tagline: "Learning to Grow.",
  intro:
    "Java enthusiast with strong DSA skills and a full-stack developer specializing in the MERN stack. I enjoy solving complex problems, building scalable web apps, and driving projects forward with leadership, adaptability, and teamwork",
  availability: 'Open to opportunities',
}

export const skills: string[] = [
  'JAVA',
  'PYTHON',
  'C',
  'DSA',
  'DBMS',
  'OOPS',
  'OS',
  'CN',
  'SQL',
  'ORACLE',
  'HTML',
  'CSS',
  'MERN',
  'REST APIs',
  'Git',
  'Responsive Design',
]

export const projects: Project[] = [
  {
    title: 'YatraMate- An AI powered Travel Itinerary Generator',
    description: 'An AI-based itinerary generator where users input preferences like destination, trip duration, budget, and transport mode to receive a detailed day-by-day travel plan under the budget.',
    href: 'https://yatra-mate-binary-brains.vercel.app/',
    tags: ['MERN', 'React', 'Vite', 'AI', 'API'],
  },
  {
    title: 'ChefAI- An AI powered Recipe Generator',
    description: 'An AI-powered recipe generator and meal planner that suggests personalized recipes based on available ingredients, uploaded refrigerator images, or user preferences.',
    href: 'https://chefai1.vercel.app/',
    tags: ['React', 'Supabase', 'AI', 'APIs',],
  },
  {
    title: 'Story Sharing Platform',
    description: 'A platform where users can share their stories and connect with others.',
    href: 'https://home-to-introverts.vercel.app/',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
  },
]

export const certificates: Certificate[] = [
  { title: 'Runner up - Technical Quiz ', issuer: 'IIIT Bhopal', year: '2025', link: 'https://drive.google.com/drive/folders/11N6_WwpcVmhqdug-nBfcmRyq4rVluMzt' },
  { title: 'HACKINDIA - India\'s Biggest web3 and AI Hackathon', issuer: 'HACKINDIA', year: '2025',link: 'https://drive.google.com/drive/folders/11SpFm1BuQGZBC_T5uRAeSnJJw_o8Uiq9' },
  {title: 'NPTEL - Internet of Things', issuer: 'IIT Kharagpur', year: '2024', link: 'https://drive.google.com/drive/folders/11cjHY5BRA7QAhcw3LnnsDbjV8dNnYHdy' },
  {title: 'NSDC - Python Programming', issuer: 'National Skill Development Corporation', year: '2024', link: 'https://drive.google.com/drive/folders/1266cgV2sFsvvebwbSpz7O5IXOpDZO3mv' },
  {title: 'HACKQUEST- National Level Hackathon', issuer: 'UIT Praygraj', year: '2025', link: 'https://drive.google.com/drive/folders/11hh0DJhNvsWdCrIWzYRVRIzwWk0zjJU3' },
  {title: 'NPTEL - Enhancing Soft SKills and Personality', issuer: 'IIT Kanpur', year: '2023', link: 'https://drive.google.com/drive/folders/11vl0cZr053_SRRa3ZY65J79KnA8PBI_G' },
]

export const socials: Social[] = [
  { label: 'GitHub', href: 'https://github.com/RishabhRaman' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rishabh-raman' },
  { label: 'Twitter', href: 'https://x.com/rishabhramanjha?t=WWpidFIOr3l3JsymebfxQg&s=09' },
  { label: 'Instagram', href: 'https://www.instagram.com/_being_rishabh?igsh=cG1ybnBxOGRtcWc=' },
]

export const contactEmail = 'rishabhraman9@gmail.com'

export const education: Education[] = [
  {
    institution: 'IES College of Technology, Bhopal, MP',
    degree: 'B.Tech in Computer Science',
    period: '2022 — 2026',
    details: 'CGPA: 7.63/10 · Coursework: DSA, DBMS, OS, CN',
  },
  {
    institution: 'Harrow English School, Darbhanga, Bihar',
    degree: 'Class XII (Science)',
    period: '2020 — 2021',
    details: 'Percentage: 77.4% · Subjects: Physics, Chemistry, Mathematics',
  },
  {
    institution: 'Harrow English School, Darbhanga, Bihar',
    degree: 'Class X ',
    period: '2018 — 2019',
    details: 'Percentage: 82.20%',
  }
]


