"use client";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold mb-4 text-gray-100">Connect Anytime, Anywhere</h1>
        <p className="text-lg mb-6 text-gray-400">Real-time messaging for meaningful conversations.</p>
        <button onClick={() => router.push("/auth/login")} className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-600 transition">
          Start Chatting 🚀
        </button>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <Feature title="Dark Mode" description="Enjoy a sleek, modern design." />
        <Feature title="Real-Time Chat" description="Instant messages, seamless connections." />
        <Feature title="Privacy First" description="End-to-end encrypted conversations." />
      </div>
    </div>
  );
}

const Feature = ({ title, description }) => (
  <div className="p-6 bg-gray-800 rounded-lg shadow-lg">
    <h2 className="text-xl font-semibold mb-2 text-gray-300">{title}</h2>
    <p className="text-sm text-gray-400">{description}</p>
  </div>
);
