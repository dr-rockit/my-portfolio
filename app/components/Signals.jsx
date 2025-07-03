"use client";

import React, { useEffect, useState } from "react";

function formatDate(dateString) {
  if (!dateString) return "—";
  const d = new Date(dateString);
  return d.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function SignalItem({ item }) {
  return (
    <li key={item.id}>
      <p className="text-gray-600 tracking-wider">
        [{formatDate(item.properties?.Date?.date?.start)}]
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
  );
}

export default function Signals() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNotionData() {
      const res = await fetch("/api/notion-signals");
      const json = await res.json();
      console.log("Notion API response:", json);
      setData(Array.isArray(json) ? json : []);
      setLoading(false);
    }
    fetchNotionData();
  }, []);

  if (loading) return <p className="text-base">Loading signals...</p>;
  if (data.length === 0) return <p className="text-base">No signals found.</p>;

  return (
    <div>
      <ul className="space-y-1 text-sm text-teal-700 italic tracking-wide">
        {Array.isArray(data) &&
          data.map((item) => <SignalItem key={item.id} item={item} />)}
      </ul>
    </div>
  );
}
