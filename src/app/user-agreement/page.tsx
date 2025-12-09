import Image from 'next/image';
import React from 'react';

const UserAgreementPage = () => {
  return (
    <>
      <section className='relative overflow-hidden'>
        <div className='hero-bg-gradient-light-secondary' />
        <div className='hero-bg-gradient-light-secondary-overlay' />
        <div className='relative z-20 section-padding-x section-max-width overflow-visible hero-padding'>
          <div className='w-full space-y-6 md:space-y-10 md:max-w-[500px] lg:max-w-fit'>
            <h2 className='heading-1-secondary text-gradient-tertiary-light'>
              Seller Swift
              <br />
              End User
              <br />
              Agreement
            </h2>
            <div className='space-y-1'>
              <p className='text-sm sm:text-base font-normal text-foreground'>
                <strong>Effective Date:</strong> Oct 27, 2025
              </p>
              <p className='text-sm sm:text-base font-normal text-foreground'>
                <strong>Last Updated:</strong> Nov 3, 2025
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
            This End User Agreement ("Agreement") is a legally binding contract
            between you ("User," "you," or "your") and Seller Swift USA LLC
            ("Seller Swift," "we," "us," or "our"), a Delaware limited liability
            company. By accessing or using the Seller Swift platform, website,
            mobile application, or related services (collectively, the
            "Services"), you agree to this Agreement and to our Privacy Policy.
          </p>

          <p className='text-sm sm:text-base font-normal leading-relaxed'>
            If you do not agree to these terms, do not use the Services.
          </p>

          {/* Section 1 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              1. Eligibility and Accounts
            </h2>

            <div className='space-y-3'>
              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  1.1 Eligibility
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  You must be at least 18 years old and capable of entering into
                  legally binding contracts to use the Services.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  1.2 Account Creation
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  You may be required to create an account. You agree to provide
                  accurate and complete information and to update it as
                  necessary.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  1.3 Account Security
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  You are responsible for maintaining the confidentiality of
                  your login credentials and for all activity under your
                  account.
                </p>
              </div>
            </div>
          </div>

          {/* Section 2 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              2. Description of Services
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift provides an analytics and financing platform that
              allows users to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Access seller performance metrics and analytics;</li>
              <li>
                Connect to integrated marketplaces (such as Amazon) or
                third-party tools; and
              </li>
              <li>
                Apply for and manage receivable-based advance products
                ("Advances").
              </li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Use of any financing or advance feature is subject to separate
              terms, eligibility criteria, and verification processes, which may
              include credit, identity, and compliance reviews.
            </p>
          </div>

          {/* Section 3 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              3. License and Intellectual Property
            </h2>

            <div className='space-y-3'>
              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  3.1 License to You
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  Seller Swift grants you a limited, non-exclusive,
                  non-transferable, revocable license to access and use the
                  Services solely for your internal business or personal use in
                  accordance with this Agreement.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  3.2 Intellectual Property Rights
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  All content, software, analytics, designs, trademarks, and
                  data on the platform are owned by Seller Swift or its
                  licensors and are protected by intellectual property laws. No
                  ownership rights are transferred to you by your use of the
                  Services.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  3.3 User Data
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  You retain ownership of any data or content you upload to the
                  platform. By submitting such data, you grant Seller Swift a
                  worldwide, royalty-free, sublicensable license to use,
                  process, analyze, and display your data as necessary to
                  operate and improve the Services.
                </p>
              </div>
            </div>
          </div>

          {/* Section 4 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              4. Privacy and Data Use
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Your use of the Services is subject to our Privacy Policy, which
              explains how we collect, use, and share your information. By using
              the Services, you consent to Seller Swift's data practices,
              including the use of third-party integrations to retrieve seller
              metrics or process applications.
            </p>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              You authorize Seller Swift to access and analyze data from
              third-party platforms (e.g., Amazon Seller Central) solely for the
              purpose of providing the Services.
            </p>
          </div>

          {/* Section 5 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              5. Payment and Financial Terms
            </h2>

            <div className='space-y-3'>
              <div>
                <h3 className='text-base sm:text-lg font-semibold'>5.1 Fees</h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  Some features, including Advances or premium analytics, may
                  incur fees or repayment obligations disclosed at the time of
                  transaction or offer.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  5.2 Payment Authorization
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  You authorize Seller Swift or its payment processors to debit
                  or credit your linked financial accounts as needed to process
                  fees, repayments, or adjustments.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  5.3 Third-Party Processors
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  Payments may be processed by third-party providers subject to
                  their own terms and compliance obligations.
                </p>
              </div>
            </div>
          </div>

          {/* Section 6 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              6. User Responsibilities and Prohibited Uses
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              You agree not to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Misrepresent your identity or data.</li>
              <li>
                Use the Services for any unlawful, fraudulent, or abusive
                purpose.
              </li>
              <li>
                Interfere with, disrupt, or reverse engineer the platform.
              </li>
              <li>
                Submit false or misleading information when applying for
                Advances.
              </li>
              <li>Violate any applicable laws or third-party rights.</li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift reserves the right to suspend or terminate your
              access for any violation of this Agreement.
            </p>
          </div>

          {/* Section 7 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              7. Warranties and Disclaimers
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              The Services are provided on an "AS IS" and "AS AVAILABLE" basis.
              Seller Swift makes no warranties, express or implied, including
              but not limited to warranties of merchantability, fitness for a
              particular purpose, accuracy, or non-infringement.
            </p>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Data, analytics, and financial projections are for informational
              purposes only and should not be relied upon as financial or legal
              advice.
            </p>
          </div>

          {/* Section 8 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              8. Limitation of Liability
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              To the maximum extent permitted by law:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>
                Seller Swift and its affiliates are not liable for indirect,
                incidental, consequential, or punitive damages, including loss
                of profits, data, or business opportunities.
              </li>
              <li>
                Seller Swift's total liability for any claim under this
                Agreement shall not exceed the amount you paid (if any) to
                Seller Swift for use of the Services during the twelve (12)
                months prior to the claim.
              </li>
            </ul>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Some jurisdictions do not allow limitations on liability; in such
              cases, these limitations may not apply to you.
            </p>
          </div>

          {/* Section 9 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              9. Indemnification
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              You agree to indemnify and hold harmless Seller Swift, its
              officers, directors, employees, and agents from any claims,
              damages, losses, or expenses (including legal fees) arising out of
              or related to:
            </p>
            <ul className='list-disc list-inside space-y-2 ml-4 text-sm sm:text-base font-normal'>
              <li>Your use of the Services;</li>
              <li>Your violation of this Agreement; or</li>
              <li>Your breach of applicable law or third-party rights.</li>
            </ul>
          </div>

          {/* Section 10 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              10. Termination
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift may suspend or terminate your account at any time,
              with or without notice, for violation of this Agreement or misuse
              of the Services. Upon termination, your right to access the
              Services ceases immediately.
            </p>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Sections 3, 4, 7, 8, 9, and 11 shall survive termination.
            </p>
          </div>

          {/* Section 11 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              11. Governing Law and Dispute Resolution
            </h2>

            <div className='space-y-3'>
              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  11.1 Governing Law
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  This Agreement is governed by the laws of the State of
                  Delaware, without regard to its conflict of law principles.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  11.2 Arbitration
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  Any dispute arising out of or related to this Agreement shall
                  be resolved through binding arbitration in Delaware, under the
                  rules of the American Arbitration Association.
                </p>
              </div>

              <div>
                <h3 className='text-base sm:text-lg font-semibold'>
                  11.3 Waiver of Class Actions
                </h3>
                <p className='text-sm sm:text-base font-normal leading-relaxed'>
                  You agree to resolve disputes with Seller Swift only on an
                  individual basis and not as part of a class or collective
                  action.
                </p>
              </div>
            </div>
          </div>

          {/* Section 12 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              12. Changes to This Agreement
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              Seller Swift may update this Agreement from time to time. The
              updated version will be posted on our website or platform, and
              your continued use of the Services after the effective date
              constitutes acceptance of the revised terms.
            </p>
          </div>

          {/* Section 13 */}
          <div className='space-y-4 pt-4'>
            <h2 className='text-lg sm:text-xl font-semibold'>
              13. Contact Information
            </h2>
            <p className='text-sm sm:text-base font-normal leading-relaxed'>
              For questions or concerns about this Agreement, please contact:
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
              By clicking "Accept" or by using the Seller Swift Services, you
              acknowledge that you have read, understood, and agreed to this End
              User Agreement.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserAgreementPage;
