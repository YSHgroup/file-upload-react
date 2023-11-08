/** @format */

import React from 'react'
interface UploadFieldProps {
	files: File[]
}
const UploadField: React.FC<UploadFieldProps> = ({ files }) => {
	
	const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault()
		console.log('drop-->', )
		const files = e.dataTransfer.files
		if (files) {
			console.log(Array.from(files))
		}
	}

	return (
		<div className='files-field' onDrop={handleDrop} onDragOver={event => console.log('event-', event)}>
			{files.length? files.map((file, i) => (
				<div key={i} className="file">
					<span className="file-name">{file.name}</span>
					<span className="file-size">{file.size} bytes</span>
				</div>
			)): <span className="file-name">No files selected</span>}
		</div>
	)
}

export default UploadField
