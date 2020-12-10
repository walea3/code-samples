import smoothscroll from 'smoothscroll-polyfill';

export function scrollToId(event): void {
  event.preventDefault();

  const { currentTarget } = event;

  const anchorId: string = !!currentTarget && currentTarget.href;
  const id: string = anchorId && anchorId.split('#').pop();

  const queryElement = document.getElementById(id);

  if (queryElement) {
    smoothscroll.polyfill();

    queryElement.scrollIntoView({
      behavior: 'smooth',
    });
  }
}
