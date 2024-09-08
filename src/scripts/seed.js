import { db } from '@vercel/postgres'

async function seedUsers(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          surname VARCHAR(255) NOT NULL,
          username VARCHAR(255) NOT NULL UNIQUE,
          password TEXT NOT NULL,
          email TEXT NOT NULL UNIQUE
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

async function seedRMsHistory(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
        CREATE TABLE rms_history (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          user_id UUID NOT NULL,
          exercise_name TEXT NOT NULL,
          exercise_rm DECIMAL(5, 2) NOT NULL,
          date_rm DATE NOT NULL,
          FOREIGN KEY (user_id) REFERENCES users(id)
        );
      `

    console.log(`Created "rms_history" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Erro seeding rms_history: ', error)
    throw error
  }
}

async function seedRoutines(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS routines (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        total_volume DECIMAL(10, 2) NOT NULL,
        total_days INTEGER NOT NULL,
        start_date DATE,
        end_date DATE,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `

    console.log(`Created "routines" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding routines: ', error)
    throw error
  }
}

async function seedWorkouts(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS workouts (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        routine_id UUID NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        total_volume DECIMAL(10, 2) NOT NULL,
        date DATE NOT NULL,
        FOREIGN KEY (routine_id) REFERENCES routines(id)
      );
    `

    console.log(`Created "workouts" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding workouts: ', error)
    throw error
  }
}

async function seedExercises(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS exercises (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        workout_id UUID NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        total_volume DECIMAL(10, 2) NOT NULL,
        e1rm DECIMAL(5, 2) NOT NULL,
        current_rm DECIMAL(5, 2) NOT NULL,
        FOREIGN KEY (workout_id) REFERENCES workouts(id)
      );
    `

    console.log(`Created "exercises" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding exercises: ', error)
    throw error
  }
}

async function seedSets(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS sets (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        exercise_id UUID NOT NULL,
        reps INTEGER NOT NULL,
        weight DECIMAL(5, 2) NOT NULL,
        rpe INTEGER,
        FOREIGN KEY (exercise_id) REFERENCES exercises(id)
      );
    `

    console.log(`Created "sets" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding sets: ', error)
    throw error
  }
}

async function seedRoutinesTemplates(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS routines_templates (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        user_id UUID NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        FOREIGN KEY (user_id) REFERENCES users(id)
      );
    `

    console.log(`Created "routines_templates" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding routines_templates: ', error)
    throw error
  }
}

async function seedWorkoutsTemplates(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS workouts_templates (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        routine_temp_id UUID NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        FOREIGN KEY (routine_temp_id) REFERENCES routines_templates(id)
      );
    `

    console.log(`Created "workouts_templates" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding workouts_templates: ', error)
    throw error
  }
}

async function seedExercisesTemplates(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`

    const createTable = await client.sql`
      CREATE TABLE IF NOT EXISTS exercises_templates (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        workout_temp_id UUID NOT NULL,
        name TEXT NOT NULL,
        description TEXT,
        current_rm DECIMAL(5, 2) NOT NULL,
        FOREIGN KEY (workout_temp_id) REFERENCES workouts_templates(id)
      );
    `

    console.log(`Created "exercises_templates" table`)

    return {
      createTable
    }
  } catch (error) {
    console.log('Error seeding exercises_templates: ', error)
    throw error
  }
}

async function seedDatabase(client) {
  try {
    await seedUsers(client)
    await seedRMsHistory(client)
    await seedRoutines(client)
    await seedWorkouts(client)
    await seedExercises(client)
    await seedSets(client)
    await seedRoutinesTemplates(client)
    await seedWorkoutsTemplates(client)
    await seedExercisesTemplates(client)
    console.log('All tables created successfully')
  } catch (error) {
    console.error('Error seeding the database: ', error)
  }
}

await seedDatabase(db)
