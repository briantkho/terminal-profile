export const commandType = {
  gui: 'gui',
  home: 'home',
  work: 'work',
  projects: 'projects',
  skills: 'skills',
  contact: 'contact',
  help: 'help',
} as const;

export const listCommands = () => {
  let list: string = '';

  for (let command in commandType) {
    list += `${command}, `;
  }

  return list.slice(0, -2);
};
