import React from "react";
import { Link } from "react-router-dom";
import { CgEditBlackPoint } from "react-icons/cg";

const Tenders = () => {
  const tenderDetails = [
    {
      key: 1,
      refNo: "GEM/2022/B/2205115",
      title: "Procurement Of 13 Inches Macbook Laptop ( 20 pieces )",
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
        "Procurement Of 80 Quantity Of DELL/HP Laptops With 13.3 Inches Size ( 80 pieces )",
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
      bidOpenDate: "",
      description:
        "RFP (GeM) for Operation and Maintenance of Startup India Seed Fund Scheme (SISFS) Portal",
      links: ["Bid Document", "Responses to Queries (13/05/2022)"],
    },
    {
      key: 6,
      refNo: "INV/IND/22-23/EXT/IT-1002",
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
      <h1 className="text-black font-bold text-4xl text-center pt-8">
        e-Tenders
      </h1>
      {tenderDetails.map((items) => (
        <div
          className="flex flex-col mx-auto mt-10 shadow-2xl rounded-xl"
          style={{ width: "70rem" }}
        >
          <div className="flex items-center border-t border-b justify-between gap-5 w-full rounded-t-xl">
            <p className="bg-green-400 text-white p-6 text-lg font-medium rounded-tl-xl">
              {items.key}
            </p>
            <h1 className="text-xl font-semibold">{items.title}</h1>
            <div className="flex flex-col text-lg font-medium border-l pl-6 pr-3">
              <p>Tender Reference No:</p>
              <p>{items.refNo}</p>
            </div>
          </div>
          <div className="text-center grid grid-cols-3 divide-x border-b w-full">
            <div className="py-4 bg-green-100 text-green-500 text-md font-medium">
              Release Date:{" "}
              <span className="text-green-700">{items.releaseDate}</span>
            </div>
            <div className="py-4 bg-blue-100 text-blue-500 text-md font-medium">
              Bid Submission:{" "}
              <span className="text-blue-700">{items.bidSubDate}</span>
            </div>
            <div className="py-4 bg-purple-100 text-purple-500 text-md font-medium">
              Bid Opening:{" "}
              <span className="text-purple-700">{items.bidOpenDate}</span>
            </div>
          </div>
          <div className="p-4 text-md font-base border-b">
            {items.description}
          </div>
          <div className="flex flex-col p-4 text-md font-base gap-2 pb-10">
            <p className="text-lg font-semibold">Links:</p>
            {items.links.map((link) => (
              <div className="flex items-center text-red-600 gap-2 font-medium">
                <CgEditBlackPoint />
                {link}
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default Tenders;
