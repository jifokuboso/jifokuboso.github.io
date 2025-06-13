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
              {['宿泊 / 日帰り', 'サービス', '周辺施設'].map((item) => (
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

      {/* Hero Section with Full Screen Gallery */}
      <section className="relative min-h-screen overflow-hidden pt-16">
        {/* Reservation Banner */}
        <div className="absolute top-20 left-0 right-0 z-40 text-center py-4 bg-white/95 backdrop-blur-sm">
          <div className="container mx-auto px-8">
            <h2 className="text-2xl font-light text-gray-900 mb-2">ご予約 Reservation</h2>
            <p className="text-sm font-light text-gray-600 mb-4">
              新規ご予約受付中。ご予約は自社サイトがベストプライス。
            </p>
            <div className="text-xs font-light text-gray-500 bg-gray-100 inline-block px-4 py-2 rounded">
              NEWS | 2025/01/20 | 1/20(月)PM12:00〜1/21(火)終日は、当施設お休みとなります。お問い合わせは、メールにてよろしくお願い申し上げます。
            </div>
          </div>
        </div>

        {/* Scrolling Image Gallery - 3 Columns */}
        <div className="absolute inset-0 flex pt-32">
          {/* Column 1 */}
          <div className="flex-1 flex flex-col space-y-4 animate-scroll-up">
            {[
              '/20250527041351.JPEG',
              '/20250527041332.JPEG', 
              '/20250527041256.JPEG',
              '/20250527041143.JPEG',
              '/20250527041351.JPEG',
              '/20250527041332.JPEG',
              '/20250527041256.JPEG',
              '/20250527041143.JPEG'
            ].map((src, i) => (
              <div key={i} className="relative h-80 w-full mx-2">
                <Image
                  src={src}
                  alt={`Scrolling Image ${i + 1}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Column 2 */}
          <div className="flex-1 flex flex-col space-y-4 animate-scroll-down">
            {[
              '/20250527041123.JPEG',
              '/20250527020429.JPEG',
              '/20250527020306.JPEG',
              '/20250430044800.JPEG',
              '/20250527041123.JPEG',
              '/20250527020429.JPEG',
              '/20250527020306.JPEG',
              '/20250430044800.JPEG'
            ].map((src, i) => (
              <div key={i} className="relative h-80 w-full mx-2">
                <Image
                  src={src}
                  alt={`Scrolling Image ${i + 5}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>

          {/* Column 3 */}
          <div className="flex-1 flex flex-col space-y-4 animate-scroll-up">
            {[
              '/20250430044445.JPEG',
              '/20250430044233.JPEG',
              '/20250430043740.JPEG',
              '/20250429045836.JPEG',
              '/20250430044445.JPEG',
              '/20250430044233.JPEG',
              '/20250430043740.JPEG',
              '/20250429045836.JPEG'
            ].map((src, i) => (
              <div key={i} className="relative h-80 w-full mx-2">
                <Image
                  src={src}
                  alt={`Scrolling Image ${i + 9}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Center Logo and Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center z-30">
          <div className="text-center bg-white/90 backdrop-blur-md rounded-3xl p-12 max-w-2xl mx-8">
            <div className="w-16 h-16 bg-gray-900 rounded-full flex items-center justify-center mx-auto mb-6">
              <Tent className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-extralight mb-6 text-gray-900 leading-tight">
              あなたの休息地。
            </h1>
            <p className="text-lg font-light text-gray-700 mb-8 leading-relaxed">
              千葉県大多喜町の廃校に囲まれた<br />
              自然溢れるキャンプ複合施設
            </p>
            <p className="text-sm font-light text-gray-600 mb-8 leading-relaxed">
              それぞれの時間や体験に合わせてやさしく<br />
              寄り添いやすい施設として、宿泊から日帰りまで、<br />
              テントサウナや貸切風呂、サウナ利用のみの小休憩や<br />
              近隣施設踏まえて宿泊までご堪能いただけます。
            </p>
            <p className="text-sm font-light text-gray-600 mb-8 leading-relaxed">
              また、奥房総みらいプロジェクトならではの、地元食材を<br />
              活用した食プランから、貸切足湯付きサイトなど<br />
              普段では体験ができない時間をご提供。
            </p>
            <p className="text-sm font-light text-gray-600 mb-8 leading-relaxed">
              日常とは違ったプライベート利用や大切な人と過ごす、<br />
              温かいひとときの時間と体験を提供する場所として、<br />
              心置きなく休める「あなたの休息地」<br />
              として、おもてなし致します。
            </p>
            <div className="text-center">
              <span className="text-xs font-light text-gray-500 tracking-wider">About</span>
            </div>
          </div>
        </div>
      </section>

      {/* Facilities Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">Facilities</h2>
            </div>
            
            <div className="grid grid-cols-3 md:grid-cols-5 gap-8 mb-16">
              {[
                { name: "貸切テントサウナ", icon: "🔥" },
                { name: "貸切サウナ", icon: "♨️" },
                { name: "遊具", icon: "🎪" },
                { name: "キャンプサイト", icon: "⛺" },
                { name: "ドッグランサイト", icon: "🐕" },
                { name: "手ぶらプラン", icon: "🎒" },
                { name: "食サービス", icon: "🍽️" },
                { name: "洗濯 / 乾燥機", icon: "👕" },
                { name: "ALSOK", icon: "🔒" }
              ].map((facility, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {facility.icon}
                  </div>
                  <h3 className="text-sm font-light text-gray-900">{facility.name}</h3>
                </div>
              ))}
            </div>

            <div className="flex justify-center space-x-4 mb-16">
              <ArrowRight className="w-6 h-6 text-gray-300" />
              <ArrowRight className="w-6 h-6 text-gray-300" />
            </div>

            {/* Featured Facility */}
            <div className="text-center mb-16">
              <h3 className="text-3xl font-extralight text-gray-900 mb-8">貸切テントサウナ</h3>
              <p className="text-lg font-light text-gray-600 mb-12">
                自然に囲まれ、心も体も癒される、落ち着いた音楽と共に。
              </p>
              
              <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                <Image
                  src="/20250527020306.JPEG"
                  alt="貸切テントサウナ"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Travel Notes Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">Travel Notes</h2>
            </div>
            
            <div className="space-y-24">
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
                <div key={index} className="text-center max-w-4xl mx-auto">
                  <div className="mb-8">
                    <span className="text-sm font-light tracking-[0.3em] text-gray-500 block mb-4">{style.style}</span>
                    <h3 className="text-3xl md:text-4xl font-extralight text-gray-900 mb-8">{style.title}</h3>
                  </div>
                  
                  <div className="relative h-96 rounded-lg overflow-hidden mb-8">
                    <Image
                      src={style.image}
                      alt={style.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  
                  <div className="text-left max-w-2xl mx-auto">
                    {style.description.split('\n\n').map((paragraph, i) => (
                      <p key={i} className="text-gray-700 font-light leading-relaxed mb-6">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Local Area Guide */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <span className="text-sm font-light tracking-[0.3em] text-gray-500 block mb-4">local area guide</span>
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">Local Area Guide</h2>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { name: "勝浦海中公園", type: "experience", image: "/20250430044233.JPEG" },
                { name: "大多喜城", type: "experience", image: "/20250430043740.JPEG" },
                { name: "いちご狩り", type: "experience", image: "/20250429045836.JPEG" }
              ].map((spot, index) => (
                <div key={index} className="text-center group cursor-pointer">
                  <div className="relative h-64 rounded-lg overflow-hidden mb-4">
                    <Image
                      src={spot.image}
                      alt={spot.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <span className="text-xs font-light text-gray-700">{spot.type}</span>
                    </div>
                  </div>
                  <h3 className="text-lg font-light text-gray-900">{spot.name}</h3>
                </div>
              ))}
            </div>
            
            <div className="text-center">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                おすすめ周辺施設 / 観光はこちら
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section className="py-32 bg-gray-50">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-20">
              <h2 className="text-4xl md:text-5xl font-extralight text-gray-900 mb-8">Access</h2>
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
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-sm font-light text-gray-600">car access</span>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-light text-gray-900">公共交通機関でお越しの場合</h4>
                  <div className="bg-white p-4 rounded-lg">
                    <span className="text-sm font-light text-gray-600">public transport access</span>
                  </div>
                  <p className="text-xs font-light text-gray-500 leading-relaxed">
                    ※公共交通機関でお越しの場合は、大多喜駅まで電車で向かい、その後タクシー利用がおすすめでございます。<br />
                    バスの本数が限られております。<br />
                    また、バス利用後施設最寄りバス停から徒歩で起伏のある道や舗装されてない道がありますので、<br />
                    その点ご理解の程よろしくお願いいたします。ご不明点ありましたら、お問い合わせください。
                  </p>
                </div>
              </div>
              
              <div className="rounded-lg overflow-hidden">
                <div className="bg-gray-200 h-96 flex items-center justify-center text-gray-500">
                  読み込み中...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto text-center">
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 mb-8">
              FAQ よくある質問
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <br />
            <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
              利用規約
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-16 border-t border-gray-100">
        <div className="container mx-auto px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 mb-8">
              <div className="space-y-4 text-sm font-light text-gray-600">
                <p>〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
                <p>tel : 0475-78-3050</p>
                <p>mail : jifgv.tools@gmail.com</p>
              </div>
              <div className="space-y-4 text-sm font-light text-gray-600">
                <p>〒298-0202 千葉県夷隅郡大多喜町下大多喜１００</p>
                <p>tel : 0475-78-3050</p>
                <p>mail : jifgv.tools@gmail.com</p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center space-x-8 text-sm font-light text-gray-600 mb-8">
              <a href="#" className="hover:text-gray-900">ホーム</a>
              <a href="#" className="hover:text-gray-900">アクセス</a>
              <a href="#" className="hover:text-gray-900">宿泊 / 日帰り</a>
              <a href="#" className="hover:text-gray-900">よくあるご質問</a>
              <a href="#" className="hover:text-gray-900">お問い合わせ</a>
              <a href="#" className="hover:text-gray-900">利用規約</a>
              <a href="#" className="hover:text-gray-900">サービス</a>
              <a href="#" className="hover:text-gray-900">プライバシーポリシー</a>
              <a href="#" className="hover:text-gray-900">周辺施設</a>
            </div>
            
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
