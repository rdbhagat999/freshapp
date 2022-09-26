import { PageProps } from "$fresh/server.ts";

export default function UserDetailsPage(props: PageProps) {
  const { id } = props.params;
  const { route } = props;
  const { url } = props;
  const realURL = url.toString();

  return (
    <main>
      <h1>UserDetailsPage</h1>
      <p>This is the user: {id} details page.</p>
      <p>This is the url: {realURL} of page.</p>
      <p>This is the route: {route} of page.</p>
    </main>
  );
}
