import React from 'react';

const ContactPersons = () => {
  return (
    <div className="grid grid-cols-2 gap-x-20 pt-10 border-t border-gray-300 max-w-5xl mx-auto">
      
      {/* Recruiting Inquiries */}
      <div>
        <h3 className="text-[15px] font-bold text-black mb-4 lowercase">
          recruiting inquiries
        </h3>
        <p className="text-[15px] text-gray-700 leading-[1.6] mb-7">
          For more information regarding current career opportunities, please contact:
        </p>
        
        <div className="flex gap-4 items-start">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0"></div>
          <div>
            <p className="font-bold text-black text-[11px] tracking-[0.08em] mb-1 uppercase">
              AMANDA SEYFRIED
            </p>
            <p className="italic text-gray-400 text-[13px] mb-3">
              Recruiting Manager
            </p>
            <div className="text-[13px] text-gray-600 space-y-1 leading-relaxed">
              <div>📞 +1 212 123 4505</div>
              <div>📞 +1 212 202 3335</div>
              <div>✉️ recruiting@stylemixthemes.com</div>
            </div>
          </div>
        </div>
      </div>

      {/* Press Inquiries */}
      <div>
        <h3 className="text-[15px] font-bold text-black mb-4 lowercase">
          press inquiries
        </h3>
        <p className="text-[15px] text-gray-700 leading-[1.6] mb-7">
          If you are a member of the press and would like to speak with someone at Consulting, please contact:
        </p>
        
        <div className="flex gap-4 items-start">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-gray-200 to-gray-300 flex-shrink-0"></div>
          <div>
            <p className="font-bold text-black text-[11px] tracking-[0.08em] mb-1 uppercase">
              DONALD SIMPSON
            </p>
            <p className="italic text-gray-400 text-[13px] mb-3">
              Senior Marketing Manager
            </p>
            <div className="text-[13px] text-gray-600 space-y-1 leading-relaxed">
              <div>📞 +1 212 123 4040</div>
              <div>📞 +1 212 617 5050</div>
              <div>✉️ d.simpson@stylemixthemes.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPersons;
