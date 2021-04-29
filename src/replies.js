const { reply, audio } = require('alice-renderer');

exports.handle = async (command) => {
  return command
    ? repeatUserText(command)
    : welcome();
};

const welcome = () => {
  return reply`
    ${audio('sounds-game-win-1')}
    Привет! Добро пожаловать в н+авык! 😎
  `;
};

const repeatUserText = (command) => {
  return reply`
    Вы сказали: "${command}"
  `;
};
