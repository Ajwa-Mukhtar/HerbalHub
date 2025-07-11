import React from "react";

// Certificate image import karo yahan se
import certificateImg from "../assets/hero/certificate.jpg"; // apni image yahan import karo
const CertificationPage = () => {
  return (
    <div className="max-w-3xl mx-auto p-8 bg-white rounded-xl shadow-lg mt-12">
      <h1 className="text-4xl font-bold text-center text-green-900 mb-8">
        Certificate of Achievement
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-10">
        {/* Certificate Image */}
        <div className="md:w-1/2">
          <img
            src={certificateImg}
            alt="Certificate"
            className="rounded-lg shadow-md border border-green-300"
          />
        </div>

        {/* Certificate Details */}
        <div className="md:w-1/2 space-y-6 text-green-900">
          <h2 className="text-2xl font-semibold border-b border-green-300 pb-2">
            Certificate Holder
          </h2>
          <p className="text-xl font-medium">Tabib Surjeet Singh</p>

          <h2 className="text-2xl font-semibold border-b border-green-300 pb-2">
            Certification Title
          </h2>
          <p className="text-lg">
            Herbal Product Specialist Training Completion
          </p>

          <h2 className="text-2xl font-semibold border-b border-green-300 pb-2">
            Issued By
          </h2>
          
          <p className="text-lg">Herbal Academy of Natural Medicine</p>
          <h2 className="text-2xl font-semibold border-b border-green-300 pb-2">
            College:
          </h2>
          <p className="text-lg">J.U.M.C Sheikhupura</p>

          <h2 className="text-2xl font-semibold border-b border-green-300 pb-2">
            Issue Date
          </h2>
          <p className="text-lg">DEC 14, 2015</p>

         
        </div>
      </div>
    </div>
  );
};

export default CertificationPage;
