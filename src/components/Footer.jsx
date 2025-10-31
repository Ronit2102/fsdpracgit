const Footer = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 text-teal-600 dark:text-teal-400">ExamTemplate</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              A flexible template for any exam topic or case study project.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Home</a></li>
              <li><a href="/about" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">About</a></li>
              <li><a href="/login" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Login</a></li>
              <li><a href="/register" className="text-gray-600 dark:text-gray-300 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">Register</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Contact</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              Email: info@examtemplate.com<br />
              Phone: +1 (555) 123-4567
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-300 dark:border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-500 dark:text-gray-400">
            © 2024 ExamTemplate. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;