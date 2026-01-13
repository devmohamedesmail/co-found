
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
        files: files || [],
      },
    })

    return NextResponse.json(
      { data: request },
      { status: 201 }
    )

  } catch (error) {
    console.error('Error creating request:', error)
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 500 }
    )
  }
}





export async function GET(req: Request) {
  try {
    const { searchParams } = new URL(req.url)
    const organizationId = searchParams.get('organizationId')

    const requests = await prisma.request.findMany({
      where: organizationId ? { organizationId } : {},
      orderBy: { createdAt: 'desc' }
    })

    return NextResponse.json({ data: requests })
  } catch (error) {
    return NextResponse.json(
      { error: `Something went wrong: ${error}` },
      { status: 500 }
    )
  }
}