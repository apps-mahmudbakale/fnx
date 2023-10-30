import Header from "../components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="max-w-screen-md mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              How We Manage And Secure Your Investments
            </h2>
          </div>
          <div className="grid grid-cols-6 gap-5">
            <div className="col-start-1 col-end-4">
              <h2 className="mb-4 text-white-500 text-2xl underline font-semibold dark:text-gray-400">
                Expect more from your Management Company
              </h2>
              <p className="mb-4 text-gray-500  tracking-none leading-[34px] justify-start dark:text-gray-400">
                Demand a team which has real and direct experience of managing
                UCITS and AIF Funds, raising assets, and regulatory matters in
                the US, UK and Europe. Demand an agile firm which adapts to new
                customer demands efficiently and effectively
              </p>
              <a
                href="#"
                className=" bg-[#9f836c] hover:bg-[#9f836c] text-white  font-bold py-4 px-4 rounded inline-flex items-center"
              >
                <span>Our AIFMD Services</span>
              </a>
            </div>
            <div className="col-start-4 col-end-8">
              <h2 className="mb-4 text-white-500 text-2xl underline font-semibold dark:text-gray-400">
                A partnership that extends beyond management services
              </h2>
              <p className="mb-4 tracking-none leading-[34px] text-gray-500 justify-start dark:text-gray-400">
                Work with a Partner with a background in investor Due Diligence,
                Fund Structuring, and Operations.
              </p>
              <a
                href="#"
                className=" bg-[#9f836c] hover:bg-[#9f836c] text-white  font-bold py-4 px-4 rounded inline-flex items-center"
              >
                <span>Our Values</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#002d3c] dark:bg-[#002d3c]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-3">
              <a href="https://flowbite.com/" className="flex items-center">
                <img
                  src="https://cdn.animaapp.com/projects/648878975caa4f471e87cd45/releases/653a3b284e8d8b3054fbb63e/img/vector-1.svg"
                  className="h-[4.25rem] mr-3"
                  alt="Logo"
                />
              </a>
              
            </div>
            <div className="mb-6 md:mb-0 md:w-11/12 lg:ml-[591px] lg:mt-[34px]">
            <h2 className="mb-4 text-sm  font-semibold text-gray-900 uppercase dark:text-white">
              Send us an email or give us your information and we wil get back to you.
            </h2>
            <a
                href="#"
                className=" bg-[#9f836c] hover:bg-[#9f836c] text-white font-bold py-2 px-2 md:ml-[450px] sm:ml-[200px] ml-[450px] rounded inline-flex items-center"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          <p className="text-sm mt-16 text-white justify-start leading-[34px] dark:text-white" style={{fontSize: '18px', fontWeight: '400', lineHeight: '34px', fontFamily: 'Poppins, Helvetica'}}>
              FNX Dublin Limited is registered in the Republic of Ireland with <span className="font-bold">Company Number 682114</span>. FNX Dublin Limited is authorised under AIFMD by Central Bank of Ireland with <span className="font-bold">registration number C441669.</span>
          </p>

          <ul className="mt-6 space-y-6 text-white uppercase sm:mt-6 sm:space-y-0">
            <li className="py-2" ><a href="" className="font-bold">Disclaimer</a></li>
            <li className="py-2"><a href="" className="font-bold">Privacy Policy</a></li>
            <li className="py-2"><a href="" className="font-bold">Terms of Use</a></li>
          </ul>

          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="" className="hover:underline">
              FNX Dublin Limited™  
              </a>
                All Rights Reserved.
            </span>
            
          </div>
        </div>
      </footer>
    </main>
  );
}
