import Image from "next/image";

const Header = () => {
  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">
      <div className="flex items-center justify-between">
        <Image
          src="/icon.png"
          alt="Blogger Icon"
          width={130}
          height={130}
          className=' w-["130px"] sm:w-auto'
        />
        <button className="flex items-center gap-2 py-1 font-medium border-2 border-black sm:px-6 sm:py-3-solid shadow-custom">
          Get Started
          <Image src="/arrow.png" alt="Arrow" width={30} height={10} />
        </button>
      </div>
      <div className="my-8 text-center">
        <h1 className="text-3xl font-semibold sm:text-5xl">Latest Blogs</h1>
        <p className="mt-10 max-w-[740px] m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur. Eu massa turpis adipiscing
          libero rhoncus posuere tempus. Sed fringilla malesuada felis vitae.
          Montes mattis ultrices maecenas et.
        </p>
        <form className="flex justify-between shadow-custom max-w-[500px] scale-75 sc:scale-100 mx-auto mt-10 border-2 border-black">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="pl-4 outline-none"
          />
          <button type='submit' className="px-4 py-4 border-l border-black sm:px-8 active:bg-gray-600 active:text-white ">
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Header;
