import { Counter } from "#lib/Counter";

export function Page() {
  return (
    <>
      <h1>Welcome</h1>
      <div>
        This page is:
        <ul>
          <li>Rendered to HTML.</li>
          <li>
            Interactive. <Counter />
          </li>
        </ul>
      </div>
    </>
  );
}
