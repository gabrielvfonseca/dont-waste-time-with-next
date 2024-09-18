
// Config for the site, used in the layout and SEO components
export const siteConfig = {
  name: "gabrielvfonseca/dont-waste-time-with-next",
  url: "",
  ogImage: "https://boilerplate.gabfon.com/og.jpg",
  description:
    "An open-source project boilerplate to help you get started with Next.js, Authentication, Payments, Prisma, and more.",
  links: {
    twitter: "https://twitter.com/gabfon_",
    github: "https://github.com/gabrielvfonseca/dont-waste-time-with-next",
  },
};

// Export the type of the site config
export type SiteConfig = typeof siteConfig;