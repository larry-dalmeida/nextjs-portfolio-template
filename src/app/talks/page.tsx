import talks from "./talks.json";
import clsx from "clsx";

import styles from "./talks.module.css";

const Talks = () => (
  <section>
    <h1 className="font-bold text-3xl font-serif mb-5">Recent Talks</h1>
    <ol>
      {talks.map((talk) => (
        <li key={talk.href}>
          <a
            className="flex flex-col space-y-1 mb-4"
            href={talk.href}
            target="_blank"
          >
            <div className="w-full flex flex-col">
              <p>{talk.title}</p>
              <p className="font-mono text-sm text-neutral-500 tracking-tighter">
                {talk.summary}
              </p>
              <iframe
                className={clsx(styles.video, "mt-3")}
                src={talk.embeddedVideoUrl}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </a>
        </li>
      ))}
    </ol>
  </section>
);

export default Talks;
