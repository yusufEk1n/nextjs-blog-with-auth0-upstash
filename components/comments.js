import { DateTime } from 'luxon'

export default function Comments({ comments }) {
  return (
    <section className="py-8 lg:py-2 mt-3">
      <div className="max-w-2xl mx-auto">
        {comments.map(({ id, text, user, createdAt }, index) => {
          return (
            <article
              key={id}
              className={`pt-6 pb-6 pr-6 mb-6 text-base ${
                index != comments.length - 1
                  ? 'border-b border-gray-200 dark:border-gray-700'
                  : ''
              }`}
            >
              <footer className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 text-sm 2xl:font-semibold">
                    <img
                      className="mr-2 w-8 h-8 rounded-full"
                      src={user.picture}
                      alt={user.name}
                    />
                    {user.name}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    <time>{DateTime.fromMillis(createdAt).toRelative()}</time>
                  </p>
                </div>
              </footer>
              <p className="text-gray-500 dark:text-gray-400">{text}</p>
            </article>
          )
        })}
      </div>
    </section>
  )
}
