
import { MainLayout } from "../components/layouts/MainLayout"
import Link from "../node_modules/next/link"

export default function contactPage() {
  return (

    <MainLayout>
      <h1>Contact Page</h1>
        <h1 className={'title'}>
          Ir a <Link href="/">Home</Link>
        </h1>
        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contac.jsx</code>
        </p>
    </MainLayout>
  )
}
