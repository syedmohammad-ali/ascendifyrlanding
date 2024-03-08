import Image from "next/image";

export default function Features() {
  return (
    <div id="features">
      <div className="flex flex-row items-center justify-center">
        <h1 className="font-bold text-4xl mt-7 mb-6">Free Features</h1>
      </div>
      <div className="row1 flex flex-row items-center justify-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-t-lg"
              width={500}
              height={500}
              src="/feature1.jpg"
              alt="first image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Free CRM
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Running an agency without a CRM is like walking in forest with no
              Map! We provide a fully functional CRM Completely for Free.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-t-lg"
              width={500}
              height={500}
              src="/feature2.jpg"
              alt="first image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Ad Performance Dashboard
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              What gets measured gets improved! So track every metric of how
              your ad campaigns are going (Meta, Google etc). Completely Free.
            </p>
          </div>
        </div>
      </div>
      {/*second row*/}
      <div className="row2 flex flex-row items-center justify-center">
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-t-lg"
              width={500}
              height={500}
              src="/feature3.jpg"
              alt="first image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Sync Leads from Ads
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Stop worrying about data entry, typing leads into a google sheet.
              We let you sync your leads directly into the CRM. Completely Free.
            </p>
          </div>
        </div>
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
          <a href="#">
            <Image
              className="rounded-t-lg"
              width={500}
              height={500}
              src="/feature4.jpg"
              alt="first image"
            />
          </a>
          <div className="p-5">
            <a href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Invoicing and Payments
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Stop using 10 different payment processors. Just connect your
              Stripe & recieve payments directly through your CRM. Completely
              Free.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
