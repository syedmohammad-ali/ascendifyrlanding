import Image from "next/image";

export default function Closing() {
  return (
    <div id="closing" className="dark:bg-black text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-3xl font-bold">
          Click the Button below to Join our Community and Stay Updated!
        </h1>
        <h2 className="text-gray-500">
          Be the first to get access to the software and get insider updates.
        </h2>
        <h2 className="text-gray-500">
          Connect with like-minded-individuals (fellow Agency Owners,
          Entrepreneurs etc)
        </h2>
        <button className="flex flex-row bg-green-600 hover:bg-green-800 text-white font-bold py-2 px-4 rounded text-2xl mt-3">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            width={32}
            height={32}
            alt="Whatsapp Logo"
          />
          <a href="https://chat.whatsapp.com/DXbh1xx7ECAFQwSu4TUbWo">
            JOIN TODAY!!!
          </a>
        </button>
      </div>
    </div>
  );
}
