import { listCommands } from './commands';

const logoAnsi = `<pre>  
  ██╗██████╗ ██╗  ██╗ ██████╗         ██╗██╗  
 ██╔╝██╔══██╗██║  ██║██╔═══██╗       ██╔╝╚██╗ 
██╔╝ ██████╔╝███████║██║   ██║      ██╔╝  ╚██╗
╚██╗ ██╔══██╗██╔══██║██║   ██║     ██╔╝   ██╔╝
 ╚██╗██████╔╝██║  ██║╚██████╔╝    ██╔╝   ██╔╝ 
  ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝    ╚═╝ </pre>`;

const home = `${logoAnsi}
<p>Type “help” to see a list of commands

--
This website is built by Brian Ho. 
He is 4th year student at UBC studying Applied Biology & Computer Science 📚.

Resume 📄: <LINK>
LinkedIn 💬: <LINK>
GitHub 🐙: <LINK>

--</p>
`;

export const outputs = {
  about: 'about',
  contact: 'contact',
  experience: 'experience',
  help: `Available commands: ${listCommands()}`,
  home: home,
  projects: `<a href="https://github.com" target="_blank">projects</a>`,
  skills: 'skills',
  unknown: 'zsh: command not found: ',
};
