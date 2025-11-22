import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Icon from '@/components/ui/icon';
import { useToast } from '@/hooks/use-toast';

interface Equipment {
  id: number;
  name: string;
  category: string;
  description: string;
  safety: string[];
  image: string;
}

const equipmentData: Equipment[] = [
  {
    id: 1,
    name: 'Беговая дорожка',
    category: 'Кардио',
    description: 'Профессиональная беговая дорожка с регулируемой скоростью и углом наклона. Идеальна для разминки и кардиотренировок.',
    safety: ['Начинайте с низкой скорости', 'Используйте страховочный трос', 'Не спрыгивайте с движущейся ленты'],
    image: '/placeholder.svg'
  },
  {
    id: 2,
    name: 'Силовая рама',
    category: 'Силовые',
    description: 'Многофункциональная силовая рама для приседаний, жима и подтягиваний. Максимальная нагрузка 300 кг.',
    safety: ['Всегда используйте страховочные упоры', 'Проверяйте крепление грифа', 'Не превышайте максимальный вес'],
    image: '/placeholder.svg'
  },
  {
    id: 3,
    name: 'Велотренажер',
    category: 'Кардио',
    description: 'Вертикальный велотренажер с электронным дисплеем и программируемыми режимами тренировок.',
    safety: ['Отрегулируйте высоту сиденья', 'Начинайте с легкого сопротивления', 'Держите спину прямо'],
    image: '/placeholder.svg'
  },
  {
    id: 4,
    name: 'Гантельный ряд',
    category: 'Силовые',
    description: 'Набор гантелей от 2 до 50 кг. Подходит для всех уровней подготовки.',
    safety: ['Выбирайте адекватный вес', 'Контролируйте движения', 'Ставьте гантели на стойку после использования'],
    image: '/placeholder.svg'
  },
  {
    id: 5,
    name: 'Эллиптический тренажер',
    category: 'Кардио',
    description: 'Эллипсоид с минимальной нагрузкой на суставы. 20 уровней сопротивления.',
    safety: ['Держитесь за поручни при старте', 'Ставьте ноги полностью на педали', 'Останавливайтесь плавно'],
    image: '/placeholder.svg'
  },
  {
    id: 6,
    name: 'Скамья для жима',
    category: 'Силовые',
    description: 'Регулируемая скамья для жима под разными углами. Максимальная нагрузка 250 кг.',
    safety: ['Используйте страховочные стойки', 'Не работайте без страхующего с большим весом', 'Проверяйте фиксацию угла наклона'],
    image: '/placeholder.svg'
  }
];

const partners = [
  { name: 'FitApp', logo: '💪' },
  { name: 'HealthTrack', logo: '❤️' },
  { name: 'SportPro', logo: '🏃' },
  { name: 'NutriPlan', logo: '🥗' }
];

