"use client";
import React from "react";

const PolicyPage = () => {
  return (
    <div className="bg-[#141414] text-gray-200 min-h-screen px-6 sm:px-12 md:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        {/* Title */}
        {/* <h1 className="text-3xl sm:text-4xl font-bold text-white mb-2 text-center mb-10"> */}
        <h1 className="text-3xl sm:text-4xl font-bold text-white  text-center mb-10">
          Privacy Policy
        </h1>
        {/* <p className="text-gray-400 text-center mb-10">
          Effective Date: 15 August 2025
        </p> */}

        {/* Introduction */}
        <section className="mb-8">
          <p className="leading-relaxed">
            At <span className="font-semibold">Sarkar Nayan</span>, we respect
            your privacy and are committed to protecting your personal
            information. This Privacy Policy explains how we collect, use, and
            protect the information you provide when using our website and
            services.
          </p>
        </section>

        {/* 1. Information We Collect */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            1. Information We Collect
          </h2>
          <p className="mb-2">
            We may collect the following types of information:
          </p>

          <p className="font-semibold">a. Personal Information</p>
          <ul className="list-disc list-inside space-y-1 mb-4">
            <li>Name</li>
            <li>Email address</li>
            <li>Phone number</li>
            <li>Billing address</li>
            <li>
              Payment details (processed securely through third-party gateways)
            </li>
          </ul>

          <p className="font-semibold">b. Non-Personal Information</p>
          <ul className="list-disc list-inside space-y-1">
            <li>IP address</li>
            <li>Browser type</li>
            <li>Device information</li>
            <li>Website usage data (via cookies and analytics tools)</li>
          </ul>
        </section>

        {/* 2. How We Use Your Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            2. How We Use Your Information
          </h2>
          <p className="leading-relaxed mb-2">We use your information to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Provide and improve our services</li>
            <li>Process payments and invoices</li>
            <li>Communicate project updates</li>
            <li>
              Send promotional or informational content (only if you opt-in)
            </li>
            <li>Comply with legal obligations</li>
          </ul>
        </section>

        {/* 3. How We Protect Your Information */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            3. How We Protect Your Information
          </h2>
          <ul className="list-disc list-inside space-y-2">
            <li>
              We use secure servers, encryption, and SSL certificates to protect
              your data.
            </li>
            <li>
              Access to personal data is limited to authorized team members
              only.
            </li>
            <li>
              We never sell, trade, or rent your information to third parties.
            </li>
          </ul>
        </section>

        {/* 4. Cookies & Tracking Technologies */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            4. Cookies & Tracking Technologies
          </h2>
          <p className="leading-relaxed mb-2">Our website uses cookies to:</p>
          <ul className="list-disc list-inside space-y-1 mb-2">
            <li>Improve user experience</li>
            <li>Analyze website traffic</li>
            <li>Remember your preferences</li>
          </ul>
          <p className="leading-relaxed">
            You can disable cookies in your browser settings, but some site
            features may not work properly without them.
          </p>
        </section>

        {/* 5. Third-Party Services */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            5. Third-Party Services
          </h2>
          <p className="leading-relaxed mb-2">
            We may use third-party tools (e.g., payment gateways, analytics)
            that collect data under their own privacy policies. Examples
            include:
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              {" "}
              <strong>Google Analytics</strong>{" "}
            </li>
            <li>
              {" "}
              <strong>Stripe / PayPal / Other Payment Providers</strong>
            </li>
          </ul>
        </section>

        {/* 6. Data Retention */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            6. Data Retention
          </h2>
          <p className="leading-relaxed">
            We will retain your personal information only as long as necessary
            for the purposes outlined in this policy or as required by law.
          </p>
        </section>

        {/* 7. Your Rights */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            7. Your Rights
          </h2>
          <p className="leading-relaxed mb-2">You have the right to:</p>
          <ul className="list-disc list-inside space-y-1">
            <li>Access the data we hold about you</li>
            <li>Request corrections or updates</li>
            <li>
              Request deletion of your data (subject to legal requirements)
            </li>
            <li>Opt-out of marketing communications</li>
          </ul>
        </section>

        {/* 8. Changes to This Policy */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            8. Changes to This Policy
          </h2>
          <p className="leading-relaxed">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on our website with the updated date.
          </p>
        </section>

        {/* 9. Contact Us */}
        <section className="mb-8">
          <h2 className="text-xl font-semibold text-white mb-3">
            9. Contact Us
          </h2>
          <p className="leading-relaxed mb-2">
            If you have any questions about this Privacy Policy, please contact:
          </p>
          <ul className="list-none space-y-1">
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

export default PolicyPage;
