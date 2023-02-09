function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold">
            Ben Yusuf Ekin. Yazılım mühendisliği lisans öğrencisiyim.
          </h1>

          <p>
            Back-end ve front-end teknolojileri, psikoloji ve matematik gibi
            konularla ilgilenmeyi seviyorum.
          </p>

          <p>
            Blog sitesi üzerinde öğrendiklerimi pekiştirmeyi ve türkçe açık
            kaynağa katkıda bulunmayı planlıyorum.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-16">
        <img src="/wallpaper1.jpg" alt="" />
      </div>
    </>
  )
}

export default HomePage
