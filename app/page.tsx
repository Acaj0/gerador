import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black">
      <main className="text-center">
        <h1 className="text-4xl font-bold mb-4">Bem-vindo ao Gerador de Posts Instagram</h1>
        <p className="text-xl mb-8">Crie posts incríveis para o Instagram com facilidade!</p>
        <div className="space-x-4">
          <Link href="/login" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Entrar
          </Link>
          <Link href="/dashboard" className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded">
            Dashboard
          </Link>
        </div>
      </main>
    </div>
  )
}

