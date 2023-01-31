export const commandType = {
  contact: 'contact',
  work: 'work',
  help: 'help',
  home: 'home',
  projects: 'projects',
  skills: 'skills',
} as const;

export const listCommands = () => {
  let list: string = '';

  for (let command in commandType) {
    list += `${command}, `;
  }

  return list.slice(0, -2);
};
