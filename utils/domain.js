export const getDomain = (nodeEnv) => {
  const dev = nodeEnv !== 'production';
  if (dev) {
    return 'localhost:3000'
  }
  return 'wersagtdenndas.info';
};
