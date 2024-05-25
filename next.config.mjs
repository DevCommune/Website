/** @type {import('next').NextConfig} */
const nextConfig = {
    images:{
        domains: ['utfs.io', 'api.unsplash.com']
    },
    typescript:{
        ignoreBuildErrors:true
    }
};

export default nextConfig;
