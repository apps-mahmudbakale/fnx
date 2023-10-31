import ServiceHeader from "../components/ServiceHeader";

export default function Services() {
  return (
    <main>
      <ServiceHeader />
      <section className="bg-white dark:bg-white">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="flex flex-row">
            <div className="flex flex-col w-1/4 space-y-4 ml-[-70px] mt-[8rem]">
              <a className="rounded border py-2 px-2 bg-[#9f836c] text-center text-white">
                Contact Us
              </a>
              <a className="border border-[#9f836c] bg-white outline  font-medium rounded-sm text-sm px-2 py-2 dark:bg-white   dark:border-[#9f836c] text-center text-[#9f836c]">
                Request a Consultation
              </a>
            </div>
            <div className="w-3/4 ml-[123px]">
              <p className="mb-4 text-cyan-950  tracking-none leading-[34px] justify-start dark:text-cyan-950">
                <h3 className="text-cyan-950  space-x-12 text-2xl  font-['Poppins']">
                  Our Comprehensive Services
                </h3>
                At FNX.IE, we're committed to providing an extensive range of
                services to meet the diverse needs of our clients. Our expertise
                extends to every aspect of managing UCITS and AIF Funds, raising
                assets, and addressing regulatory matters in key global markets,
                including the US, UK, and Europe. We offer a comprehensive suite
                of services tailored to your specific requirements, including:
                <ol className="list-decimal text-cyan-950">
                  <li>
                    <span className="font-semibold">Fund Management: </span>
                    Our experienced team offers end-to-end fund management
                    services, ensuring the effective administration and
                    performance optimization of your UCITS and AIF Funds.
                  </li>
                  <li>
                    <span className="font-semibold">Asset Raising:</span> We
                    specialize in helping you raise assets through strategic
                    marketing, investor relations, and market analysis,
                    enhancing your fund's growth potential.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Regulatory Compliance:
                    </span>{" "}
                    Stay ahead of evolving regulations with our expert guidance.
                    We provide thorough regulatory compliance services, helping
                    you navigate the complexities of the US, UK, and European
                    regulatory landscape.
                  </li>
                  <li>
                    <span className="font-semibold">Global Reach:</span>{" "}
                    FNX.IE's international presence and network of industry
                    experts allow us to serve clients globally, facilitating
                    cross-border fund management and asset raising.
                  </li>
                  <li>
                    <span className="font-semibold">Agile Solutions:</span> We
                    pride ourselves on being an agile and adaptive firm. Our
                    ability to respond swiftly to changing customer demands
                    ensures that your investments remain flexible and
                    future-proof.
                  </li>
                </ol>
              </p>
              <p className="mb-4 text-cyan-950  tracking-none leading-[34px] justify-start dark:text-cyan-950">
                <h3 className="text-cyan-950  space-x-12 text-2xl  font-['Poppins']">
                  Our Approach
                </h3>
                Our approach to servicing your needs is characterized by:
                <ol className="list-decimal text-cyan-950">
                  <li>
                    <span className="font-semibold">Client-Centric Solutions: </span>
                    We tailor our services to meet your unique requirements, ensuring that your goals are our top priority.
                  </li>
                  <li>
                    <span className="font-semibold">Strategic Insights::</span> Our team of seasoned professionals provides strategic insights and recommendations based on market trends and regulatory changes.
                  </li>
                  <li>
                    <span className="font-semibold">
                    Transparency:
                    </span>
                    We maintain open and clear communication with our clients throughout our partnership, offering complete transparency in all our services.
                  </li>
                </ol>
              </p>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-[#002d3c] dark:bg-[#002d3c]">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-3">
              <a href="" className="flex items-center">
                <img
                  src="https://cdn.animaapp.com/projects/648878975caa4f471e87cd45/releases/653a3b284e8d8b3054fbb63e/img/vector-1.svg"
                  className="h-[4.25rem] mr-3"
                  alt="Logo"
                />
              </a>
            </div>
            <div className="mb-6 md:mb-0 md:w-11/12 lg:ml-[591px] lg:mt-[34px]">
              <h2 className="mb-4 text-sm  font-semibold text-white uppercase dark:text-white">
                Send us an email or give us your information and we wil get back
                to you.
              </h2>
              <a
                href="#"
                className=" bg-[#9f836c] hover:bg-[#9f836c] text-white font-bold py-2 px-2 md:ml-[450px] sm:ml-[200px] ml-[450px] rounded inline-flex items-center"
              >
                <span>Contact Us</span>
              </a>
            </div>
          </div>
          <p
            className="text-sm mt-16 text-white justify-start leading-[34px] dark:text-white"
            style={{
              fontSize: "18px",
              fontWeight: "400",
              lineHeight: "34px",
              fontFamily: "Poppins, Helvetica",
            }}
          >
            FNX Dublin Limited is registered in the Republic of Ireland with{" "}
            <span className="font-bold">Company Number 682114</span>. FNX Dublin
            Limited is authorised under AIFMD by Central Bank of Ireland with{" "}
            <span className="font-bold">registration number C441669.</span>
          </p>

          <ul className="mt-6 space-y-6 text-white uppercase sm:mt-6 sm:space-y-0">
            <li className="py-2">
              <a href="" className="font-bold">
                Disclaimer
              </a>
            </li>
            <li className="py-2">
              <a href="" className="font-bold">
                Privacy Policy
              </a>
            </li>
            <li className="py-2">
              <a href="" className="font-bold">
                Terms of Use
              </a>
            </li>
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
