import { env } from "process"

export const BASE_URL= process.env.REACT_APP_BECKEND_URL ?? "http://localhost:8080"