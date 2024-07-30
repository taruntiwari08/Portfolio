import React from "react";
import Card from "./Card/Card";
import blog from "./ImgResources/blog.jpg";
import currency from './ImgResources/currencyConverter.jpg'
import edu from './ImgResources/edu.jpeg'

function Projects() {
  return (
    <div className="flex-col bg-slate-50 max-w-full max-h-full my-0 animate-slideUp">
      <div className="flex md:font-light text-3xl font-bold  md:text-5xl md:ml-40 py-5 ml-5  md:py-16 font-roboto text-gray-900">
        {" "}
        Projects
      </div>
      <div>
      <div className="flex items-center justify-center pb-5 mb-7">
        <Card
          title="Blog Web Application"
          pic={blog}
          link="https://github.com/taruntiwari08/Megablog/tree/main"
          content="Built using React.js and Appwrite, my new blog platform offers seamless user authentication, intuitive post management with image support, and a rich text editing experience powered by TinyMCE. Features include easy post deletion and robust profile management. Leveraging Redux Toolkit, React Router DOM, React Hook Form, and Appwrite for backend services, this project showcases my expertise in modern web development and user-centric design."
          deployLink='https://megablog-pied.vercel.app/'
        />
      </div>
      <div className="flex items-center justify-center pb-5 mb-7">
        <Card
          title="Currency Converter"
          pic={currency}
          link="https://github.com/taruntiwari08/Currency-Converter"
          content="A sleek web app built with React.js and Tailwind CSS for a smooth, intuitive user experience. Convert between currencies effortlessly with real-time exchange rates, powered by reliable APIs. Streamlined design and responsive layout ensure seamless usage across devices. Start converting currencies hassle-free today!"
          deployLink='https://currency-converter-coral-five.vercel.app/'
        />
      </div>

      <div className="flex items-center justify-center pb-5 mb-7">
        <Card
          title="Edu Skills (Fully Responsive)"
          pic={edu}
          link="https://github.com/taruntiwari08/Megablog/tree/main"
          content="This application features a fully responsive user interface for an educational site, ensuring an optimal experience across all devices. Built with modern web technologies such as HTML, Tailwind CSS, and JavaScript, the design is both sleek and scalable. Key functionalities include user signup and login forms with dynamic state changes, providing a seamless and interactive user experience."
          deployLink='https://edu-skills-qegqskaha-tarun-tiwaris-projects-d17ea02d.vercel.app/'
        />
      </div>

      </div>
    </div>
  );
}

export default Projects;
