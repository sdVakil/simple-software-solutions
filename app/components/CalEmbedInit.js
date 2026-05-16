"use client";

import { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";
import { CAL_NAMESPACE } from "./cal";

export default function CalEmbedInit() {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return null;
}
