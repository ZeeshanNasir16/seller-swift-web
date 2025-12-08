import Image from 'next/image';
import React from 'react';

const PrivacyPolicyPage = () => {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='hero-bg-gradient-light-secondary' />
        <div className='hero-bg-gradient-light-secondary-overlay' />
        <div className='relative z-20 section-padding-x section-max-width overflow-visible hero-padding'>
          <div className='w-full space-y-6 md:space-y-10 md:max-w-[500px] lg:max-w-fit'>
            <h2 className='heading-1-secondary text-gradient-tertiary-light'>
              Privacy
              <br />
              Policy
            </h2>
            <div className='space-y-1'>
              <p className='text-sm sm:text-base font-normal text-foreground'>
                <strong>Effective Date:</strong> Oct 28, 2025
              </p>
              <p className='text-sm sm:text-base font-normal text-foreground'>
                <strong>Last Updated:</strong> Nov 3, 2025
              </p>
            </div>
          </div>
          <div className='hidden md:block absolute top-1/2 -right-[70%] md:-right-[550px] xl:-right-[20%] 2xl:-right-[300px] -translate-y-1/2 aspect-square z-[16] h-[80%]'>
            <Image
              src='/images/gradients/cube-absrtract.png'
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
          {/* Effective Date and Last Updated */}

          {/* Introduction */}
          <p className='text-sm sm:text-base font-normal leading-relaxed'>
            This Privacy Policy describes how Seller Swift USA LLC ("Seller
            Swift," "we," "us," or "our") collects, uses, shares, and protects
            information about you ("User," "you," or "your") when you visit our
            website, use our platform, or engage with any of our products or
            services (collectively, the "Services").
          </p>
          <p className='text-sm sm:text-base font-normal leading-relaxed'>
            By using the Services, you agree to this Privacy Policy. If you do
            not agree, please discontinue use of the Services.
          </p>
          {/* Section 1 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              1. Information We Collect
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              We collect information in three primary ways:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Information you provide directly.</li>
              <li>Information collected automatically.</li>
              <li>
                Information obtained from third parties or integrations you
                authorize.
              </li>
            </ul>

            <div className='space-y-3 pt-2'>
              <h3 className='text-base sm:text-lg font-semibold'>
                1.1 Information You Provide
              </h3>
              <p className='text-sm sm:text-base font-normal leading-relaxed'>
                When you interact with Seller Swift, you may provide:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
                <li>
                  <strong>Account Information</strong> – such as your name,
                  email address, phone number, password, and business
                  information.
                </li>
                <li>
                  <strong>Financial Data</strong> – including linked bank
                  accounts, receivable information, transaction history, or
                  payment data required for funding or repayment.
                </li>
                <li>
                  <strong>Business Metrics</strong> – sales data, product
                  listings, order history, and other marketplace performance
                  data.
                </li>
                <li>
                  <strong>Communications</strong> – messages, support requests,
                  and feedback sent to our team.
                </li>
              </ul>
            </div>

            <div className='space-y-3 pt-2'>
              <h3 className='text-base sm:text-lg font-semibold'>
                1.2 Information Collected Automatically
              </h3>
              <p className='text-sm sm:text-base font-normal leading-relaxed'>
                When you access our website or Services, we may automatically
                collect:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
                <li>
                  <strong>Device and Technical Data</strong> – IP address,
                  browser type, operating system, device ID, and connection
                  data.
                </li>
                <li>
                  <strong>Usage Data</strong> – pages viewed, actions taken,
                  features used, and timestamps of your activity.
                </li>
                <li>
                  <strong>Cookies and Similar Technologies</strong> – to
                  personalize content, remember preferences, and measure site
                  performance.
                </li>
              </ul>
              <p className='text-sm sm:text-base font-normal leading-relaxed'>
                You can manage cookie preferences through your browser settings.
              </p>
            </div>

            <div className='space-y-3 pt-2'>
              <h3 className='text-base sm:text-lg font-semibold'>
                1.3 Information from Third Parties
              </h3>
              <p className='text-sm sm:text-base font-normal leading-relaxed'>
                With your permission, we may collect data from:
              </p>
              <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
                <li>
                  <strong>Marketplace Integrations</strong> (e.g., Amazon Seller
                  Central, Shopify, Walmart Marketplace) to retrieve sales,
                  order, and performance data.
                </li>
                <li>
                  <strong>Financial Partners</strong> – banks, payment
                  processors, and credit agencies for verification,
                  underwriting, or transaction facilitation.
                </li>
                <li>
                  <strong>Analytics Providers</strong> – to evaluate platform
                  performance and improve Services.
                </li>
              </ul>
            </div>
          </div>
          {/* Section 2 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              2. How We Use Your Information
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift uses the information we collect to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Operate, maintain, and improve our Services.</li>
              <li>
                Analyze seller performance and provide metrics or insights.
              </li>
              <li>
                Evaluate eligibility and process applications for
                receivable-based advances.
              </li>
              <li>
                Communicate with you about your account, transactions, and
                support needs.
              </li>
              <li>
                Detect, investigate, and prevent fraudulent or illegal activity.
              </li>
              <li>Comply with legal and regulatory obligations.</li>
              <li>
                Develop new features, financial products, or partnerships.
              </li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              We only use personal data when we have a lawful basis, such as
              your consent, a legitimate business interest, or compliance with
              applicable law.
            </p>
          </div>
          {/* Section 3 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              3. How We Share Information
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              We do not sell your personal information. We may share information
              in limited circumstances:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>
                <strong>Service Providers and Partners</strong> – who assist in
                operating the platform, payment processing, analytics, identity
                verification, or customer support.
              </li>
              <li>
                <strong>Financial Institutions</strong> – to facilitate
                transactions, underwrite advances, or comply with banking
                regulations.
              </li>
              <li>
                <strong>Legal and Regulatory Authorities</strong> – when
                required by law, subpoena, or court order.
              </li>
              <li>
                <strong>Corporate Transactions</strong> – in connection with a
                merger, acquisition, financing, or sale of assets, subject to
                confidentiality protections.
              </li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              All third parties are contractually required to safeguard your
              information and use it only for authorized purposes.
            </p>
          </div>
          {/* Section 4 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              4. Data Retention
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              We retain your personal information for as long as necessary to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Provide Services and maintain your account;</li>
              <li>
                Fulfill legal, accounting, and regulatory requirements; or
              </li>
              <li>Resolve disputes and enforce agreements.</li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              When no longer needed, data is securely deleted or anonymized.
            </p>
          </div>
          {/* Section 5 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              5. Data Security
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              We implement administrative, technical, and physical safeguards to
              protect your information from unauthorized access, loss, misuse,
              or alteration. However, no system is completely secure, and you
              acknowledge that transmission of data over the internet carries
              inherent risks.
            </p>
          </div>
          {/* Section 6 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              6. Your Rights and Choices
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Depending on your location, you may have rights regarding your
              personal information, including to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Access a copy of your data.</li>
              <li>Request correction or deletion.</li>
              <li>Object to or limit certain processing.</li>
              <li>Withdraw consent where applicable.</li>
              <li>Request a portable copy of your information.</li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              To exercise these rights, please contact us at
              info@sellerswift.com. We will respond in accordance with
              applicable law.
            </p>
          </div>
          {/* Section 7 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              7. International Users
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift operates in the United States. If you access the
              Services from outside the U.S., you consent to the transfer and
              processing of your information in the United States, where privacy
              laws may differ from those of your country.
            </p>
          </div>
          {/* Section 8 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              8. Children's Privacy
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Our Services are not intended for individuals under 18 years of
              age. We do not knowingly collect personal data from minors. If we
              learn that a minor's data has been collected, we will delete it
              promptly.
            </p>
          </div>
          {/* Section 9 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              9. Changes to This Policy
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              We may update this Privacy Policy from time to time. The revised
              version will be posted on our website with an updated "Last
              Updated" date. Continued use of the Services after changes become
              effective constitutes acceptance of the revised policy.
            </p>
          </div>
          {/* Section 10 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>10. Contact Us</h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              For questions, concerns, or requests related to this Privacy
              Policy, please contact:
            </p>
            <div className='ml-4 space-y-1 text-sm sm:text-base font-normal'>
              <p>
                <strong>Seller Swift USA LLC</strong>
              </p>
              <p>4023 Kennett Pike #50034</p>
              <p>Wilmington, DE 19807</p>
              <p>Email: info@sellerswift.com</p>
              <p>Phone: +1 302-365-0040</p>
            </div>
          </div>
          {/* Acknowledgment */}
          <div className='space-y-4 pt-8 border-t border-foreground/10'>
            <h2 className='text-lg sm:text-xl font-semibold'>Acknowledgment</h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              By accessing or using the Seller Swift Services, you acknowledge
              that you have read and understand this Privacy Policy and agree to
              its terms.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default PrivacyPolicyPage;
