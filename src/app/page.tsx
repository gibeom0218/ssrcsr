import Link from "next/link";

const Home = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="space-x-4">
        <Link
          href={"/SSR"}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-700"
        >
          SSR
        </Link>
        <Link
          href={"/CSR"}
          className="px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-700"
        >
          CSR
        </Link>
      </div>
    </div>
  );
};

export default Home;
