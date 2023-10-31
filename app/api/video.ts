// pages/api/videos.ts

import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';

type Data = {
  m3u8Files: string[];
};

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  const videosDir = path.join(process.cwd(), 'Videos');
  let m3u8Files: string[] = [];

  // 获取目录下的所有文件夹
  try {
    const folders = fs.readdirSync(videosDir, { withFileTypes: true })
                      .filter(dirent => dirent.isDirectory())
                      .map(dirent => dirent.name);

    // 遍历每个文件夹寻找 m3u8 文件
    folders.forEach(folder => {
      const folderPath = path.join(videosDir, folder);
      const filesInFolder = fs.readdirSync(folderPath);

      filesInFolder.forEach(file => {
        if (file.endsWith('.m3u8')) {
          // 生成相对于 public 目录的路径
          m3u8Files.push(`/Videos/${folder}/${file}`);
        }
      });
    });

    res.status(200).json({ m3u8Files });
  } catch (error) {
    res.status(500).json({ m3u8Files: [] });
  }
}
