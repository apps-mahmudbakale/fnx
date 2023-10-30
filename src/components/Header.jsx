export default function Header() {
  const styles = {
    backgroundImage:
      "url(https://cdn.animaapp.com/projects/648878975caa4f471e87cd45/releases/653a404d102d58de9d925ea7/img/rectangle-6.png)",
  };
  return (
    <header>
      <div className="w-[1440px] bg-[50%, 50%] bg-cover h-[1024px] opacity-100" style={styles}>
        <div className="grid grid-cols-4 gap-4">
          <img
            className="h-[52px] col-start-1 col-end-3 mt-[73px] ml-[78px] w-[76px]"
            alt="Vector"
            src="https://cdn.animaapp.com/projects/648878975caa4f471e87cd45/releases/653a3b284e8d8b3054fbb63e/img/vector-1.svg"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-white w-20 h-16 col-end-7 col-span-2 md:mt-[71px] sm:mt-6"
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
        </div>
        <div className="text-center">
          <div className="container px-4 mt-72 mx-auto">
            <div className="max-w-4xl mt-4 mx-auto text-center">
              <h2 className="mt-8 mb-6 text-center font-bold text-gray-100" style={{fontSize: '40px', fontWeight: '600', lineHeight: '60px', fontFamily: 'Poppins, Helvetica', textAlign: 'center'}}>
                AIFMD and Management Company Services, by Practitioners for
                Practitioners.
              </h2>
              <a
                className="inline-block w-48 mb-4 py-[15px]  px-[15px] text-sm font-bold capitalize border-2 border-transparent bg-[#9f836c] rounded hover:bg-[#9f836c] text-white"
                href="#"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
