import axios from 'axios';

export default async function getProject(id: string) {
  try {
    const response = await axios.get(`http://localhost:3000/api/projects/${id}`, {
      headers: {
        'Cache-Control': 'no-cache'
      }
    });

    return response.data;
  } catch (error) {
    throw new Error('Failed to fetch data');
  }
}
