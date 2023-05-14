import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { name, location, description, imageUrl, apiURL } = req.body; // Assuming request payload contains the beach data

      const newBeach = await prisma.beach.create({
        data: {
          name,
          location,
          description,
          imageUrl,
          apiURL
        },
      });

      console.log('New beach created:', newBeach);
      res.status(200).json({ message: 'Beach added successfully' });
    } catch (error) {
      console.error('Error adding beach:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
