import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Users, Tent, Flame, Droplets, Car, Mail, ArrowRight, Play, Calendar, Shield, Wifi } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Glassmorphism Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <Tent className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                奥房総みらいプロジェクト
              </h1>
            </div>
            <nav className="hidden lg:flex items-center space-x-8">
              {['コンセプト', '施設案内', 'レンタル', 'サウナ', '料金', 'アクセス'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-white/80 hover:text-white transition-all duration-300 hover:scale-105 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-emerald-400 to-teal-600 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </nav>
            <Link href="/reservation">
              <Button className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white border-0 px-6 py-2 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-emerald-500/25">
                予約する
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section - Full Screen with Parallax */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect */}
        <div className="absolute inset-0 scale-110">
          <Image
            src="/20250527041351.JPEG"
            alt="廃校キャンプサイトの美しい風景"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-black/30 via-transparent to-black/30"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-6xl mx-auto px-6">
          <div className="mb-8 inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            <span className="text-sm text-white/90 font-medium">廃校リノベーション × 自然体験</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black mb-8 leading-none">
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              懐かしい
            </span>
            <span className="block bg-gradient-to-r from-emerald-400 via-teal-300 to-emerald-400 bg-clip-text text-transparent">
              校庭で、
            </span>
            <span className="block bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent">
              非日常を
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 mb-12 max-w-3xl mx-auto leading-relaxed font-light">
            千葉県大多喜町の廃校を舞台に、テント泊とテントサウナで
            <br className="hidden md:block" />
            心と体を解放する、新しいキャンプ体験
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/reservation">
              <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25 group">
                今すぐ予約する
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-white/30 bg-white/10 backdrop-blur-md text-white hover:bg-white/20 px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105 group">
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform" />
              体験動画を見る
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Concept Section - Glassmorphism Cards */}
      <section id="concept" className="py-32 relative">
        <div className="absolute inset-0">
          <Image
            src="/20250527041332.JPEG"
            alt="Background"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                コンセプト
              </h2>
              <p className="text-xl text-white/70 max-w-4xl mx-auto leading-relaxed">
                都心から約80分。自然豊かな里山の廃校で、地域と人をつなぐ実験的な体験空間
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Tent,
                  title: "広大な校庭キャンプ",
                  description: "全面芝生の校庭で自由にテント設営。星空の下で特別な夜を",
                  image: "/20250527041256.JPEG"
                },
                {
                  icon: Flame,
                  title: "テントサウナ体験",
                  description: "薪ストーブ式サウナで汗を流し、自然の中で心身をリセット",
                  image: "/20250527041143.JPEG"
                },
                {
                  icon: Users,
                  title: "廃校リノベーション",
                  description: "整備されたインフラとコワーキングスペースで快適滞在",
                  image: "/20250527041123.JPEG"
                }
              ].map((item, index) => (
                <Card key={index} className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/10 group overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  </div>
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-8 h-8 text-emerald-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                    <p className="text-white/70 leading-relaxed">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Split Layout */}
      <section id="features" className="py-32 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <div>
                  <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    施設案内
                  </h2>
                  <p className="text-xl text-white/70 leading-relaxed">
                    廃校ならではの充実した設備と、自然を活かした快適な環境
                  </p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Tent, title: "フリーサイト形式", desc: "芝生エリアとウッドデッキで自由設営" },
                    { icon: Shield, title: "校舎施設利用", desc: "トイレ・炊事場・シャワー完備" },
                    { icon: Users, title: "ペット同伴可", desc: "愛犬と一緒にキャンプ体験" },
                    { icon: Wifi, title: "コワーキング", desc: "Wi-Fi完備で急な仕事も安心" }
                  ].map((feature, index) => (
                    <div key={index} className="flex items-start space-x-4 p-6 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                      <div className="w-12 h-12 bg-gradient-to-br from-emerald-400/20 to-teal-600/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <feature.icon className="w-6 h-6 text-emerald-400" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                        <p className="text-white/70">{feature.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-[600px] rounded-3xl overflow-hidden">
                  <Image
                    src="/20250527020429.JPEG"
                    alt="施設の様子"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                </div>
                <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-full opacity-20 blur-xl"></div>
                <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-teal-400 to-emerald-600 rounded-full opacity-20 blur-xl"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sauna Section - Full Width */}
      <section id="sauna" className="py-32 relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/20250527020306.JPEG"
            alt="テントサウナ"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/70"></div>
        </div>
        
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-7xl font-black mb-8 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
              テントサウナ
            </h2>
            <p className="text-2xl text-white/80 mb-12 leading-relaxed">
              校舎を眺める絶好のロケーションで、薪ストーブ式テントサウナ。
              <br className="hidden md:block" />
              地元間伐材の薪で温まり、地下水の水風呂で &quot;ととのう&quot; 至福の時間
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { icon: Flame, title: "薪ストーブ式", desc: "本格的なサウナ体験" },
                { icon: Droplets, title: "天然水風呂", desc: "地下水を利用した冷水" },
                { icon: Users, title: "プライベート", desc: "貸切プランも対応" }
              ].map((item, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-xl rounded-2xl p-8 border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105">
                  <item.icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-white mb-2">{item.title}</h4>
                  <p className="text-white/70">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <Button size="lg" className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white px-8 py-4 text-lg rounded-full font-semibold transition-all duration-300 hover:scale-105">
              サウナ予約はこちら
            </Button>
          </div>
        </div>
      </section>

      {/* Pricing Section - Modern Cards */}
      <section id="plans" className="py-32 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                料金プラン
              </h2>
              <p className="text-xl text-white/70 max-w-3xl mx-auto">
                初心者から本格派まで、あなたにぴったりのキャンプ体験を
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "ライト",
                  price: "¥5,000",
                  desc: "気軽に学校キャンプ体験",
                  features: ["区画サイト利用", "トイレ・炊事場", "チェックイン 15:00-18:00"],
                  popular: false
                },
                {
                  name: "スタンダード",
                  price: "¥8,000",
                  desc: "手ぶらでらくらくキャンプ",
                  features: ["基本ギア貸出付き", "シャワー施設", "チェックイン 15:00-18:00"],
                  popular: true
                },
                {
                  name: "プレミアム",
                  price: "¥12,000",
                  desc: "贅沢廃校グランピング",
                  features: ["グランピングサイト", "ベッド・ソファ完備", "特別アクティビティ"],
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden transition-all duration-500 hover:scale-105 ${
                  plan.popular 
                    ? 'bg-gradient-to-b from-emerald-500/20 to-teal-600/20 border-2 border-emerald-400/50' 
                    : 'bg-white/10 border border-white/20'
                } backdrop-blur-xl hover:shadow-2xl hover:shadow-emerald-500/10`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-400 to-teal-600 text-center py-2">
                      <span className="text-sm font-bold text-white">オススメ</span>
                    </div>
                  )}
                  <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}プラン</h3>
                    <p className="text-white/70 mb-6">{plan.desc}</p>
                    <div className="mb-8">
                      <span className="text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-white/60 ml-2">/泊</span>
                    </div>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Link href="/reservation">
                      <Button className={`w-full py-3 rounded-full font-semibold transition-all duration-300 hover:scale-105 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white'
                          : 'bg-white/10 border border-white/30 text-white hover:bg-white/20'
                      }`}>
                        このプランで予約
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-32 relative">
        <div className="absolute inset-0">
          <Image
            src="/20250430044800.JPEG"
            alt="アクセス"
            fill
            className="object-cover opacity-30"
          />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                アクセス
              </h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6">所在地</h3>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-6 h-6 text-emerald-400 mt-1" />
                    <div>
                      <p className="text-white font-medium">〒298-0202</p>
                      <p className="text-white font-medium">千葉県夷隅郡大多喜町下大多喜１００</p>
                      <p className="text-white/70">（旧上瀑小学校）</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-6 h-6 text-emerald-400 mt-1" />
                    <div>
                      <p className="text-white/80">勝浦市街から車で約20分</p>
                      <p className="text-white/80">都心から約2時間</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-8 p-6 bg-emerald-500/20 rounded-2xl border border-emerald-400/30">
                  <h4 className="font-bold text-white mb-3">営業時間</h4>
                  <div className="space-y-1">
                    <p className="text-white/90">チェックイン：15:00〜18:00</p>
                    <p className="text-white/90">チェックアウト：〜11:00</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-3xl overflow-hidden border border-white/20">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.247591177041!2d140.24864785373208!3d35.299828964359115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022b1451ba7d83f%3A0x98bd61e58198588!2z5aSn5aSa5Zac55S656uL5LiK54Kr5bCP5a2m5qCh!5e0!3m2!1sja!2smy!4v1749694394133!5m2!1sja!2smy" 
                  width="100%" 
                  height="450" 
                  style={{ border: 0 }} 
                  allowFullScreen={true}
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="大多喜町立上瀑小学校 - Google マップ"
                  className="w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-emerald-600 via-teal-600 to-emerald-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              今すぐ予約して
              <br />
              特別な体験を
            </h2>
            <p className="text-xl text-white/90 mb-12 leading-relaxed">
              廃校の校庭で過ごす非日常。テントサウナで心身をリセット。
              <br className="hidden md:block" />
              あなたの特別な時間が、ここから始まります。
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link href="/reservation">
                <Button size="lg" className="bg-white text-emerald-600 hover:bg-gray-100 px-8 py-4 text-lg rounded-full font-bold transition-all duration-300 hover:scale-105 hover:shadow-2xl group">
                  <Calendar className="mr-2 w-5 h-5" />
                  予約カレンダーを見る
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
              <div className="flex items-center space-x-3 text-white/90">
                <Mail className="w-5 h-5" />
                <span>jifgv.tools@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-16 border-t border-white/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                <Tent className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                奥房総みらいプロジェクト
              </h3>
            </div>
            <p className="text-white/60 mb-6">
              古民家とロッジと廃校活用から始まる新しい&quot;つながり&quot;づくり
            </p>
            <p className="text-white/40 text-sm">
              〒298-0202 千葉県夷隅郡大多喜町下大多喜１００（旧上瀑小学校）
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
