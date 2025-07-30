export const navItems = [
  { path: "/", label: "Home" },
  { path: "/service", label: "Service" },
  { path: "/portfolio", label: "Portfolio" },
  { path: "/about", label: "About" },
  { path: "/gigs", label: "Gigs" },
  // { path: "/project", label: "Project" },
  { path: "/blog", label: "Blog" },
  { path: "/contact", label: "Contact" },
];

// export const adminNavItems = [
//   { path: "/admin-dashboard/home", label: "Home" },
//   { path: "/admin-dashboard/service", label: "Service" },
//   { path: "/admin-dashboard/portfolio", label: "Portfolio" },
//   { path: "/about", label: "About" },
//   { path: "/admin-dashboard/gigs", label: "Gigs" },
//   { path: "/admin-dashboard/blog", label: "Blog" },
//   { path: "/admin-dashboard/contact", label: "Contact" },
// ];

export const adminNavItems = [
  { path: "/admin-dashboard/home", label: "Home" },
  { path: "/admin-dashboard/all-admin", label: "Admin" },
  { path: "/admin-dashboard/admin-resume", label: "Resume" },
  {
    label: "Service Manager",
    children: [
      {
        path: "/admin-dashboard/add-service",
        label: "Add Service",
      },
      { path: "/admin-dashboard/admin-service", label: "Service" },
    ],
  },
  {
    label: "Portfolio Manager",
    children: [
      {
        path: "/admin-dashboard/add-portfolio",
        label: "Add Portfolio",
      },
      { path: "/admin-dashboard/admin-portfolio", label: "Portfolio" },
    ],
  },
  {
    label: "Gigs Manager",
    children: [
      { path: "/admin-dashboard/add-gigs", label: "Add Gig" },
      { path: "/admin-dashboard/admin-gigs", label: "Gigs" },
    ],
  },
  {
    label: "Blog Manager",
    children: [
      { path: "/admin-dashboard/add-blog", label: "Add Blog" },
      { path: "/admin-dashboard/admin-blog", label: "Blog" },
    ],
  },
  { path: "/admin-dashboard/admin-about", label: "About" },
  { path: "/admin-dashboard/admin-contact", label: "Contact" },
];
