export default function HowToFindUs() {
  return (
    <section className="bg-white py-24 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        
        {/* Text Content */}
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            How to Find Us
          </h2>
          <p className="text-lg text-gray-700 mb-4">
            Our café is located in the heart of Battersea, just a short walk from Clapham Junction Station. Whether you're grabbing coffee on the go or settling in for brunch, we’re easy to reach and always ready to welcome you.
          </p>
          <p className="text-md text-gray-600 mb-4">
            <strong>Address:</strong><br />
            284 Battersea Park Road,<br />
            London SW11 3BT, United Kingdom
          </p>
          <p className="text-md text-gray-600 mb-4">
            <strong>Opening Hours:</strong><br />
            Monday to Friday: 7:00 AM – 5:00 PM<br />
            Saturday: 7:30 AM – 5:00 PM<br />
            Sunday: 8:00 AM – 5:00 PM
          </p>
          <p className="text-md text-gray-600">
            <strong>Email:</strong> <a href="mailto:info@ilmolino.co.uk" className="text-amber-700 hover:underline">info@ilmolino.co.uk</a>
          </p>
        </div>

        {/* Google Map Embed */}
        <div className="md:w-1/2 w-full h-80 md:h-96 rounded-lg overflow-hidden shadow-md">
          <iframe
            title="Our Location"
            src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=284%20Battersea%20Park%20Road,%20%20London%20SW11%203BT,%20United%20Kingdom+(Il%20Molino)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </section>
  );
}