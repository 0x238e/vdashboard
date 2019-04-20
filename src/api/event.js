import axios from 'axios';

export async function getEventList() {
  const { data } = await axios.get('http://127.0.0.1:8000/mock/event');
  return data;
}