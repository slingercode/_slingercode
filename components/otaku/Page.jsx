import { Fragment } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import * as Separator from '@radix-ui/react-separator';

import Title from '../notion/ArticleTitle';
import renderBlock from '../notion/Block';
import { pageTitle } from '../../utils/helpers';

const Page = ({ img, title, volumen, amazon, blocks }) => (
  <div>
    <Title>{pageTitle(title, volumen)}</Title>

    {amazon && (
      <div className="my-3">
        <a
          href={amazon}
          target="_blank"
          rel="noreferrer"
          className="text-blue-font-low text-lg focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md"
        >
          Amazon
        </a>
      </div>
    )}

    <Separator.Root className="bg-gray-border-non-interactive h-px mb-5 mt-1" />

    {img && (
      <Image
        src={img}
        alt={pageTitle()}
        height={1250}
        width={900}
        className="rounded"
      />
    )}

    {blocks.map((block) => (
      <Fragment key={block.id}>{renderBlock(block)}</Fragment>
    ))}

    <div className="mt-5">
      <Link href="/otaku">
        <a className="text-blue-font-low focus-visible:outline-none focus-visible:ring focus-visible:border-gray-border-interactive focus-visible:ring-gray-border-interactive focus-visible:rounded-md">
          Go back
        </a>
      </Link>
    </div>
  </div>
);

export default Page;
