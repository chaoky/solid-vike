import { Link } from "/lib/Link";
import { FlowProps } from "solid-js";

function Sidebar(props: FlowProps) {
  return (
    <div
      style={{
        padding: "20px",
        "flex-shrink": 0,
        display: "flex",
        "flex-direction": "column",
        "align-items": "center",
        "line-height": "1.8em",
      }}
    >
      {props.children}
    </div>
  );
}

function Content(props: FlowProps) {
  return (
    <div
      style={{
        padding: "20px",
        "padding-bottom": "50px",
        "border-left": "2px solid #eee",
        "min-height": "100vh",
      }}
    >
      {props.children}
    </div>
  );
}

function Logo() {
  return (
    <div
      style={{
        "margin-top": "20px",
        "margin-bottom": "10px",
      }}
    >
      <a href="/">
        <img src="/logo.svg" height={64} width={64} alt="logo" />
      </a>
    </div>
  );
}

export function Layout(props: FlowProps) {
  return (
    <div
      style={{
        display: "flex",
        "max-width": "900px",
        margin: "auto",
      }}
    >
      <Sidebar>
        <Logo />
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
      </Sidebar>
      <Content>{props.children}</Content>
    </div>
  );
}
