import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '8efdf537a4f95530ce255c6ee178acc5981aaf94', queries });
export default client;
  