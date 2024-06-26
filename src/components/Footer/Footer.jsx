const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div className=" bottom-0 bg-black w-full sm:py-2 py-3 text-center sm:flex justify-center text-white text-sm items-center">
      <span className="pl-2 pr-[3.5px] py-1.5 mt-0 font-quick">
        Xarc &copy; {currentYear}. Diseñado por
      </span>
      <span className="font-victor font-semibold">
        <a href="https://www.linkedin.com/in/jamesimanel/">Jhens</a>
      </span>
    </div>
  );
};

export default Footer;
