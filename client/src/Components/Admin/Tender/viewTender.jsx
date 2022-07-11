import React from "react";
import { useLocation } from "react-router-dom";

const AdminViewTender = () => {
  const page = useLocation();
  const TenderID = page.pathname.split("/")[4];

  const deleteTender = (e) => {
    e.preventDefault();
    alert("Tender Deleted");
  };

  const tenderDetails = [
    {
      refNo: "GEM/2022/B/2205115",
      title: "Procurement Of 13 Inches Macbook Laptop (20 pieces)",
      releaseDate: "01 Jun 2022",
      bidSubDate: "15 June 2022",
      bidOpenDate: "15 June 2022",
      description: "Procurement of Laptops for Invest India",
      links: ["Bid Document"],
    },
    {
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

  const tendererDetails = [
    {
      name: "Krishna Ltd. Services",
      person: "Sachin Kumar",
      phone: "9113937543",
      email: "sachin@gmail.com",
      fax: "9121357654",
      address: "Bangalore",
      bid: "54000",
    },
    {
      name: "Shivam IT Solutions",
      person: "Shiva Prthap",
      phone: "8951797978",
      email: "shivam@gmail.com",
      fax: "8723476532",
      address: "Udupi",
      bid: "52340",
    },
    {
      name: "Birla Software Services",
      person: "Birla Prasad",
      phone: "9980903528",
      email: "prasad17@birla.com",
      fax: "9121357654",
      address: "Mangalore",
      bid: "54300",
    },
  ];

  return (
    <>
      <h1 className="font-bold text-4xl text-center p-4 rounded bg-blue-800 shadow-xl shadow-blue-600 mx-12 text-white">
        {tenderDetails[TenderID - 1].title}
      </h1>
      <table className="content-table dashboard">
        <thead>
          <tr>
            <th className="text-center w-1/2">Description</th>
            <th className="text-center">Opening Date</th>
            <th className="text-center">Closing Date</th>
            <th className="text-center">Action</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="w-1/2">{tenderDetails[TenderID - 1].description}</td>
            <td>{tenderDetails[TenderID - 1].bidSubDate}</td>
            <td>{tenderDetails[TenderID - 1].releaseDate}</td>
            <td className="m-auto text-white">
              <button
                className="bg-orange-500 px-2 py-1 rounded mr-1"
                onClick={(e) => deleteTender(e)}
              >
                EDIT
              </button>
              <button
                className="bg-red-500 px-2 py-1 rounded ml-1"
                onClick={(e) => deleteTender(e)}
              >
                DELETE
              </button>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="flex flex-col">
        <h1 className="font-bold text-4xl text-center p-4 rounded bg-sky-800 mx-12 text-white">
          Tenderers Applied
        </h1>
        <table className="content-table dashboard">
          <thead>
            <tr>
              <th className="text-center">Tenderer Name</th>
              <th className="text-center">Contact Person</th>
              <th className="text-center">Phone</th>
              <th className="text-center">Email</th>
              <th className="text-center">Fax</th>
              <th className="text-center">Address</th>
              <th className="text-center">Bid Amount</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {tendererDetails.map((tenderer, index) => (
              <tr className="text-semibold text-center" key={index}>
                <td>{tenderer.name}</td>
                <td>{tenderer.person}</td>
                <td>{tenderer.phone}</td>
                <td>{tenderer.email}</td>
                <td>{tenderer.fax}</td>
                <td>{tenderer.address}</td>
                <td>₹ {tenderer.bid}</td>
                <td>
                  <button className="px-2 py-1 bg-orange-500 rounded text-white">
                    Review
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AdminViewTender;
