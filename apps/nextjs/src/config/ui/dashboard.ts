import type { Locale } from "~/config/i18n-config";
import { getDictionary } from "~/lib/get-dictionary";
import type { DashboardConfig } from "~/types";

export const getDashboardConfig = async ({
  params: { lang },
}: {
  params: {
    lang: Locale;
  };
}): Promise<DashboardConfig> => {
  const dict = await getDictionary(lang);

  return {
    mainNav: [
      {
        title: dict.common.dashboard.main_nav_documentation,
        href: "/docs",
      },
      {
        title: dict.common.dashboard.main_nav_support,
        href: "/support",
        disabled: true,
      },
    ],
    sidebarNav: [
      {
        id: "accounts",
        title: dict.common.dashboard.sidebar_nav_accounts,
        href: "/dashboard/accounts",
      },
      {
        id: "events",
        title: dict.common.dashboard.sidebar_nav_events,
        href: "/dashboard/events",
      },
      {
        id: "tasks",
        title: dict.common.dashboard.sidebar_nav_tasks,
        href: "/dashboard/tasks",
      },
      {
        id: "profiler",
        title: dict.common.dashboard.sidebar_nav_profiler,
        href: "/dashboard/profiler",
      },
      {
        id: "clusters",
        title: dict.common.dashboard.sidebar_nav_clusters,
        href: "/dashboard/",
      },
      {
        id: "billing",
        title: dict.common.dashboard.sidebar_nav_billing,
        href: "/dashboard/billing",
      },
      {
        id: "settings",
        title: dict.common.dashboard.sidebar_nav_settings,
        href: "/dashboard/settings",
      },
    ],
  };
};
