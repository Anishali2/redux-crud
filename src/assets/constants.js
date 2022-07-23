import {
  BookmarkAltIcon,
  CalendarIcon,
  CursorClickIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
} from "@heroicons/react/outline";
import image from "./user.jpg"
export const initialValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "user",
  profileImage: "",
};
export const adminValues = {
  name: "",
  phone: "",
  email: "",
  password: "",
  confirmPassword: "",
  role: "admin",
  profileImage: "",
};

export const userLoginValues = {
  email: "",
  password: "",
};
export const user = {
  name: "Tom Cook",
  email: "tom@example.com",
  imageUrl:image,
};
export const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Sign out", href: "#" },
];
export const solutions = [
  {
    name: "Home",
    description: "Landing page of Cloud-Store",
    href: "/",
    icon: CursorClickIcon,
  },
  {
    name: "FAQ",
    description: "Get Answers to your questions",
    href: "/faq",
    icon: CursorClickIcon,
  },
  {
    name: "Favorurite",
    description: "Check your favoruite Items",
    href: "/favoruite",
    icon: ShieldCheckIcon,
  },
  {
    name: "Report",
    description: "Report Spam / Hackers ",
    href: "#",
    icon: RefreshIcon,
  },
  {
    name: "Error",
    description: "Server Not Working ",
    href: "*",
    icon: ViewGridIcon,
  },
];
export const navigation = [
  { name: "Dashboard", href: "#", current: false },
  { name: "Products", href: "#", current: true },
];
export const resources = [
  {
    name: "Help Center",
    description:
      "Get all of your questions answered in our forums or contact support.",
    href: "#",
    icon: SupportIcon,
  },
  {
    name: "Guides",
    description:
      "Learn how to maximize our platform to get the most out of it.",
    href: "#",
    icon: BookmarkAltIcon,
  },
  {
    name: "Events",
    description:
      "See what meet-ups and other events we might be planning near you.",
    href: "#",
    icon: CalendarIcon,
  },
  {
    name: "Security",
    description: "Understand how we take your privacy seriously.",
    href: "#",
    icon: ShieldCheckIcon,
  },
];
export const recentPosts = [
  { id: 1, name: "Men", href: "#" },
  { id: 2, name: "Women", href: "#" },
  { id: 3, name: "Bags", href: "#" },
  { id: 3, name: "Kids", href: "#" },
];

export const subCategories = [
  { name: "Totes", href: "#" },
  { name: "Backpacks", href: "#" },
  { name: "Travel Bags", href: "#" },
  { name: "Hip Bags", href: "#" },
  { name: "Laptop Sleeves", href: "#" },
];
export const filters = [
  {
    id: "category",
    name: "Category",
  },
];
