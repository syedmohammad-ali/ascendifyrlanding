import Image from "next/image";

export default function hero() {
  return (
    <div className="flex flex-col h-screen bg-[url('/hero_background.png')] bg-no-repeat bg-cover h-screen items-center justify-center">
      <h1 className="text-6xl font-bold text-white">Welcome to Ascendifyr!</h1>
      <h3 className="text-1xl mt-2 text-white mb-10">
        We are the revolution that Agency Owners have been waiting for!
      </h3>
      <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded text-2xl">
        Get Started!
      </button>
    </div>
  );
}
