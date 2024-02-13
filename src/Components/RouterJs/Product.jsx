import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";

const Product = () => {
  return (
    <>
      <div>
        <input
          type="search"
          placeholder="Search Products"
          className="flex w-full h-[40px] justify-center items-center bg-zinc-300 border-black text-center"
        />
      </div>
      <nav className="flex w-full h-[40px] justify-center items-center bg-zinc-300">
        <Link to="featured" className="px-4 hover:text-orange-500">
          Featured
        </Link>
        <Link to="new" className="hover:text-orange-500">
          New Product
        </Link>
      </nav>
      <Outlet />
    </>
  );
};

export default Product;
