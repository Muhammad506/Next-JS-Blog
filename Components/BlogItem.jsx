import Image from "next/image";

const BlogItem = ({ title, description, category, image }) => {
  return (
    <main className="p-4 flex justify-center">
      <div className="w-full max-w-[330px] sm:max-w-[300px] bg-white border-2 border-black shadow-md shadow-orange-800 hover:scale-105 hover:-translate-y-2 transition-all duration-300 ease-in-out">
        <div className="w-full h-[200px] sm:h-[180px] overflow-hidden">
          <Image
            src={image}
            alt="Card"
            width={400}
            height={400}
            className="w-full h-full object-cover border-b border-black"
          />
        </div>
        <p className="mt-5 px-1 inline-block bg-black text-white text-sm">
          {category}
        </p>
        <div className="p-2 text-left ">
          <h5 className="text-lg font-medium tracking-tight text-gray-900">
            {title}
          </h5>
          <p className="text-sm tracking-tight text-gray-700">{description}</p>
          <div className="font-bold flex justify-center items-center space-x-2 hover:text-orange-600">
            <span>Read More</span>
            <Image
              src="/arrow.png"
              alt="arrow"
              width={20}
              height={20}
              className="inline-flex items-center py-2 font-semibold text-center"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default BlogItem;
