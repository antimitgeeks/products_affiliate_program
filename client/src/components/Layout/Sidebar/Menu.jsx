import { FiAirplay, FiBarChart, FiBox, FiCalendar, FiCheckSquare, FiClock, FiCloud, FiCommand, FiEdit, FiFileText, FiFilm, FiFolderPlus, FiGitPullRequest, FiHeart, FiHelpCircle, FiHome, FiImage, FiLayers, FiList, FiMail, FiMap, FiMessageCircle, FiMonitor, FiPackage, FiRadio, FiSearch, FiServer, FiShoppingBag, FiSunrise, FiUsers, FiZap } from 'react-icons/fi';
import { SiSimpleanalytics } from "react-icons/si";
export const MENU = [

  {
    title: '',
    menu: [
      {
        title: 'Dashboard',
        icon: <FiHome />,
        url: `/dashboard`,
        bookmark: true
      },
      {
        title: 'Affiliate Links',
        icon: <FiGitPullRequest />,
        url: `/dashboard/affiliate-links`,
        bookmark: true
      },
      {
        title: 'Invoices',
        icon: <FiFileText />,
        url: `/dashboard/invoices`,
      },
      {
        title: 'Analytics',
        icon: <SiSimpleanalytics />,
        url: `/dashboard/analytics`,
        bookmark: true
      }
    ],
  },
];