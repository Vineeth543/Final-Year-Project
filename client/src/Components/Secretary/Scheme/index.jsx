import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminSchemes = () => {
  const [active, setActive] = useState(true);

  const Schemes = [
    {
      key: 1,
      title: "Schemes for Child Welfare",
      image:
        "https://i.pinimg.com/474x/e9/81/23/e98123b06efb1f1f144d8b86867c2031.jpg",
      borderColor: "border-yellow-400",
    },
    {
      key: 2,
      title: "Schemes for Unemployed and Poor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0WJW7UZ8aaEDzk9Bpmmm9q7UuKUjd5uyswPxtzBwYfLEDExJBvBFunKjMTaByKcpMFU&usqp=CAU",
      borderColor: "border-pink-400",
    },
    {
      key: 3,
      title: "Schemes for Academicians",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      borderColor: "border-teal-400",
    },
    {
      key: 4,
      title: "Aatma Nirbhar Bharat Abhiyaan",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c98c7424d546e5350d2cf32/1594215914941-ZM8FLLGF30XQ5ZZOURHE/Atmanirbhar%2Bbharat%2Babhiyaan+%281%29.png?format=1500w",
      borderColor: "border-lime-400",
    },
    {
      key: 5,
      title: "Schemes for Farmers",
      image:
        "https://us.123rf.com/450wm/3rus/3rus2006/3rus200601530/149237319-farm-fresh-of-vector-emblems-and-stickers-farming-and-agriculture-organic-food-locally-grown-design-.jpg",
      borderColor: "border-cyan-400",
    },
    {
      key: 6,
      title: "Schemes for Senior Citizens",
      image:
        "https://scontent.fblr20-3.fna.fbcdn.net/v/t1.6435-9/52527260_1723333424433470_8104411470017593344_n.png?_nc_cat=107&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=tRG794JAtZUAX-lBygf&_nc_ht=scontent.fblr20-3.fna&oh=00_AT_yqdV0ebvuLDV03zMtO4_Ipc3FMh8bccO_642w8t7bjw&oe=62BE4A73",
      borderColor: "border-slate-400",
    },
    {
      key: 7,
      title: "Schemes for Students",
      image:
        "https://i.pinimg.com/originals/10/16/75/10167504496cca6fdfb505bdaa7286e5.png",
      borderColor: "border-red-400",
    },
    {
      key: 8,
      title: "Schemes for Anganwadi workers",
      image:
        "https://new-img.patrika.com/upload/mppatrika/upload/images/2016/03/05/BREAST-FEEDING-IMPORTANCE-AWARENESS_1-1457128431_835x547.jpg",
      borderColor: "border-orange-400",
    },
    {
      key: 9,
      title: "Schemes for Entrepreneurs",
      image:
        "https://i.pinimg.com/564x/ad/4c/e2/ad4ce27e57b7159f3b009cab5d4ba523.jpg",
      borderColor: "border-sky-400",
    },
    {
      key: 10,
      title: "Schemes for Women",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      borderColor: "border-amber-400",
    },
    {
      key: 11,
      title: "MGNAREGA",
      image:
        "https://play-lh.googleusercontent.com/5BO6ICjQ1DyFiV8dTA3wMWZw0qF9ve3XLRe9adrlzR71iLWCn_xqsCAMYzHY90P3hbg",
      borderColor: "border-fuchsia-400",
    },
    {
      key: 12,
      title: "Skill Development",
      image:
        "https://cdn.dribbble.com/users/1192461/screenshots/6231821/sdp.png",
      borderColor: "border-green-400",
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10 gap-5">
        <div className="flex flex-col p-5 rounded-md gap-5 bg-white w-full shadow-xl">
          <h1 className="font-semibold text-4xl text-gray-700">Schemes</h1>
          <Link
            className="flex w-48 outline-none"
            to="/secretary/schemes/add-scheme"
          >
            <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-cyan-500" />
            <h2 className="p-2 text-xl font-semibold text-white bg-cyan-500">
              New Scheme
            </h2>
          </Link>
        </div>
        <div className="flex px-5 w-full gap-2">
          <h1 className="font-semibold text-xl w-80 text-gray-700">Sl.No</h1>
          <h1 className="font-semibold text-xl text-gray-700">Schemes</h1>
        </div>
        <div className="flex flex-col shadow-xl">
          {Schemes.map((items) => (
            <div
              className="flex flex-col px-7 py-2 gap-5 bg-white w-full border-b-2"
              key={items.title}
            >
              <div className="flex justify-between">
                <div className="flex">
                  <h1 className="font-semibold text-xl w-80">{items.key}</h1>
                  <button className="font-semibold text-xl">
                    {items.title}
                  </button>
                </div>
                <div className="flex gap-3">
                  <button className="bg-pink-500 px-2 rounded text-white">
                    VIEW
                  </button>
                  <button
                    className={`bg-green-500 px-2 rounded text-white ${
                      !active && "bg-gray-500"
                    } `}
                    onClick={() => setActive(!active)}
                  >
                    {`${active ? "ACTIVE" : "DEACTIVE"} `}
                  </button>
                  <button className="bg-blue-500 px-2 rounded text-white">
                    EDIT
                  </button>
                  <button className="bg-red-500 px-2 rounded text-white">
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AdminSchemes;
