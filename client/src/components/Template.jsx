<>
  <form //structure form semua ada pada sini.
    className="flex flex-col gap-4"
    onSubmit={formOnSubmitHandler}
  >
    <input
      onChange={inputUsernameOnChangeHandler}
      value={username}
      type="text"
      placeholder="Your Email"
    />
    <input
      value={password}
      onChange={inputPasswordOnChangeHandler}
      type="password"
      placeholder="Your Password"
    />
    <button type="submit">Submit</button>
    <GoogleLogin onSuccess={handleGoogleLogin} />
  </form>
  <form onSubmit={formOnSubmitHandler}>
    <div className="bg-grey-lighter min-h-screen flex flex-col">
      <div className="container max-w-sm mx-auto flex-1 flex flex-col items-center justify-center px-2">
        <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
          <h1 className="mb-8 text-3xl text-center">Sign up</h1>
          <input
            type="text"
            onChange={inputUsernameOnChangeHandler}
            value={username}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="full Name"
            placeholder="Full Name"
          />

          <input
            type="date"
            onChange={inputBirthDateOnChangeHandler}
            value={birthdate}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="date"
            placeholder="Birthdate"
          />

          <input
            type="password"
            onChange={inputPasswordOnChangeHandler}
            value={password}
            className="block border border-grey-light w-full p-3 rounded mb-4"
            name="password"
            placeholder="Password"
          />

          <button
            type="submit"
            className="w-full text-center py-3 rounded text-black"
          >
            Create Account
          </button>
          <GoogleLogin />

          <div className="text-center text-sm text-grey-dark mt-4">
            By signing up, you agree to the
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Terms of Service
            </a>{" "}
            and
            <a
              className="no-underline border-b border-grey-dark text-grey-dark"
              href="#"
            >
              Privacy Policy
            </a>
          </div>
        </div>

        <div className="text-grey-dark mt-6">
          Already have an account?
          <a
            className="no-underline border-b border-blue text-blue"
            href="../login/"
          >
            Log in
          </a>
          .
        </div>
      </div>
    </div>
  </form>
</>;
