"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

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
      <p className="text-gray-600 tracking-widest">
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
        <strong className="text-gray-500">TV/Film —</strong>{" "}
        {item.properties?.["TV Show"]?.rich_text?.[0]?.plain_text || "—"}
      </p>
    </li>
  );
}

function groupByDate(data) {
  return data.reduce((acc, item) => {
    const date = item.properties?.Date?.date?.start;
    if (!date) return acc;
    if (!acc[date]) acc[date] = [];
    acc[date].push(item);
    return acc;
  }, {});
}

export default function Signals() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [dateGroups, setDateGroups] = useState({});
  const [dateKeys, setDateKeys] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    async function fetchNotionData() {
      const res = await fetch("/api/notion-signals");
      const json = await res.json();
      console.log("Notion API response:", json);
      const grouped = groupByDate(json);
      const sortedDates = Object.keys(grouped).sort(
        (a, b) => new Date(b) - new Date(a)
      );
      setDateGroups(grouped);
      setDateKeys(sortedDates);
      setCurrentIndex(0);
      setLoading(false);
    }
    fetchNotionData();
  }, []);

  if (loading) return <p className="text-base">Loading signals...</p>;
  if (dateKeys.length === 0)
    return <p className="text-base">No signals found.</p>;

  const currentDate = dateKeys[currentIndex];
  const currentItems = dateGroups[currentDate] || [];

  const goBack = () => {
    if (currentIndex < dateKeys.length - 1) setCurrentIndex(currentIndex + 1);
  };
  const goForward = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <button
          onClick={goBack}
          disabled={currentIndex >= dateKeys.length - 1}
          className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform duration-200 opacity-70 hover:opacity-100 hover:scale-110 disabled:opacity-30"
        >
          <HiChevronLeft className="h-5 w-5 text-gray-600" />
        </button>
        <button
          onClick={goForward}
          disabled={currentIndex <= 0}
          className="w-8 h-8 flex items-center justify-center cursor-pointer transition-transform duration-200 opacity-70 hover:opacity-100 hover:scale-110 disabled:opacity-30"
        >
          <HiChevronRight className="h-5 w-5 text-gray-600" />
        </button>
      </div>
      <motion.ul
        key={currentDate}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.25 }}
        className="space-y-1 text-sm text-teal-700 italic tracking-wide"
      >
        {currentItems.map((item) => (
          <SignalItem key={item.id} item={item} />
        ))}
      </motion.ul>
    </div>
  );
}
