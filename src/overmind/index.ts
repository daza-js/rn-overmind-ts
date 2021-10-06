import { IConfig } from "overmind";
import { createHook, IConnect, createConnect } from "overmind-react";
import * as configCounter from "./counter";

export const overmindConfig = configCounter;

declare module "overmind" {
  interface Config extends IConfig<typeof overmindConfig> {}
}

export const useOvermind = createHook<typeof overmindConfig>();
export interface Connect extends IConnect<typeof overmindConfig> {}
export const connectOvermind = createConnect<typeof overmindConfig>();
