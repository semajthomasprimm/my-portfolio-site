import Image from './Image'
import Link from './Link'

const Card = ({ title, description, imgSrc, href, repoHref }) => (
  <div className="p-4 md:w-1/2 md" style={{ maxWidth: '544px' }}>
    <div className="h-full overflow-hidden border-2 border-gray-200 rounded-md border-opacity-60 dark:border-gray-700">
      {href ? (
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="object-cover object-center lg:h-48 md:h-36"
            width={544}
            height={306}
          />
        </Link>
      ) : (
        <Image
          alt={title}
          src={imgSrc}
          className="object-cover object-center lg:h-48 md:h-36"
          width={544}
          height={306}
        />
      )}
      <div className="p-6">
        <h2 className="mb-3 text-2xl font-bold leading-8 tracking-tight">
          {href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              {title}
            </Link>
          ) : (
            title
          )}
        </h2>
        <p className="mb-3 prose text-gray-500 max-w-none dark:text-gray-400">{description}</p>
        {href && (
          <Link
            href={href}
            className="my-8 mr-3 g-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            aria-label={`Link to ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Site
          </Link>
        )}
        {repoHref && (
          <Link
            href={repoHref}
            className="my-8 g-transparent hover:bg-green-500 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded"
            aria-label={`Link to ${title}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Repo
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default Card
