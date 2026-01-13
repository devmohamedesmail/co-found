
import { NextResponse } from "next/server"
import prisma from '@/lib/prisma'


export async function POST(req: Request) {
  try {

    const body = await req.json()
    const { title, category, description, organizationId, duration, deadline, files } = body
    const request = await prisma.request.create({
      data: {
        title,
        category,
        description,
        organizationId,
        duration,
        deadline: deadline ? new Date(deadline) : null,
        files,
      },
    })
    return NextResponse.json(
      { data: request },
      { status: 401 }
    )

  } catch (error) {

    return NextResponse.json(
      { error: `Something went wrong ${error} ` },
      { status: 500 }
    )
  }
}





export async function GET(req: Request) {
  try {
    const requests = await prisma.request.findMany()
    return NextResponse.json({ data: requests })
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong ${error} ` },
      { status: 500 }
    )
  }
}