import { ROLE } from "./role";

export const ROUTE = {
  LOGIN: {
    PATH: "/",
  },
  REGISTER: {
    PATH: "/register",
  },
  FORGOT_PASSWORD: {
    PATH: "/forgot-password",
  },

  HOME: {
    PATH: "/home",
    AUTHOR: [ROLE.ADMIN, ROLE.ENTERPRISE, ROLE.STUDENT],
  },
  PROFILE: {
    PATH: "/profile",
    AUTHOR: [ROLE.STUDENT],
  },
  ADVANCE_FILTER: {
    PATH: "/advance-filter",
    AUTHOR: [ROLE.ADMIN, ROLE.ENTERPRISE, ROLE.STUDENT],
  },
  BASIC_QUERY: {
    PATH: "/basic-query",
    AUTHOR: [ROLE.ADMIN, ROLE.ENTERPRISE, ROLE.STUDENT],
  },
  COMPANY: {
    PATH: "/company",
    AUTHOR: [ROLE.ADMIN, ROLE.ENTERPRISE],
  },
  INTERNSHIP: {
    PATH: "/internship",
    AUTHOR: [ROLE.ADMIN, ROLE.ENTERPRISE, ROLE.STUDENT],
    JOB_DETAIL: {
      PATH: "/internship/:idJob",
      AUTHOR: [ROLE.ADMIN, ROLE.ENTERPRISE, ROLE.STUDENT],
    },
  },

  REPORT_INTERNSHIP: {
    PATH: "/report-internship",
    AUTHOR: [ROLE.ENTERPRISE],
  },

  ERROR: {
    PATH: "/error",
  }
};
