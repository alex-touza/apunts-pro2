import configuration from "../../content-collections.ts";
import { GetTypeByName } from "@content-collections/core";

export type PersonalNote = GetTypeByName<typeof configuration, "personalNotes">;
export declare const allPersonalNotes: Array<PersonalNote>;

export {};
