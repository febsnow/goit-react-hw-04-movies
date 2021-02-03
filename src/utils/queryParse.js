import { parse } from "query-string";

export default function queryParse(query) {
  return parse(query);
}
