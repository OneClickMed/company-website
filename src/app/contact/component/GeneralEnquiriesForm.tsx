import React from 'react';
import FormLabel from './FormLabel';

interface GeneralEnquiriesFormProps {
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
}

const GeneralEnquiriesForm: React.FC<GeneralEnquiriesFormProps> = ({ formData, setFormData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <>
      <div>
        <FormLabel htmlFor="firstname" required>
          First Name
        </FormLabel>
        <input
          type="text"
          name="firstname"
          value={formData.firstname || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue"
        />
      </div>
      <div>
        <FormLabel htmlFor="lastname" required>
          Last Name
        </FormLabel>
        <input
          type="text"
          name="lastname"
          value={formData.lastname || ''}
          onChange={handleChange}
          className="mt-1 block w-full px-0 border-b border-gray-300 focus:outline-none focus:border-ocmblue"
        />
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

export default GeneralEnquiriesForm;
