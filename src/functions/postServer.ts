import { ArgType } from '../types/index'


export const postServer = async (data: ArgType) => {
  const payload = JSON.stringify(data);
  console.log('post--', payload)
  const response = await fetch('http://localhost:5000/api/test', {
    method: 'POST',
    body: payload,
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(res => res.json())
  .then(data => data)
  .catch(err => console.log(err));
  console.log('response-->', response)
}
