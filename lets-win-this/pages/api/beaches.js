// pages/api/beaches.js

import { PrismaClient } from '@prisma/client';
import axios from 'axios';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      const beaches = await prisma.beach.findMany();
      const enhancedBeaches = await Promise.all(
        beaches.map(async (beach) => {
          if (beach.apiUrl) {
            try {
              const response = await axios.get(beach.apiUrl);
              const { additionalInfo } = response.data;
              return { ...beach, additionalInfo };
            } catch (error) {
              console.error('Error fetching additional info:', error);
              return beach;
            }
          } else {
            return beach;
          }
        })
      );
      res.status(200).json(enhancedBeaches);
    } catch (error) {
      console.error('Error fetching beaches:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
