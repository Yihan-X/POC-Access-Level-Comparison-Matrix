export type Role = 'System Administrator' | 'Location manager' | 'Advisor' | 'Supervisor' | 'Employee';

export interface Permission {
  id: string;
  name: string;
  description?: string;
  roleAccess: Record<Role, boolean>;
}

export interface PermissionGroup {
  id: string;
  name: string;
  permissions: Permission[];
}

export interface PermissionCategory {
  id: string;
  name: string;
  description: string;
  icon?: string; // We could add SVG icon string or icon name here
  groups: PermissionGroup[];
}

export interface PermissionMatrix {
  categories: PermissionCategory[];
  roles: Role[];
}