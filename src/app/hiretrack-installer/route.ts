import { NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';

export async function GET() {
  try {
    // Read the installer file from the project root
    const filePath = join(process.cwd(), 'hiretrack-installer');
    const fileBuffer = await readFile(filePath);

    // Return the file with appropriate headers
    return new NextResponse(fileBuffer, {
      status: 200,
      headers: {
        'Content-Type': 'application/octet-stream',
        'Content-Disposition': 'attachment; filename="hiretrack-installer"',
        'X-Content-Type-Options': 'nosniff',
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving installer:', error);
    return new NextResponse('Installer not found', { status: 404 });
  }
}
