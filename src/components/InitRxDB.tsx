import { ReactElement, useEffect, useState } from "react";
import { initRxDB } from "../rxdb/rxdb";

export function InitRxDB({ children }: { children: ReactElement }) {
  const [hasInit, setHasInit] = useState(false);

  useEffect(() => {
    async function run() {
      if (hasInit) return;

      await initRxDB();
      setHasInit(true);
    }

    run();
  }, [hasInit]);

  if (!hasInit) {
    return (
      <div style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        Initialize the database
      </div>
    );
  }

  return children;
}
