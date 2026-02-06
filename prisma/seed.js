import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
  await prisma.user.deleteMany()

  const users = []

  for (let i = 0; i < 50; i++) {
    const passwordHash = await bcrypt.hash('12345678', 10)

    users.push({
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: passwordHash,
    })
  }

  await prisma.user.createMany({
    data: users,
  })

  console.log('🔥 Banco populado com sucesso!')
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect())
