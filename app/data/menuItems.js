import React from 'react';
import {
  MdDashboard,
  MdSupervisedUserCircle,
  MdShoppingBag,
  MdAttachMoney,
  MdWork,
  MdAnalytics,
  MdPeople,
  MdOutlineSettings,
  MdHelpCenter,
  MdLogout,
} from 'react-icons/md';

export const menuItems = [
  {
    title: 'Pages',
    list: [
      {
        title: 'Dashboard',
        path: '/dashboard',
        icon: React.createElement(MdDashboard),
        status: 'In Progress',
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: React.createElement(MdSupervisedUserCircle),
        status: 'Complete',
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: React.createElement(MdShoppingBag),
        status: 'Complete',
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: React.createElement(MdAttachMoney),
        status: 'TBD',
      },
    ],
  },
  {
    title: 'Analytics',
    list: [
      {
        title: 'Revenue',
        path: '/dashboard/revenue',
        icon: React.createElement(MdWork),
        status: 'TBD',
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: React.createElement(MdAnalytics),
        status: 'TBD',
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: React.createElement(MdPeople),
        status: 'TBD',
      },
    ],
  },
  {
    title: 'User',
    list: [
      {
        title: 'Settings',
        path: '/dashboard/settings',
        icon: React.createElement(MdOutlineSettings),
        status: 'TBD',
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: React.createElement(MdHelpCenter),
        status: 'TBD',
      },
    ],
  },
];
