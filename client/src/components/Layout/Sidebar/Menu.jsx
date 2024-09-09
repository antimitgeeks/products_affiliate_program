import { FiAirplay, FiBarChart, FiBox, FiCalendar, FiCheckSquare, FiClock, FiCloud, FiCommand, FiEdit, FiFileText, FiFilm, FiFolderPlus, FiGitPullRequest, FiHeart, FiHelpCircle, FiHome, FiImage, FiLayers, FiList, FiMail, FiMap, FiMessageCircle, FiMonitor, FiPackage, FiRadio, FiSearch, FiServer, FiShoppingBag, FiSunrise, FiUsers, FiZap } from 'react-icons/fi';
export const MENU = [
  {
    title: 'General',
    menu: [
      {
        title: 'Dashboards',
        icon: <FiHome />,
        menu: [
          {
            title: 'Default',
            url: `${process.env.PUBLIC_URL}/dashboard/`,
          },
          {
            title: 'Ecommerce',
            url: `${process.env.PUBLIC_URL}/dashboards/ecommerce`,
          },
        ],
      },
      {
        title: 'Widgets',
        icon: <FiAirplay />,
        menu: [
          {
            title: 'General',
            url: `${process.env.PUBLIC_URL}/widgets/general-widget`,
          },
          {
            title: 'Chart',
            url: `${process.env.PUBLIC_URL}/widgets/chart-widget`,
          },
        ],
      },
    ],
  },
  {
    title: 'Applications',
    menu: [
      {
        title: 'Project',
        icon: <FiBox />,
        menu: [
          {
            title: 'Project List',
            url: `${process.env.PUBLIC_URL}/project/project-list`,
          },
          {
            title: 'Create New',
            url: `${process.env.PUBLIC_URL}/project/create-project`,
          },
        ],
      },
      {
        title: 'File Manager',
        icon: <FiGitPullRequest />,
        url: `${process.env.PUBLIC_URL}/file-manager`,
      },
      {
        title: 'Contacts',
        icon: <FiList />,
        url: `${process.env.PUBLIC_URL}/contacts`,
        bookmark: true
      }
    ],
  },
];
