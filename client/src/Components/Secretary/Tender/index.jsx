import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminTenders = () => {
  const [active, setActive] = useState(true);

  const tenderDetails = [
    {
      key: 1,
      refNo: "GEM/2022/B/2205115",
      title: "Procurement Of 13 Inches Macbook Laptop (20 pieces)",
      releaseDate: "01 Jun 2022",
      bidSubDate: "15 June 2022",
      bidOpenDate: "15 June 2022",
      description: "Procurement of Laptops for Invest India",
      links: ["Bid Document"],
    },
    {
      key: 2,
      refNo: "GEM/2022/B/2187946",
      title:
        "Procurement Of 80 Quantity Of DELL/HP Laptops With 13.3 Inches Size (80 pieces)",
      releaseDate: "01 Jun 2022",
      bidSubDate: "08 June 2022",
      bidOpenDate: "08 June 2022",
      description: "Procurement of Laptops for Invest India",
      links: ["Bid Document"],
    },
    {
      key: 3,
      refNo: "GEM/2022/B/2224327",
      title: "RFP for AWS Managed Service Provider and Reselling Services",
      releaseDate: "01 Jun 2022",
      bidSubDate: "07 June 2022",
      bidOpenDate: "16 June 2022",
      description:
        "RFP for AWS Managed Service Provider and Reselling Services for Invest India’s cloud infrastructure to get support in DevOps automation, implementation, and management.",
      links: ["Bid Document"],
    },
    {
      key: 4,
      refNo: "INV/IND/SUI_NSA_20221",
      title:
        "Request for Proposal for Selection of Consulting Firm for Assisting Invest India in “National Startup Awards 2022”",
      releaseDate: "04 May 2022",
      bidSubDate: "18 May 2022",
      bidOpenDate: "24 May 2022",
      description:
        "Invest India is a joint venture between Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry, Industry Associations and State Governments of India. Operationalized in early 2010, Invest India has been set up as the dedicated investment promotion and facilitation agency for attracting investments into the country in a structured, focused, and comprehensive manner.",
      links: [
        "Request for Proposal",
        "Response to Queries",
        "Corrigendum 1",
        "Corrigendum 2 (19/05/2022)",
        "Declaration of Results",
      ],
    },
    {
      key: 5,
      refNo: "GEM/2022/B/2205115",
      title:
        "RFP (GeM) for Operation and Maintenance of Startup India Seed Fund Scheme (SISFS) Portal",
      releaseDate: "02 May 2022",
      bidSubDate: "20 May 2022",
      bidOpenDate: "13 May 2022",
      description:
        "RFP (GeM) for Operation and Maintenance of Startup India Seed Fund Scheme (SISFS) Portal",
      links: ["Bid Document", "Responses to Queries (13/05/2022)"],
    },
    {
      key: 6,
      refNo: "INV/IND/22-23/EXT/",
      title:
        "Request for Quotation for Procurement of extended warranty for 49 Dell Laptops for 2 years",
      releaseDate: "21 Apr 2022",
      bidSubDate: "11 May 2022",
      bidOpenDate: "12 May 2022",
      description:
        "Invest India, Invest India is the National Investment Promotion and Facilitation Bidder of India and acts as the first point of reference for investors in India.",
      links: ["Bid Document", "Corrigendum 1"],
    },
    {
      key: 7,
      refNo: "GEM/2022/B/2068776",
      title:
        "RFP (GeM) for Operation and Maintenance of Startup India Hub Portal",
      releaseDate: "01 Apr 2022",
      bidSubDate: "25 April 2022",
      bidOpenDate: " 21 April 2022",
      description:
        "RFP (GeM) for Operation and Maintenance of Startup India Hub Portal",
      links: ["Bid Document", "Queries Response"],
    },
  ];

  return (
    <>
      <div className="flex flex-col w-full m-10">
        <div className="flex flex-col p-5 rounded-md gap-4 bg-gray-200 w-full shadow-xl mb-10">
          <h1 className="font-semibold text-4xl text-black">Tenders</h1>
          <Link
            className="flex w-44 outline-none"
            to="/secretary/services/add-service"
          >
            <IoMdAddCircleOutline className="p-2 text-white text-5xl bg-blue-900" />
            <h2 className="p-2 text-xl font-semibold text-white bg-blue-900">
              New Tender
            </h2>
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex gap-1 items-center justify-betwee font-semibold text-xl text-white mb-1">
            <h1 className="bg-blue-900 w-16 text-center py-2">SR.NO</h1>
            <h1 className="bg-blue-900 w-96 text-center py-2">TENDER TITLE</h1>
            <h1 className="bg-blue-900 w-96 text-center py-2">
              ADDITIONAL INFORMATION
            </h1>
            <h1 className="bg-blue-900 w-60 text-center py-2">OPENING DATE</h1>
            <h1 className="bg-blue-900 w-60 text-center py-2">CLOSING DATE</h1>
            <h1 className="bg-blue-900 w-64 text-center py-2">ACTION</h1>
          </div>
          <div className="flex flex-col gap-1">
            {tenderDetails.map((tender, index) => (
              <div className="flex items-center font-semibold gap-1">
                <h3
                  className={`w-16 h-16 text-lg text-center border border-black flex items-center justify-center ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  {index + 1}
                </h3>
                <h1
                  className={`w-96 h-16 text-lg text-center border border-black flex items-center justify-center ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  {tender.title.substring(0, 60)}
                  {tender.title.length > 60 ? "..." : ""}
                </h1>
                <h2
                  className={`w-96 h-16 text-lg text-center border border-black flex items-center justify-center ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  {tender.description.substring(0, 60)}
                  {tender.title.length > 60 ? "..." : ""}
                </h2>
                <h2
                  className={`w-60 h-16 text-lg text-center border border-black flex items-center justify-center ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  {tender.bidOpenDate}
                </h2>
                <h2
                  className={`w-60 h-16 text-lg text-center border border-black flex items-center justify-center ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  {tender.releaseDate}
                </h2>
                <div
                  className={`gap-1 w-64 h-16 border border-black flex items-center justify-center ${
                    index % 2 ? "bg-gray-200" : "bg-gray-100"
                  }`}
                >
                  <button className="bg-pink-500 p-1 rounded text-white">
                    VIEW
                  </button>
                  <button
                    className={`bg-green-500 p-1 rounded text-white ${
                      !active && "bg-gray-500"
                    } `}
                    onClick={() => setActive(!active)}
                  >
                    {`${active ? "ACTIVE" : "DEACTIVE"} `}
                  </button>
                  <button className="bg-blue-500 p-1 rounded text-white">
                    EDIT
                  </button>
                  <button className="bg-red-500 p-1 rounded text-white">
                    DELETE
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminTenders;
