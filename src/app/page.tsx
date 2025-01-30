import {
  Card,
  CardSkeletonContainer,
  CardTitle,
  CardDescription
} from './ui/home/card'

import Image from 'next/image'

export default function Home() {
  return (
    <div className="grid grid-cols-1 gap-4 p-4 md:grid-cols-3">
      <h1 className="col-span-1 md:col-span-3 text-4xl font-bold text-left pt-2 pb-2 text-[#c99e46]">
        Take the Oportunity! Start now!
      </h1>
      <Card className="col-span-1 md:col-span-2">
        <CardSkeletonContainer>
          <Image
            src="/analytics2.webp"
            alt="Analytics"
            width={550}
            height={400}
          />
        </CardSkeletonContainer>
        <CardTitle>Analytics for everything</CardTitle>
        <CardDescription>
          Check analytics, track your posts, and get insights into your
          audience.
        </CardDescription>
      </Card>

      <Card className="col-span-1 md:col-span-1">
        <CardSkeletonContainer>
          <Image
            src="/running.webp"
            alt="Analytics"
            width={230}
            height={400}
            className="max-w-fit"
          />
        </CardSkeletonContainer>
        <CardTitle>Be better</CardTitle>
        <CardDescription>Improve everyday.</CardDescription>
      </Card>

      <Card className="col-span-1 md:col-span-1">
        <CardSkeletonContainer>
          <Image src="/logo.webp" alt="Analytics" width={500} height={500} />
        </CardSkeletonContainer>
        <CardTitle>Analytics for everything</CardTitle>
        <CardDescription>
          Check analytics, track your posts, and get insights into your
          audience.
        </CardDescription>
      </Card>
      <Card className="col-span-1 md:col-span-2">
        <CardSkeletonContainer>
          <Image src="/logo.webp" alt="Analytics" width={500} height={500} />
        </CardSkeletonContainer>
        <CardTitle>Analytics for everything</CardTitle>
        <CardDescription>
          Check analytics, track your posts, and get insights into your
          audience.
        </CardDescription>
      </Card>

      <h1
        id="about-us"
        className="col-span-1 md:col-span-3 text-4xl font-bold text-left pt-8 text-[#c99e46]"
      >
        About Us!
      </h1>
      <p className="col-span-1 md:col-span-3 text-lg text-gray-100 mt-4">
        Welcome to <span className="font-semibold text-[#c99e46]">eGym</span>,
        your ultimate fitness companion! Our mission is to revolutionize the way
        you track and optimize your workouts, making it easier than ever to stay
        consistent and reach your fitness goals.
      </p>
      <p className="col-span-1 md:col-span-3 text-lg text-gray-100 mt-4">
        Whether you&apos;re a beginner or an experienced athlete,{' '}
        <span className="font-semibold text-white">eGym</span> helps you
        structure your routines, monitor progress, and stay motivated. With an
        intuitive interface and powerful analytics, we empower you to push past
        limits and train smarter.
      </p>
      <p className="col-span-1 md:col-span-3 text-lg text-gray-100 mt-4">
        Join us and take control of your fitness journey—because progress starts
        with tracking!
      </p>
    </div>
  )
}
