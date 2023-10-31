import { useState } from 'react';
export default function ServiceHeader() {
  const styles = {
    backgroundImage:
      "url(https://cdn.animaapp.com/projects/648878975caa4f471e87cd45/releases/653a404d102d58de9d925ea7/img/rectangle-6.png)",
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openMenu = () => {
    setIsMenuOpen(true);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header>
      {isMenuOpen && (
        <div id="menu" className="fixed z-90 w-screen h-screen flex justify-center items-center bg-gray-900 opacity-95 duration-700">
          <a
            href="javascript:void(0)"
            className="fixed top-6 right-8 text-white hover:text-amber-500 text-7xl font-semibold duration-300"
            onClick={closeMenu}
          >
            &times;
          </a>
          <div className="flex flex-col text-white text-center text-xl font-light space-y-3">
            <a className="hover:text-amber-500 duration-300" href="/services">
              Services
            </a>
            <a className="hover:text-amber-500 duration-300" href="#">
              About Us
            </a>
            <a className="hover:text-amber-500 duration-300" href="#">
             Values
            </a>
            <a className="hover:text-amber-500 duration-300" href="#">
             Team
            </a>
            <a className="hover:text-amber-500 duration-300" href="#">
             Contact 
            </a>
          </div>
        </div>
      )}
      <div className="w-[1440px] bg-[50%, 50%]  bg-cover h-[1024px]" style={styles}>
        <div className="grid grid-cols-4 gap-4">
          <img
            className="h-[52px] col-start-1 col-end-3 mt-[73px] ml-[78px] w-[76px]"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/648878975caa4f471e87cd45/releases/653a3b284e8d8b3054fbb63e/img/vector-1.svg"
          />
          { !isMenuOpen && (
             <a onClick={openMenu} className="text-white w-20 h-16 col-end-7 col-span-2 md:mt-[58px] sm:mt-6">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               fill="none"
               viewBox="0 0 24 24"
               stroke="currentColor"
             >
               <path
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 strokeWidth="2"
                 d="M4 6h16M4 12h8m-8 6h16"
               />
             </svg>
             </a>
          )}
        </div>
        <div className="text-center">
          <div className="container px-4 mt-72 mx-auto">
            <div className="max-w-4xl mt-4 mx-auto text-center">
                <p className="text-white font-semibold">Our AIFMD Services</p>
              <h2 className="mt-[2rem] mb-6 text-center font-bold text-gray-100" style={{fontSize: '37px', fontWeight: '500', lineHeight: '60px', fontFamily: 'Poppins, Helvetica', textAlign: 'center'}}>
                Expect more from your Management Company
              </h2>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
