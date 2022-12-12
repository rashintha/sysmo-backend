import { PrismaClient } from '@prisma/client'
import { users } from './seeds/users.js'

const prisma = new PrismaClient()

async function seed() {
  // ---------------------- User Table ------------------------------------
  users.forEach(async (user, index) => {
    await prisma.user.upsert({
      where: { email: user.email },
      update: user,
      create: user
    })
  })
  console.log('Default users added.')
  // ---------------------- User Table ------------------------------------
}
seed().then(async () => {
  await prisma.$disconnect()
}).catch(async (e) => {
  console.error(e)
  await prisma.$disconnect()
  process.exit()
})
