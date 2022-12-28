import React from 'react';
import { FaFileUpload } from "react-icons/fa";
import './UpPost.css';

const UpPost = () => {
  return (
    <div className="flex flex-col lg:w-2/3 mx-auto my-20">
      <div className="grid h-16 card rounded-box place-items-center">
        {/* <textarea className="textarea textarea-bordered w-2/3 rounded-full" placeholder="What's on your mind?"></textarea> */}
        <input type="text" placeholder="Start a post" className="input input-bordered w-2/3 rounded-full" />
      </div>
      <div className="divider my-0"></div>
      <div className="grid h-16 card rounded-box place-items-center">
        <input type='file' id='file'></input>
        <label for='file'>
          <FaFileUpload className='text-3xl mr-2 text-primary'></FaFileUpload>
          Upload image
        </label>
      </div>
      <button className='btn btn-outline btn-primary w-1/2 mx-auto mt-7' type="submit">Submit</button>
    </div>
  );
};

export default UpPost;