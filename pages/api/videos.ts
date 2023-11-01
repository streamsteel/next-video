// pages/api/videos.ts
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  m3u8Files: string[];
  error?: string;
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  // ../Videos
  const videosDir = path.join(process.cwd(), '..', 'Videos');
  console.log(videosDir);
  let m3u8Files: string[] = [];

  try {
    const folders = fs.readdirSync(videosDir, { withFileTypes: true })
                      .filter(dirent => dirent.isDirectory())
                      .map(dirent => dirent.name);

    folders.forEach(folder => {
      const folderPath = path.join(videosDir, folder);
      const filesInFolder = fs.readdirSync(folderPath);
      console.log(filesInFolder);
      console.log(folderPath);

      filesInFolder.forEach(file => {
        if (file.endsWith('.m3u8')) {
          m3u8Files.push(`/Videos/${folder}/${file}`);
        }
      });
    });

    res.status(200).json({ m3u8Files });
  } catch (error) {
    res.status(500).json({ m3u8Files: [], error: 'Internal Server Error' });
  }
}
