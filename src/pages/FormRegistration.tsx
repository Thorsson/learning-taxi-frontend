import arrow from "../assets/arrow.svg";

function FormRegistration() {
  return (
    <>
      <div className="bg-woodsmoke-950 font-roboto flex flex-col items-center pt-9  h-screen w-full">
        <div className="w-[84%]">
          <img className="w-4 h-auto" src={arrow} alt="arrow button" />
        </div>
        <main className="text-white w-full flex flex-col items-center mt-8 flex-grow">
          <form className="flex flex-col w-[84%] h-full">
            <div className="flex flex-col gap-y-24 flex-grow ">
              <fieldset>
                <div className="flex flex-col gap-y-6">
                  <legend className="text-2xl font-medium">
                    What's your name?
                  </legend>
                  <div className="flex flex-row gap-x-6">
                    <input
                      type="text"
                      id="first-name"
                      name="first-name"
                      placeholder="First"
                      required
                      aria-label="Enter your first name"
                      className="bg-transparent border-b-2 border-gray-300 w-1/2 text-xl pb-1"
                    />
                    <input
                      type="text"
                      id="last-name"
                      name="last-name"
                      placeholder="Last"
                      required
                      aria-label="Enter your last name"
                      className="bg-transparent border-b-2 border-gray-300 w-1/2 text-xl pb-1"
                    />
                  </div>
                </div>
              </fieldset>
              <div className="flex flex-col gap-y-6">
                <label className="text-2xl font-medium" htmlFor="email">
                  What's your e-mail?
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Email"
                  required
                  aria-label="Enter your email"
                  className="bg-transparent border-b-2 border-gray-300 text-xl pb-1"
                />
              </div>
              <div className="flex flex-col gap-y-6">
                <label className="text-2xl font-medium" htmlFor="password">
                  Enter your password:
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Password"
                  required
                  aria-label="Enter your password"
                  className="bg-transparent border-b-2 border-gray-300 text-xl pb-1"
                />
              </div>
            </div>
            <button
              className="bg-black w-full h-[3.63rem] text-xl font-bold mb-[4.875rem]"
              type="submit"
            >
              Next
            </button>
          </form>
        </main>
      </div>
    </>
  );
}

export default FormRegistration;
