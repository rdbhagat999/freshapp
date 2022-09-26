import { asset } from "$fresh/runtime.ts";
import Counter from "../islands/Counter.tsx";
import Countdown from "../islands/Countdown.tsx";

export default function Home() {
  const date = new Date();
  date.setHours(date.getHours() + 1);

  return (
    <div class="p-4 mx-auto max-w-screen-md">
      <img
        src="/logo.svg"
        class="w-32 h-32"
        alt="the fresh logo: a sliced lemon dripping with juice"
      />
      <p class="my-6">
        Welcome to `fresh`. Try updating this message in the ./routes/index.tsx
        file, and refresh.
      </p>
      <Counter start={3} />
      <p>
        The big event is happening <Countdown target={date.toISOString()} />.
      </p>

      <div>
        <img src="/pro.png" loading="lazy" />
        <img src="/basic.png" data-fresh-disable-lock loading="lazy" />
        <img src={asset("/tiger.jpg")} loading="lazy" />
      </div>
    </div>
  );
}
