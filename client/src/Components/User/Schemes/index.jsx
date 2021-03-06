import React, { useState, useEffect } from "react";
import MoonLoader from "react-spinners/MoonLoader";
import { Link } from "react-router-dom";
import axios from "axios";

const Schemes = () => {
  const [loading, setLoading] = useState(true);
  const [scheme, setSchemes] = useState([]);

  const schemes = [
    {
      image:
        "https://i.pinimg.com/474x/e9/81/23/e98123b06efb1f1f144d8b86867c2031.jpg",
      borderColor: "border-yellow-400",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0WJW7UZ8aaEDzk9Bpmmm9q7UuKUjd5uyswPxtzBwYfLEDExJBvBFunKjMTaByKcpMFU&usqp=CAU",
      borderColor: "border-pink-400",
    },
    {
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      borderColor: "border-teal-400",
    },
    {
      image:
        "https://images.squarespace-cdn.com/content/v1/5c98c7424d546e5350d2cf32/1594215914941-ZM8FLLGF30XQ5ZZOURHE/Atmanirbhar%2Bbharat%2Babhiyaan+%281%29.png?format=1500w",
      borderColor: "border-lime-400",
    },
    {
      image:
        "https://us.123rf.com/450wm/3rus/3rus2006/3rus200601530/149237319-farm-fresh-of-vector-emblems-and-stickers-farming-and-agriculture-organic-food-locally-grown-design-.jpg",
      borderColor: "border-cyan-400",
    },
    {
      image:
        "https://i.pinimg.com/originals/10/16/75/10167504496cca6fdfb505bdaa7286e5.png",
      borderColor: "border-red-400",
    },
    {
      image:
        "https://new-img.patrika.com/upload/mppatrika/upload/images/2016/03/05/BREAST-FEEDING-IMPORTANCE-AWARENESS_1-1457128431_835x547.jpg",
      borderColor: "border-orange-400",
    },
    {
      image:
        "https://i.pinimg.com/564x/ad/4c/e2/ad4ce27e57b7159f3b009cab5d4ba523.jpg",
      borderColor: "border-sky-400",
    },
    {
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      borderColor: "border-amber-400",
    },
    {
      image: "https://www.ipetechnologies.com/icrg/public/img/mgn-logo.png",
      borderColor: "border-fuchsia-400",
    },
    {
      image:
        "https://cdn.dribbble.com/users/1192461/screenshots/6231821/sdp.png",
      borderColor: "border-green-400",
    },
    {
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/citizen_new.png",
      borderColor: "border-slate-400",
    },
  ];

  const getSchemeData = () => {
    axios
      .get("http://localhost:8080/official/schemes/category")
      .then((res) => {
        setSchemes(res.data);
        setLoading(false);
      })
      .catch((err) => {
        alert(err.data);
      });
  };

  useEffect(() => {
    getSchemeData();
  }, []);

  return (
    <>
      {loading ? (
        <MoonLoader
          color={"blue"}
          loading={loading}
          size={50}
          className="loader"
        />
      ) : (
        <>
          <h1 className="font-bold text-4xl text-center">Schemes</h1>
          <div className="flex flex-wrap gap-3 justify-between">
            {scheme.map((scheme, index) => (
              <Link to={`/user/schemes/view/${scheme._id}`} key={index}>
                <div
                  className={`flex items-center justify-center gap-4 bg-white hover:border-4 p-10 border-b-4 ${schemes[index].borderColor}`}
                  style={{ width: "22rem" }}
                >
                  <div className="w-24 h-20">
                    <img
                      src={schemes[index].image}
                      alt={scheme.title}
                      className="w-full h-full"
                    />
                  </div>
                  <h2 className="text-lg font-semibold">
                    {index + 1}.) {scheme.title}
                  </h2>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default Schemes;
