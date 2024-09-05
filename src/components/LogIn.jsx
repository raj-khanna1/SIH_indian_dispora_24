function SignIn({setState}) {
  return (
    <div className="mt-28 relative flex flex-col justify-center  overflow-hidden ">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl shadow-rose-600/40 ring-2 ring-indigo-600 lg:max-w-xl mt-5">
        <h1 className="text-3xl font-semibold text-center text-indigo-700 underline uppercase decoration-wavy">
          Sign UP
        </h1>
        <form className="mt-6">
          <div className="mb-2">
            <label
              htmlFor="FullName"
              className="block text-sm font-semibold text-gray-800"
            >
              FullName
            </label>
            <input
              type="text"
              id="FullName"
              className="block w-full px-2 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="EnterPrice Name"
              className="block text-sm font-semibold text-gray-800"
            >
              Enterprise Name
            </label>
            <input
              type="EnterPrice Name"
              id="EnterPrice Name"
              className="block w-full px-2 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="Registration No."
              className="block text-sm font-semibold text-gray-800"
            >
              Udyam Registration No.
            </label>
            <input
              type="Registration No."
              id="Registration No."
              className="block w-full px-2 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>
          <div className="mb-2">
            <label
              htmlFor="Mobile No."
              className="block text-sm font-semibold text-gray-800"
            >
              Mobile No.
            </label>
            <input
              type="Mobile No."
              id="Mobile No."
              className="block w-full px-2 py-1 mt-2 text-indigo-700 bg-white border rounded-md focus:border-indigo-400 focus:ring-indigo-300 focus:outline-none focus:ring focus:ring-opacity-40"
            />
          </div>

          <div className="mt-6">
            <button
              onClick={(e) => {
                e.preventDefault();
                setState("NextPage");
              }}
              className="w-full px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-600 focus:outline-none focus:bg-indigo-600"
            >
              Submit
            </button>
          </div>
        </form>

        <p className="mt-8 text-xs font-light text-center text-gray-700">
          {" "}
          Already have an account?{" "}
          <a href="#" className="font-medium text-indigo-600 hover:underline">
            Sign in
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignIn;
