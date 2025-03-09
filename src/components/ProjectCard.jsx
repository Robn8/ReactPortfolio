


function ProjectCard({ title, description }) {
    return (
      <div className="bg-gray-200 p-6 rounded-2xl shadow-md">
        <h3 className="text-gray-800 text-2xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    );
  }

  export default ProjectCard;