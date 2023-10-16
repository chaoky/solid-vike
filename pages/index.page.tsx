import { Counter } from "/lib/Counter";

export function Page() {
  return (
    <>
      <h1 uno-text="~ red">Welcome</h1>
      <div>
        This page is:
        <ul>
          <li uno-text="~ blue">Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </div>
    </>
  );
}
