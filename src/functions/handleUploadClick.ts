export const handleUploadClick = (files: File[]) => {

  if(!files) return
  const formData = new FormData()
  files.forEach((file, i) => {
    formData.append('file-'+i, file, file.name)
  })
  // formData.append('file', fileList[0])
  console.log('formData', Array.from(formData.entries()))
  fetch('https://httpbin.org/post', {
    method: 'POST',
    body: formData
  })
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => console.log(err))
}