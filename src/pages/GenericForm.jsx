import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const GenericForm = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const navigate = useNavigate();

  // Form configuration - easily customizable for different topics
  const formConfig = {
    title: "Generic Data Collection Form",
    description: "Please fill out the following information. This form can be customized for any exam topic.",
    fields: [
      {
        name: 'projectTitle',
        label: 'Project Title',
        type: 'text',
        required: true,
        placeholder: 'Enter project title'
      },
      {
        name: 'category',
        label: 'Category',
        type: 'select',
        required: true,
        options: ['Category A', 'Category B', 'Category C', 'Other']
      },
      {
        name: 'description',
        label: 'Description',
        type: 'textarea',
        required: true,
        placeholder: 'Provide detailed description'
      },
      {
        name: 'priority',
        label: 'Priority Level',
        type: 'select',
        required: true,
        options: ['Low', 'Medium', 'High', 'Critical']
      },
      {
        name: 'startDate',
        label: 'Start Date',
        type: 'date',
        required: true
      },
      {
        name: 'budget',
        label: 'Budget',
        type: 'number',
        required: false,
        placeholder: 'Enter budget amount'
      },
      {
        name: 'tags',
        label: 'Tags',
        type: 'text',
        required: false,
        placeholder: 'Enter tags separated by commas'
      },
      {
        name: 'notes',
        label: 'Additional Notes',
        type: 'textarea',
        required: false,
        placeholder: 'Any additional information'
      }
    ]
  };

  const [formData, setFormData] = useState(
    formConfig.fields.reduce((acc, field) => {
      acc[field.name] = '';
      return acc;
    }, {})
  );

  const [submitted, setSubmitted] = useState(false);
  const [submittedData, setSubmittedData] = useState(null);

  // Redirect if not authenticated
  if (!isAuthenticated) {
    navigate('/login');
    return null;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Add timestamp and user info
    const submissionData = {
      ...formData,
      submittedAt: new Date().toISOString(),
      submittedBy: JSON.parse(localStorage.getItem('user'))?.email || 'Unknown',
    };

    // Store in localStorage
    const existingSubmissions = JSON.parse(localStorage.getItem('formSubmissions')) || [];
    existingSubmissions.push(submissionData);
    localStorage.setItem('formSubmissions', JSON.stringify(existingSubmissions));

    setSubmittedData(submissionData);
    setSubmitted(true);

    console.log('Form submitted successfully:', submissionData);
  };

  const renderField = (field) => {
    const baseClasses = "mt-1 block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500";

    switch (field.type) {
      case 'select':
        return (
          <select
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            className={baseClasses}
          >
            <option value="">Select {field.label}</option>
            {field.options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      case 'textarea':
        return (
          <textarea
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            placeholder={field.placeholder}
            rows={4}
            className={baseClasses}
          />
        );
      
      default:
        return (
          <input
            type={field.type}
            name={field.name}
            value={formData[field.name]}
            onChange={handleChange}
            required={field.required}
            placeholder={field.placeholder}
            className={baseClasses}
          />
        );
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 dark:from-gray-900 dark:to-black py-12 transition-colors duration-300">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
            <div className="text-center mb-8">
              <div className="text-green-500 text-6xl mb-4">✓</div>
              <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Submission Successful!
              </h1>
              <p className="text-gray-600 dark:text-gray-300">
                Your form has been submitted successfully. Here are the details:
              </p>
            </div>

            <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Submitted Details:
              </h2>
              <div className="space-y-3">
                {Object.entries(submittedData).map(([key, value]) => {
                  if (key === 'submittedAt' || key === 'submittedBy') return null;
                  const field = formConfig.fields.find(f => f.name === key);
                  if (!field || !value) return null;
                  
                  return (
                    <div key={key} className="flex justify-between">
                      <span className="font-medium text-gray-700 dark:text-gray-300">
                        {field.label}:
                      </span>
                      <span className="text-gray-900 dark:text-white">
                        {value}
                      </span>
                    </div>
                  );
                })}
                <div className="flex justify-between border-t pt-3 mt-3">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Submitted By:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {submittedData.submittedBy}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="font-medium text-gray-700 dark:text-gray-300">
                    Submitted At:
                  </span>
                  <span className="text-gray-900 dark:text-white">
                    {new Date(submittedData.submittedAt).toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 text-center">
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData(formConfig.fields.reduce((acc, field) => {
                    acc[field.name] = '';
                    return acc;
                  }, {}));
                }}
                className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-2 rounded-md font-medium transition-colors mr-4"
              >
                Submit Another
              </button>
              <button
                onClick={() => navigate('/')}
                className="bg-gray-500 hover:bg-gray-600 text-white px-6 py-2 rounded-md font-medium transition-colors"
              >
                Go Home
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-black py-12 transition-colors duration-300">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 p-10 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700">
          <div className="mb-10 text-center">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              {formConfig.title}
            </h1>
            <div className="w-24 h-1 bg-teal-600 mx-auto mb-4"></div>
            <p className="text-gray-600 dark:text-gray-300 text-lg">
              {formConfig.description}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {formConfig.fields.map((field) => (
              <div key={field.name}>
                <label
                  htmlFor={field.name}
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  {field.label}
                  {field.required && <span className="text-red-500 ml-1">*</span>}
                </label>
                {renderField(field)}
              </div>
            ))}

            <div className="pt-6">
              <button
                type="submit"
                className="w-full bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-teal-500 focus:ring-offset-2"
              >
                Submit Form
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default GenericForm;