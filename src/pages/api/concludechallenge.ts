import { NowRequest, NowResponse } from '@vercel/node';
import prisma from '../../lib/prisma';

export default async (request: NowRequest, response: NowResponse) => {
  const {
    level,
    experience,
    challengesCompleted,
    accessToken,
    amount,
  } = request.body;

  const user = await prisma.session.findUnique({
    where: { accessToken },
  });

  const userXp = await prisma.user.findUnique({
    where: { id: user.userId },
  });

  const totalExperience = Number(amount) + Number(userXp.totalExperience);

  const updatedUser = await prisma.user.update({
    data: {
      level: Number(level),
      experience: Number(experience),
      challenges: Number(challengesCompleted),
      totalExperience,
    },
    where: {
      id: user.userId,
    },
  });

  return response.json({ updatedUser });
};
