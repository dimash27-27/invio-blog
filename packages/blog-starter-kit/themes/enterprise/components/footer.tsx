import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';

export const Footer = () => {
  const { publication } = useAppContext();
  const PUBLICATION_LOGO = publication.preferences.logo;

  return (
    <footer className="border-t py-10 dark:border-neutral-800">
      <Container className="px-5 text-center">
        {PUBLICATION_LOGO ? (
          <div className="mb-6 flex justify-center">
            <Link
              href="/"
              aria-label={`${publication.title} home page`}
              className="flex items-center"
            >
              <img
                className="block w-40"
                src={PUBLICATION_LOGO}
                alt={publication.title}
              />
            </Link>
          </div>
        ) : (
          <p className="mb-6 text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
            {publication.title}
          </p>
        )}

        <div className="flex flex-col items-center gap-3 text-slate-700 dark:text-neutral-300">
          <a href="https://invio.app/" className="hover:underline">
            Try our service
          </a>
          <a href="mailto:dimash@invio.app" className="hover:underline">
            Contact us
          </a>
          <p className="text-sm text-slate-600 dark:text-neutral-400">
            &copy; 2023 Company Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
};
