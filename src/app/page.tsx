'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tent, Mail } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/80 border-b border-gray-100">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                <Tent className="w-4 h-4 text-white" />
              </div>
              <h1 className="text-lg font-light tracking-wide text-gray-900">
                奥房総みらいプロジェクト
              </h1>
            </div>
            <nav className="hidden lg:flex items-center space-x-12">
              {['宿泊', 'サービス', '周辺施設', 'アクセス'].map((item) => (
                <a 
                  key={item}
                  href={`#${item.toLowerCase()}`} 
                  className="text-sm font-light text-gray-600 hover:text-gray-900 transition-colors tracking-wide"
                >
                  {item}
                </a>
              ))}
            </nav>
            <Link href="/reservation">
              <Button className="bg-gray-900 hover:bg-gray-800 text-white border-0 px-6 py-2 text-sm font-light tracking-wide">
                ご予約
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Scrolling Images */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        {/* Scrolling Image Gallery */}
        <div className="absolute inset-0 flex">
          <div className="flex-1 flex flex-col space-y-4 animate-scroll-up">
            {['/20250527041351.JPEG', '/20250527041332.JPEG', '/20250527041256.JPEG', '/20250527041143.JPEG'].map((src, i) => (
              <div key={i} className="relative h-80 w-full">
                <Image
                  src={src}
                  alt={`Gallery ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col space-y-4 animate-scroll-down">
            {['/20250527041123.JPEG', '/20250527020429.JPEG', '/20250527020306.JPEG', '/20250430044800.JPEG'].map((src, i) => (
              <div key={i} className="relative h-80 w-full">
                <Image
                  src={src}
                  alt={`Gallery ${i + 5}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="flex-1 flex flex-col space-y-4 animate-scroll-up">
            {['/20250430044445.JPEG', '/20250430044233.JPEG', '/20250430043740.JPEG', '/20250429045836.JPEG'].map((src, i) => (
              <div key={i} className="relative h-80 w-full">
                <Image
                  src={src}
                  alt={`Gallery ${i + 9}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>

        {/* Hero Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-8">
          <div className="mb-8">
            <span className="inline-block text-sm font-light tracking-[0.3em] text-gray-600 mb-4">
              OKUBOSO MIRAI PROJECT
            </span>
          </div>
          
          <h1 className="text-6xl md:text-8xl font-extralight mb-12 leading-tight tracking-tight">
            <span className="block text-gray-900">あなたの</span>
            <span className="block text-gray-900">休息地。</span>
          </h1>
          
          <p className="text-lg md:text-xl font-light text-gray-700 mb-16 max-w-2xl mx-auto leading-relaxed tracking-wide">
            千葉県大多喜町の廃校に囲まれた<br />
            自然溢れるキャンプ複合施設
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
            <Link href="/reservation">
              <Button size="lg" className="bg-gray-900 hover:bg-gray-800 text-white px-12 py-4 text-base font-light tracking-wide">
                ご予約・プラン詳細
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              <div className="space-y-8">
                <div className="space-y-6">
                  <span className="text-sm font-light tracking-[0.3em] text-gray-500">ABOUT</span>
                  <h2 className="text-4xl md:text-5xl font-extralight leading-tight text-gray-900">
                    それぞれの時間や体験に合わせて<br />
                    やさしく寄り添いやすい施設として
                  </h2>
                </div>
                
                <div className="space-y-6 text-gray-700 font-light leading-relaxed">
                  <p>
                    宿泊から日帰りまで、テントサウナや貸切風呂、<br />
                    サウナ利用のみの小休憩や近隣施設踏まえて<br />
                    宿泊までご堪能いただけます。
                  </p>
                  <p>
                    また、奥房総みらいプロジェクトならではの、<br />
                    地元食材を活用した食プランから、<br />
                    貸切足湯付きサイトなど普段では体験が<br />
                    できない時間をご提供。
                  </p>
                  <p>
                    日常とは違ったプライベート利用や大切な人と過ごす、<br />
                    温かいひとときの時間と体験を提供する場所として、<br />
                    心置きなく休める「あなたの休息地」として、<br />
                    おもてなし致します。
                  </p>
                </div>
              </div>
              
              <div className="relative">
                <div className="relative h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/20250527041351.JPEG"
                    alt="施設の様子"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-light tracking-[0.3em] text-gray-500 mb-6 block">FACILITIES</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">施設案内</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  title: "貸切テントサウナ",
                  description: "自然に囲まれ、心も体も癒される、落ち着いた音楽と共に。",
                  image: "/20250527020306.JPEG"
                },
                {
                  title: "キャンプサイト",
                  description: "広大な校庭での自由なテント設営。星空の下で特別な夜を。",
                  image: "/20250527041256.JPEG"
                },
                {
                  title: "手ぶらプラン",
                  description: "初心者でも安心。必要な道具は全て揃っています。",
                  image: "/20250430044445.JPEG"
                },
                {
                  title: "コワーキング",
                  description: "Wi-Fi完備の快適な作業環境。自然の中でリモートワーク。",
                  image: "/20250430044233.JPEG"
                }
              ].map((facility, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="relative h-64 mb-6 overflow-hidden rounded-lg">
                    <Image
                      src={facility.image}
                      alt={facility.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="text-xl font-light text-gray-900 mb-3">{facility.title}</h3>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    {facility.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Travel Notes Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-light tracking-[0.3em] text-gray-500 mb-6 block">TRAVEL NOTES</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">体験スタイル</h2>
            </div>
            
            <div className="space-y-24">
              {[
                {
                  style: "STYLE 01.",
                  title: "初めてのキャンプと。",
                  description: "キャンプの楽しさを耳にしながらも、なかなか一歩を踏み出せないあなたへ。奥房総みらいプロジェクトは、そんなあなたの背中を優しく押して、温かく迎えてくれる場所です。",
                  image: "/20250527041143.JPEG",
                  reverse: false
                },
                {
                  style: "STYLE 02.",
                  title: "家族と。",
                  description: "都会では味わえない、自然の中で家族と紡ぐ、かけがえのない思い出を作りたいご家族へ。子供たちは遊具エリアで自由に遊んだり、自然の中でみんなでカフェや貸切露天風呂/サウナで癒しながら、キャンプを通して家族の絆を深める贅沢な時間が待っています。",
                  image: "/20250527041123.JPEG",
                  reverse: true
                },
                {
                  style: "STYLE 03.",
                  title: "愛犬と。",
                  description: "愛犬と私と、それぞれが心ゆくまで満足し、共に過ごす特別なひとときをお探しのあなたへ。広々としたドッグランサイトでは、連結して更に広くすることも可能で、愛犬が思う存分駆け回れます。",
                  image: "/20250527020429.JPEG",
                  reverse: false
                },
                {
                  style: "STYLE 04.",
                  title: "日帰りの旅。",
                  description: "一時的に日常を離れ、自然の中で心を癒す特別なひとときを求めるあなたへ。短時間でも自然に囲まれた静かな空間で贅沢な日帰り体験を提供します。",
                  image: "/20250430044800.JPEG",
                  reverse: true
                }
              ].map((style, index) => (
                <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${style.reverse ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`space-y-6 ${style.reverse ? 'lg:col-start-2' : ''}`}>
                    <div className="space-y-4">
                      <span className="text-sm font-light tracking-[0.3em] text-gray-500">{style.style}</span>
                      <h3 className="text-3xl md:text-4xl font-extralight text-gray-900">{style.title}</h3>
                    </div>
                    <p className="text-gray-700 font-light leading-relaxed">
                      {style.description}
                    </p>
                  </div>
                  <div className={`relative h-96 rounded-lg overflow-hidden ${style.reverse ? 'lg:col-start-1' : ''}`}>
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-light tracking-[0.3em] text-gray-500 mb-6 block">PRICING</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">料金プラン</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "ライト",
                  price: "¥5,000",
                  description: "気軽に学校キャンプ体験",
                  features: ["区画サイト利用", "トイレ・炊事場", "チェックイン 15:00-18:00"],
                  popular: false
                },
                {
                  name: "スタンダード",
                  price: "¥8,000",
                  description: "手ぶらでらくらくキャンプ",
                  features: ["基本ギア貸出付き", "シャワー施設", "チェックイン 15:00-18:00"],
                  popular: true
                },
                {
                  name: "プレミアム",
                  price: "¥12,000",
                  description: "贅沢廃校グランピング",
                  features: ["グランピングサイト", "ベッド・ソファ完備", "特別アクティビティ"],
                  popular: false
                }
              ].map((plan, index) => (
                <Card key={index} className={`relative overflow-hidden transition-all duration-300 hover:shadow-lg ${
                  plan.popular 
                    ? 'border-2 border-gray-900' 
                    : 'border border-gray-200'
                } bg-white`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gray-900 text-center py-2">
                      <span className="text-sm font-light text-white tracking-wide">RECOMMENDED</span>
                    </div>
                  )}
                  <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <div className="text-center space-y-6">
                      <h3 className="text-2xl font-light text-gray-900">{plan.name}</h3>
                      <p className="text-sm font-light text-gray-600">{plan.description}</p>
                      <div className="space-y-2">
                        <span className="text-4xl font-extralight text-gray-900">{plan.price}</span>
                        <p className="text-sm font-light text-gray-500">/泊</p>
                      </div>
                      <ul className="space-y-3 text-sm font-light text-gray-600">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-center justify-center">
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Link href="/reservation">
                        <Button className={`w-full py-3 font-light tracking-wide ${
                          plan.popular
                            ? 'bg-gray-900 hover:bg-gray-800 text-white'
                            : 'bg-white border border-gray-300 text-gray-900 hover:bg-gray-50'
                        }`}>
                          このプランで予約
                        </Button>
                      </Link>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-light tracking-[0.3em] text-gray-500 mb-6 block">ACCESS</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900">アクセス</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h3 className="text-2xl font-light text-gray-900">奥房総みらいプロジェクト</h3>
                  <div className="space-y-4 text-gray-700 font-light">
                    <p>〒298-0202<br />千葉県夷隅郡大多喜町下大多喜１００</p>
                    <p>TEL : 0475-78-3050</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-gray-900">お車でお越しの場合</h4>
                  <p className="text-sm font-light text-gray-600 leading-relaxed">
                    勝浦市街から車で約20分<br />
                    都心から約2時間
                  </p>
                </div>
                
                <div className="bg-white p-6 rounded-lg">
                  <h4 className="text-lg font-light text-gray-900 mb-4">営業時間</h4>
                  <div className="space-y-2 text-sm font-light text-gray-600">
                    <p>チェックイン：15:00〜18:00</p>
                    <p>チェックアウト：〜11:00</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
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
      <section className="py-32 bg-gray-900 text-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <div className="space-y-6">
              <span className="text-sm font-light tracking-[0.3em] text-gray-400">RESERVATION</span>
              <h2 className="text-4xl md:text-5xl font-extralight">
                新規ご予約受付中。<br />
                ご予約は自社サイトがベストプライス。
              </h2>
            </div>
            
            <Link href="/reservation">
              <Button size="lg" className="bg-white text-gray-900 hover:bg-gray-100 px-12 py-4 text-base font-light tracking-wide">
                ご予約・プラン詳細
              </Button>
            </Link>
            
            <div className="flex items-center justify-center space-x-8 text-sm font-light text-gray-400">
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span>jifgv.tools@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
                    <Tent className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-lg font-light text-gray-900">
                    奥房総みらいプロジェクト
                  </h3>
                </div>
                <p className="text-sm font-light text-gray-600 leading-relaxed">
                  古民家とロッジと廃校活用から始まる新しい&quot;つながり&quot;づくり
                </p>
              </div>
              
              <div className="space-y-4 text-sm font-light text-gray-600">
                <p>〒298-0202 千葉県夷隅郡大多喜町下大多喜１００（旧上瀑小学校）</p>
                <p>TEL : 0475-78-3050</p>
                <p>MAIL : jifgv.tools@gmail.com</p>
              </div>
            </div>
            
            <div className="mt-12 pt-8 border-t border-gray-100 text-center">
              <p className="text-xs font-light text-gray-500 tracking-wide">
                奥房総みらいプロジェクト ©
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
