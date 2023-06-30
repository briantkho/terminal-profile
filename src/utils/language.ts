import { listCommands } from './commands';

const logoAnsi = `<pre>  
  ██╗██████╗ ██╗  ██╗ ██████╗         ██╗██╗  
 ██╔╝██╔══██╗██║  ██║██╔═══██╗       ██╔╝╚██╗ 
██╔╝ ██████╔╝███████║██║   ██║      ██╔╝  ╚██╗
╚██╗ ██╔══██╗██╔══██║██║   ██║     ██╔╝   ██╔╝
 ╚██╗██████╔╝██║  ██║╚██████╔╝    ██╔╝   ██╔╝ 
  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝    ╚═╝ </pre>`;

const workAnsi = `<pre>
██╗    ██╗ ██████╗ ██████╗ ██╗  ██╗
██║    ██║██╔═══██╗██╔══██╗██║ ██╔╝
██║ █╗ ██║██║   ██║██████╔╝█████╔╝ 
██║███╗██║██║   ██║██╔══██╗██╔═██╗ 
╚███╔███╔╝╚██████╔╝██║  ██║██║  ██╗
 ╚══╝╚══╝  ╚═════╝ ╚═╝  ╚═╝╚═╝  ╚═╝</pre>`;

const contactAnsi = `<pre> 
 ██████╗ ██████╗ ███╗   ██╗████████╗ █████╗  ██████╗████████╗
██╔════╝██╔═══██╗████╗  ██║╚══██╔══╝██╔══██╗██╔════╝╚══██╔══╝
██║     ██║   ██║██╔██╗ ██║   ██║   ███████║██║        ██║   
██║     ██║   ██║██║╚██╗██║   ██║   ██╔══██║██║        ██║   
╚██████╗╚██████╔╝██║ ╚████║   ██║   ██║  ██║╚██████╗   ██║   
 ╚═════╝ ╚═════╝ ╚═╝  ╚═══╝   ╚═╝   ╚═╝  ╚═╝ ╚═════╝   ╚═╝</pre>`;
const projectsAnsi = `<pre>
██████╗ ██████╗  ██████╗      ██╗███████╗ ██████╗████████╗███████╗
██╔══██╗██╔══██╗██╔═══██╗     ██║██╔════╝██╔════╝╚══██╔══╝██╔════╝
██████╔╝██████╔╝██║   ██║     ██║█████╗  ██║        ██║   ███████╗
██╔═══╝ ██╔══██╗██║   ██║██   ██║██╔══╝  ██║        ██║   ╚════██║
██║     ██║  ██║╚██████╔╝╚█████╔╝███████╗╚██████╗   ██║   ███████║
╚═╝     ╚═╝  ╚═╝ ╚═════╝  ╚════╝ ╚══════╝ ╚═════╝   ╚═╝   ╚══════╝</pre>`;
const skillsAnsi = `<pre>
███████╗██╗  ██╗██╗██╗     ██╗     ███████╗
██╔════╝██║ ██╔╝██║██║     ██║     ██╔════╝
███████╗█████╔╝ ██║██║     ██║     ███████╗
╚════██║██╔═██╗ ██║██║     ██║     ╚════██║
███████║██║  ██╗██║███████╗███████╗███████║
╚══════╝╚═╝  ╚═╝╚═╝╚══════╝╚══════╝╚══════╝</pre>`;

const contactInfo = `<a href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=briantkho@gmail.com" target="_blank">Email: briantkho@gmail.com 📧</a>
<a href="https://www.linkedin.com/in/briantkho/" target="_blank">LinkedIn: /in/briantkho 💬</a>
<a href="https://github.com/briantkho" target="_blank">GitHub: /briantkho 🐙</a>
<a href="https://drive.google.com/file/d/1DTRz67E8Yzhk-mwqvskMYUhzy88LkSD8/view?usp=sharing" target="_blank">Resume 📄</a>`;

const lineBreak = '_________________________________________';

const home = `${logoAnsi}
<p>Type “help” to see a list of commands
${lineBreak}

This website is built by Brian Ho. 

Brian is in his final year @ UBC pursuing a degree in Applied Biology & Computer Science. He find lots of joy and fulfillment from building things from the ground up, and seeing his ideas piece together.

Currently, he is a Software Developer Intern at ResponsiveAds Inc.

Here, you can find his qualifications, such as his work experience, projects, and skills.
If you prefer a GUI please visit "https://brianho.tech" or click <a href="https://brianho.tech/"><strong>HERE</strong></a> 

${contactInfo}
${lineBreak}</p>`;

