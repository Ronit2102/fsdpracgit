const About = () => {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 py-16 transition-colors duration-300">
            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
                        About ExamTemplate
                    </h1>
                    <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
                    <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                        A comprehensive template designed for exam case studies and projects
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16">
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                Purpose
                            </h2>
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                This template was created to provide a solid foundation for any exam project or case study.
                                It includes all the essential features you might need while remaining flexible enough to
                                adapt to different topics and requirements.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                                How to Customize
                            </h2>
                            <ul className="text-gray-600 dark:text-gray-300 space-y-3 text-lg">
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-3">•</span>
                                    Update the project title and description in the Home component
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-3">•</span>
                                    Modify the feature cards to match your topic
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-3">•</span>
                                    Customize the form fields for your specific use case
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-3">•</span>
                                    Change colors and styling to match your theme
                                </li>
                                <li className="flex items-start">
                                    <span className="text-teal-600 mr-3">•</span>
                                    Add or remove user roles as needed
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">
                            Technical Features
                        </h2>
                        <div className="space-y-6">
                            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-blue-100 dark:border-gray-600">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Frontend</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    React, Vite, Tailwind CSS, React Router
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-green-100 dark:border-gray-600">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">State Management</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Redux Toolkit, Context API, React Hooks
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-purple-100 dark:border-gray-600">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Authentication</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    JWT simulation with localStorage
                                </p>
                            </div>

                            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-gray-800 dark:to-gray-700 p-6 rounded-xl border border-orange-100 dark:border-gray-600">
                                <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">Storage</h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Browser localStorage for data persistence
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="bg-gradient-to-r from-teal-600 to-emerald-700 text-white p-10 rounded-2xl shadow-2xl">
                    <h2 className="text-3xl font-bold mb-6">
                        Getting Started
                    </h2>
                    <p className="text-teal-100 mb-6 text-lg">
                        To adapt this template for your specific exam topic:
                    </p>
                    <ol className="text-teal-100 space-y-3 list-decimal list-inside text-lg">
                        <li>Update the project configuration in the Home component</li>
                        <li>Modify the form fields in the GenericForm component</li>
                        <li>Customize the styling and colors to match your theme</li>
                        <li>Add any additional pages or features as needed</li>
                        <li>Test the authentication and form submission flows</li>
                    </ol>
                </div>
            </div>
        </div>
    );
};

export default About;