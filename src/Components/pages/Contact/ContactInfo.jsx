import React from 'react';

const ContactInfo = () => {
  return (
    <div className="max-w-5xl mx-auto">
      {/* Main Title */}
      <h1 className="text-[68px] leading-[1.1] font-light text-black mb-8">
        Contact us
      </h1>
      
      {/* Description */}
      <p className="text-[16px] text-gray-700 leading-[1.65] mb-10 pb-10 border-b border-gray-300">
        Please let us know if you have a question, want to leave a comment, or would like further information about Consulting WP.
      </p>

      {/* CLIENT INQUIRIES SECTION */}
      <div className="mb-12">
        <h3 className="text-[15px] font-bold text-black mb-7 lowercase">
          client inquiries
        </h3>
        
        {/* Grid layout for contact info - 2 columns */}
        <div className="grid grid-cols-2 gap-x-20 gap-y-5 text-[15px] text-gray-700 mb-7">
          {/* Left Column */}
          <div className="space-y-5">
            {/* Address */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
              </svg>
              <div className="leading-[1.6]">
                <div>1010 Avenue of the Moon</div>
                <div>New York, NY 10018, United States</div>
              </div>
            </div>

            {/* Phone Numbers */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
              </svg>
              <div className="leading-[1.6]">
                <div>+1 212 386 5575</div>
                <div>+1 212 386 5577</div>
              </div>
            </div>

            {/* Fax */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19 8H5c-1.66 0-3 1.34-3 3v6h4v4h12v-4h4v-6c0-1.66-1.34-3-3-3zm-3 11H8v-5h8v5zm3-7c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm-1-9H6v4h12V3z"/>
              </svg>
              <div>+1 212 386 5555</div>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-5">
            {/* Email */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
              </svg>
              <div>info@stylemixthemes.com</div>
            </div>

            {/* Business Hours */}
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M11.99 2C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm.5-13H11v6l5.25 3.15.75-1.23-4.5-2.67z"/>
              </svg>
              <div className="leading-[1.6]">
                <div>Monday–Saturday: 8:00AM–6:00PM</div>
                <div>Sunday: CLOSED</div>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-2.5">
          {['f', 't', 'in', 'g+', 's'].map((icon, index) => (
            <div
              key={index}
              className="w-9 h-9 rounded-full bg-gray-300 flex items-center justify-center text-[13px] text-white hover:bg-green-600 transition-colors duration-300 cursor-pointer"
            >
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
