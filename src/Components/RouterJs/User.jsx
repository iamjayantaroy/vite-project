import { Outlet, useSearchParams } from "react-router-dom";
import Activeuser from "./Activeuser";

const User = () => {
  const [searchparams, setsearchparams] = useSearchParams();
  const showActiveUser = searchparams.get("filter") === "active";
  return (
    <>
      <div>
        <h2>User 1</h2>
        <h2>User 2</h2>
        <h2>User 3</h2>
        <Outlet />
        <div>
          <button
            onClick={() => setsearchparams({ filter: "active" })}
            className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
          >
            Active Users
          </button>
          <button
            onClick={() => setsearchparams({})}
            className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900"
          >
            Reset Filter
          </button>
        </div>
        {showActiveUser ? <Activeuser /> : <h2>Shoing all users</h2>}
      </div>
    </>
  );
};

export default User;
