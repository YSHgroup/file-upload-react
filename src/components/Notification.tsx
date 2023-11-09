import * as type from '../types'


const Notification = ({
	message,
	closeNotification,
}: {
	message: type.MessageType
	closeNotification: () => void
}) => {
	return (
		<div className={`upload-result ${message.status === '400'? 'error': ''}`} onClick={closeNotification}>
			{message.data.res? message.data.res: message.data.err}
		</div>
	)
}

export default Notification