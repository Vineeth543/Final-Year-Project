import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Schemes = () => {
  const [scheme, setSchemes] = useState([]);

  const schemes = [
    {
      title: "Schemes for Child Welfare",
      image:
        "https://i.pinimg.com/474x/e9/81/23/e98123b06efb1f1f144d8b86867c2031.jpg",
      borderColor: "border-yellow-400",
    },
    {
      title: "Schemes for Unemployed and Poor",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF0WJW7UZ8aaEDzk9Bpmmm9q7UuKUjd5uyswPxtzBwYfLEDExJBvBFunKjMTaByKcpMFU&usqp=CAU",
      borderColor: "border-pink-400",
    },
    {
      title: "Schemes for Academicians",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Education.png",
      borderColor: "border-teal-400",
    },
    {
      title: "Aatma Nirbhar Bharat Abhiyaan",
      image:
        "https://images.squarespace-cdn.com/content/v1/5c98c7424d546e5350d2cf32/1594215914941-ZM8FLLGF30XQ5ZZOURHE/Atmanirbhar%2Bbharat%2Babhiyaan+%281%29.png?format=1500w",
      borderColor: "border-lime-400",
    },
    {
      title: "Schemes for Farmers",
      image:
        "https://us.123rf.com/450wm/3rus/3rus2006/3rus200601530/149237319-farm-fresh-of-vector-emblems-and-stickers-farming-and-agriculture-organic-food-locally-grown-design-.jpg",
      borderColor: "border-cyan-400",
    },
    {
      title: "Schemes for Senior Citizens",
      image:
        "https://raw.githubusercontent.com/Vineeth543/Project-Images/main/citizen_new.png",
      borderColor: "border-slate-400",
    },
    {
      title: "Schemes for Students",
      image:
        "https://i.pinimg.com/originals/10/16/75/10167504496cca6fdfb505bdaa7286e5.png",
      borderColor: "border-red-400",
    },
    {
      title: "Schemes for Anganwadi workers",
      image:
        "https://new-img.patrika.com/upload/mppatrika/upload/images/2016/03/05/BREAST-FEEDING-IMPORTANCE-AWARENESS_1-1457128431_835x547.jpg",
      borderColor: "border-orange-400",
    },
    {
      title: "Schemes for Entrepreneurs",
      image:
        "https://i.pinimg.com/564x/ad/4c/e2/ad4ce27e57b7159f3b009cab5d4ba523.jpg",
      borderColor: "border-sky-400",
    },
    {
      title: "Schemes for Women",
      image:
        "https://sevasindhu.karnataka.gov.in/Category/assets/img/Women.png",
      borderColor: "border-amber-400",
    },
    {
      title: "MGNAREGA",
      image: "https://www.ipetechnologies.com/icrg/public/img/mgn-logo.png",
      borderColor: "border-fuchsia-400",
    },
    {
      title: "Skill Development",
      image:
        "https://cdn.dribbble.com/users/1192461/screenshots/6231821/sdp.png",
      borderColor: "border-green-400",
    },
  ];

  const getSchemeData = () => {
    axios
      .get("http://localhost:8080/official/schemes/category")
      .then((res) => {
        console.log(res);
        setSchemes(res.data);
        console.log(scheme);
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
      <h1 className="font-bold text-4xl text-center">Schemes</h1>
      <div className="flex flex-wrap gap-3 justify-between">
        {schemes.map((scheme, index) => (
          <Link to={`/user/schemes/${index + 1}/1`} key={index}>
            <div
              className={`flex items-center justify-center gap-4 bg-white hover:border-4 p-10 border-b-4 ${scheme.borderColor}`}
              style={{ width: "22rem" }}
            >
              <div className="w-24 h-20">
                <img
                  src={scheme.image}
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
  );
};

export default Schemes;
