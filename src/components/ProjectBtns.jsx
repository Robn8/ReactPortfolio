const ProjectBtns = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 ">

            <a href="https://game-two.netlify.app/" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center">BREAKOUT</h3>
                    <p className="text-gray-700 text-center">A browser-based clone of the classic Breakout game, built with JavaScript, Phaser.js and deployed via Netlify.</p>
                </div>
            </a>

            <a href="https://promise2papa.netlify.app/" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center">Promise2Papa</h3>
                    <p className="text-gray-700 text-center">A nonprofit web platform designed to help caregivers and veterans access medical support and resources.</p>
                </div>
            </a>

            <a href="https://ill-defined.com/" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center">ILL-DEFINED</h3>
                    <p className="text-gray-700 text-center">A full-stack music streaming platform where users can upload and stream tracks, built with React and AWS.</p>
                </div>
            </a>
            </div>
    )
}

export default ProjectBtns;