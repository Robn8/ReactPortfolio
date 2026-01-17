const ProjectBtns = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">

            <a href="https://game-two.netlify.app/" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center">BREAKOUT</h3>
                    <p className="text-gray-700 text-center">A browser based classic Breakout game clone. Created with the Phaser.js game framework and deployed via Netlify.</p>
                </div>
            </a>

            <a href="https://ill-defined.com/" target="blank">
                <div className="bg-gray-300 p-6 rounded-2xl shadow-md">
                    <h3 className="text-2xl font-semibold mb-2 text-center">ILL-DEFINED</h3>
                    <p className="text-gray-700 text-center">A music web application built with React, allowing users to sign in, upload their own tracks/albums and stream them directly from the platform.</p>
                </div>
            </a>
            </div>
    )
}

export default ProjectBtns;