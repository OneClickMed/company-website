import React from 'react';
import FormLabel from './FormLabel';

interface HealthcareFacilitiesFormProps {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const HealthcareFacilitiesForm: React.FC<HealthcareFacilitiesFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <FormLabel htmlFor="name" required>
          Facility Name
        </FormLabel>
        <input
          type="text"
          name="name"
          value={formData.name || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue"
        />
      </div>
      <div>
        <FormLabel htmlFor="firstname" required>
          Contact Person
        </FormLabel>
        <div className="md:flex md:space-x-4 mt-6">
          <input
            type="text"
            name="firstname"
            placeholder="First Name"
            value={formData.firstname || ''}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue"
          />
          <input
            type="text"
            name="lastname"
            placeholder="Last Name"
            value={formData.lastname || ''}
            onChange={handleChange}
            className="mt-1 block w-full md:w-1/2 px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue mt-6 md:mt-0"
          />
        </div>
      </div>
      <div>
        <FormLabel htmlFor="email" required>
          Email
        </FormLabel>
        <input
          type="email"
          name="email"
          value={formData.email || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue"
        />
      </div>
      <div>
        <FormLabel htmlFor="message" required>
          Message
        </FormLabel>
        <textarea
          name="message"
          value={formData.message || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue"
          rows={4}
        ></textarea>
      </div>
    </>
  );
};

export default HealthcareFacilitiesForm;
