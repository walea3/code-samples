import { ensureArray } from '@nel-ui/js-helpers';

export const toggleAriaHiddenById = (toggle: string | string[], toggleHide: boolean) => {
  const itemsToToggle = ensureArray(toggle);

  itemsToToggle.forEach((id) => {
    const node = document.getElementById(id);

    if (node) {
      node.setAttribute('aria-hidden', String(toggleHide));
    }
  });
};
