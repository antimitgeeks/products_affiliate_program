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
        title: 'Kanban Board',
        icon: <FiMonitor />,
        url: `${process.env.PUBLIC_URL}/kanban-board`,
      },
      {
        title: 'Ecommerce',
        icon: <FiShoppingBag />,

        menu: [
          {
            title: 'Product',
            url: `${process.env.PUBLIC_URL}/ecommerce/product`,
          },
          {
            title: 'Product Page',
            url: `${process.env.PUBLIC_URL}/ecommerce/product-page`,
          },
          {
            title: 'Add Product',
            url: `${process.env.PUBLIC_URL}/ecommerce/add-product`,
          },

          {
            title: 'Product list',
            url: `${process.env.PUBLIC_URL}/ecommerce/product-list`,
          },
          {
            title: 'Payment Details',
            url: `${process.env.PUBLIC_URL}/ecommerce/payment-details`,
          },
          {
            title: 'Order History',
            url: `${process.env.PUBLIC_URL}/ecommerce/order-history`,
          },
          {
            title: 'Invoice',
            url: `${process.env.PUBLIC_URL}/ecommerce/invoice`,
          },
          {
            title: 'Cart',
            url: `${process.env.PUBLIC_URL}/ecommerce/cart`,
          },
          {
            title: 'Wishlist',
            url: `${process.env.PUBLIC_URL}/ecommerce/wishlist`,
          },
          {
            title: 'Checkout',
            url: `${process.env.PUBLIC_URL}/ecommerce/checkout`,
          },
          {
            title: 'Pricing',
            url: `${process.env.PUBLIC_URL}/ecommerce/pricing`,
          },
        ],
      },
      {
        title: 'Email',
        icon: <FiMail />,

        menu: [
          {
            title: 'Mail Inbox',
            url: `${process.env.PUBLIC_URL}/email/email-inbox`,
          },
          {
            title: 'Read mail',
            url: `${process.env.PUBLIC_URL}/email/email-read`,
          },
          {
            title: 'Compose',
            url: `${process.env.PUBLIC_URL}/email/email-compose`,
          },
        ],
      },
      {
        title: 'Chat',
        icon: <FiMessageCircle />,

        menu: [
          {
            title: 'Chat App',
            url: `${process.env.PUBLIC_URL}/chat/chat`,
          },
          {
            title: 'Video chat',
            url: `${process.env.PUBLIC_URL}/chat/chat-video`,
          },
        ],
      },
      {
        title: 'Users',
        icon: <FiUsers />,

        menu: [
          {
            title: 'Users Profile',
            url: `${process.env.PUBLIC_URL}/users/user-profile`,
          },
          {
            title: 'Users Edit',
            url: `${process.env.PUBLIC_URL}/users/edit-profile`,
          },
          {
            title: 'Users Cards',
            url: `${process.env.PUBLIC_URL}/users/user-cards`,
          },
        ],
      },
      {
        title: 'Bookmarks',
        icon: <FiHeart />,
        url: `${process.env.PUBLIC_URL}/bookmark`,
        bookmark: true
      },
      {
        title: 'Contacts',
        icon: <FiList />,
        url: `${process.env.PUBLIC_URL}/contacts`,
        bookmark: true
      },
      {
        title: 'Tasks',
        icon: <FiCheckSquare />,
        url: `${process.env.PUBLIC_URL}/task`,
        bookmark: true
      },
      {
        title: 'Calendar',
        icon: <FiCalendar />,
        url: `${process.env.PUBLIC_URL}/calendar-basic`,
        bookmark: true
      },
      {
        title: 'Social App',
        icon: <FiZap />,
        url: `${process.env.PUBLIC_URL}/social-app`,
        bookmark: true
      },
      {
        title: 'To-Do',
        icon: <FiClock />,
        url: `${process.env.PUBLIC_URL}/to-do`,
        bookmark: true
      },
      {
        title: 'Search Result',
        icon: <FiSearch />,
        url: `${process.env.PUBLIC_URL}/search`,
        bookmark: true
      },
    ],
  },
  {
    title: 'Forms & Table',
    menu: [
      {
        title: 'Forms',
        icon: <FiFileText />,

        menu: [
          {
            title: 'Form Controls',

            menu: [
              {
                title: 'Form Validation',
                url: `${process.env.PUBLIC_URL}/forms/form-controls/form-validation`,
              },
              {
                title: 'Base Inputs',
                url: `${process.env.PUBLIC_URL}/forms/form-controls/base-input`,
              },
              {
                title: 'Checkbox & Radio',
                url: `${process.env.PUBLIC_URL}/forms/form-controls/radio-checkbox-control`,
              },
              {
                title: 'Input Groups',
                url: `${process.env.PUBLIC_URL}/forms/form-controls/input-group`,
              },
              {
                title: 'Mega Options',
                url: `${process.env.PUBLIC_URL}/forms/form-controls/mega-options`,
              },
            ],
          },
          {
            title: 'Form Widgets',
            menu: [
              {
                title: 'Datepicker',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/datepicker`,
              },
              {
                title: 'Date & Time Picker',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/date-time-picker`,
              },
              {
                title: 'Date Range Picker',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/date-range-picker`,
              },
              {
                title: 'Touch Spin',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/touch-spin`,
              },
              {
                title: 'Select 2',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/select-2`,
              },
              {
                title: 'Switch',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/switch`,
              },
              {
                title: 'Typeahead',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/typeahead`,
              },
              {
                title: 'Clipboard',
                url: `${process.env.PUBLIC_URL}/forms/form-widgets/clipboard`,
              },
            ],
          },
          {
            title: 'Form Layout',

            menu: [
              {
                title: 'Default Forms',
                url: `${process.env.PUBLIC_URL}/forms/form-layout/default-form`,
              },
              {
                title: 'Form Wizard 1',
                url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard`,
              },
              {
                title: 'Form Wizard 2',
                url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard-2`,
              },
              {
                title: 'Form Wizard 3',
                url: `${process.env.PUBLIC_URL}/forms/form-layout/form-wizard-3`,
              },
            ],
          },
        ],
      },
      {
        title: 'Table',
        icon: <FiServer />,
        menu: [
          {
            title: 'ReactStrap Table ',
            url: `${process.env.PUBLIC_URL}/table/bootstrap-tables/react-strap-basic`,
          },
          {
            title: 'Data Tables',
            url: `${process.env.PUBLIC_URL}/table/bootstrap-tables/data-table`,
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    menu: [
      {
        title: 'Ui Kits',
        icon: <FiBox />,

        menu: [
          {
            title: 'Typography',
            url: `${process.env.PUBLIC_URL}/ui-kits/typography`,
          },
          {
            title: 'Avatars',
            url: `${process.env.PUBLIC_URL}/ui-kits/avatars`,
          },
          {
            title: 'Helper Classes',
            url: `${process.env.PUBLIC_URL}/ui-kits/helper-classes`,
          },
          {
            title: 'Grid',
            url: `${process.env.PUBLIC_URL}/ui-kits/grid`,
          },
          {
            title: 'Tag & pills',
            url: `${process.env.PUBLIC_URL}/ui-kits/tag-pills`,
          },
          {
            title: 'Progress',
            url: `${process.env.PUBLIC_URL}/ui-kits/progress-bar`,
          },
          {
            title: 'Modal',
            url: `${process.env.PUBLIC_URL}/ui-kits/modal-bar`,
          },
          {
            title: 'alert',
            url: `${process.env.PUBLIC_URL}/ui-kits/alert`,
          },
          {
            title: 'Popover',
            url: `${process.env.PUBLIC_URL}/ui-kits/popover`,
          },
          {
            title: 'Tooltip',
            url: `${process.env.PUBLIC_URL}/ui-kits/tooltip`,
          },
          {
            title: 'Spinners',
            url: `${process.env.PUBLIC_URL}/ui-kits/loader`,
          },
          {
            title: 'Dropdown',
            url: `${process.env.PUBLIC_URL}/ui-kits/dropdown`,
          },
          {
            title: 'Accordion',
            url: `${process.env.PUBLIC_URL}/ui-kits/accordion`,
          },
          {
            title: 'Tabs',

            menu: [
              {
                title: 'Bootstrap Tabs',
                url: `${process.env.PUBLIC_URL}/ui-kits/tabs/tab-bootstrap`,
              },
              {
                title: 'Line Tabs',
                url: `${process.env.PUBLIC_URL}/ui-kits/tabs/line-tabs`,
              },
            ],
          },
          {
            title: 'Shadow',
            url: `${process.env.PUBLIC_URL}/ui-kits/box-shadow`,
          },
          {
            title: 'Lists',
            url: `${process.env.PUBLIC_URL}/ui-kits/list`,
          },
        ],
      },
      {
        title: 'Bonus Ui',
        icon: <FiFolderPlus />,

        menu: [
          {
            title: 'Scrollable',
            url: `${process.env.PUBLIC_URL}/bonus-ui/scrollable`,
          },
          {
            title: 'Tree View',
            url: `${process.env.PUBLIC_URL}/bonus-ui/tree`,
          },
          {
            title: 'Bootstrap Notify',
            url: `${process.env.PUBLIC_URL}/bonus-ui/bootstrap-notify`,
          },
          {
            title: 'Rating',
            url: `${process.env.PUBLIC_URL}/bonus-ui/rating`,
          },
          {
            title: 'Dropzone',
            url: `${process.env.PUBLIC_URL}/bonus-ui/dropzone`,
          },
          {
            title: 'Tour',
            url: `${process.env.PUBLIC_URL}/bonus-ui/tour`,
          },
          {
            title: 'SweetAlert 2',
            url: `${process.env.PUBLIC_URL}/bonus-ui/sweet-alert-2`,
          },

          {
            title: 'Owl Carousel',
            url: `${process.env.PUBLIC_URL}/bonus-ui/owl-carousel`,
          },
          {
            title: 'Ribbons',
            url: `${process.env.PUBLIC_URL}/bonus-ui/ribbons`,
          },
          {
            title: 'Pagination',
            url: `${process.env.PUBLIC_URL}/bonus-ui/pagination`,
          },
          {
            title: 'Breadcrumb',
            url: `${process.env.PUBLIC_URL}/bonus-ui/breadcrumb`,
          },
          {
            title: 'Range Slider',
            url: `${process.env.PUBLIC_URL}/bonus-ui/range-slider`,
          },
          {
            title: 'Image Cropper',
            url: `${process.env.PUBLIC_URL}/bonus-ui/image-cropper`,
          },
          {
            title: 'Sticky',
            url: `${process.env.PUBLIC_URL}/bonus-ui/sticky`,
          },
          {
            title: 'Basic Card',
            url: `${process.env.PUBLIC_URL}/bonus-ui/basic-card`,
          },
          {
            title: 'Creative Card',
            url: `${process.env.PUBLIC_URL}/bonus-ui/creative-card`,
          },
          {
            title: 'Tabbed Card',
            url: `${process.env.PUBLIC_URL}/bonus-ui/tabbed-card`,
          },
          {
            title: 'Draggable Card',
            url: `${process.env.PUBLIC_URL}/bonus-ui/dragable-card`,
          },
          {
            title: 'Timeline',
            url: `${process.env.PUBLIC_URL}/bonus-ui/timeline`,
          },
        ],
      },
      {
        title: 'Icons',
        icon: <FiCommand />,

        menu: [
          {
            title: 'Flag icon',
            url: `${process.env.PUBLIC_URL}/icons/flag-icon`,
          },
          {
            title: 'Fontawesome Icon',
            url: `${process.env.PUBLIC_URL}/icons/font-awesome`,
          },
          {
            title: 'Ico Icon',
            url: `${process.env.PUBLIC_URL}/icons/ico-icon`,
          },
          {
            title: 'Thimify Icon',
            url: `${process.env.PUBLIC_URL}/icons/themify-icon`,
          },
          {
            title: 'Feather Icon',
            url: `${process.env.PUBLIC_URL}/icons/feather-icon`,
          },
          {
            title: 'Whether Icon',
            url: `${process.env.PUBLIC_URL}/icons/whether-icon`,
          },
        ],
      },
      {
        title: 'Buttons',
        icon: <FiCloud />,

        menu: [
          {
            title: 'Default Style',
            url: `${process.env.PUBLIC_URL}/buttons/buttons`,
          },
          {
            title: 'Button Group',
            url: `${process.env.PUBLIC_URL}/buttons/button-group`,
          },
        ],
      },
      {
        title: 'Charts',
        icon: <FiBarChart />,

        menu: [
          {
            title: 'Apex Chart',
            url: `${process.env.PUBLIC_URL}/charts/chart-apex`,
          },
          {
            title: 'Google Chart',
            url: `${process.env.PUBLIC_URL}/charts/chart-google`,
          },
          {
            title: 'Chatjs Chart',
            url: `${process.env.PUBLIC_URL}/charts/chartjs`,
          },
        ],
      },
    ],
  },
  {
    title: 'Pages',
    menu: [
      {
        title: 'Sample page',
        icon: <FiFileText />,
        url: `${process.env.PUBLIC_URL}/pages/sample-page`,
      },

      {
        title: 'Others',
        icon: <FiLayers />,

        menu: [
          {
            title: 'Error Page',
            menu: [
              {
                title: 'Error Page 1',
                url: `${process.env.PUBLIC_URL}/others/error-page-1`,
              },
              {
                title: 'Error Page 2',
                url: `${process.env.PUBLIC_URL}/others/error-page-2`,
              },
              {
                title: 'Error Page 3',
                url: `${process.env.PUBLIC_URL}/others/error-page-3`,
              },
              {
                title: 'Error Page 4',
                url: `${process.env.PUBLIC_URL}/others/error-page-4`,
              },
              {
                title: 'Error Page 5',
                url: `${process.env.PUBLIC_URL}/others/error-page-5`,
              },
            ],
          },
          {
            title: 'Authentication',
            menu: [
              {
                title: 'Login Simple',
                url: `${process.env.PUBLIC_URL}/auth/login`,
              },
              {
                title: 'Login with bg image',
                url: `${process.env.PUBLIC_URL}/auth/login-bg-img`,
              },
              {
                title: 'Login with image two ',
                url: `${process.env.PUBLIC_URL}/auth/login-bg-img2`,
              },
              {
                title: 'Login With validation',
                url: `${process.env.PUBLIC_URL}/auth/login-bs-validation`,
              },
              {
                title: 'Login with tooltip',
                url: `${process.env.PUBLIC_URL}/auth/login-bs-tt-validation`,
              },
              {
                title: 'Login with sweetalert',
                url: `${process.env.PUBLIC_URL}/auth/login-sa-validation`,
              },
              {
                title: 'Register Simple',
                url: `${process.env.PUBLIC_URL}/auth/sign-up`,
              },
              {
                title: 'Register with Bg Image',
                url: `${process.env.PUBLIC_URL}/auth/sign-up-one`,
              },
              {
                title: 'Register with Bg video',
                url: `${process.env.PUBLIC_URL}/auth/sign-up-two`,
              },
              {
                title: 'Unlock User',
                url: `${process.env.PUBLIC_URL}/auth/unlock`,
              },
              {
                title: 'Forget Password',
                url: `${process.env.PUBLIC_URL}/auth/forget-password`,
              },
              {
                title: 'Reset Password',
                url: `${process.env.PUBLIC_URL}/auth/reset-password`,
              },
              {
                title: 'Maintenance',
                url: `${process.env.PUBLIC_URL}/auth/maintenance`,
              },
            ],
          },
          {
            title: 'Coming Soon',

            menu: [
              {
                title: 'Coming Simple',
                url: `${process.env.PUBLIC_URL}/coming-soon/coming-soon`,
              },
              {
                title: 'Coming with Bg video',
                url: `${process.env.PUBLIC_URL}/coming-soon/coming-soon-bg-video`,
              },
              {
                title: 'Coming with Bg Image',
                url: `${process.env.PUBLIC_URL}/coming-soon/coming-soon-bg-img`,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Miscellaneous',
    menu: [
      {
        title: 'Gallery',
        icon: <FiImage />,

        menu: [
          {
            title: 'Gallery Grid',
            url: `${process.env.PUBLIC_URL}/gallery/gallery`,
          },
          {
            title: 'Gallery Grid Desc',
            url: `${process.env.PUBLIC_URL}/gallery/gallery-with-description`,
          },
          {
            title: 'Masonry Gallery',
            url: `${process.env.PUBLIC_URL}/gallery/gallery-masonry`,
          },
          {
            title: 'Masonry with Desc',
            url: `${process.env.PUBLIC_URL}/gallery/masonry-gallery-with-disc`,
          },
          {
            title: 'Hover Effects',
            url: `${process.env.PUBLIC_URL}/gallery/gallery-hover`,
          },
        ],
      },
      {
        title: 'Blog',
        icon: <FiFilm />,

        menu: [
          {
            title: 'Blog Details',
            url: `${process.env.PUBLIC_URL}/blog/blog-detail`,
          },
          {
            title: 'Blog Single',
            url: `${process.env.PUBLIC_URL}/blog/blog-single`,
          },
          {
            title: 'Add Post',
            url: `${process.env.PUBLIC_URL}/blog/add-post`,
          },
        ],
      },
      {
        title: 'FAQ',
        icon: <FiHelpCircle />,
        url: `${process.env.PUBLIC_URL}/faq`,
      },
      {
        title: 'Job Search',
        icon: <FiPackage />,

        menu: [
          {
            title: 'Cards view',
            url: `${process.env.PUBLIC_URL}/job-search/job-cards-view`,
          },
          {
            title: 'List View',
            url: `${process.env.PUBLIC_URL}/job-search/job-list-view`,
          },
          {
            title: 'Job Details',
            url: `${process.env.PUBLIC_URL}/job-search/job-details`,
          },
          {
            title: 'Apply',
            url: `${process.env.PUBLIC_URL}/job-search/job-apply`,
          },
        ],
      },
      {
        title: 'Learning',
        icon: <FiRadio />,

        menu: [
          {
            title: 'Learning List',
            url: `${process.env.PUBLIC_URL}/learning/learning-list-view`,
          },
          {
            title: 'Detailed Course',
            url: `${process.env.PUBLIC_URL}/learning/learning-detail`,
          },
        ],
      },
      {
        title: 'Maps',
        icon: <FiMap />,

        menu: [
          {
            title: 'React Simple Map',
            url: `${process.env.PUBLIC_URL}/maps/react-simple-map`,
          },
          {
            title: 'Leaflet Map',
            url: `${process.env.PUBLIC_URL}/maps/leaflet-map`,
          },
        ],
      },
      {
        title: 'Editors',
        icon: <FiEdit />,

        menu: [
          {
            title: 'CK Editor',
            url: `${process.env.PUBLIC_URL}/editors/ckeditor`,
          },
          {
            title: 'MDE Editor',
            url: `${process.env.PUBLIC_URL}/editors/simple-MDE`,
          },
          {
            title: 'ACE code editor',
            url: `${process.env.PUBLIC_URL}/editors/ace-code-editor`,
          },
        ],
      },
      {
        title: 'Knowledgebase',
        icon: <FiSunrise />,

        menu: [
          {
            title: 'Knowledgebase',
            url: `${process.env.PUBLIC_URL}/knowledgebase/knowledgebase`,
          },
          {
            title: 'Knowledge Category',
            url: `${process.env.PUBLIC_URL}/knowledgebase/knowledge-category`,
          },
          {
            title: 'Knowledge Detail',
            url: `${process.env.PUBLIC_URL}/knowledgebase/knowledge-detail`,
          },
        ],
      },
      {
        title: 'Support Ticket',
        icon: <FiUsers />,
        url: `${process.env.PUBLIC_URL}/support-ticket`,
      },
    ],
  },
];
