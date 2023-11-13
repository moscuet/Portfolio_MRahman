import { NextResponse } from 'next/server';
import {projects }from '../../../../../data/projects.json';


export function GET(request: Request, context: any) {
    const id = parseInt(context.params.id);

    const project = projects.find((project) => project.id === id);

    if (project) {
        return NextResponse.json(project, { status: 200 });
    } else {
        return NextResponse.json({ message: "Project not found" }, { status: 404 });
    }
}
