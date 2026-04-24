import pkg from '../package.json';

export default function Home() {
    return (
        <main style={{ textAlign: 'center', marginTop: '100px' }}>
            <h1>👋 HelloWork 3</h1>
            <p>Welcome to my Next.js app deployed on Vercel</p>
            <p>Version: {pkg.version}</p>
        </main>
    );
}