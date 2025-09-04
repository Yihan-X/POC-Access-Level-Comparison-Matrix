import type { PermissionMatrix, Role } from '../types';

export const ROLES: Role[] = [
  'System Administrator',
  'Location manager',
  'Advisor',
  'Supervisor',
  'Employee',
];

// SVG icons as strings
const ICONS = {
  basics: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
  </svg>`,
  employees: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
  </svg>`,
};

export const mockPermissionMatrix: PermissionMatrix = {
  roles: ROLES,
  categories: [
    {
      id: 'basics',
      name: 'The basics',
      description: 'Core permissions that most employees need for day-to-day work.',
      icon: ICONS.basics,
      groups: [
        {
          id: 'shift-tracking',
          name: 'Shift tracking',
          permissions: [
            {
              id: 'clock-mobile',
              name: 'Clock in and out via mobile apps',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: false,
                Supervisor: true,
                Employee: true,
              },
            },
            {
              id: 'clock-no-photo',
              name: 'Clock in and out without submitting photo',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: false,
                Supervisor: true,
                Employee: true,
              },
            },
            {
              id: 'timesheet-manual',
              name: 'Add and edit timesheet manually (without clock in)',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: false,
                Supervisor: true,
                Employee: true,
              },
            },
          ],
        },
      ],
    },
    {
      id: 'employee-management',
      name: 'Employee management',
      description:
        'Permissions for managing all aspects of employee records and employment administration.',
      icon: ICONS.employees,
      groups: [
        {
          id: 'employee-information',
          name: 'Employee information',
          permissions: [
            {
              id: 'view-employee-info',
              name: 'View employee information',
              description: 'Personal info',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
            {
              id: 'edit-employee-info',
              name: 'Add employees, and edit employee information',
              description: 'Personal info',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
            {
              id: 'edit-employee-pay',
              name: 'Edit employee pay details',
              description: 'Personal info',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
          ],
        },
        {
          id: 'terms-and-training',
          name: 'Terms and training',
          permissions: [
            {
              id: 'view-employment-terms',
              name: "View employees' employment terms",
              description: 'Personal info',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
            {
              id: 'edit-employment-terms',
              name: "Edit employees' employment terms",
              description: 'Personal info',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
            {
              id: 'view-training',
              name: 'View training requirements',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
            {
              id: 'edit-training',
              name: 'Edit training requirements',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
          ],
        },
        {
          id: 'leave-controls',
          name: 'Leave controls',
          permissions: [
            {
              id: 'approve-leave',
              name: 'Approve leave requests',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
            {
              id: 'edit-leave',
              name: 'Edit leave requests',
              roleAccess: {
                'System Administrator': true,
                'Location manager': true,
                Advisor: true,
                Supervisor: true,
                Employee: false,
              },
            },
          ],
        },
      ],
    },
  ],
};
