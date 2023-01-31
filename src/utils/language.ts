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

const home = `${logoAnsi}
<p>Type “help” to see a list of commands

--
This website is built by Brian Ho. 
He is 4th year student at UBC studying Applied Biology & Computer Science 📚.

On his free time, he likes to program, and cook.

<a href="https://drive.google.com/file/d/1DTRz67E8Yzhk-mwqvskMYUhzy88LkSD8/view?usp=sharing" target="_blank">Resume 📄</a>
<a href="https://www.linkedin.com/in/briantkho/" target="_blank">LinkedIn 💬</a>
<a href="https://github.com/briantkho" target="_blank">GitHub 🐙</a>
____________</p>\n`;

const work = `${workAnsi}
<p>Frontend Developer: Tetron Health (formerly Leftindust)
-- Skills: TypeScript, Svelte, Git, Figma
Frontend Developer (Freelance): Aniket Solutions
-- Skills: React, TypeScript, REST APIs, UI Design
Web Developer (Intern): Nirvana Canada
-- Skills: React, JavaScript, Angular, PHP, WordPress
____________</p>\n`;

export const outputs = {
  contact: 'contact',
  work: work,
  help: `Available commands: ${listCommands()}`,
  home: home,
  projects: `<a href="https://github.com" target="_blank">projects</a>`,
  skills: 'skills',
  unknown: 'zsh: command not found: ',
};
