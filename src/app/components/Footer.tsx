const Footer = () => {
  return (
    <div className="footer flex-col gap-y-2 justufy-center py-4 bg-yellow-500 text-white flex md:flex-row items-center text-md font-normal sm:text-md md:justify-evenly md:py-6 text-lg font-medium tracking-wide">
      <p className="">© Reserved Rudra Resto. 2024</p>
      <div className="flex items-center gap-x-8">
        <p>
          <i className="ri-facebook-fill font-bold footer-icon border-2 border-solid border-white p-2"></i>
        </p>
        <p>
          <i className="ri-instagram-line font-bold footer-icon border-2 border-solid border-white p-2"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
