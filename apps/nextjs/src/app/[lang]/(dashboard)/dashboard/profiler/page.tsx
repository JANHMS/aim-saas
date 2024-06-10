import Link from 'next/link'
import React from 'react';
// import LinkedInScraperForm from '~/components/profiler/LinkedInScraperForm';

const LinkedInScraperPage = () => {
  return (
    <div>
      <h1>LinkedIn Scraper</h1>
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Get started by editing&nbsp;
          <Link href="/api/python">
            <code className="font-mono font-bold">api/index.py</code>
          </Link>
        </p>
      {/* <LinkedInScraperForm /> */}
    </div>
  );
};

export default LinkedInScraperPage;
