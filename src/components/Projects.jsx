import ProjectBtns from "./ProjectBtns";

const Projects = () => {
    return (
        <main>
            {/* Projects Section */}
            <section id="projects" className="py-20 bg-white">
            <div className="max-w-5xl mx-auto px-8">

                <h2 className="text-4xl font-bold text-center mb-10 underline">REACT PROJECTS</h2>

                <ProjectBtns />
                
            </div>
            </section>
        </main>
    )
}

export default Projects;