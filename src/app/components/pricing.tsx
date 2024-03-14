import Image from "next/image";

export default function Pricing() {
  return (
    <div id="pricing" className="dark:bg-black text-white">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-5 mt-7">Pricing</h1>
        <div className="flex flex-row items-center justify-center">
          <div className="plan1 p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Essential
            </h5>
            <div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>God View Dashboard</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>CRM (Only 1000 Oppurtunities)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Ad Performance (1 Ad Account)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Sync Leads from Ads</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Invoicing and Payments</h3>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-blue-600 m-2 dark:text-white">$0/month</h5>
          </div>

          <div className="plan2 p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Entreprenuer
            </h5>
            <div className="text-blue-600 font-bold dark:text-white">
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Everything in Essential</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Unlimited Opportunities</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Unlimited Ad Accounts</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>6 Sub Accounts</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Custom Automations</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Funnel/Landing Page Builder</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>AgencyGPT (Coming Soon)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>SMS Marketing (Coming Soon)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Email Marketing (Coming Soon)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Ascendifyr API (Coming Soon)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Exclusive Support</h3>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-blue-600 m-2 dark:text-white">$27/month</h5>
          </div>

          <div className="plan1 p-7 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 m-5">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Enterprise
            </h5>
            <div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Everything in Entrepreneur</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Whitelabel</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Connect Custom Domain</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Branded Desktop App</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Unlimited Sub Accounts</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Cold Calling (Coming Soon)</h3>
              </div>
              <div className="flex flex-row">
                <Image
                  src="/checkbox.svg"
                  alt="checkbox"
                  width={17}
                  height={17}
                  className="mr-2"
                />
                <h3>Agency Contracts (Coming Soon)</h3>
              </div>
            </div>
            <h5 className="text-2xl font-bold text-blue-600 m-2 dark:text-white">$178/month</h5>
          </div>
        </div>
      </div>
    </div>
  );
}
