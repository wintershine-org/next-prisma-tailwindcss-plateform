import { Suspense } from 'react'
// import { PostFeed, Weather } from './Components'
 
export default function Posts() {
  return (
    <section>
      <Suspense fallback={<p>Loading feed...</p>}>
        asdasd
      </Suspense>
      <Suspense fallback={<p>Loading weather...</p>}>
       ssssss
      </Suspense>
    </section>
  )
}