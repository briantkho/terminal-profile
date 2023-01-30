import { listCommands } from './commands';

export const outputs = {
  ansiText: `<pre>  
    ██╗██████╗ ██╗  ██╗ ██████╗         ██╗██╗  
   ██╔╝██╔══██╗██║  ██║██╔═══██╗       ██╔╝╚██╗ 
  ██╔╝ ██████╔╝███████║██║   ██║      ██╔╝  ╚██╗
  ╚██╗ ██╔══██╗██╔══██║██║   ██║     ██╔╝   ██╔╝
   ╚██╗██████╔╝██║  ██║╚██████╔╝    ██╔╝   ██╔╝ 
    ╚═╝╚═════╝ ╚═╝  ╚═╝ ╚═════╝     ╚═╝    ╚═╝ </pre>`,
  about: 'about',
  contact: 'contact',
  experience: 'experience',
  help: `Available commands: ${listCommands()}`,
  home: 'home',
  projects: `<a href="https://github.com" target="_blank">projects</a>`,
  skills: 'skills',
  unknown: 'zsh: command not found: ',
};
