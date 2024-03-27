type Where = "home" | "app" | "user" | "admin";

type Navigation = {
  name: string;
  to: string;
  icon: string;
};

export function getNavigation(where: Where): Navigation[] {
  switch (where) {
    case "home":
      return [
        { name: "Home", to: "/", icon: "i-majesticons-home-line" },
        { name: "Contact", to: "/contact", icon: "i-material-symbols-perm-contact-calendar" },
      ];
    default:
      return [];
  }
}
