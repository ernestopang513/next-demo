
import { MainLayout } from '../components/layouts/MainLayout'
import Link from '../node_modules/next/link'
export default function AboutPage() {
  return (
  
    <MainLayout>
      <h1>About Page</h1>
      <h1 className={'title'}>
        Ir a <Link href="/">home</Link>
      </h1>

      <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/about.js</code>
      </p>
    </MainLayout>
  )
}