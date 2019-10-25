export const getDomain = () => {
  const dev = process.env.NODE_ENV !== 'production';
  if (dev) {
    return 'http://localhost:3000'
  }
  return 'http://www.wersagtdenndas.info';
};
