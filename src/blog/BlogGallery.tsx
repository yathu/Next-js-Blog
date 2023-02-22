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
      <div className="mt-4 max-w-lg mx-auto grid gap-5 lg:grid-cols-4 lg:max-w-none">
        {props.posts.map((post) => (
          <Link
            href="/posts/[slug]"
            as={`/posts/${post.slug}`}
            key={post.title}
          >
            <a
              //  href={post.href}
              key={post.title}
              className="flex flex-col rounded-lg shadow-lg overflow-hidden hover:no-underline"
            >
              <div className="flex-shrink-0">
                <img
                  className="h-48 w-full object-cover"
                  src={post.image.replace('/public', '')}
                  alt=""
                />
              </div>
              <div className="flex-1 bg-white p-0 flex flex-col justify-between">
                <div className="flex-1 px-5 py-4">
                  {/* <p className="text-sm font-medium text-indigo-600">
                  <a href="#" className="hover:underline">
                    post.category.name
                  </a>
                </p> */}

                  <p className="text-lg font-bold text-gray-900 line-clamp-2 leading-tight">
                    {post.title}
                  </p>

                  <span className="text-xs text-gray-700">{post.date}</span>

                  <p className="mt-2 text-base text-gray-600 line-clamp-2 text-justify">
                    {post.content}
                  </p>
                </div>
              </div>
            </a>
          </Link>
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
