"use client"

import React from 'react'

import MeetingTypeList from '@/components/MeetingTypeList';
import { useUser } from '@clerk/nextjs'
import CallList from '@/components/CallList';

const Home = () => {
  const { user } = useUser();
  const now = new Date()

  const time = now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
  const date = (new Intl.DateTimeFormat('en-US', { dateStyle: 'full' })).format(now);

  return (
    <section className="flex size-full flex-col gap-5 text-white">
      <div className="h-[300px] w-full rounded-[20px] bg-hero bg-cover">
        <div className="flex h-full flex-col justify-between max-md:px-5 max-md:py-8 max-lg:px-5 max-lg:py-8 lg:p-11">
          <h1 className="max-w-[100%] lg:max-w-[700px] py-2 text-start text-lg lg:text-2xl font-extrabold text-sky-1">
            Welcome! {user?.username && user.username.charAt(0).toUpperCase() + user.username.slice(1)}
          </h1>
          <div className="flex flex-col gap-2">
            <h1 className="text-4xl font-extrabold lg:text-7xl">
              {time}
            </h1>
            <p className="text-lg font-medium text-sky-1 lg:text-2xl">
              {date}
            </p>
          </div>
        </div>
      </div>

      <MeetingTypeList />

      <div className="flex flex-col gap-2">
        <h2 className="text-lg font-bold text-white lg:text-2xl">
          Upcoming Meetings
        </h2>
        
        <CallList type="upcoming" />
      </div>
    </section>
  )
}

export default Home