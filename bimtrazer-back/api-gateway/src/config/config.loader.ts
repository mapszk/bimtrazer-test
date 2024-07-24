export const configLoader = () => {
  return {
    port: process.env.PORT,
    jwtSecret: process.env.JWT_SECRET,
  };
};
