import type { AttributifyAttributes } from "@unocss/preset-attributify";
import type { AttributifyNames } from "@unocss/preset-attributify";

declare module "solid-js" {
  namespace JSX {
    type Prefix = "uno-";
    interface HTMLAttributes<T>
      extends Partial<Record<AttributifyNames<Prefix>, string>> {}
  }
}
