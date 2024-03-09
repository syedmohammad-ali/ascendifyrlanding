import Image from "next/image";

export default function hero() {
  return (
    <div className="flex flex-col h-screen bg-[url('/hero_background.png')] bg-no-repeat bg-cover h-screen items-center justify-center">
      <h1 className="text-6xl font-bold text-white">Welcome to Ascendifyr!</h1>
      <h3 className="text-1xl mt-2 text-white mb-10">
        We are the revolution that Agency Owners have been wanting for ages!
      </h3>
      <div className="flex flex-row">
        <button className="flex flex-row bg-white hover:text-white hover:bg-green-700 text-black font-bold py-2 px-4 rounded text-2xl m-2">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            width={32}
            height={32}
            alt="Whatsapp Logo"
          />
          <a href="https://chat.whatsapp.com/DXbh1xx7ECAFQwSu4TUbWo">
            Join the Whatsapp Community
          </a>
        </button>

        <button className="flex flex-row bg-white hover:bg-blue-700 hover:text-white text-black font-bold py-2 px-4 rounded text-2xl m-2">
          <Image
            src="/linkedin.png"
            width={29}
            height={29}
            alt="Linkedin Logo"
          />
          <a href="https://chat.whatsapp.com/DXbh1xx7ECAFQwSu4TUbWo">
            &nbsp;Follow us on LinkedIn
          </a>
        </button>
      </div>
    </div>
  );
}
