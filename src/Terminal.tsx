import React, { useState } from 'react';
import { Header } from './components/Header';
import { commandType } from './utils/commands';
import { outputs } from './utils/language';

export const Terminal = () => {
  const [input, setInput] = useState('');
  const [output, setOutput] = useState(outputs.home);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      let commandOutput = ``;

      commandOutput = `${output} \nguest@brianho.tech: $ ~ ${input}\n`;

      switch (input) {
        case commandType.home:
          commandOutput += outputs.home;
          break;
        case commandType.help:
          commandOutput += outputs.help;
          break;
        case commandType.about:
          commandOutput += outputs.about;
          break;
        case commandType.contact:
          commandOutput += outputs.contact;
          break;
        case commandType.experience:
          commandOutput += outputs.experience;
          break;
        case commandType.projects:
          commandOutput += outputs.projects;
          break;
        case commandType.skills:
          commandOutput += outputs.skills;
          break;
        default:
          commandOutput += `${outputs.unknown}${input}`;
          break;
      }
      setOutput(commandOutput);
      setInput('');

      const term = document.querySelector('scrolling');
      if (term) {
        window.scrollTo(0, term.scrollHeight);
      }
    }
  };

  return (
    <div className="flex flex-col rounded-2xl w-2/3 h-3/4">
      <Header />
      <div className="bg-bgBlack scrolling">
        <div className="m-2">
          <div
            className="output"
            dangerouslySetInnerHTML={{ __html: output }}
          ></div>
          <input
            type="text"
            value={input}
            onChange={onChangeHandler}
            onKeyDown={keyHandler}
            className=""
          />
        </div>
      </div>
    </div>
  );
};
