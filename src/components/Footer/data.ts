import {
  FaYoutube,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaFacebook,
} from "react-icons/fa";

type Type = {
  title: string;
  link: string;
};

export const menu: Type[] = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Available Programs",
    link: "#programs",
  },
  {
    title: "Instructors",
    link: "#instructors",
  },
  {
    title: "Testimonials",
    link: "#testimonials",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact US",
    link: "/contact",
  },
];

export const support: Type[] = [
  {
    title: "Help Center",
    link: "/",
  },
  {
    title: "Terms of Service",
    link: "/",
  },
  {
    title: "Status",
    link: "/",
  },
  {
    title: "Privacy Policy",
    link: "/",
  },
  {
    title: "Legal",
    link: "/",
  },
];

export const icons: {}[] = [
  {
    title: FaFacebook,
    link: "https://www.facebook.com/panaverse.dao/",
  },
  {
    title: FaYoutube,
    link: "https://www.youtube.com/@panaverse",
  },
  {
    title: FaTwitter,
    link: "https://twitter.com/Panaverse_edu",
  },
  {
    title: FaLinkedin,
    link: "https://www.linkedin.com/company/panaverse",
  },
  {
    title: FaGithub,
    link: "https://github.com/panaverse",
  },
];
