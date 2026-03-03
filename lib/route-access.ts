import { Role } from "@/models/User";

export type RouteAccess = {
  [path: string]: Role[];
};

export const routeAccessMap: RouteAccess = {
  "/dashboard": [
    "admin",
    "accountant",
    "networking",
    "web",
    "cafe",
    "instructor",
  ],
  "/dashboard/academy": ["admin", "instructor"],
  "/dashboard/accounts": ["admin", "accountant"],
  "/dashboard/cafe": ["admin", "cafe"],
  "/dashboard/networking": ["admin", "networking"],
  "/dashboard/webdepartment": ["admin", "web"],

  "/dashboard/projects": ["admin", "web", "networking"],

  "/dashboard/settings": [
    "admin",
    "accountant",
    "networking",
    "web",
    "cafe",
    "instructor",
  ],
} as const;

export function getAllowedRolesForPath(pathname: string): Role[] | null {
  const sortedPrefixes = Object.keys(routeAccessMap).sort(
    (a, b) => b.length - a.length,
  );
  for (const prefix of sortedPrefixes) {
    if (pathname === prefix || pathname.startsWith(prefix + "/")) {
      return routeAccessMap[prefix];
    }
  }
  return ["admin"];
}
