import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const FooterSection = () => {
  return (
    <footer className="relative z-10 py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="rounded-3xl bg-white/[0.03] backdrop-blur-2xl ring-1 ring-white/10 p-12">
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
                {["Психологическая консультация", "Семейная терапия", "Психоанализ", "Кризисная помощь"].map((item) => (
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
                {["Записаться онлайн", "Telegram", "Екатеринбург", "Вопросы и ответы"].map((item) => (
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
  )
}

export default FooterSection
