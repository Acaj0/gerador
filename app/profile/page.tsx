import { NextApiRequest, NextApiResponse } from 'next'
import { getServerSession } from "next-auth/next"
import { PrismaClient } from '@prisma/client'
import authOptions from '@/pages/api/auth/[...nextauth]'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' })
  }

  const session = await getServerSession(req, res, authOptions)

  if (!session || !session.user?.email) {
    return res.status(401).json({ message: 'Não autorizado' })
  }

  try {
    const { companyName, description, niche } = req.body

    const updatedUser = await prisma.user.update({
      where: { email: session.user.email },
      data: {
        companyName,
        description,
        niche,
      },
    })

    res.status(200).json({ message: 'Perfil atualizado com sucesso', user: updatedUser })
  } catch (error) {
    console.error('Erro ao atualizar perfil:', error)
    res.status(500).json({ message: 'Erro interno do servidor' })
  } finally {
    await prisma.$disconnect()
  }
}

