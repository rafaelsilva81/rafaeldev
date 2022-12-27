import { z } from 'zod';
import { NextApiRequest, NextApiResponse } from 'next';
import firestore from '../../lib/db';

const Project = z.object({
  name: z.string(),
  description: z.string(),
  link: z.string().optional(),
  img: z.string(),
});

const Projects = z.array(Project);

const getProjects = async (req: NextApiRequest, res: NextApiResponse) => {
  const projects = await firestore.collection('projects').get();

  // validate the data
  const data = projects.docs.map((doc) => doc.data());
  const validated = Projects.safeParse(data);
  if (!validated.success) {
    return res.status(500).json({ error: validated.error });
  }

  return res.status(200).json(validated.data);
};

export default getProjects;
