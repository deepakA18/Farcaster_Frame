/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    async redirects(){
        return [
            {
                source: '/marineford',
                destination: 'https://onepiece.fandom.com/wiki/Marineford_Arc',
                permanent:false
            },
            {
                source: '/pinatacloud',
                destination: 'https://pinata.cloud/blog',
                permanent: false
            }
        ]
    }
};

export default nextConfig;
