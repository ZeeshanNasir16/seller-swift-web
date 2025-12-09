import Image from 'next/image';
import React from 'react';

const TermsConditionsPage = () => {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='hero-bg-gradient-light-secondary' />
        <div className='hero-bg-gradient-light-secondary-overlay' />
        <div className='relative z-20 section-padding-x section-max-width overflow-visible hero-padding'>
          <div className='w-full space-y-6 md:space-y-10 md:max-w-[500px] lg:max-w-fit'>
            <h2 className='heading-1-secondary text-gradient-tertiary-light'>
              Terms &
              <br />
              Conditions
            </h2>
            <div className='space-y-1'>
              <p className='text-sm sm:text-base font-normal text-foreground'>
                <strong>Last Updated:</strong> November 07, 2025
              </p>
            </div>
          </div>
          <div className='hidden md:block absolute top-1/2 -right-[70%] md:-right-[550px] xl:-right-[20%] 2xl:-right-[300px] -translate-y-1/2 aspect-square z-[16] h-[80%]'>
            <Image
              src='/images/gradients/cube-absrtract.webp'
              alt='circle-glass'
              width={350}
              height={350}
              sizes='100%'
              className='object-contain w-full h-full'
              loading='lazy'
            />
          </div>
        </div>
      </section>
      <section className='section-padding-x max-w-[1200px] mx-auto py-20'>
        <div className='space-y-8'>
          {/* Introduction */}
          <p className='text-sm sm:text-base font-normal leading-relaxed'>
            Welcome to Seller Swift. These Terms and Conditions ("Terms") govern
            your access to and use of the Seller Swift website, products,
            services, and any associated applications (collectively, the
            "Platform"). By accessing or using the Platform, you agree to be
            bound by these Terms.
          </p>

          {/* Section 1 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              1. About Seller Swift
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift is an AI-powered analytics and funding platform
              designed for online sellers (e.g., Amazon, Shopify, or similar
              marketplaces). It provides insights, financial forecasts, and
              tailored funding solutions based on store performance data. The
              Platform aims to simplify growth financing and help eCommerce
              sellers make smarter, data-driven decisions.
            </p>
          </div>

          {/* Section 2 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>2. Eligibility</h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              To use the Platform, you must:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Be at least 18 years of age.</li>
              <li>
                Operate a valid eCommerce store (e.g., Amazon Seller Account).
              </li>
              <li>Provide accurate and complete registration information.</li>
              <li>Accept these Terms and our Privacy Policy.</li>
            </ul>
          </div>

          {/* Section 3 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              3. User Account
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              You may be required to create an account to access certain
              features. You are responsible for maintaining the confidentiality
              of your login credentials and for all activities under your
              account. Seller Swift reserves the right to suspend or terminate
              accounts found in violation of these Terms.
            </p>
          </div>

          {/* Section 4 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              4. Services Provided
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift offers the following services:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>
                <strong>Performance Analytics:</strong> Aggregates and
                visualizes key sales metrics, trends, and profitability
                insights.
              </li>
              <li>
                <strong>Funding Access:</strong> Enables eligible users to
                access financing based on business performance.
              </li>
              <li>
                <strong>AI Co-Pilot:</strong> Offers personalized growth
                insights and recommendations.
              </li>
              <li>
                <strong>Reports & Forecasts:</strong> Provides predictive
                analytics for smarter business planning.
              </li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              All services are subject to change or discontinuation at any time
              without prior notice.
            </p>
          </div>

          {/* Section 5 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              5. Data Usage and Privacy
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Your data is used to generate insights and funding eligibility
              assessments. Seller Swift may access, analyze, and process
              performance metrics from linked seller accounts solely for the
              purpose of providing services. Data will be handled according to
              our <strong>Privacy Policy</strong>, in compliance with GDPR and
              other applicable data protection laws.
            </p>
          </div>

          {/* Section 6 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              6. User Obligations
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Users agree to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Provide accurate, current, and complete information.</li>
              <li>Not misuse or reverse-engineer the Platform.</li>
              <li>
                Not upload any malicious content or violate third-party rights.
              </li>
              <li>Use the Platform for lawful business purposes only.</li>
            </ul>
          </div>

          {/* Section 7 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              7. Funding Eligibility
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Eligibility for funding or financial services is determined
              through automated analysis of your connected store data. Approval
              is not guaranteed. Seller Swift does not act as a lender but may
              connect you with third-party financial institutions that provide
              capital.
            </p>
          </div>

          {/* Section 8 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              8. Third-Party Integrations
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift integrates with third-party services such as Amazon,
              Stripe, or payment providers. By connecting these services, you
              grant Seller Swift permission to access and process data relevant
              to your performance analytics and funding eligibility.
            </p>
          </div>

          {/* Section 9 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              9. Subscriptions and Fees
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Some features of the Platform may require paid subscriptions.
              Subscription fees, billing cycles, and refund policies will be
              communicated prior to purchase. Seller Swift reserves the right to
              revise pricing or introduce new fees with reasonable notice.
            </p>
          </div>

          {/* Section 10 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              10. Intellectual Property
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              All content, designs, graphics, software, trademarks, and related
              materials displayed on the Platform are the exclusive property of
              Seller Swift. Users may not reproduce, modify, or distribute any
              part of the Platform without written consent.
            </p>
          </div>

          {/* Section 11 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              11. Disclaimers
            </h2>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>
                The Platform provides insights and recommendations for
                informational purposes only; it does not constitute financial
                advice.
              </li>
              <li>
                Seller Swift does not guarantee the accuracy or completeness of
                analytical results.
              </li>
              <li>
                Funding offers or terms are subject to third-party evaluation
                and approval.
              </li>
            </ul>
          </div>

          {/* Section 12 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              12. Limitation of Liability
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              To the maximum extent permitted by law, Seller Swift shall not be
              liable for any indirect, incidental, or consequential damages,
              including but not limited to loss of revenue, profits, or data
              arising from your use of the Platform.
            </p>
          </div>

          {/* Section 13 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              13. Termination
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift reserves the right to suspend or terminate access to
              the Platform at any time if it believes you have violated these
              Terms or engaged in fraudulent activity.
            </p>
          </div>

          {/* Section 14 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              14. Governing Law
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              These Terms shall be governed by and construed in accordance with
              the laws of the United States (or the jurisdiction where Seller
              Swift operates). Any disputes shall be resolved in the courts of
              competent jurisdiction in that region.
            </p>
          </div>

          {/* Section 15 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>15. Amendments</h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift may modify these Terms from time to time. Updates
              will be reflected with a new "Last Updated" date, and continued
              use of the Platform constitutes acceptance of any revised Terms.
            </p>
          </div>

          {/* Section 16 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>16. Contact</h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              For questions or support regarding these Terms, please contact:
            </p>
            <div className='ml-4 space-y-1 text-sm sm:text-base font-normal'>
              <p>Email: info@sellerswift.com</p>
              <p>Address: Seller Swift HQ — Digital Hub, USA</p>
            </div>
          </div>

          {/* Acknowledgment */}
          <div className='space-y-4 pt-8 border-t border-foreground/10'>
            <h2 className='text-lg sm:text-xl font-semibold'>Acknowledgment</h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              By using the Seller Swift Platform, you acknowledge that you have
              read, understood, and agree to these Terms and Conditions.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default TermsConditionsPage;
