'use client'

import { Button } from "@/components/ui/button"
import { Tent, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/90 border-b border-gray-100">
        <div className="container mx-auto px-8 py-4">
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
              {['宿泊 / 日帰り', 'サービス', '周辺施設', 'よくある質問', 'アクセス'].map((item) => (
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
                ご予約・プラン詳細
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section with Reservation Banner */}
      <section className="pt-20 pb-8">
        <div className="container mx-auto px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-light text-gray-900 mb-4">ご予約</h2>
            <p className="text-lg font-light text-gray-700 mb-6">
              新規ご予約受付中。ご予約は自社サイトがベストプライス。
            </p>
            <div className="bg-gray-50 p-4 rounded-lg inline-block">
              <p className="text-sm text-gray-600">
                NEWS | 2025/01/20 | 1/20(月)PM12:00〜1/21(火)終日は、当施設お休みとなります。お問い合わせは、メールにてよろしくお願い申し上げます。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Scrolling Image Gallery - Main Feature */}
      <section className="py-16 overflow-hidden">
        {/* First Row - Left to Right */}
        <div className="flex space-x-4 mb-4 animate-scroll-left">
          {[
            '/20250527041351.JPEG',
            '/20250527041332.JPEG', 
            '/20250527041256.JPEG',
            '/20250527041143.JPEG',
            '/20250527041123.JPEG',
            '/20250527020429.JPEG',
            '/20250527020306.JPEG',
            '/20250430044800.JPEG'
          ].map((src, i) => (
            <div key={i} className="relative w-80 h-60 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery Image ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            '/20250527041351.JPEG',
            '/20250527041332.JPEG', 
            '/20250527041256.JPEG',
            '/20250527041143.JPEG'
          ].map((src, i) => (
            <div key={`dup1-${i}`} className="relative w-80 h-60 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery Image Duplicate ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Second Row - Right to Left */}
        <div className="flex space-x-4 mb-4 animate-scroll-right">
          {[
            '/20250430044445.JPEG',
            '/20250430044233.JPEG',
            '/20250430043740.JPEG',
            '/20250429045836.JPEG',
            '/20250429045817.JPEG',
            '/20250527041351.JPEG',
            '/20250527041332.JPEG',
            '/20250527041256.JPEG'
          ].map((src, i) => (
            <div key={i} className="relative w-80 h-60 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery Image Row 2 ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            '/20250430044445.JPEG',
            '/20250430044233.JPEG',
            '/20250430043740.JPEG',
            '/20250429045836.JPEG'
          ].map((src, i) => (
            <div key={`dup2-${i}`} className="relative w-80 h-60 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery Image Row 2 Duplicate ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>

        {/* Third Row - Left to Right */}
        <div className="flex space-x-4 animate-scroll-left-slow">
          {[
            '/20250527041143.JPEG',
            '/20250527041123.JPEG',
            '/20250527020429.JPEG',
            '/20250527020306.JPEG',
            '/20250430044800.JPEG',
            '/20250430044445.JPEG',
            '/20250430044233.JPEG',
            '/20250430043740.JPEG'
          ].map((src, i) => (
            <div key={i} className="relative w-80 h-60 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery Image Row 3 ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
          {/* Duplicate for seamless loop */}
          {[
            '/20250527041143.JPEG',
            '/20250527041123.JPEG',
            '/20250527020429.JPEG',
            '/20250527020306.JPEG'
          ].map((src, i) => (
            <div key={`dup3-${i}`} className="relative w-80 h-60 flex-shrink-0">
              <Image
                src={src}
                alt={`Gallery Image Row 3 Duplicate ${i + 1}`}
                fill
                className="object-cover rounded-lg"
              />
            </div>
          ))}
        </div>
      </section>

      {/* Main Content with Logo and Description */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Featured Image */}
            <div className="relative w-full h-96 mb-12 rounded-lg overflow-hidden">
              <Image
                src="/20250527041351.JPEG"
                alt="奥房総みらいプロジェクト 管理棟写真"
                fill
                className="object-cover"
              />
            </div>

            {/* Logo Area */}
            <div className="mb-12">
              <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
                <Tent className="w-8 h-8 text-white" />
              </div>
              <h1 className="text-sm font-light tracking-[0.3em] text-gray-500 mb-2">
                OKUBOSO MIRAI PROJECT
              </h1>
            </div>

            {/* Main Heading */}
            <h2 className="text-5xl md:text-6xl font-extralight mb-12 leading-tight text-gray-900">
              あなたの休息地。
            </h2>

            {/* Description */}
            <div className="space-y-8 text-lg font-light text-gray-700 leading-relaxed max-w-3xl mx-auto">
              <p>
                千葉県大多喜町の廃校に囲まれた<br />
                自然溢れるキャンプ複合施設
              </p>
              
              <p>
                それぞれの時間や体験に合わせてやさしく<br />
                寄り添いやすい施設として、宿泊から日帰りまで、<br />
                テントサウナや貸切風呂、サウナ利用のみの小休憩や<br />
                近隣施設踏まえて宿泊までご堪能いただけます。
              </p>
              
              <p>
                また、奥房総みらいプロジェクトならではの、地元食材を<br />
                活用した食プランから、貸切足湯付きサイトなど<br />
                普段では体験ができない時間をご提供。
              </p>
              
              <p>
                日常とは違ったプライベート利用や大切な人と過ごす、<br />
                温かいひとときの時間と体験を提供する場所として、<br />
                心置きなく休める「あなたの休息地」<br />
                として、おもてなし致します。
              </p>
            </div>

            <div className="mt-12">
              <span className="text-sm font-light tracking-[0.3em] text-gray-500">About</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extralight text-gray-900 mb-8">Facilities</h2>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 text-center">
              {[
                { name: '貸切テントサウナ', icon: '🔥' },
                { name: 'キャンプサイト', icon: '⛺' },
                { name: '遊具', icon: '🎪' },
                { name: 'ドッグランサイト', icon: '🐕' },
                { name: '手ぶらプラン', icon: '🎒' },
                { name: '食サービス', icon: '🍽️' },
                { name: '洗濯 / 乾燥機', icon: '👕' },
                { name: 'コワーキング', icon: '💻' },
                { name: 'Wi-Fi', icon: '📶' },
                { name: 'ALSOK', icon: '🛡️' }
              ].map((facility, index) => (
                <div key={index} className="group cursor-pointer">
                  <div className="text-4xl mb-4">{facility.icon}</div>
                  <h3 className="text-sm font-light text-gray-900">{facility.name}</h3>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="flex items-center space-x-2 text-gray-600">
                <ArrowRight className="w-4 h-4" />
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Facility */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extralight text-gray-900 mb-8">貸切テントサウナ</h2>
            <p className="text-lg font-light text-gray-700 mb-12">
              自然に囲まれ、心も体も癒される、落ち着いた音楽と共に。
            </p>
            
            <div className="relative w-full h-96 rounded-lg overflow-hidden">
              <Image
                src="/20250527020306.JPEG"
                alt="貸切テントサウナ"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Travel Notes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extralight text-gray-900 mb-8">Travel Notes</h2>
            </div>
            
            <div className="space-y-16">
              {[
                {
                  style: "STYLE 01.",
                  title: "初めてのキャンプと。",
                  description: "キャンプの楽しさを耳にしながらも、なかなか一歩を踏み出せないあなたへ。\n\n奥房総みらいプロジェクトは、そんなあなたの背中を優しく押して、温かく迎えてくれる場所です。キャンプが初めての方でも安心して楽しめるよう、最高のおもてなしと共に丁寧にご案内いたします。",
                  image: "/20250527041143.JPEG"
                },
                {
                  style: "STYLE 02.",
                  title: "家族と。",
                  description: "都会では味わえない、自然の中で家族と紡ぐ、かけがえのない思い出を作りたいご家族へ。\n\n奥房総みらいプロジェクトは、家族みんなが笑顔になれる場所。子供たちは遊具エリアで自由に遊んだり、自然の中でみんなでカフェや貸切露天風呂/サウナで癒しながら、キャンプを通して家族の絆を深める贅沢な時間が待っています。",
                  image: "/20250527041123.JPEG"
                },
                {
                  style: "STYLE 03.",
                  title: "愛犬と。",
                  description: "愛犬と私と、それぞれが心ゆくまで満足し、共に過ごす特別なひとときをお探しのあなたへ。\n\n奥房総みらいプロジェクトは、広々としたドッグランサイトでは、連結して更に広くすることも可能で、愛犬が思う存分駆け回れます。自然に囲まれた環境の中で、愛犬と一緒にBBQを楽しんだり、サイト内の足湯スペースでくつろいだりと、愛犬との絆を深める体験をお楽しみください。",
                  image: "/20250527020429.JPEG"
                },
                {
                  style: "STYLE 04.",
                  title: "日帰りの旅。",
                  description: "一時的に日常を離れ、自然の中で心を癒す特別なひとときを求めるあなたへ。\n\n奥房総みらいプロジェクトは、短時間でも自然に囲まれた静かな空間で贅沢な日帰り体験を提供します。貸切露天風呂、サウナでの癒し、厳選食材のBBQ等を楽しみながら、都会では味わえないリフレッシュできる体験が待っています。",
                  image: "/20250430044800.JPEG"
                }
              ].map((style, index) => (
                <div key={index} className="border-l-2 border-gray-200 pl-8">
                  <div className="mb-6">
                    <span className="text-sm font-light tracking-[0.3em] text-gray-500">{style.style}</span>
                    <h3 className="text-2xl font-extralight text-gray-900 mt-2">{style.title}</h3>
                  </div>
                  
                  <div className="grid lg:grid-cols-2 gap-8 items-start">
                    <div>
                      <p className="text-gray-700 font-light leading-relaxed whitespace-pre-line">
                        {style.description}
                      </p>
                    </div>
                    <div className="relative h-64 rounded-lg overflow-hidden">
                      <Image
                        src={style.image}
                        alt={style.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Guide */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extralight text-gray-900 mb-8">Local Area Guide</h2>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { name: '九十九里浜', label: 'experience' },
                { name: '酒々井アウトレット', label: 'experience' },
                { name: 'いちご狩り', label: 'experience' }
              ].map((area, index) => (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 h-32 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-sm text-gray-500">{area.label}</span>
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{area.name}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <p className="text-gray-600 font-light mb-4">
                おすすめ周辺施設<br />
                / 観光はこちら
              </p>
              <div className="inline-block">
                <span className="text-gray-600 font-light">その他</span>
                <ArrowRight className="w-4 h-4 inline ml-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-extralight text-gray-900 mb-8">Access</h2>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-light text-gray-900 mb-6">奥房総みらいプロジェクト</h3>
                  <div className="space-y-4 text-gray-700 font-light">
                    <p>〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
                    <p>TEL : 0475-78-3050</p>
                  </div>
                </div>
                
                <div className="bg-gray-100 p-4 rounded text-center">
                  <p className="text-sm text-gray-600">読み込み中...</p>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-3">お車でお越しの場合</h4>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-sm text-gray-600">car access</p>
                    </div>
                  </div>
                  
                  <div>
                    <h4 className="text-lg font-light text-gray-900 mb-3">公共交通機関でお越しの場合</h4>
                    <div className="bg-gray-100 p-4 rounded">
                      <p className="text-sm text-gray-600">public transport access</p>
                    </div>
                    <p className="text-xs text-gray-500 mt-4 leading-relaxed">
                      ※公共交通機関で起こしの場合は、日向駅もしくは成東駅まで電車で向かい、その後タクシー利用がおすすめでございます。<br />
                      八街駅 / 成東駅からちばフラワーバスをこ利用の方は事前に時刻表をご確認ください。バスの本数が限られております。<br />
                      また、バス利用後施設最寄りバス停の北上戸田から徒歩で起伏のある道や舗装されてない道がありますので、<br />
                      その点ご理解の程よろしくお願いいたします。 ご不明点ありましたら、お問い合わせください。
                    </p>
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

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extralight text-gray-900 mb-8">FAQ</h2>
            <p className="text-lg font-light text-gray-700 mb-8">よくある質問</p>
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Terms Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-extralight text-gray-900 mb-8">利用規約</h2>
            <div className="flex justify-center">
              <ArrowRight className="w-4 h-4 text-gray-400" />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            {/* Navigation Links */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-sm font-light text-gray-600">
              {['ホーム', 'アクセス', '周辺施設', 'サービス', '宿泊 / 日帰り', 'よくあるご質問', 'お問い合わせ', '利用規約', 'プライバシーポリシー'].map((link) => (
                <a key={link} href="#" className="hover:text-gray-900 transition-colors">
                  {link}
                </a>
              ))}
            </div>
            
            {/* Contact Info */}
            <div className="text-center space-y-4 text-sm font-light text-gray-600 mb-8">
              <p>〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
              <p>tel : 0475 78 3050</p>
              <p>mail : jifgv.tools@gmail.com</p>
            </div>
            
            {/* Copyright */}
            <div className="text-center">
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
