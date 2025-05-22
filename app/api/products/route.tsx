import { NextRequest, NextResponse } from "next/server";
import productSchema from "./schema";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: string;
}

export function GET(request: NextRequest) {
  return NextResponse.json([
    {
      id: 1,
      name: "milk",
      price: 10,
      quantity: "1ltr",
    },
    {
      id: 1,
      name: "banana",
      price: 30,
      quantity: "500grams",
    },
  ]);
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  const validation = productSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.errors, { status: 400 });
  }

  return NextResponse.json(
    {
      success: true,
      msg: "Product Created successfully",
    },
    { status: 201 }
  );
}
