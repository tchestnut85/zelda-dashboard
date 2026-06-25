import { PAGES } from './constants';
import PageCard from './components/PageCard';
import PageWrapper from './components/PageWrapper';

export default function Home() {
  return (
    <PageWrapper headingText="Explore the realm of Hyrule!">
      <ul className="flex flex-col flex-wrap sm:flex-row justify-center items-center gap-5">
        {PAGES.slice(1).map(page => (
          <PageCard key={page.title} pageDetails={page} />
        ))}
      </ul>
    </PageWrapper>
  );
}
