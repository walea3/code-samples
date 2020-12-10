import { useFeatureAnimatedStyles } from '../HomePage/FeatureRowImage';

export const useFeatureRows = (styleId: string, data) => {
  const featureImages = [];
  const featureStyles = {};

  for (let itemIndex = 0; itemIndex < data.length; itemIndex++) {
    const { media, ...item } = data[itemIndex];

    const { images: cleanImages, styles: animatedStyles } = useFeatureAnimatedStyles(
      media
    );

    featureStyles[`${styleId}-${itemIndex + 1}`] = animatedStyles;

    featureImages.push({
      ...item,
      media: cleanImages,
    });
  }

  return {
    images: featureImages,
    styles: {
      [styleId]: {},
      ...featureStyles,
    },
  };
};
