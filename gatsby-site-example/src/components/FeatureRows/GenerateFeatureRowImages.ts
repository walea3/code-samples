import { StylingProps } from '@nel-ui/tooling-react';

export const generateFeatureRowImages = (
  images,
  uniqueClassName: string,
  classes: StylingProps
) =>
  images.map(({ media, ...item }, itemIndex) => {
    const imageClassName: string = `${uniqueClassName}-${itemIndex + 1}`;

    return {
      ...item,
      media: media.map((breakpointImg) => ({
        ...breakpointImg,
        className: classes[imageClassName],
      })),
    };
  });
