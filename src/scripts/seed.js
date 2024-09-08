import { db } from '@vercel/postgres'

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS users (
                id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
                name VARCHAR(255),
                surname VARCHAR(255) NOT NULL,
                fullname VARCHAR(255) NOT NULL,
                username VARCHAR(255) NOT NULL UNIQUE,
                email TEXT NOT NULL UNIQUE,
                password TEXT NOT NULL
            );
        `

    console.log(`Created "users" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Erro seeding users: ', error)
    throw error
  }
}

seedUsers(db)
