/** @format */

import React, { useState } from 'react'
import { handleUploadClick } from '../functions'

const UploadField = () => {
	const [dragState, setDragState] = useState(false)
	const [fileList, setFileList] = useState<FileList | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files
    if (files) {
      setFileList(files)
    }
  }


	const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		if (e.type === 'dragenter' || e.type === 'dragover') {
			setDragState(true)
		} else if (e.type === 'dragleave') {
			setDragState(false)
		}
	}
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		e.stopPropagation()
		console.log('drop-->')
		setDragState(false)
		const files = e.dataTransfer.files
		if (files) {
			console.log('dropped-->', Array.from(files))
		}
	}
  const files = fileList? [...fileList] : []

	return (
		<div className="card">
			<input
				type="file"
				name="file-upload"
				id="file-upload"
				onChange={handleInputChange}
				multiple
			/>
			<label htmlFor="file-upload">
				<div
					className={'files-field' + (dragState ? ' drag-active' : '')}
					onDrop={handleDrop}
					onDragLeave={handleDrag}
					onDragOver={handleDrag}
				>
					{files.length ? (
						files.map((file, i) => (
							<div key={i} className="file">
								<span className="file-name">{file.name}</span>
								<span className="file-size">{file.size} bytes</span>
							</div>
						))
					) : (
						<span className="file-name">No files selected</span>
					)}
				</div>
			</label>
			<button onClick={() =>handleUploadClick(files)}>upload</button>
		</div>
	)
}

export default UploadField
