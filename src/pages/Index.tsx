import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const privileges = [
  {
    id: 1,
    name: 'VIP',
    price: '99₽',
    color: 'bg-[hsl(var(--minecraft-grass))]',
    features: [
      'Приставка [VIP] перед ником',
      'Доступ к /fly',
      '5 точек дома (/sethome)',
      'Цветной ник',
      'VIP чат',
    ],
    icon: 'Sparkles',
  },
  {
    id: 2,
    name: 'PREMIUM',
    price: '299₽',
    color: 'bg-[hsl(var(--minecraft-sky))]',
    popular: true,
    features: [
      'Приставка [PREMIUM] перед ником',
      'Все привилегии VIP',
      'Доступ к /god',
      '10 точек дома',
      'Телепортация к игрокам',
      'Возможность создать варп',
    ],
    icon: 'Crown',
  },
  {
    id: 3,
    name: 'LEGEND',
    price: '599₽',
    color: 'bg-[hsl(var(--minecraft-gold))]',
    features: [
      'Приставка [LEGEND] перед ником',
      'Все привилегии PREMIUM',
      'Доступ к /speed',
      '20 точек дома',
      'Кит предметов раз в день',
      'Приоритет входа на сервер',
      'Создание приватных арен',
    ],
    icon: 'Gem',
  },
];

const rules = [
  {
    category: 'Общие правила',
    items: [
      'Запрещено использование читов и недопустимых модов',
      'Запрещено использование багов и дюпов',
      'Запрещены оскорбления игроков и администрации',
      'Запрещен спам в чате',
      'Запрещена реклама сторонних проектов',
    ],
  },
  {
    category: 'Правила строительства',
    items: [
      'Запрещено строить неподобающие постройки',
      'Запрещен гриф чужих построек',
      'Соблюдайте дистанцию от построек других игроков',
      'Не используйте лаги-машины',
    ],
  },
  {
    category: 'PvP правила',
    items: [
      'Запрещен килл в спавне',
      'Не преследуйте игроков после их отказа от PvP',
      'Соблюдайте правила арен',
    ],
  },
];

export default function Index() {
  const [copiedIp, setCopiedIp] = useState(false);
  const serverIp = 'play.myserver.ru';

  const copyIp = () => {
    navigator.clipboard.writeText(serverIp);
    setCopiedIp(true);
    setTimeout(() => setCopiedIp(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[hsl(var(--minecraft-sky))] to-[hsl(var(--minecraft-grass))]">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12 animate-fade-in">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg shadow-2xl p-8 border-4 border-[hsl(var(--minecraft-dark))]">
            <h1 className="text-6xl font-extrabold mb-4 text-[hsl(var(--minecraft-dark))] tracking-tight">
              ⛏️ MINECRAFT СЕРВЕР
            </h1>
            <p className="text-xl text-[hsl(var(--minecraft-stone))] mb-6 font-medium">
              Лучший сервер для настоящих майнкрафтеров!
            </p>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              <div className="bg-[hsl(var(--minecraft-dark))] text-white px-6 py-3 rounded font-mono text-lg font-bold border-4 border-black shadow-lg">
                {serverIp}
              </div>
              <Button
                onClick={copyIp}
                size="lg"
                className="bg-[hsl(var(--minecraft-grass))] hover:bg-[hsl(var(--minecraft-grass))]/80 text-white font-bold border-4 border-[hsl(var(--minecraft-dark))] shadow-lg hover:scale-105 transition-transform"
              >
                <Icon name={copiedIp ? 'Check' : 'Copy'} className="mr-2" size={20} />
                {copiedIp ? 'Скопировано!' : 'Копировать IP'}
              </Button>
            </div>
          </div>
        </header>

        <section id="privileges" className="mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              💎 ПРИВИЛЕГИИ
            </h2>
            <p className="text-white/90 text-lg font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Выбери свою привилегию и получи преимущества!
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {privileges.map((priv, index) => (
              <Card
                key={priv.id}
                className={`relative overflow-hidden border-4 border-[hsl(var(--minecraft-dark))] shadow-2xl hover:scale-105 transition-transform duration-300 ${
                  priv.popular ? 'ring-4 ring-[hsl(var(--minecraft-gold))]' : ''
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {priv.popular && (
                  <div className="absolute top-4 right-4 z-10">
                    <Badge className="bg-[hsl(var(--minecraft-gold))] text-white border-2 border-[hsl(var(--minecraft-dark))] font-bold px-3 py-1 text-sm">
                      🔥 ПОПУЛЯРНЫЙ
                    </Badge>
                  </div>
                )}
                <div className={`${priv.color} h-32 flex items-center justify-center border-b-4 border-[hsl(var(--minecraft-dark))]`}>
                  <Icon name={priv.icon as any} size={64} className="text-white drop-shadow-lg" />
                </div>
                <CardHeader>
                  <CardTitle className="text-3xl font-extrabold text-[hsl(var(--minecraft-dark))]">
                    {priv.name}
                  </CardTitle>
                  <CardDescription className="text-2xl font-bold text-[hsl(var(--minecraft-grass))]">
                    {priv.price}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {priv.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-[hsl(var(--minecraft-grass))] flex-shrink-0 mt-0.5" />
                        <span className="font-medium text-[hsl(var(--minecraft-dark))]">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full ${priv.color} hover:opacity-90 text-white font-bold text-lg py-6 border-4 border-[hsl(var(--minecraft-dark))] shadow-lg hover:scale-105 transition-transform`}
                  >
                    <Icon name="ShoppingCart" className="mr-2" size={20} />
                    Купить
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="rules" className="mb-16 animate-fade-in">
          <div className="text-center mb-8">
            <h2 className="text-5xl font-extrabold text-white mb-2 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
              📜 ПРАВИЛА СЕРВЕРА
            </h2>
            <p className="text-white/90 text-lg font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)]">
              Ознакомься с правилами перед игрой!
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="border-4 border-[hsl(var(--minecraft-dark))] shadow-2xl bg-white/95 backdrop-blur">
              <CardContent className="p-6">
                <Accordion type="single" collapsible className="w-full">
                  {rules.map((section, idx) => (
                    <AccordionItem key={idx} value={`item-${idx}`} className="border-b-2 border-[hsl(var(--minecraft-dark))]/20">
                      <AccordionTrigger className="text-xl font-bold text-[hsl(var(--minecraft-dark))] hover:text-[hsl(var(--minecraft-grass))] py-4">
                        {section.category}
                      </AccordionTrigger>
                      <AccordionContent>
                        <ul className="space-y-3 pt-2">
                          {section.items.map((item, itemIdx) => (
                            <li key={itemIdx} className="flex items-start gap-3">
                              <Icon name="AlertCircle" size={18} className="text-[hsl(var(--destructive))] flex-shrink-0 mt-0.5" />
                              <span className="text-[hsl(var(--minecraft-dark))] font-medium">{item}</span>
                            </li>
                          ))}
                        </ul>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </div>
        </section>

        <footer className="text-center pb-8">
          <div className="inline-block bg-white/90 backdrop-blur-sm rounded-lg shadow-xl p-6 border-4 border-[hsl(var(--minecraft-dark))]">
            <p className="text-[hsl(var(--minecraft-dark))] font-bold text-lg mb-2">
              🎮 Присоединяйся к нашему серверу прямо сейчас!
            </p>
            <p className="text-[hsl(var(--minecraft-stone))] font-medium">
              Онлайн 24/7 • Дружное комьюнити • Регулярные ивенты
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
