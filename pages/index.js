export default function HomePage() {
  return (
    <>
      <div className="site-container">
        <div className="space-y-4">
          <h1 className="text-2xl font-bold 2xl">
            Ben Yusuf Ekin. Yazılım mühendisliği lisans öğrencisiyim.
          </h1>

          <p>
            Back-end ve front-end teknolojileri, psikoloji ve film gibi
            konularla ilgilenmeyi seviyorum.
          </p>

          <p>
            Blog sitesi üzerinde öğrendiklerimi pekiştirmeyi ve türkçe açık
            kaynağa katkıda bulunmayı planlıyorum.
          </p>
        </div>
      </div>

      <div className="site-4xl-container mt-16">
        <div
          style={{
            borderRadius: '30px',
            overflow: 'hidden',
            boxShadow:
              'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.20) 0px -12px 30px, rgba(0, 0, 0, 0.40) 0px 4px 6px, rgba(0, 0, 0, 0.40) -3px 12px 13px, rgba(0, 0, 0, 0.70) 0px -3px 5px'
          }}
        >
          <img src="/agentSmith.jpg" alt="" />
        </div>
      </div>
    </>
  )
}
