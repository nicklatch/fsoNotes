import axios from 'axios';

const baseURl = 'http://localhost:3001/notes';

const getAll = async () => {
  const res = await axios.get(baseURl);
  return res.data;
};

export default { getAll };
