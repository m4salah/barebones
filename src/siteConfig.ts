import type {
  SiteConfiguration,
  NavigationLinks,
  SocialLinks,
} from "@/types.ts";

export const SITE: SiteConfiguration = {
  title: "Mohamed A. Salah",
  description:
    "This is my free space in the internet. I write about software engineering, and my thoughts and ideas.",
  url: "https://msalah.io",
  author: "Mohamed A. Salah",
  locale: "en-US",
};

export const NAV_LINKS: NavigationLinks = {
  about: {
    path: "/about",
    label: "About",
  },
  blog: {
    path: "/blog",
    label: "Blog",
  },
  contact: {
    path: "/contact",
    label: "Contact",
  },
};

export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:me@msalah.net",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/m4salah",
  },
  linkedin: {
    label: "LinkedIn",
    url: "https://linkedin.com/in/mohamed-a-salah",
  },
};
