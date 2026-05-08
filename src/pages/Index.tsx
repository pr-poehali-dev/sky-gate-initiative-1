import { Heart, BookOpen, Users, Sparkles, Plus, Minus, Mail, Brain, Baby, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
}

const Index = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  const faqs: FAQ[] = [
    {
      question: "Как проходит первая консультация?",
      answer:
        "Первая встреча — это знакомство и сбор информации. Мы обсуждаем ваш запрос, историю, текущую ситуацию. Я объясняю, как будет строиться работа, отвечаю на вопросы. Консультация длится 60 минут. После неё вы получите чёткое понимание того, чем и как я могу помочь.",
    },
    {
      question: "В каком формате проходят консультации?",
      answer:
        "Я работаю как очно (Санкт-Петербург), так и онлайн по всему миру — в Zoom или Telegram. Для детских консультаций и диагностики предпочтителен очный формат, хотя часть встреч с родителями проходит онлайн.",
    },
    {
      question: "Вы работаете с детьми или только со взрослыми?",
      answer:
        "Работаю с детьми от 3 лет, подростками и взрослыми. Как логопед-дефектолог помогаю детям с задержкой речевого развития, нарушениями звукопроизношения, дислексией. Как клинический психолог — веду семьи, пары и индивидуальных клиентов в кризисных и жизненных ситуациях.",
    },
    {
      question: "Сколько сессий понадобится?",
      answer:
        "Зависит от запроса. Разовая консультация возможна, если вам нужен совет или прояснение ситуации. Для работы с речью у детей — обычно 10–20 занятий. Психологическая работа со взрослыми чаще всего занимает от 8 до 20 сессий. Я всегда честно говорю о прогнозе на первой встрече.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#2C1F1A] text-white">
      {/* Hero Section */}
      <div className="relative min-h-screen">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/files/fda2f0a7-acd7-43a2-98fc-315145997206.jpg)",
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-[#2C1F1A]/40 to-[#2C1F1A]/90" />
        </div>

        {/* Navigation */}
        <nav className="relative z-10 flex items-center justify-between p-6">
          {/* Logo */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full">
            <Icon name="Brain" size={18} />
            <span className="font-medium text-balance">Елена Виноградова</span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {["Обо мне", "Услуги", "Образование", "Вопросы", "Контакты"].map((item) => (
              <a
                key={item}
                href="#"
                className="px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full hover:bg-[#3d2820]/80 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-3">
            <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer">
              <Button className="bg-[#e8c4b0] text-[#2C1F1A] hover:bg-[#ddb49e] rounded-full px-6 font-medium">Записаться</Button>
            </a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
          {/* Badge */}
          <div className="mb-6 px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full">
            <span className="text-sm font-medium text-[#e8c4b0]">Клинический психолог · Логопед-дефектолог · Психоаналитик</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Пространство, где можно быть собой.</h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
            Помогаю взрослым и подросткам разобраться в себе, найти опору в кризисе и выстроить жизнь, которую хочется жить. Очно в Екатеринбурге и онлайн.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16">
            <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="bg-[#e8c4b0] text-[#2C1F1A] hover:bg-[#ddb49e] rounded-full px-8 py-4 text-lg font-medium">
                Записаться на консультацию
              </Button>
            </a>
            <Button
              size="lg"
              variant="outline"
              className="bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/30 backdrop-blur border-0 text-white hover:bg-[#3d2820]/80 rounded-full px-8 py-4 text-lg"
            >
              Узнать об услугах
            </Button>
          </div>

          {/* Footer Note */}
          <div className="flex items-center gap-2 px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full">
            <Icon name="Shield" size={16} />
            <span className="text-sm font-medium">Конфиденциальность — моя профессиональная обязанность</span>
          </div>
        </div>
      </div>

      {/* About Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              {/* Photo */}
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

              {/* Text */}
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
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Как устроена работа</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto text-pretty">
                От первого обращения до достижения результата — прозрачный и понятный путь.
              </p>
            </div>

            {/* Journey Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">01.</div>
                  <h3 className="text-xl font-semibold mb-4">Первичная консультация</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Знакомимся, обсуждаем запрос, я объясняю план работы. Вы уходите с ясностью — что происходит и как с этим работать.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">02.</div>
                  <h3 className="text-xl font-semibold mb-4">Диагностика</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    При необходимости провожу психологическую или логопедическую диагностику для точного понимания ситуации.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">03.</div>
                  <h3 className="text-xl font-semibold mb-4">Регулярная работа</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Сессии раз в неделю — онлайн или очно. Каждая встреча — шаг к изменениям, которые вы почувствуете в жизни.
                  </p>
                </div>
              </div>

              <div className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-8 h-80 flex flex-col">
                <div className="flex-1">
                  <div className="text-3xl font-bold text-white/60 mb-4">04.</div>
                  <h3 className="text-xl font-semibold mb-4">Результат</h3>
                  <p className="text-white/80 leading-relaxed text-sm">
                    Вы сами замечаете перемены — в мыслях, поведении, отношениях. Завершаем работу, когда цель достигнута.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
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
              {[
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
                  title: "Повышение квалификации",
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
              ].map((diploma, i) => (
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

      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column */}
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что важно знать перед первой встречей — о формате работы, длительности и том, чего ожидать.
                </p>
              </div>

              {/* Right Column - FAQ Accordion */}
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="rounded-2xl bg-white/5 ring-1 ring-white/10 backdrop-blur overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                    >
                      <h3 className="text-lg font-semibold pr-4">{faq.question}</h3>
                      {openFaq === index ? (
                        <Minus className="w-5 h-5 flex-shrink-0" />
                      ) : (
                        <Plus className="w-5 h-5 flex-shrink-0" />
                      )}
                    </button>
                    {openFaq === index && (
                      <div className="px-6 pb-6">
                        <p className="text-white/80 leading-relaxed">{faq.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-black/20 ring-1 ring-white/15 backdrop-blur p-12">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Запись на консультацию</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Имя
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">
                      Телефон или Telegram
                    </label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 900 000 00 00 или @username"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      С чем хотите обратиться?
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
                      placeholder="Кратко опишите запрос — для ребёнка или для себя..."
                    />
                  </div>
                  <Button className="w-full bg-[#2C1F1A] text-[#e8c4b0] hover:bg-[#3d2820] rounded-lg py-3 font-normal text-base">
                    Отправить заявку
                  </Button>
                </form>
              </div>

              {/* Right Column - Contact Info */}
              <div className="space-y-6">
                <div>
                  <p className="text-xl text-white/90 leading-relaxed text-pretty">
                    Напишите или позвоните — и мы договоримся о времени, удобном для вас. Отвечаю в течение одного дня.
                  </p>
                </div>

                {/* Contact Buttons */}
                <div className="space-y-3">
                  <a href="tel:+79089101320" className="flex items-center gap-4 rounded-2xl bg-white/95 text-black p-5 shadow-lg hover:bg-white transition-colors">
                    <div className="w-11 h-11 rounded-full bg-[#e8c4b0] flex items-center justify-center flex-shrink-0">
                      <Icon name="Phone" size={20} />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Позвонить</p>
                      <p className="font-semibold text-lg">+7 908 910-13-20</p>
                    </div>
                  </a>

                  <a href="https://wa.me/79089101320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/95 text-black p-5 shadow-lg hover:bg-white transition-colors">
                    <div className="w-11 h-11 rounded-full bg-[#25D366] flex items-center justify-center flex-shrink-0">
                      <Icon name="MessageCircle" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Написать в WhatsApp</p>
                      <p className="font-semibold text-lg">+7 908 910-13-20</p>
                    </div>
                  </a>

                  <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/95 text-black p-5 shadow-lg hover:bg-white transition-colors">
                    <div className="w-11 h-11 rounded-full bg-[#229ED9] flex items-center justify-center flex-shrink-0">
                      <Icon name="Send" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Написать в Telegram</p>
                      <p className="font-semibold text-lg">+7 908 910-13-20</p>
                    </div>
                  </a>

                  <a href="https://m.vk.com/vinogradovapsiholog" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl bg-white/95 text-black p-5 shadow-lg hover:bg-white transition-colors">
                    <div className="w-11 h-11 rounded-full bg-[#0077FF] flex items-center justify-center flex-shrink-0">
                      <Icon name="Users" size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-0.5">Я ВКонтакте</p>
                      <p className="font-semibold text-lg">vinogradovapsiholog</p>
                    </div>
                  </a>
                </div>

                {/* Profile Card */}
                <div className="rounded-2xl bg-white/95 text-black p-5 shadow-lg">
                  <div className="flex items-center gap-4">
                    <img
                      src="https://cdn.poehali.dev/projects/a31c1bb9-5d69-4d4e-a32a-318fb145b5e1/bucket/846f26fc-542e-41ba-b1d9-3e5a86c00d43.jpg"
                      alt="Елена Виноградова"
                      className="w-14 h-14 rounded-full object-cover object-top flex-shrink-0"
                    />
                    <div>
                      <h4 className="font-semibold">Елена Виноградова</h4>
                      <p className="text-gray-500 text-sm">Клинический психолог · Екатеринбург</p>
                      <p className="text-gray-400 text-xs mt-0.5">Очно и онлайн · Взрослые и подростки</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
            {/* Main Footer Content */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
              {/* Brand Section */}
              <div className="lg:col-span-2">
                <div className="flex items-center gap-2 mb-6">
                  <Icon name="Brain" size={24} />
                  <span className="text-xl font-semibold">Елена Виноградова</span>
                </div>
                <p className="text-white/80 leading-relaxed text-pretty mb-6">
                  Клинический психолог, логопед-дефектолог и психоаналитик. Помогаю взрослым и подросткам находить опору и себя.
                </p>
                <div className="flex gap-3">
                  <a href="https://m.vk.com/vinogradovapsiholog" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#0077FF] flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Icon name="Users" size={18} className="text-white" />
                  </a>
                  <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#229ED9] flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Icon name="Send" size={18} className="text-white" />
                  </a>
                  <a href="https://wa.me/79089101320" target="_blank" rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center hover:opacity-80 transition-opacity">
                    <Icon name="MessageCircle" size={18} className="text-white" />
                  </a>
                </div>
              </div>

              {/* Services Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">УСЛУГИ</h3>
                <ul className="space-y-3">
                  {["Психологическая консультация", "Логопедия для детей", "Семейная терапия", "Психоанализ"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* About Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">О СПЕЦИАЛИСТЕ</h3>
                <ul className="space-y-3">
                  {["Образование", "Подход в работе", "Дипломы и сертификаты", "Публикации"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Resources Links */}
              <div>
                <h3 className="text-sm font-bold uppercase tracking-wider mb-6">КОНТАКТЫ</h3>
                <ul className="space-y-3">
                  {["Записаться онлайн", "Telegram", "Санкт-Петербург", "Вопросы и ответы"].map((item) => (
                    <li key={item}>
                      <a href="#" className="text-white/70 hover:text-white transition-colors text-sm leading-relaxed">
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Newsletter Section */}
            <div className="border-t border-white/10 pt-12 mb-12">
              <div className="max-w-md">
                <h3 className="text-lg font-semibold mb-4">Полезные материалы на почту</h3>
                <div className="flex gap-3">
                  <input
                    type="email"
                    placeholder="Ваш email"
                    className="flex-1 px-4 py-3 rounded-lg bg-white/5 ring-1 ring-white/20 backdrop-blur border-0 text-white placeholder:text-white/50 focus:ring-2 focus:ring-white/30 focus:outline-none"
                  />
                  <Button className="bg-[#e8c4b0] text-[#2C1F1A] hover:bg-[#ddb49e] rounded-lg px-6 h-[50px]">Подписаться</Button>
                </div>
              </div>
            </div>

            {/* Sub-footer */}
            <div className="border-t border-white/10 pt-8">
              <p className="text-white/60 text-sm text-center">© 2026 Елена Виноградова · Психолог · Логопед-дефектолог</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Index