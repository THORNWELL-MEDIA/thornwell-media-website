'use client'

import React from 'react'
import { useCareersFilter } from './careers-filter-context'

export function LivePositionsHeader({ initialCount }: { initialCount: number }) {
  const { filteredRoles } = useCareersFilter()
  const count = filteredRoles ? filteredRoles.length : initialCount

  return (
    <h2 className="mt-6 font-serif text-display-md font-semibold text-navy-900 balance">
      {count} {count === 1 ? 'role' : 'roles'} open right now.
    </h2>
  )
}

export function LiveHeroCount({ initialCount }: { initialCount: number }) {
  const { filteredRoles } = useCareersFilter()
  const count = filteredRoles ? filteredRoles.length : initialCount

  return <span>View open positions ({count})</span>
}
