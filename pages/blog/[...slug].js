import { getMdxNode, getMdxPaths } from 'next-mdx/server'
import { useHydrate } from 'next-mdx/client'
import { mdxComponents } from '../../components/mdx-components'
import { useAuth0 } from '@auth0/auth0-react'
import Link from 'next/link'

export default function PostPage({ post }) {
  const { loginWithRedirect, isAuthenticated, logout, user, isLoading } =
    useAuth0()
  const content = useHydrate(post, {
    components: mdxComponents
  })
  return (
    <div className="site-container">
      <article>
        <h1 className="text-4xl font-bold mb-2">{post.frontMatter.title}</h1>
        <p>{post.frontMatter.excerpt}</p>
        <hr className="my-4" />
        <div className="prose">{content}</div>
      </article>

      <form className="mt-4">
        <textarea
          rows="3"
          className="border w-full px-2 py-1 border-gray-300 rounded"
        ></textarea>

        {isAuthenticated ? (
          <div className="mt-4">
            <div className="float-left">
              <div className="flex space-x-3 mb-5 items-center">
                {user.sub.includes('github') ? (
                  <Link
                    href={'https://github.com/' + user.nickname}
                    legacyBehavior
                  >
                    <a target="_blank" rel="noreferrer" cursor="pointer">
                      <img
                        src={user.picture}
                        width={40}
                        className="rounded-full"
                      />
                    </a>
                  </Link>
                ) : (
                  <img src={user.picture} width={40} className="rounded-full" />
                )}
                <span>{user.name}</span>
              </div>
              <div className="mb-4">
                <button
                  onClick={() =>
                    logout({
                      returnTo: process.env.NEXT_PUBLIC_AUTH0_URL + '/blog'
                    })
                  }
                >
                  Logout
                </button>
              </div>
            </div>
            <div className="float-right">
              <button className="text-white bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                Send
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-3">
            <button
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              onClick={() => loginWithRedirect()}
            >
              Login
            </button>
          </div>
        )}
      </form>
    </div>
  )
}
export async function getStaticPaths() {
  return {
    paths: await getMdxPaths('post'),
    fallback: false
  }
}
export async function getStaticProps(context) {
  const post = await getMdxNode('post', context)

  if (!post) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      post
    }
  }
}
