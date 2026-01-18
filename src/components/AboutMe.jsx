const AboutMe = () => {
    return (
      <section className="max-w-6xl mx-auto w-full px-4 py-16">
        <div className="flex flex-col md:flex-row items-center gap-10">
          
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <a href="https://www.linkedin.com/in/robert-natale-56785b145/" target="blank">
                <img
                src="/face1.jpg"
                alt="Photo of Rob Natale"
                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover shadow-md hover:scale-105"
                />
            </a>
          </div>
  
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold mb-4">About Me</h2>
  
            <p className="text-gray-700 max-w-2xl">
              I’m a junior full-stack developer with a strong focus on React and JavaScript,
              passionate about building clean, user-friendly applications that solve real
              problems. I enjoy working across the stack, from intuitive UI design to backend
              logic and cloud deployment.
            </p>
  
            <p className="text-gray-700 max-w-2xl mt-4">
              I’ve built projects ranging from interactive browser games to full-stack web
              platforms with authentication, file uploads, and cloud storage. I’m especially
              interested in meaningful software, including nonprofit and impact-driven work.
            </p>
  
            {/* Tech Stack */}
            <div className="mt-6">
              <h3 className="text-lg font-medium mb-3">Tech I Work With</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-2">
                {[
                  "React",
                  "JavaScript",
                  "React Native",
                  "Node.js",
                  "Express",
                  "MongoDB",
                  "AWS",
                  "Tailwind CSS",
                  "Java",
                  "Linux",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="bg-gray-200 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
  
        </div>
      </section>
    );
  };
  
  export default AboutMe;  