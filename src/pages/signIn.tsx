import { CodepenLogo, CubeFocus, GoogleLogo } from '@phosphor-icons/react'

export function SignIn() {
  return (
    <>
      <div className="flex flex-row">
        <div className="flex shadow-2xl">
          <img
            className="object-cover h-screen"
            src="./src/assets/hero.jpg"
            alt="garota com um ocolus virtual"
          />
        </div>
        <div className="py-10 w-full border-blue-500">
          <div className="flex flex-col mx-28 gap-10">
            <div className="flex justify-center gap-2 select-none">
              <CubeFocus size={32} weight="thin" color="black" />
              <h2 className="font-medium text-2xl">Focus</h2>
            </div>
            <div>
              <h1 className="font-bold text-5xl">Create your account</h1>
            </div>
            <div>
              <button className="flex items-center justify-center w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none">
                <GoogleLogo size={24} className="mr-2" />
                Sign up with Google
              </button>
            </div>
            <div className="flex flex-row items-center justify-center gap-4">
              <div className="w-full border border-gray-300"></div>
              <div className="text-gray-400">
                <span>or</span>
              </div>
              <div className="w-full border border-gray-300"></div>
            </div>
            <div>login form</div>
          </div>
        </div>
      </div>
    </>
  )
}
