import React from 'react';

import Link from 'next/link';

import { Pagination, IPaginationProps } from '../pagination/Pagination';
import { PostItems } from '../utils/Content';

export type IBlogGalleryProps = {
  posts: PostItems[];
  pagination: IPaginationProps;
};

const BlogGallery = (props: IBlogGalleryProps) => (
  <>
    <div className="relative max-w-7xl mx-auto">
      <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
        {props.posts.map((post) => (
          <div
            key={post.title}
            className="flex flex-col rounded-lg shadow-lg overflow-hidden"
          >
            <div className="flex-shrink-0">
              <img
                className="h-48 w-full object-cover"
                src="https://picsum.photos/seed/picsum/600/400"
                alt=""
              />
            </div>
            <div className="flex-1 bg-white p-0 flex flex-col justify-between">
              <div className="flex-1 px-4 py-2">
                {/* <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    post.category.name
                  </a>
                </p> */}
                <a href={post.href} className="block">
                  <p className="text-xl font-bold text-gray-900">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>

    <ul className="mt-96">
      {props.posts.map((elt) => (
        <li key={elt.slug} className="mb-3 flex justify-between">
          <Link href="/posts/[slug]" as={`/posts/${elt.slug}`}>
            <a>
              <h2>{elt.title}</h2>
            </a>
          </Link>

          <div className="text-right">
            custom date
            {/* {format(new Date(elt.date), 'LLL d, yyyy')} */}
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
