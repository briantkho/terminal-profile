import React, { useState } from 'react';
import { commandType } from './utils/commands';
import { outputs } from './utils/language';

export const Interaction = () => {
  const defaultOutput = outputs.ansiText;

  const [input, setInput] = useState('');
  const [output, setOutput] = useState(defaultOutput);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      let commandOutput = ``;

      commandOutput = `${output} \nguest@brianho.tech: $ ~ ${input}\n`;

      switch (input) {
        case commandType.home:
          commandOutput += defaultOutput;
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
    }
  };

  return (
    <div>
      <div
        className="whitespace-pre-line"
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
  );
};
