

// blogs display on the cards

import React from "react";

const BlogList = ({ posts }) => {
  return (
    <div>
      {posts.map((item) => {
        return (
          <div className="flex justify-center py-3">
            <div className="block max-w-sm p-6 bg-white rounded-lg shadow-lg">
              <h5 className="mb-2 text-xl font-medium leading-tight text-gray-900">
                {item.title}
              </h5>
              <p className="mb-4 text-base text-gray-700">{item.datetime}</p>

              <p className="mb-4 text-base text-gray-700">
                {/* if item has 50 character show all the text or put .... */}
                {item.body.length <= 50
                  ? item.body
                  : `${item.body.slice(0, 50)}...`}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