const work = `${workAnsi}
<p>You can find a more detailed breakdown of Brian's experience on his resume <strong><a href="https://drive.google.com/file/d/1DTRz67E8Yzhk-mwqvskMYUhzy88LkSD8/view?usp=sharing" target="_blank">HERE</a></strong>

Software Developer Intern: ResponsiveAds
-- Spearheading online editor revamp using Svelte, TypeScript, and AngularJS
-- <strong>Skills</strong>: Svelte | TypeScript | AngularJS | MongoDB | Agile Development | SCSS

Front End Developer: Tetron Health (formerly LeftInDust)
-- A medical record software company consisting of 10 individuals utilizing Agile Development
-- Developed and updated software using Svelte, TypeScript and SQL to push the program to clinical trials
-- Successfully improved runtime by refactoring and implementing more efficient searching algorithms
-- Converted 5,000 lines of legacy code from Vue to Svelte, resulting in a decrease in bundle size of 15%
-- Utilized systematic design principles to improve code quality for better documentation and better scalability
-- Designed and implemented user interface using Figma, Svelte and SCSS
-- <strong>Skills</strong>: Svelte | TypeScript | Agile Development | SQL | Vue | Figma | SCSS/CSS

Front End Developer: Aniket Solutions
-- Software solutions company that solves complex business problems
-- Collaborated with CEO to design and develop a client portal using Figma and React that allows companies to manage their employees and business subscriptions, improving business turnover by 10%
-- Used Rest API to project real-time updates
-- Successfully developed a new codebase with React and TypeScript by focusing on maintainability and documentation to improve future development
-- <strong>Skills</strong>: React | TypeScript | RestAPI | Authentication | Figma

Web Developer Intern: Nirvana Canada
-- Developed websites for clients using React and Rest APIs to increase website traffic by 25%
-- Worked with 8 developers to make a website for the World Health Organization using React, and TypeScript
-- Optimized code to improve runtime, resulting in a 5% increase in conversion rates
-- Worked on various codebases that utilize React, Angular, and PHP, reducing production bugs by 20%
-- <strong>Skills</strong>: React | TypeScript | JavaScript | Angular | PHP | WordPress
${lineBreak}</p>`;

const contact = `${contactAnsi}
<p>I would love to chat with you more. Feel free to message me on any of my platforms!
${contactInfo}
${lineBreak}</p>`;

const skills = `${skillsAnsi}
<p>
Technical: TypeScript | JavaScript | React | Svelte | Angular | AngularJS | Java | Git | Express | HTML/CSS
Creative: Figma | PhotoShop | Illustrator | LightRoom
${lineBreak}</p>`;

const projects = `${projectsAnsi}
<p>HangmanPro 💭 (Hangman) | <a href="https://github.com/briantkho/HangmanPro" target="_blank"><strong>GitHub</strong></a>
-- A Hangman game remake on Prolog
-- <strong>Utilized</strong>: Prolog | Logic Programming

HaskellVaders 👾 (Space Invaders Remake) | <a href="https://github.com/briantkho/haskellvaders" target="_blank"><strong>GitHub</strong></a>
-- A Space Invaders remake on Haskell
-- <strong>Utilized</strong>: Haskell | Functional Programming

OneTwo3 📝 (Self Improvement Tracker) | <a href="https://github.com/briantkho/OneTwo3" target="_blank"><strong>GitHub</strong></a>
-- A full-stack habit tracker and self-improvement platform for individuals to achieve their goals reliably.
-- <strong>Utilized</strong>: NextJS | React | TypeScript | Authentication | REST API | NoSQL | Tailwind

Flash ⚡ (nwHacks Hackathon 2023) | <a href="https://github.com/JoeDaBu/flash" target="_blank"><strong>GitHub</strong></a>
-- Took the role of full-stack developer, UI designer, and team leader
-- An agile marketplace for UBC students to quickly seek school help and for UBC tutors to make money through tutoring. This is made to connect UBC students to tutors better quickly and easily. We were inspired by the modern challenges and inconvenience of traditional tutors and want to help provide a more advanced and personal approach to the student-tutor relationship. 
-- <strong>Utilized</strong>: React | JavaScript | Figma | TailwindCSS | Express | REST API | SQLite | Prisma

Hush 🔐 (Password Manager) | <a href="https://github.com/briantkho/hush" target="_blank"><strong>GitHub</strong></a>
-- Inspired by the increasing number of compromised passwords coming up online. With many companies looking to make profit from their password managers, finding the right password manager that offers all the tools necessary to secure your account, without having to pay a monthly fee poses as a challenge. I decided to take matters into my own hands and create a password manager that not only stores your passwords, but generates the best password for you to ensure that you will never have to experience a compromised account again!
-- <strong>Utilized</strong>: Java | JUnit | Unit Testing

BriefCase 📰 (COVID-19 Updates) | <a href="https://github.com/briantkho/Brief-Case" target="_blank"><strong>GitHub</strong></a>
-- Provides users with a daily provincial and national COVID-19 summaries with live news coverage.
-- This program uses HTML, CSS, and JavaScript to parse data from COVID-19 Tracker Canada and News API with the Fetch API.
-- Only JavaScript was used in this project to ensure that a solid foundation was formed, prior to moving on to other frameworks such as React.
-- <strong>Utilized</strong>: JavaScript | RESTful API | HTML/CSS
${lineBreak}</p>`;

export const outputs = {
  gui: 'Redirecting...',
  contact: contact,
  work: work,
  help: `Available commands: ${listCommands()}`,
  home: home,
  projects: projects,
  skills: skills,
  unknown: 'zsh: command not found: ',
};
