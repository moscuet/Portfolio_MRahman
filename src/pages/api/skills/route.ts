import { NextResponse } from 'next/server'
import skills from '../../../../data/skills.json'


import type { NextApiRequest, NextApiResponse } from 'next'

export  function GET(request: Request) {
    return NextResponse.json(skills,{status:200})
}