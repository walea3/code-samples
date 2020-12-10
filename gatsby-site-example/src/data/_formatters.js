exports.formatGuide = (data, getters) => {
  const authors = data.authors
    ? data.authors
        .map((authorName) => {
          const author = getters.getAuthorByName(authorName);

          if (!author) return null;

          return {
            ...author,
            avatar: getters.getImage(author.avatar),
          };
        })
        .filter((author) => !!author)
    : null;

  return {
    ...data,
    authors,
    heroImage: data.heroImage && {
      lg: getters.getImage(data.heroImage.lg),
      sm: getters.getImage(data.heroImage.sm),
    },
    sections: data.sections
      ? data.sections.map((section) => ({
          ...section,
          blocks: section.blocks.map((block) => {
            if (block.type === 'rulesBlock') {
              return {
                ...block,
                rules: block.rules.map((rule) => ({
                  ...rule,
                  image: getters.getImage(rule.image),
                })),
              };
            } else if (block.type === 'paragraphImageGrid') {
              return {
                ...block,
                paragraphImages: block.paragraphImages.map((paragraphImage) => ({
                  ...paragraphImage,
                  image: getters.getImage(paragraphImage.image),
                })),
              };
            } else if (block.type === 'imagesWithCaption') {
              return {
                ...block,
                images: block.images.map((image) => ({
                  ...image,
                  image: getters.getImage(image.image),
                })),
              };
            }

            return block;
          }),
        }))
      : null,
  };
};
