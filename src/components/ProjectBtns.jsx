const ProjectBtns = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

            <a href="https://github.com/Robn8/Thelonious" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center underline">THELONIOUS</h3>
                    <p className="text-gray-700 text-center">An app that helps musicians find chords to play based on the key that they are playing in. Developed using React Native in an ExpoGo enviroment.</p>
                </div>
            </a>

            <a href="https://ill-defined.com/" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center underline">ILL-DEFINED</h3>
                    <p className="text-gray-700 text-center">A web app built on React that stores and plays music. Users can log into the web app and upload their own music and albums to the site.</p>
                </div>
            </a>
            </div>
    )
}

export default ProjectBtns;