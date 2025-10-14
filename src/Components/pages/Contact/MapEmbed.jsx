import React from 'react';
import './Style/MapEmbed.css';

const MapEmbed = () => {
 return (
    <div className="map-section">
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.90089943376!2d77.46612593299311!3d12.953945614011563!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1760339147811!5m2!1sen!2sin"
        className="map-iframe"
        allowFullScreen="" 
        loading="lazy" 
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
      />
    </div>
  );
};

export default MapEmbed;
