import { NextResponse } from 'next/server'
import projects from '../../../../data/projects.json'


export  function GET(request: Request) {
    return NextResponse.json(projects,{status:200})
}