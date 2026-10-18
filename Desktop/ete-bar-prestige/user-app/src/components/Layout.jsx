export default function Layout({ title, children, subtitle }) {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-teal-brand text-black py-4 px-6 flex items-center justify-between">
        <div className="font-bold text-lg">اعتبار پرستیژ</div>
        <div className="text-sm">پنل کاربری</div>
      </header>
      <main className="flex-1 flex items-center justify-center p-4">
        <div className="w-full max-w-md">
          {title && (
            <div className="mb-6 text-center">
              <h1 className="text-2xl font-bold">{title}</h1>
              {subtitle && <p className="text-gray-400 mt-2 text-sm">{subtitle}</p>}
            </div>
          )}
          <div className="card-dark">{children}</div>
        </div>
      </main>
      <footer className="text-center text-xs text-gray-500 py-4">
        © اعتبار پرستیژ — نسخه MVP
      </footer>
    </div>
  );
}