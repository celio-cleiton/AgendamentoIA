export enum UserRole {
  ADMIN = 'ADMIN',
  PROFESSIONAL = 'PROFESSIONAL',
  CLIENT = 'CLIENT'
}

export const checkPermissions = (requiredRole: UserRole, userRole?: UserRole) => {
    const roleHierarchy = {
      [UserRole.ADMIN]: 3,
      [UserRole.PROFESSIONAL]: 2,
      [UserRole.CLIENT]: 1
    }
    
    return roleHierarchy[userRole || UserRole.CLIENT] >= roleHierarchy[requiredRole]
}