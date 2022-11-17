/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_SIGNUP:
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE',
    NEXT_PUBLIC_SIGNIN:
      'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBNx6TyDav3mL1hFYkpKG5XGvAJ6P9NGTE',
  },
};

module.exports = nextConfig;
