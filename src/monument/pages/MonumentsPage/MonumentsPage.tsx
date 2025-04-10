import { useEffect, useState } from "react";
import Monument from "../../types";
import MonumentClient from "../../client/MonumentsClient";
import MonumentsList from "../../components/MonumentsList/MonumentsList";

const MonumentsPage: React.FC = () => {
  const [monuments, setMonuments] = useState<Monument[]>([]);

  useEffect(() => {
    (async () => {
      const monumentClient = new MonumentClient();
      const apiMonuments = await monumentClient.getMonuments();

      setMonuments(apiMonuments);
    })();
  }, []);

  return <MonumentsList monuments={monuments} />;
};

export default MonumentsPage;
