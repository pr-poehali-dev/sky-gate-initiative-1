import { Plus, Minus } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface FAQ {
  question: string
  answer: string
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
      "Я работаю как очно (Екатеринбург), так и онлайн по всему миру — в Zoom или Telegram. Для детских консультаций и диагностики предпочтителен очный формат, хотя часть встреч с родителями проходит онлайн.",
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

const FaqSection = () => {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index)
  }

  return (
    <>
      {/* FAQ Section */}
      <section className="relative z-10 py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="rounded-3xl bg-white/5 ring-1 ring-white/10 backdrop-blur p-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">
                  Частые вопросы
                </h2>
                <p className="text-xl text-white/80 leading-relaxed text-pretty">
                  Всё, что важно знать перед первой встречей — о формате работы, длительности и том, чего ожидать.
                </p>
              </div>

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
            <div className="text-center mb-16">
              <h2 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-balance">Запись на консультацию</h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Contact Form */}
              <div className="rounded-2xl bg-white/95 text-black p-8 shadow-2xl">
                <h3 className="text-2xl font-bold mb-6">Оставить заявку</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">Имя</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="Ваше имя"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Телефон или Telegram</label>
                    <input
                      type="text"
                      id="phone"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      placeholder="+7 900 000 00 00 или @username"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">С чем хотите обратиться?</label>
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
    </>
  )
}

export default FaqSection