export default function Index() {
  const [selectedCategory, setSelectedCategory] = useState<string>('Все');
  const [feedbackForm, setFeedbackForm] = useState({ name: '', email: '', message: '' });
  const { toast } = useToast();

  const categories = ['Все', 'Кардио', 'Силовые'];
  
  const filteredEquipment = selectedCategory === 'Все' 
    ? equipmentData 
    : equipmentData.filter(eq => eq.category === selectedCategory);

  const handleFeedbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Спасибо за ваш отзыв!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    setFeedbackForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center gap-2 slide-in-left">
              <Icon name="Dumbbell" size={32} className="text-primary animate-bounce-slow" />
              <span className="text-2xl font-bold gradient-text">Енисей</span>
            </div>
            <div className="hidden md:flex items-center gap-6 slide-in-right">
              <a href="#home" className="hover:text-primary transition-all duration-300 hover:scale-110">Главная</a>
              <a href="#equipment" className="hover:text-primary transition-all duration-300 hover:scale-110">Тренажеры</a>
              <a href="#feedback" className="hover:text-primary transition-all duration-300 hover:scale-110">Обратная связь</a>
              <a href="#info" className="hover:text-primary transition-all duration-300 hover:scale-110">Информация</a>
              <Button variant="default" className="energy-glow">Войти</Button>
            </div>
          </nav>
        </div>
      </header>

      <section id="home" className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-background">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 zoom-in" variant="secondary">Информационный портал</Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Спортивный зал <span className="gradient-text">Енисей</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto animate-slide-up">
              Современная спортивная площадка с профессиональным оборудованием. 
              Узнайте о возможностях тренажеров и технике безопасности.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up" style={{animationDelay: '0.2s'}}>
              <Button size="lg" className="text-lg energy-glow hover:scale-110 transition-transform duration-300">
                <Icon name="Dumbbell" size={20} className="mr-2" />
                Классификатор тренажеров
              </Button>
              <Button size="lg" variant="outline" className="text-lg hover-lift dynamic-border">
                <Icon name="Play" size={20} className="mr-2" />
                Видео-инструкции
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-8">Наши партнеры</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover-scale cursor-pointer text-center zoom-in" style={{animationDelay: `${index * 0.1}s`}}>
                <CardContent className="p-6">
                  <div className="text-4xl mb-2 floating" style={{animationDelay: `${index * 0.3}s`}}>{partner.logo}</div>
                  <p className="font-semibold">{partner.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="equipment" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Классификатор тренажеров</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полная информация об оборудовании с видео-инструкциями и правилами безопасности
            </p>
          </div>

          <div className="flex justify-center gap-2 mb-8 flex-wrap animate-fade-in">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? 'default' : 'outline'}
                onClick={() => setSelectedCategory(category)}
                className={selectedCategory === category ? 'energy-glow' : 'hover-lift'}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredEquipment.map((equipment, index) => (
              <Card key={equipment.id} className="hover-scale overflow-hidden slide-in-left" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" style={{animation: 'shimmer 3s infinite'}}></div>
                  <Icon name="Dumbbell" size={64} className="text-primary animate-pulse-slow" />
                </div>
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle>{equipment.name}</CardTitle>
                    <Badge variant="secondary">{equipment.category}</Badge>
                  </div>
                  <CardDescription>{equipment.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">
                        <Icon name="Info" size={16} className="mr-2" />
                        Подробнее
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl">
                      <DialogHeader>
                        <DialogTitle>{equipment.name}</DialogTitle>
                        <DialogDescription>{equipment.category}</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold mb-2">Описание</h4>
                          <p className="text-muted-foreground">{equipment.description}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2 flex items-center gap-2">
                            <Icon name="ShieldAlert" size={20} className="text-primary" />
                            Техника безопасности
                          </h4>
                          <ul className="space-y-2">
                            {equipment.safety.map((rule, index) => (
                              <li key={index} className="flex items-start gap-2">
                                <Icon name="CheckCircle2" size={16} className="text-secondary mt-1 flex-shrink-0" />
                                <span className="text-muted-foreground">{rule}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <Button className="w-full">
                            <Icon name="Play" size={16} className="mr-2" />
                            Смотреть видео-инструкцию
                          </Button>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="feedback" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold mb-4">Обратная связь</h2>
              <p className="text-muted-foreground">
                Оставьте свой отзыв о работе информационного ресурса
              </p>
            </div>
            <Card>
              <CardContent className="p-6">
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">Имя</label>
                    <Input
                      placeholder="Ваше имя"
                      value={feedbackForm.name}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, name: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      value={feedbackForm.email}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, email: e.target.value })}
                      required
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Сообщение</label>
                    <Textarea
                      placeholder="Ваш отзыв или предложение..."
                      rows={5}
                      value={feedbackForm.message}
                      onChange={(e) => setFeedbackForm({ ...feedbackForm, message: e.target.value })}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить отзыв
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="info" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">Дополнительная информация</h2>
            <Tabs defaultValue="privacy" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="privacy">Конфиденциальность</TabsTrigger>
                <TabsTrigger value="terms">Условия</TabsTrigger>
                <TabsTrigger value="about">О проекте</TabsTrigger>
              </TabsList>
              <TabsContent value="privacy" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Политика конфиденциальности</CardTitle>
                    <CardDescription>Обработка персональных данных</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Информационный ресурс обеспечивает защиту персональных данных пользователей в соответствии с действующим законодательством РФ.</p>
                    <p>Мы собираем только необходимую информацию для предоставления качественных услуг и не передаем данные третьим лицам без вашего согласия.</p>
                    <p>Все данные хранятся в защищенном виде на серверах, соответствующих требованиям информационной безопасности.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="terms" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Общие условия и требования</CardTitle>
                    <CardDescription>Правила использования информационного ресурса</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Доступ партнеров к информационному ресурсу осуществляется на недискриминационной основе.</p>
                    <p>Партнеры обязуются предоставлять актуальную информацию о своих услугах и соблюдать правила размещения контента.</p>
                    <p>Пользователи обязуются соблюдать технику безопасности при работе с оборудованием, представленным в классификаторе.</p>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="about" className="mt-6">
                <Card>
                  <CardHeader>
                    <CardTitle>О проекте</CardTitle>
                    <CardDescription>Информационный ресурс спортивного зала Енисей</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p>Информационный ресурс представляет собой современную платформу для информирования пользователей о возможностях спортивной площадки.</p>
                    <p>Сервис предоставляет полную информацию о тренажерах и оборудовании, включая технику безопасности и видео-инструкции.</p>
                    <p>Ресурс поддерживает работу на всех устройствах (компьютеры, планшеты, мобильные устройства) и операционных системах, включая российские ОС.</p>
                    <div className="flex gap-2 pt-4">
                      <Badge>Мультиплатформенность</Badge>
                      <Badge>Доступность</Badge>
                      <Badge>Безопасность</Badge>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-foreground text-background">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Icon name="Dumbbell" size={24} />
                <span className="font-bold text-xl">Енисей</span>
              </div>
              <p className="text-background/80">
                Информационный ресурс спортивного зала с классификатором тренажеров и оборудования
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Навигация</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="text-background/80 hover:text-background">Главная</a></li>
                <li><a href="#equipment" className="text-background/80 hover:text-background">Тренажеры</a></li>
                <li><a href="#feedback" className="text-background/80 hover:text-background">Обратная связь</a></li>
                <li><a href="#info" className="text-background/80 hover:text-background">Информация</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <ul className="space-y-2 text-background/80">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@enisey-sport.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (xxx) xxx-xx-xx
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="MapPin" size={16} />
                  г. Красноярск
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-background/20 pt-8 text-center text-background/60">
            <p>&copy; 2024 Спортивный зал Енисей. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}