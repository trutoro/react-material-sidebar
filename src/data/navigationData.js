import {
  Dashboard,
  PeopleAlt,
  MenuBook,
  ImportContacts,
  PostAdd,
} from "@material-ui/icons";

export const mainNavigation = [
  {
    name: "Dashboard",
    icon: Dashboard,
    url: `/dashboard`,
  },
  {
    name: "Posts",
    icon: ImportContacts,
    url: `/posts`,
    navigationData: [
      {
        name: "All Posts",
        icon: MenuBook,
        url: `/posts/all`,
      },
      {
        name: "Editor",
        icon: PostAdd,
        url: `/posts/editor`,
      },
    ],
  },
  {
    name: "Users",
    icon: PeopleAlt,
    url: `/users`,
  },
];
