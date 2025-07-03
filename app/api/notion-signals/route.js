// app/api/notion-signals/route.js
import { NextResponse } from "next/server";
import { Client } from "@notionhq/client";

// Initialize Notion client
const notion = new Client({ auth: process.env.NOTION_API_KEY });
const databaseId = process.env.NOTION_DATABASE_ID;

export async function GET() {
  try {
    const response = await notion.databases.query({
      database_id: databaseId,
    });

    return NextResponse.json(response.results);
  } catch (error) {
    console.error("Notion API error:", error);
    return NextResponse.json(
      { error: "Failed to fetch data from Notion" },
      { status: 500 }
    );
  }
}