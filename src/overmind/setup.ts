import { createOvermind } from "overmind";
import { overmindConfig } from ".";

export const overmind = createOvermind(overmindConfig, {
  //   devtools: true,
  devtools: "192.168.0.102:3031",
  devEnv: "dev",
});
