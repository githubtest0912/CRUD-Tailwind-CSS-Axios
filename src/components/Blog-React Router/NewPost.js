import React from "react";

const NewPost = ({
  postNewTitle,
  setPostNewTitle,
  postNewBody,
  setPostNewBody,
  handleSubmit,
}) => {
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="flex items-center justify-center m-5">
          <h3>Post your message</h3>
        </div>

        <div className="pl-10 mt-10 mb-6">
          <label
            for="text"
            className="mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
          >
            Title
          </label>
          <input
            type="text"
            id="text"
            className="bg-gray-50 border w-60 border-gray-500 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={postNewTitle}
            onChange={(e) => setPostNewTitle(e.target.value)}
            required
          />
        </div>
        {/* // text area */}

        <div className="flex pl-10">
          <div className="mb-3 xl:w-96">
            <label
              for="exampleFormControlTextarea1"
              className="inline-block mb-2 text-gray-700 form-label"
            >
              Post:
            </label>
            <textarea
              className="
        form-control
        block
        w-60
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-500
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-gray-800 focus:outline-none
      "
              id="exampleFormControlTextarea1"
              rows="3"
              placeholder="Your message"
              value={postNewBody}
              onChange={(e) => setPostNewBody(e.target.value)}
            ></textarea>
          </div>
        </div>

        <div className="flex items-start pb-2 pl-2 m-4">
          <div className="flex items-center h-5">
            <button
              type="submit"
              className=" text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewPost;
