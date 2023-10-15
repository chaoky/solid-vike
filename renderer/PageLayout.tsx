import "virtual:uno.css";
import {
  PageContext,
  PageContextProvider,
  usePageContext,
} from "/lib/usePageContext";
import type { Store } from "solid-js/store";
import { Dynamic } from "solid-js/web";
import { Layout } from "/pages/app.layout";

interface Props {
  pageContext: Store<PageContext>;
}

export function PageLayout(props: Props) {
  return (
    <PageContextProvider pageContext={props.pageContext}>
      <Layout>
        <Page />
      </Layout>
    </PageContextProvider>
  );
}

function Page() {
  const pageContext = usePageContext();
  return (
    <>
      <Dynamic
        component={pageContext.Page}
        {...(pageContext.pageProps ?? {})}
      />
    </>
  );
}
