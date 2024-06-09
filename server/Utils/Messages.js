const generateMessage = (username, text, textType = "user") => {
  return {
    username,
    text,
    textType,
    createdAt: new Date().getTime(),
  };
};

const generateLocationMessage = (username, url) => {
  return {
    username,
    url,
    createdAt: new Date().getTime(),
  };
};

module.exports = { generateMessage, generateLocationMessage };
