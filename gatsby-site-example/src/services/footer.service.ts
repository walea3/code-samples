const currentYear: number = new Date().getFullYear();

const footerData = (siteId, versionNo) => ({
  footerAction: {
    value: 'Back to top',
    href: siteId,
  },
  items: [
    {
      value: `© ${currentYear} Noop`,
    },
    {
      value: `Alpha release ${versionNo}`,
    },
  ],
});

export default footerData;
