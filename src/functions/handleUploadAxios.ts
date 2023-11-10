import axios from "axios"

export const handleUploadClick = (files: File[]) => {
  if (!files) return
  const formData = new FormData()
  files.forEach((file) => {
    formData.append('files', file, file.name)
  })
  
  console.log('formData:', Array.from(formData.entries()))
  const response = axios.post('http://localhost:5000/api/upload', formData)
    .then(res => res)
    .catch(err => err.response)
  console.log('response-->', response)
  return response
}