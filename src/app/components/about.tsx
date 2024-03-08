export default function About() {
  return (
    <div id="about">
      <div className="flex flex-col items-center justify-center">
        <div>
          <h1 className="text-4xl font-bold mt-5">Some Words from Us</h1>
        </div>
        <p className="mt-3">
          Welcome to Ascendifyr – where we're not just about software, we're
          about people.
        </p>
        <div className="flex flex-row">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Who?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                At Ascendifyr, we're on a mission to empower agency owners like
                you to achieve your dreams. Whether you're taking your first
                steps or you've been in the game for years,we're here to support
                you every step of the way.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  Why?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Running a marketing agency isn't just a job, it's a passion. And
                we share that passion with you. That's why we've built
                Ascendifyr – a tool designed to make your life easier, your work
                more efficient, and your dreams more achievable. We do
                everything from sales automations to invoices so you don't have
                to use 10 different softwares.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-row">
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  What?
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Our platform is more than just software – it's a partner in your
                success story. With a user-friendly interface, seamless
                integrations, and all the essential features you need,
                Ascendifyr is here to help you reach new heights.
              </p>
            </div>
          </div>
          <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <div className="p-5">
              <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  A word from our CEO!
                </h5>
              </a>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                Excellence, reliability, and accessibility aren't just words to
                us – they're the foundation of everything we do. We're committed
                to delivering a product that's not only top-notch but also
                reliable and accessible to everyone. <br />
                So let's make this magic happen together! <br />
                // CEO & Co-Founder{" "}
                <a
                  href="https://linkedin.com/in/warisareshi"
                  className="text-blue-500" target="blank"
                >
                  Waris Abass
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
