import React from "react";
import { Link } from "react-router-dom";
import { IoMdAddCircleOutline } from "react-icons/io";

const AdminTenders = () => {
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
      <div className="flex flex-col p-4 rounded-lg gap-5 bg-blue-800 shadow-xl shadow-blue-600 mx-12">
        <h1 className="font-semibold text-4xl text-white">Tenders</h1>
        <Link className="flex w-fit" to="/admin/tenders/add-tender">
          <IoMdAddCircleOutline className="p-2 text-5xl bg-white rounded-tl-lg rounded-bl-lg" />
          <h2 className="p-2 text-xl font-semibold bg-white rounded-tr-lg rounded-br-lg">
            New Tender
          </h2>
        </Link>
      </div>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center border-double border-4 border-black">
              SL.NO
            </th>
            <th className="text-center border-double border-4 border-black">
              Tender Title
            </th>
            <th className="text-center border-double border-4 border-black">
              Additional Information
            </th>
            <th className="w-52 text-center border-double border-4 border-black">
              Opened Date
            </th>
            <th className="w-48 text-center border-double border-4 border-black">
              Closing Date
            </th>
            <th className="text-center border-double border-4 border-black">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {tenderDetails.map((tender, index) => (
            <tr key={index} className="text-center">
              <td className="border-double border-4 border-black p-2">
                {index + 1}
              </td>
              <td className="border-double border-4 border-black">
                <Link to={`view/${index + 1}`}>
                  {tender.title.substring(0, 60)}
                  {tender.title.length > 60 ? "..." : ""}
                </Link>
              </td>
              <td className="border-double border-4 border-black">
                {tender.description.substring(0, 60)}
                {tender.title.length > 60 ? "..." : ""}
              </td>
              <td className="border-double border-4 border-black">
                {tender.bidOpenDate}
              </td>
              <td className="border-double border-4 border-black">
                {tender.releaseDate}
              </td>
              <td className="border-double border-4 border-black">
                <Link to={`view/${index + 1}`}>
                  <button className="bg-pink-500 p-1 rounded text-white">
                    VIEW
                  </button>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default AdminTenders;
