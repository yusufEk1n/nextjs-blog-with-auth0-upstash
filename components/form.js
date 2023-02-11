import Link from 'next/link'
import { useAuth0 } from '@auth0/auth0-react'

export default function Form({ onSubmit, textSet, text }) {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0()
  return (
    <form className="mt-4" onSubmit={onSubmit}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
        <textarea
          rows="6"
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
          required=""
          onChange={(e) => textSet(e.target.value)}
          value={text}
        ></textarea>
      </div>

      {isLoading ? (
        <p>Loading</p>
      ) : isAuthenticated ? (
        <div className="mt-6">
          <div className="container flex flex-wrap items-center justify-between mx-auto">
            <a
              target="_blank"
              href={`${
                user.sub.includes('github')
                  ? 'https://github.com/' + user.nickname
                  : ''
              }`}
              className="flex items-center"
              style={
                !user.sub.includes('github') ? { pointerEvents: 'none' } : {}
              }
            >
              <img
                src={user.picture}
                className="h-6 mr-3 sm:h-12 rounded-full"
                alt={user.name}
              />
              <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
                {user.name}
              </span>
            </a>
            <div className="flex md:order-2">
              <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Gönder
              </button>
            </div>
          </div>
          <div className="mt-7">
            <button
              type="button"
              className="inline-block px-6 py-2.5 bg-black-600 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-black-700 hover:shadow-lg focus:bg-black-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-black-800 active:shadow-lg transition duration-150 ease-in-out"
              onClick={() =>
                logout({
                  returnTo: process.env.NEXT_PUBLIC_AUTH0_URL + '/blog'
                })
              }
            >
              logout
            </button>
          </div>
        </div>
      ) : (
        <div className="mt-3">
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={() => loginWithRedirect()}
          >
            Login
          </button>
        </div>
      )}
    </form>
  )
}
