import { Link } from 'react-router-dom';

const Home = () => {
    // These values can be easily changed for different exam topics
    const projectConfig = {
        title: "ExamTemplate Project",
        subtitle: "Adaptable Solution for Any Case Study",
        description: "This template can be customized for any exam topic or case study. Simply update the content to match your specific requirements.",
        features: [
            {
                title: "Flexible Design",
                description: "Easily adaptable interface that works for any topic or case study requirement.",
                icon: "🎨"
            },
            {
                title: "User Management",
                description: "Complete authentication system with role-based access and secure login functionality.",
                icon: "👥"
            },
            {
                title: "Data Storage",
                description: "Local storage implementation for data persistence without backend dependencies.",
                icon: "💾"
            },
            {
                title: "Dark/Light Mode",
                description: "Modern theme switching with Redux state management and persistent preferences.",
                icon: "🌓"
            }
        ]
    };

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-teal-600 via-emerald-700 to-green-800 dark:from-gray-800 dark:via-gray-900 dark:to-black text-white py-24">
                <div className="absolute inset-0 bg-black opacity-10"></div>
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
                        {projectConfig.title}
                    </h1>
                    <p className="text-xl md:text-2xl mb-6 max-w-4xl mx-auto font-light">
                        {projectConfig.subtitle}
                    </p>
                    <p className="text-lg mb-10 max-w-3xl mx-auto opacity-90 leading-relaxed">
                        {projectConfig.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/login"
                            className="bg-white text-teal-700 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-200 shadow-lg"
                        >
                            Get Started
                        </Link>
                        <Link
                            to="/about"
                            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-teal-700 transform hover:scale-105 transition-all duration-200"
                        >
                            Learn More
                        </Link>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
                            Key Features
                        </h2>
                        <div className="w-24 h-1 bg-teal-600 mx-auto mb-6"></div>
                        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
                            Everything you need for a comprehensive exam project template
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projectConfig.features.map((feature, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-gray-700 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-600"
                            >
                                <div className="text-5xl mb-6">
                                    {feature.icon}
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                    {feature.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Home;