import axios from 'axios';

const API_BASE_URL = 'https://localhost:7236/api/User';

export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/ContactUs`,
      contactData,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('Error submitting contact form:', error);
    throw error;
  }
};
