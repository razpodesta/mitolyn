// src/app/go/route.ts

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Este es el link de afiliado REAL, guardado de forma segura en el servidor.
const AFFILIATE_URL = process.env.AFFILIATE_URL_TARGET;

export async function GET(request: NextRequest) {
  if (!AFFILIATE_URL) {
    console.error(
      "AFFILIATE_URL_TARGET no está definido en las variables de entorno."
    );
    return NextResponse.redirect(new URL("/", request.url));
  }

  // Usamos un 307 (Temporary Redirect) que es bueno para el cloaking de afiliados.
  return NextResponse.redirect(new URL(AFFILIATE_URL), 307);
}
