"use client";
import React from "react";

const TermsAndConditionPage = () => {
  return (
    <div className="bg-[#141414] text-gray-200 min-h-screen px-6 sm:px-12 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white mb-8 text-center">
          Terms of Contract
        </h1>

        {/* 1. Introduction */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Introduction
          </h2>
          <p className="leading-relaxed">
            These Terms of Contract (“Agreement”) govern the provision of
            digital products and services by{" "}
            <span className="font-semibold">Sarkar Nayan</span> (“Service
            Provider”, “we”, “our”) to the Client (“you”, “your”). By engaging
            our services, you agree to be bound by these terms.
          </p>
        </section>

        {/* 2. Scope of Services */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            2. Scope of Services
          </h2>
          <p className="leading-relaxed mb-2">
            We provide the following services:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>WordPress Development</li>
            <li>Web Design</li>
            <li>Web Development</li>
            <li>UI/UX Design</li>
            <li>Graphic Design</li>
            <li>Search Engine Optimization (SEO)</li>
          </ul>
          <p className="leading-relaxed mt-2">
            The specific scope, deliverables, and timelines will be detailed in
            a separate project proposal or invoice for each engagement.
          </p>
        </section>

        {/* 3. Project Process */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            3. Project Process
          </h2>
          <ul className="list-decimal list-inside space-y-2">
            <li>
              <span className="font-semibold">Proposal & Agreement:</span> A
              written proposal or quotation will outline the project scope,
              timeline, and pricing.
            </li>
            <li>
              <span className="font-semibold">Approval & Payment:</span> Work
              will begin only after receiving your written approval and agreed
              upfront payment (if applicable).
            </li>
            <li>
              <span className="font-semibold">Revisions:</span> Each project
              includes a defined number of revisions. Additional changes may
              incur extra costs.
            </li>
            <li>
              <span className="font-semibold">Delivery:</span> Final
              deliverables will be provided in agreed formats after full payment
              is received.
            </li>
          </ul>
        </section>

        {/* 4. Payment Terms */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Payment Terms
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              All prices are in Bangladeshi Taka (BDT) unless otherwise stated.
            </li>
            <li>Payments must be made as per the agreed milestones.</li>
            <li>
              Late payments may result in delays or suspension of services.
            </li>
            <li>
              No refunds are available once the project has commenced, except in
              special cases at our discretion.
            </li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Payment Terms
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              All prices can be quoted and invoiced in{" "}
              <strong>Bangladeshi Taka (BDT)</strong> ,{" "}
              <strong> Indian Rupee (INR)</strong>,{" "}
              <strong>US Dollar (USD)</strong>,{" "}
              <strong>British Pound (GBP)</strong>, or{" "}
              <strong> Canadian Dollar (CAD)</strong>, as agreed before the
              project starts.
            </li>
            <li>Payments must be made as per the agreed milestones.</li>
            <li>
              Late payments may result in delays or suspension of services.
            </li>
            <li>
              No refunds are available once the project has commenced, except in
              special cases at our discretion.
            </li>
          </ul>
        </section>

        {/* 5. Client Responsibilities */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Client Responsibilities
          </h2>
          <p className="leading-relaxed mb-2">You agree to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              Provide all necessary content, materials, and feedback in a timely
              manner.
            </li>
            <li>
              Ensure you have the rights to any materials you provide to us.
            </li>
            <li>Respond promptly to communications to avoid delays.</li>
          </ul>
        </section>

        {/* 6. Intellectual Property */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Intellectual Property
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Upon full payment, all final deliverables will be your property.
            </li>
            <li>
              We reserve the right to showcase completed work in our portfolio
              unless otherwise agreed in writing.
            </li>
            <li>
              Any third-party assets (e.g., stock images, fonts, plugins) may be
              subject to their own licenses.
            </li>
          </ul>
        </section>

        {/* 7. Confidentiality */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Confidentiality
          </h2>
          <p className="leading-relaxed">
            We will treat all information provided by you as confidential and
            will not disclose it to third parties without your consent, except
            where required by law.
          </p>
        </section>

        {/* 8. Limitation of Liability */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Limitation of Liability
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Loss of business, profits, or data arising from use of our
              services.
            </li>
            <li>
              Issues caused by third-party tools, hosting, or software updates
              after project completion.
            </li>
          </ul>
        </section>

        {/* 9. Termination */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Termination
          </h2>
          <p className="leading-relaxed">
            Either party may terminate this Agreement in writing if the other
            party breaches its terms. All work completed up to the termination
            date must be paid for in full.
          </p>
        </section>

        {/* 10. Governing Law */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            10. Governing Law
          </h2>
          <p className="leading-relaxed">
            This Agreement is governed by the laws of Bangladesh. Any disputes
            will be handled in the courts of Bangladesh.
          </p>
        </section>

        {/* 11. Contact Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            11. Contact Information
          </h2>
          <p className="leading-relaxed">
            For any questions or concerns regarding this Agreement, please
            contact:
          </p>
          <ul className="list-none mt-2 space-y-1">
            <li>
              <span className="font-semibold">Email:</span>{" "}
              <a
                href="mailto:me@sarkarnayan.com"
                className="text-blue-400 hover:underline"
              >
                me@sarkarnayan.com
              </a>
            </li>
            <li>
              <span className="font-semibold">Phone:</span>{" "}
              <a
                href="tel:+8801710847819"
                className="text-blue-400 hover:underline"
              >
                +880 1710 847819
              </a>
            </li>
            <li>
              <span className="font-semibold">Website:</span>{" "}
              <a
                href="https://www.sarkarnayan.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline"
              >
                www.sarkarnayan.com
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default TermsAndConditionPage;
