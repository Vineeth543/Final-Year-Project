import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const AdminEvents = () => {
  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl bg-cyan-100">
          <h1 className="font-semibold text-3xl text-gray-700">Live Events</h1>
          <div className="flex gap-8">
            <Link
              className="flex w-fit outline-none"
              to="/admin/events/live"
            >
              <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-red-500" />
              <h2 className="p-2 text-xl font-semibold text-white bg-red-500">
                Start Live Event
              </h2>
            </Link>
            <Link
              className="flex w-fit outline-none"
              to="/admin/events/view-live"
            >
              <MdOutlineRemoveRedEye className="p-2 text-white text-5xl bg-red-500" />
              <h2 className="p-2 text-xl font-semibold text-white bg-red-500">
                View Live Events
              </h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl bg-cyan-100">
          <h1 className="font-semibold text-3xl text-gray-700">
            Upcoming Events
          </h1>
          <div className="flex gap-8">
            <Link
              className="flex w-fit outline-none"
              to="/admin/events/upcoming"
            >
              <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-green-500" />
              <h2 className="p-2 text-xl font-semibold text-white bg-green-500">
                New Upcoming Event
              </h2>
            </Link>
            <Link
              className="flex w-fit outline-none"
              to="/admin/events/view-upcoming"
            >
              <MdOutlineRemoveRedEye className="p-2 text-white text-5xl bg-green-500" />
              <h2 className="p-2 text-xl font-semibold text-white bg-green-500">
                View Upcoming Events
              </h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl bg-cyan-100">
          <h1 className="font-semibold text-3xl text-gray-700">Past Events</h1>
          <div className="flex gap-8">
            <Link
              className="flex w-fit outline-none"
              to="/admin/events/past"
            >
              <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-blue-500" />
              <h2 className="p-2 text-xl font-semibold text-white bg-blue-500">
                Add Past Event
              </h2>
            </Link>
            <Link
              className="flex w-fit outline-none"
              to="/admin/events/view-past"
            >
              <MdOutlineRemoveRedEye className="p-2 text-white text-5xl bg-blue-500" />
              <h2 className="p-2 text-xl font-semibold text-white bg-blue-500">
                View Past Events
              </h2>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminEvents;
