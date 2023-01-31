import React, { useState, useEffect, useRef } from 'react';
import { Header } from './components/Header';
import { commandType } from './utils/commands';
import { outputs } from './utils/language';

export const Terminal = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [input, setInput] = useState('');

  const defaultOutput: string = `${outputs.home}\n`; // change it here to have the html element instead

  const [output, setOutput] = useState(defaultOutput);

  useEffect(() => {
    if (bottomRef.current === null) {
    } else {
      bottomRef.current.scrollIntoView();
    }
  }, [input]);

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const keyHandler = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      let commandOutput = ``;

      commandOutput = `${output} guest@brianho.tech: $ ~ ${input}\n`;

      switch (input.toLowerCase()) {
        case commandType.gui:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.gui}`;
          window.open('https://brianho.tech');
          break;
        case commandType.home:
          commandOutput += outputs.home;
          break;
        case commandType.help:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.help}`;
          break;
        case commandType.contact:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.contact}`;
          break;
        case commandType.work:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.work}`;
          break;
        case commandType.projects:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.projects}`;
          break;
        case commandType.skills:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.skills}`;
          break;
        default:
          commandOutput += `&nbsp;&nbsp;&nbsp;${outputs.unknown}${input}`;
          break;
      }
      setOutput(`${commandOutput}\n`);
      setInput('');
    }
  };

  return (
    <div className="rounded-2xl w-2/3 h-[80%] absolute z-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Header />
      <div className="bg-bgBlack w-full h-full scrolling text-white caret-white rounded-b-2xl">
        <div className="m-2">
          <div
            className="output"
            dangerouslySetInnerHTML={{ __html: output }}
          ></div>
          <div className="flex">
            <p className="whitespace-nowrap text-white">
              guest@brianho.tech: $ ~&nbsp;
            </p>
            <input
              type="text"
              value={input}
              onChange={onChangeHandler}
              onKeyDown={keyHandler}
              className="bg-transparent focus:outline-none caret-white text-white"
              autoFocus
            />
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
};
