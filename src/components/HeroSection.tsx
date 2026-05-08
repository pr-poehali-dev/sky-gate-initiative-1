import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const HeroSection = () => {
  return (
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
        <div className="flex items-center gap-2 px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full">
          <Icon name="Brain" size={18} />
          <span className="font-medium text-balance">Елена Виноградова</span>
        </div>

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

        <div className="flex items-center gap-3">
          <a href="https://t.me/+79089101320" target="_blank" rel="noopener noreferrer">
            <Button className="bg-[#e8c4b0] text-[#2C1F1A] hover:bg-[#ddb49e] rounded-full px-6 font-medium">Записаться</Button>
          </a>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[calc(100vh-120px)] px-6 text-center">
        <div className="mb-6 px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full">
          <span className="text-sm font-medium text-[#e8c4b0]">Клинический психолог · Логопед-дефектолог · Психоаналитик</span>
        </div>

        <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6 text-balance">Пространство, где можно быть собой.</h1>

        <p className="text-xl md:text-2xl text-white/90 max-w-4xl mb-12 leading-relaxed text-pretty">
          Помогаю взрослым и подросткам разобраться в себе, найти опору в кризисе и выстроить жизнь, которую хочется жить. Очно в Екатеринбурге и онлайн.
        </p>

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

        <div className="flex items-center gap-2 px-4 py-2 bg-[#3d2820]/60 ring-1 ring-[#e8c4b0]/20 backdrop-blur rounded-full">
          <Icon name="Shield" size={16} />
          <span className="text-sm font-medium">Конфиденциальность — моя профессиональная обязанность</span>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
