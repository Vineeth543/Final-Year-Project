import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const AdminEvents = () => {
  return (
    <>
      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-2xl mx-12">
        <h1 className="font-semibold text-4xl text-white">Live Events</h1>
        <div className="flex gap-8">
          <Link className="flex w-fit outline-none" to="/admin/events/live">
            <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-red-500 rounded-tl-lg rounded-bl-lg" />
            <h2 className="p-2 text-xl font-semibold text-white bg-red-500 rounded-tr-lg rounded-br-lg">
              Start Live Event
            </h2>
          </Link>
          <Link
            className="flex w-fit outline-none"
            to="/admin/events/view-live"
          >
            <MdOutlineRemoveRedEye className="p-2 text-white text-5xl bg-red-500 rounded-tl-lg rounded-bl-lg" />
            <h2 className="p-2 text-xl font-semibold text-white bg-red-500 rounded-tr-lg rounded-br-lg">
              View Live Event
            </h2>
          </Link>
        </div>
      </div>

      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-2xl mx-12">
        <h1 className="font-semibold text-4xl text-white">Upcoming Events</h1>
        <div className="flex gap-8">
          <Link className="flex w-fit outline-none" to="/admin/events/upcoming">
            <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-green-500 rounded-tl-lg rounded-bl-lg" />
            <h2 className="p-2 text-xl font-semibold text-white bg-green-500 rounded-tr-lg rounded-br-lg">
              New Upcoming Event
            </h2>
          </Link>
          <Link
            className="flex w-fit outline-none"
            to="/admin/events/view-upcoming"
          >
            <MdOutlineRemoveRedEye className="p-2 text-white text-5xl bg-green-500 rounded-tl-lg rounded-bl-lg" />
            <h2 className="p-2 text-xl font-semibold text-white bg-green-500 rounded-tr-lg rounded-br-lg">
              View Upcoming Event
            </h2>
          </Link>
        </div>
      </div>

      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-2xl mx-12">
        <h1 className="font-semibold text-4xl text-white">Past Events</h1>
        <div className="flex gap-8">
          <Link
            className="flex w-fit outline-none"
            to="/admin/events/view-past"
          >
            <MdOutlineRemoveRedEye className="p-2 text-white text-5xl bg-yellow-500 rounded-tl-lg rounded-bl-lg" />
            <h2 className="p-2 text-xl font-semibold text-white bg-yellow-500 rounded-tr-lg rounded-br-lg">
              View Past Event
            </h2>
          </Link>
        </div>
      </div>
    </>
  );
};

export default AdminEvents;
