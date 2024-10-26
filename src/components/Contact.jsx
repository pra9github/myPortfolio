import React from 'react';

function Contact() {
  return (
    <section id="contact" className="py-10">
      <div className="bg-black bg-opacity-50 p-6 rounded-lg text-center">
        <h2 className="text-3xl font-bold mb-6 text-white text-shadow-lg">Contact Me</h2>
        <p className="mb-6 max-w-2xl mx-auto text-white text-shadow">
          I'm always open to new opportunities and collaborations. Feel free to reach out to me through any of the following channels:
        </p>
        <div className="flex justify-center space-x-12">
          <a href="mailto:pranavshrikant9@gmail.com" className="text-4xl hover:scale-110 transition-transform text-white" title="Email">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
          </a>
          <a href="https://www.linkedin.com/in/pranav-pawar-522b7a262/" target="_blank" rel="noopener noreferrer" className="text-4xl hover:scale-110 transition-transform text-white" title="LinkedIn">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
          </a>
          <a href="tel:+919082527180" className="text-4xl hover:scale-110 transition-transform text-white" title="Phone">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/></svg>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
