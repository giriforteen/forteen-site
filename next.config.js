/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/episode2',
        destination: 'https://giriforteen.github.io/unforgettable-forteen/unforgettable_episode2_before_you_speak.html',
        permanent: false, // Use 307 temporary redirect (can change later)
      },
      {
        source: '/pilot',
        destination: 'https://giriforteen.github.io/unforgettable-forteen/presence_premium_pilot_v2.html',
        permanent: false,
      },
    ]
  },
}

module.exports = nextConfig