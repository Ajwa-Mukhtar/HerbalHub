import axios from 'axios';
import API_BASE_URL from './baseURL'; // yahan import karo

export const submitContactForm = async (contactData) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/User/ContactUs`,
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
