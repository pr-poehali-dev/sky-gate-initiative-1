import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const AboutSection = () => {
  const diplomas = [
    {
      url: "https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/bucket/6f5138c8-2ab3-4608-b68e-f4b9167ff709.jpg",
      title: "Культурология",
      org: "УрГУ им. А.М. Горького, Екатеринбург",
      year: "2005",
    },
    {
      url: "https://cdn.poehali.dev/files/158b4921-7868-457b-8c68-cb5eaf31cc9e.png",
      title: "Психоанализ",
      org: "Уральский федеральный университет",
      year: "2015–2019",
    },
    {
      url: "https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/bucket/c505d335-4832-4bd2-adb6-6a4c0eb7a5de.jpg",
      title: "Психоаналитическая работа с детьми",
      org: "Восточно-Европейский институт психоанализа",
      year: "2018",
    },
    {
      url: "https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/bucket/932a630a-9287-48e0-a257-8006be7c7ef1.jpg",
      title: "Нейропсихологическая помощь",
      org: "АНО ДПО «ЦНПР»",
      year: "2018",
    },
    {
      url: "https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/bucket/b72c891d-fd94-4ca3-9dd7-d1377c2e8258.jpg",
      title: "Нейропсихология детского возраста",
      org: "АНО НИИДПО",
      year: "2018",
    },
    {
      url: "https://cdn.poehali.dev/files/8199a3bb-2ff8-4704-83e0-ac610ff48aa5.jpg",
      title: "Семейная психотерапия",
      org: "Институт психотерапии им. Б.Д. Карвасарского",
      year: "2019",
    },
    {
      url: "https://cdn.poehali.dev/files/e8c6b077-723e-42e6-b378-ba6da757fe98.jpg",
      title: "Логопед-дефектолог",
      org: "АНО НИИДПО",
      year: "2019",
    },
    {
      url: "https://cdn.poehali.dev/files/7ba9dbb8-0d37-4a25-8306-2a15d9ab93c8.jpg",
      title: "Клинический психолог",
      org: "АНО НИИДПО",
      year: "2019",
    },
  ]

  return (
    <>
      {/* About Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="flex justify-center">
                <div className="relative">
                  <img
                    src="https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/bucket/846f26fc-542e-41ba-b1d9-3e5a86c00d43.jpg"
                    alt="Елена Виноградова"
                    className="w-80 h-96 object-cover object-top rounded-3xl ring-1 ring-white/20"
                  />
                  <div className="absolute -bottom-4 -right-4 px-5 py-3 bg-white text-black rounded-2xl shadow-xl text-sm font-semibold">
                    7+ лет практики
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <p className="text-white/60 text-sm uppercase tracking-widest mb-3">О специалисте</p>
                  <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-balance">Елена Виноградова</h2>
                </div>
                <p className="text-white/80 text-lg leading-relaxed">
                  Клинический психолог, логопед-дефектолог, психоаналитик. Работаю со взрослыми и подростками — очно в Екатеринбурге и онлайн по всему миру.
                </p>
                <p className="text-white/70 leading-relaxed">
                  Моя задача — создать пространство, где можно говорить честно и без страха осуждения. Верю, что каждый человек способен на изменения, когда чувствует поддержку и понимание.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  {[
                    { label: "Психоанализ", sub: "УрФУ, 2019" },
                    { label: "Клинический психолог", sub: "АНО НИИДПО, 2019" },
                    { label: "Логопед-дефектолог", sub: "АНО НИИДПО, 2019" },
                    { label: "Повышение квалификации", sub: "Институт психотерапии, 2019" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl bg-white/5 ring-1 ring-white/10 p-4">
                      <p className="text-white font-medium text-sm">{item.label}</p>
                      <p className="text-white/50 text-xs mt-1">{item.sub}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-2xl bg-[#3d2820]/50 ring-1 ring-[#e8c4b0]/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8c4b0]/10 ring-1 ring-[#e8c4b0]/20 mb-6">
                <Icon name="Brain" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Клинический психолог</h3>
              <p className="text-white/80 leading-relaxed">Тревога, депрессия, кризисы, психосоматика — работаю системно и бережно.</p>
            </div>

            <div className="rounded-2xl bg-[#3d2820]/50 ring-1 ring-[#e8c4b0]/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8c4b0]/10 ring-1 ring-[#e8c4b0]/20 mb-6">
                <Icon name="Users" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Семейный психолог</h3>
              <p className="text-white/80 leading-relaxed">Работаю с парами и семьями: конфликты, кризисы отношений, родительство.</p>
            </div>

            <div className="rounded-2xl bg-[#3d2820]/50 ring-1 ring-[#e8c4b0]/15 backdrop-blur p-8 text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#e8c4b0]/10 ring-1 ring-[#e8c4b0]/20 mb-6">
                <Icon name="Sparkles" size={24} />
              </div>
              <h3 className="text-xl font-semibold mb-4">Психоанализ</h3>
              <p className="text-white/80 leading-relaxed">Глубинная работа с личностью, паттернами поведения и бессознательными процессами.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как устроена работа</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От первого обращения до достижения результата — прозрачный и понятный путь.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { num: "01.", title: "Первичная консультация", text: "Знакомимся, обсуждаем запрос, я объясняю план работы. Вы уходите с ясностью — что происходит и как с этим работать." },
                { num: "02.", title: "Диагностика", text: "При необходимости провожу психологическую или логопедическую диагностику для точного понимания ситуации." },
                { num: "03.", title: "Регулярная работа", text: "Сессии раз в неделю — онлайн или очно. Каждая встреча — шаг к изменениям, которые вы почувствуете в жизни." },
                { num: "04.", title: "Результат", text: "Вы сами замечаете перемены — в мыслях, поведении, отношениях. Завершаем работу, когда цель достигнута." },
              ].map((step) => (
                <div key={step.num} className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                  <div className="flex-1">
                    <div className="text-3xl font-bold text-white/60 mb-4">{step.num}</div>
                    <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                    <p className="text-white/80 leading-relaxed text-sm">{step.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center">
              <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer">
                <Button
                  size="lg"
                  className="bg-[#e8c4b0] text-[#2C1F1A] hover:bg-[#ddb49e] rounded-full px-12 py-4 text-lg font-medium"
                >
                  Записаться на первую консультацию
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Стоимость</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto text-pretty">
                Прозрачные условия без скрытых платежей.
              </p>
            </div>

            <div className="max-w-sm mx-auto">
              <div className="rounded-3xl bg-[#e8c4b0]/10 ring-2 ring-[#e8c4b0]/40 p-10 text-center">
                <p className="text-[#e8c4b0] text-sm uppercase tracking-widest mb-4">Индивидуальная консультация</p>
                <div className="text-7xl font-bold mb-2">2 000 ₽</div>
                <p className="text-white/60 mb-8">60 минут · онлайн или очно</p>
                <ul className="space-y-3 text-left mb-10">
                  {[
                    "Работа со взрослыми и подростками",
                    "Очно в Екатеринбурге",
                    "Онлайн — по всему миру",
                    "Конфиденциально",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/80">
                      <div className="w-5 h-5 rounded-full bg-[#e8c4b0]/20 ring-1 ring-[#e8c4b0]/40 flex items-center justify-center flex-shrink-0">
                        <Icon name="Check" size={12} className="text-[#e8c4b0]" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>
                <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full bg-[#e8c4b0] text-[#2C1F1A] hover:bg-[#ddb49e] rounded-full py-4 text-base font-medium">
                    Записаться
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Diplomas Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Образование и квалификация</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                Профессиональная подготовка подтверждена дипломами государственного образца.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {diplomas.map((diploma, i) => (
                <div key={i} className="rounded-2xl overflow-hidden ring-1 ring-white/15 group cursor-pointer">
                  <div className="relative overflow-hidden h-72">
                    <img
                      src={diploma.url}
                      alt={diploma.title}
                      className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  </div>
                  <div className="p-5 bg-black/20 backdrop-blur">
                    <h3 className="font-semibold text-white mb-1">{diploma.title}</h3>
                    <p className="text-white/60 text-sm">{diploma.org}</p>
                    <p className="text-white/40 text-xs mt-1">{diploma.year}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutSection
