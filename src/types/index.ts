interface ArgType {
  name: string
  age: number
}

interface MessageData {
	res?: string
	err?: string
}
interface MessageType {
	data: MessageData
	status: string
}

export type { ArgType , MessageData , MessageType  }
