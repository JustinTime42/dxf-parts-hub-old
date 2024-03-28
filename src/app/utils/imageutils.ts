import fs from 'fs';

export interface GetImages {
  getImagesFromDirectory(directory: string): string[];
}

export const getImages: GetImages = {
  getImagesFromDirectory(directory: string): string[] {
    const imageFiles: string[] = fs.readdirSync(directory);
    return imageFiles.map((file: string) => `${directory}/${file}`);
  }
};