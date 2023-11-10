import React from 'react';

export default async function getProject(id: string) {
  const res = await fetch(`http://localhost:3000/api/projects/${id}`, {
    method: 'GET',
    headers: {
      'Cache-Control': 'no-cache'
    }
  });

  if (!res.ok) throw new Error('Failed to fetch data');
  return res.json();
}
