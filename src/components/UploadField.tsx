/** @format */

import React, {useState} from 'react'
interface UploadFieldProps {
	files: File[]
}
const UploadField: React.FC<UploadFieldProps> = ({ files }) => {
	const [dragState, setDragState] = useState(false)
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
		// e.stopPropagation()
		console.log('drop-->', )
		setDragState(false)
		const files = e.dataTransfer.files
		if (files) {
			console.log('dropped-->', Array.from(files))
		}
	}

	return (
		<div className={'files-field' + (dragState? ' drag-active': '')} onDrop={handleDrop} onDragLeave={handleDrag} onDragOver={handleDrag}>
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
