import logo from '../../assets/logo.png';

const Footer = () => {
  return (
    <div id='contact' className="pt-20 sm:pt-24 px-5 sm:px-10 md:px-16 lg:px-20">
      <div className="grid grid-cols-1 md:grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-8 w-full items-start">
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img src={logo} alt="BB Blessing Ventures" className="w-[3rem] sm:w-[6rem] h-auto mx-auto" />
          <span className="font-normal text-2xl pt-5 text-center">
            BB Blessing Ventures
          </span>
        </div>

        {/* Location */}
        <div className="flex flex-col text-center lg:text-left lg:pt-10">
          <span className="font-semibold text-2xl pb-4 lg:pb-12">Our Location</span>
          <span className="text-xl py-1">Madina, Rawlings Circle</span>
          <span className="text-xl py-1">Behind P-cular Heights</span>
          <span className="text-xl pb-4">GM-020-6022</span>
        </div>

        {/* Contact */}
        <div className="flex flex-col text-center lg:text-left lg:pt-10">
          <span className="font-semibold text-2xl pb-4 lg:pb-12">Our Contact</span>
          <a href="tel:+233551381209" className="text-xl hover:underline py-1">
            0551381209
          </a>
          <a href="tel:+233540510702" className="text-xl hover:underline py-1">
            0540510702
          </a>
          <a href="mailto:info@bb-blessing.com" className="text-xl hover:underline pb-4">
            info@bb-blessing.com
          </a>
        </div>

        {/* Address */}
        <div className="flex flex-col text-center lg:text-left lg:pt-10">
          <span className="font-semibold text-2xl pb-4 lg:pb-12">Our Address</span>
          <span className="text-xl py-1">P. O Box 3039</span>
          <span className="text-xl py-1">Community 1</span>
          <span className="text-xl pb-4">Tema</span>
        </div>
      </div>

      {/* Divider + Copyright */}
      <div className="mt-10 sm:mt-20">
        <div className="border-white border-b w-full mb-3 border-opacity-50"></div>
        <div className="flex pb-2 text-xs sm:text-base flex-row justify-between items-center">
          <span>&copy; {new Date().getFullYear()} BB Blessing Ventures</span>
          <span className="">Designed by LampIT Africa</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
