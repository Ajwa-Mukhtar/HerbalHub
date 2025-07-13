import axios from 'axios';

const API_BASE_URL = 'https://localhost:7236/api/User';

export const submitConsultation = async (data) => {
  try {
    const response = await axios.post(
      `${API_BASE_URL}/consultation`,
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
