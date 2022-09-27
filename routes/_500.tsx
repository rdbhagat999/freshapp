import { ErrorPageProps } from "$fresh/server.ts";

export default function Error500Page({ error }: ErrorPageProps) {
  return (
    <div>
      <p>500 internal server error</p>
      <p>{(error as Error).message}</p>
      <p>{(error as Error).stack}</p>
    </div>
  );
}
