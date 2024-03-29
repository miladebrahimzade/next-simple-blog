import { MongoClient } from 'mongodb'

async function handler(req, res) {
  if (req.method === 'POST') {
    const { email, name, message } = req.body
    if (
      !email ||
      !email.includes('@') ||
      !name ||
      name.trim() === '' ||
      !message ||
      message.trim() === ''
    ) {
      res.status(422).json({ message: 'Invalid input' })
      return
    }

    // Store it in a database
    const newMessage = {
      email,
      name,
      message,
    }
    let client
    try {
      const username = process.env.DB_USER
      const password = process.env.DB_PASS
      client = await MongoClient.connect(
        `mongodb+srv://${username}:${password}@miladcluster.nm1ogwo.mongodb.net/nextjs-simple-blog?retryWrites=true&w=majority`
      )
    } catch (error) {
      res.status(500).json({ message: 'Could not connect to database' })
      return
    }

    const db = client.db()

    try {
      const result = await db.collection('messages').insertOne(newMessage)
      newMessage.id = result.insertedId
    } catch (error) {
      client.close()
      res.status(500).json({ message: 'Storing message failed!' })
      return
    }

    client.close()
    res
      .status(201)
      .json({ message: 'Successfully stored message!', message: newMessage })
  }
}

export default handler
