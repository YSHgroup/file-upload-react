import axios from "axios"

export const handleUploadClick = (files: File[]) => {
  if(!files) return
  const formData = new FormData()
  files.forEach((file) => {
    formData.append('files', file, file.name)
  })
  // const data = {name: 'test'}
  console.log('formData', Array.from(formData.entries()))
  // fetch('http://localhost:5000/api/upload', {
  //   method: 'POST',credentials: "same-origin",
  //   // headers: {
  //   //   'Content-Type': 'multipart/form-data; boundary=<calculated when request is sent>',
  //   //   'Content-Length': '<calculated when request is sent>'
  //   // },
  //   body: JSON.stringify({ name: 'david' })
  // })
  const response = axios.post('http://localhost:5000/api/upload', formData, {
    // headers: {
    //   'Content-Type':'multipart/form-data; boundary=<calculated when request is sent>',
    //   // 'Content-Length': '<calculated when request is sent>'
    // },
    // data: JSON.stringify({ name: 'david' })
  })
  .then(res => res.data.json())
  .then(res => console.log(res))
  .catch(err => err.response.data.json())
  return response
}