import React from "react";;

const AdminDashboard = () => {
  return (
    <div className="flex flex-col">
      <div className="mx-10">
        <h1 className="my-10 text-2xl font-semibold mx-4">Dashboard</h1>
        <ol className="p-4 bg-gray-200 mx-4">
          <li className="text-blue-700 font-medium">Dashboard</li>
        </ol>
        <div className="flex flex-col m-4">
          <div className="flex justify-evenly w-full gap-10">
            <div className="justify-center dashboard-report-card bg-purple-700 w-1/4">
              <div className="text-white font-semibold">
                <span className="flex text-center align-items items-center justify-center">
                  ORDER SHIPPING
                </span>
              </div>
              <div className="card-media">
                <i className="fab fa-rev" />
              </div>
            </div>
            <div className="justify-center dashboard-report-card bg-red-500 w-1/4">
              <div className="text-white font-semibold">
                <span>ORDER CANCEL</span>
              </div>
              <div className="card-media">
                <i className="fab fa-rev" />
              </div>
            </div>
            <div className="justify-center dashboard-report-card bg-sky-500 w-1/4">
              <div className="text-white font-semibold">
                <span>ORDER PROCESS</span>
              </div>
              <div className="card-media">
                <i className="fab fa-rev" />
              </div>
            </div>
            <div className="justify-center dashboard-report-card bg-green-500 w-1/4">
              <div className="text-white font-semibold">
                <span>ORDER DELIVERD</span>
              </div>
              <div className="card-media">
                <i className="fab fa-rev" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5 border  shadow-2xl p-4 m-4">
          <div className="flex gap-10">
            <h1 className="font-bold text-lg">Select Status:</h1>
            <select id="categeory" name="status" value="status">
              <option selected>Select Status</option>
              <option value="processing">Processing</option>
              <option value="shipping">Shipping</option>
              <option value="delieverd">Delivered</option>
              <option value="cancel">Cancel</option>
            </select>
          </div>
          <div className="flex justify-between">
            <h1 className="font-bold text-lg">Recent Orders</h1>
            <button className="bg-orange-400 rounded p-1 hover-btn">
              View All
            </button>
          </div>
          <table className="bg-sky-300 w-full">
            <thead>
              <tr>
                <th style={{ width: 50 }}>ID</th>
                <th style={{ width: 130 }}>Order ID</th>
                <th style={{ width: 130 }}>Payment Method</th>
                <th style={{ width: 200 }}>Order Date</th>
                <th style={{ width: 200 }}>Delivery Date</th>
                <th style={{ width: 130 }}>Status</th>
                <th style={{ width: 130 }}>Total</th>
                <th style={{ width: 100 }}>Action</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
