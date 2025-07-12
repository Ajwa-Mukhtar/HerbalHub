import axios from 'axios';
import API_BASE_URL from './baseURL'; // baseURL.js se import

export const submitConsultation = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/api/User/consultation`,
      data,
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error('API Error:', error.response?.data || error.message);
    throw new Error(error.response?.data?.message || 'Failed to submit consultation. Please try again.');
  }
};
