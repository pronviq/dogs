import { useEffect, useRef } from "react";
import * as styles from "./Observer.module.scss";
import store from "@/store/Store";
import { observer } from "mobx-react-lite";

const Observer = observer(() => {
  const observableRef = useRef<HTMLDivElement>(null);
  const observerRef = useRef<IntersectionObserver>();

  useEffect(() => {
    const cb = (entries: IntersectionObserverEntry[]) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        store.fetchDogs();
      }
    };

    observerRef.current = new IntersectionObserver(cb, { threshold: 1 });
    observerRef.current && observerRef.current.observe(observableRef.current);
    return () => {
      observerRef.current ?? observerRef.current.unobserve(observableRef.current);
    };
  }, []);

  return store.isLoading ? null : <div ref={observableRef} className={styles.observer}></div>;
});

export default Observer;
