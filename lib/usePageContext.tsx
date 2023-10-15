import { Component } from "solid-js";
import type { PageContextBuiltInServer } from "vike/types";
import { useContext, createContext, type JSX } from "solid-js";
import { type Store } from "solid-js/store";

export type PageProps = {};
type Page = Component<PageProps>;
export type PageContext = PageContextBuiltInServer<Page> & {
  pageProps: PageProps;
  documentProps?: {
    title?: string;
    description?: string;
  };
};

const Context = createContext<Store<PageContext>>();

export function PageContextProvider(props: {
  pageContext: Store<PageContext>;
  children: JSX.Element;
}) {
  if (!props.pageContext) throw new Error("Argument pageContext missing");
  return (
    <Context.Provider value={props.pageContext}>
      {props.children}
    </Context.Provider>
  );
}

/** Access the pageContext from any SolidJS component */
export function usePageContext() {
  const pageContext = useContext(Context);
  if (!pageContext)
    throw new Error(
      "<PageContextProvider> is needed for being able to use usePageContext()",
    );
  return pageContext;
}
