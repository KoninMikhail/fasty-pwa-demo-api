import prisma from '../client';

const createQueryHistoryItem = async (userId: string, query: string) => {
  const itExistQuery = await prisma.searchQuery.findFirst({
    where: {
      userId,
      query
    }
  });

  if (itExistQuery) {
    await prisma.searchQuery.update({
      where: {
        id: itExistQuery.id
      },
      data: {
        updatedAt: new Date()
      }
    });
    return;
  }

  await prisma.searchQuery.create({
    data: {
      userId,
      query
    }
  });
};

const getQueryHistoryByUserId = async (userId: string) => {
  const query = await prisma.searchQuery.findMany({
    where: {
      userId
    },
    orderBy: {
      updatedAt: 'desc'
    }
  });

  if (!query) {
    return [];
  }
  return query;
};

const removeQueryHistoryItemByUserId = async (userId: string, query: string) => {
  const userQueriesHistory = await prisma.searchQuery.findMany({
    where: {
      userId,
      query
    }
  });

  const deleteQueryId = userQueriesHistory.find((item) => item.query === query);

  if (deleteQueryId) {
    await prisma.searchQuery.delete({
      where: {
        id: deleteQueryId.id
      }
    });
  }
  return userQueriesHistory;
};

export default {
  createQueryHistoryItem,
  getQueryHistoryByUserId,
  removeQueryHistoryItemByUserId
};
