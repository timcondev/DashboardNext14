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
      },
      {
        title: 'Users',
        path: '/dashboard/users',
        icon: React.createElement(MdSupervisedUserCircle),
      },
      {
        title: 'Products',
        path: '/dashboard/products',
        icon: React.createElement(MdShoppingBag),
      },
      {
        title: 'Transactions',
        path: '/dashboard/transactions',
        icon: React.createElement(MdAttachMoney),
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
      },
      {
        title: 'Reports',
        path: '/dashboard/reports',
        icon: React.createElement(MdAnalytics),
      },
      {
        title: 'Teams',
        path: '/dashboard/teams',
        icon: React.createElement(MdPeople),
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
      },
      {
        title: 'Help',
        path: '/dashboard/help',
        icon: React.createElement(MdHelpCenter),
      },
    ],
  },
];
