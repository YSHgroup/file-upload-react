/** @format */

import React, { useEffect, useState } from 'react'
import { handleUploadClick } from '../axioses'
import Notification from './Notification'
import * as type from '../types'

const UploadField = () => {
	const [dragState, setDragState] = useState(false)
	const [fileList, setFileList] = useState<FileList | null>(null)
	const [uploadResult, setUploadResult] = useState<type.MessageType>({data: {res: ''}, status: ''})

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
		setDragState(false)
		const files = e.dataTransfer.files
		if (files) {
			console.log('dropped-->', Array.from(files))
			setFileList(files)
		}
	}

	const upload = async () => {
		const res = await handleUploadClick(files)
		if (res !== undefined) {
			setUploadResult({data: res.data, status: res.status.toString()})
		}
	}

	const clickNotification = () => {
		setUploadResult({data: {}, status: ''})
		setFileList(null)
	}

	useEffect(() => {
		console.log('uploaded-result-->', uploadResult);
		
	},[uploadResult])
	
	const files = fileList ? [...fileList] : []

	return (
		<div className="card">
			{uploadResult.data.err || uploadResult.data.res? (
				<Notification
					message={uploadResult}
					closeNotification={clickNotification}
				/>
			) : (
				''
			)}
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
			<button onClick={upload}>upload</button>
		</div>
	)
}

export default UploadField
