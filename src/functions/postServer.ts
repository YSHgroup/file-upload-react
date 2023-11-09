import { ArgType } from '../types/index'


export const postServer = (data: ArgType): void => {
  const payload = JSON.stringify(data);
  fetch('http://localhost:5000/api/test', {
    method: 'POST',
    body: payload
  })
  .then(res => res.json())
  .catch(err => console.log(err));
}
