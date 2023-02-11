import React from 'react';

import { format } from 'date-fns';
import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {props.posts.map((elt) => (
        <Link
          href="/posts/[slug]"
          as={`/posts/${elt.slug}`}
          key={elt.slug}
          className="mb-3 flex justify-between"
        >
          <div>
            <img
              src="https://picsum.photos/seed/picsum/600/300"
              alt="postImg"
            />

            <div className="flex flex-col">
              <h2 className="text-lg font-medium  text-gray-900">
                {elt.title}
              </h2>

              <span className="text-sm">
                {format(new Date(elt.date), 'LLL d, yyyy')}
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
    <ul>
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="text-right">
            {format(new Date(elt.date), 'LLL d, yyyy')}
          </div>
        </li>
      ))}
    </ul>

    <Pagination
      previous={props.pagination.previous}
      next={props.pagination.next}
    />
  </>
);

export { BlogGallery };
