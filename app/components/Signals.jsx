"use client";

import React, { useEffect, useState } from "react";

export default function Signals() {
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchNotionData() {
      // Call your API route or directly use Notion client here
      const res = await fetch("/api/notion-signals");
      const json = await res.json();
      setData(json);
    }
    fetchNotionData();
  }, []);

  if (!data) return <p className="text-base">Loading signals...</p>;

  return (
    <div>
      <ul className="space-y-1 text-sm text-teal-700 italic tracking-wide">
        {data.map((item) => (
          <li key={item.id}>
            <p>
              <strong className="text-gray-500">Date —</strong>{" "}
              {item.properties?.Date?.date?.start || "—"}
            </p>
            <p>
              <strong className="text-gray-500">Music —</strong>{" "}
              {item.properties?.Music?.title?.[0]?.plain_text || "—"}
            </p>
            <p>
              <strong className="text-gray-500">Book —</strong>{" "}
              {item.properties?.Book?.rich_text?.[0]?.plain_text || "—"}
            </p>
            <p>
              <strong className="text-gray-500">TV Show —</strong>{" "}
              {item.properties?.["TV Show"]?.rich_text?.[0]?.plain_text || "—"}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
