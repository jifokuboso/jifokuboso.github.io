import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Clock, Users, Tent, Flame, Droplets, Car, Mail, Star } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">奥房総みらいプロジェクト</h1>
            <nav className="hidden md:flex space-x-6">
              <a href="#concept" className="text-gray-600 hover:text-gray-900 transition-colors">
                コンセプト
              </a>
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                施設案内
              </a>
              <a href="#rental" className="text-gray-600 hover:text-gray-900 transition-colors">
                レンタル用品
              </a>
              <a href="#sauna" className="text-gray-600 hover:text-gray-900 transition-colors">
                テントサウナ
              </a>
              <a href="#plans" className="text-gray-600 hover:text-gray-900 transition-colors">
                料金プラン
              </a>
              <a href="#access" className="text-gray-600 hover:text-gray-900 transition-colors">
                アクセス
              </a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">
                FAQ
              </a>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/okuboso-mirai-pv.mov" type="video/mp4" />
            <source src="/okuboso-mirai-pv.mov" type="video/quicktime" />
            廃校の校庭から見る里山の風景
          </video>
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-light mb-6 leading-tight">
            懐かしい校庭で、
            <br />
            非日常の体験を
          </h2>
          <p className="text-xl md:text-2xl mb-8 font-light opacity-90">
            廃校の校庭を活用した特別なキャンプ場。
            <br />
            自然の中でテント泊とテントサウナで、心と体のリフレッシュを。
          </p>
          <Link href="/reservation">
            <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
              今すぐ予約→
            </Button>
          </Link>
        </div>
      </section>

      {/* Concept Section */}
      <section id="concept" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-light text-gray-900 mb-8">コンセプト</h3>
            <p className="text-lg text-gray-600 leading-relaxed mb-12">
              都心から約80分。千葉県大多喜町の自然豊かな里山にある廃校の校庭を活用し、
              <br />
              地域と人をつなぐ「実験的な自然体験の場」として生まれ変わりました。
              <br />
              非日常にリセットできるキャンプ体験と、校舎を眺めるロケーションでの
              <br />
              テントサウナで &quot;ととのう&quot; 体験をお楽しみください。
            </p>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tent className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">広大な校庭でのキャンプ</h4>
                <p className="text-gray-600">大自然に囲まれた全面芝生の広大な校庭で自由にキャンプを楽しみませんか？</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Flame className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">テントサウナ</h4>
                <p className="text-gray-600">自然の中でのテントサウナで身も心も整う</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-emerald-600" />
                </div>
                <h4 className="text-xl font-medium text-gray-900 mb-2">廃校の強み</h4>
                <p className="text-gray-600">元学校舎という強み、整備されたインフラ。急な仕事も安心のコワーキングスペース</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-16">キャンプ場の特徴</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <Image
                  src="/school-yard.jpg"
                  alt="廃校の校庭から見る里山キャンプサイト"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">フリーサイト形式</h4>
                    <p className="text-gray-600">芝生エリアと一部ウッドデッキで、自由にテントを設営できます</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">校舎施設利用可</h4>
                    <p className="text-gray-600">トイレ、炊事場、シャワー施設をご利用いただけます</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">ペット同伴可</h4>
                    <p className="text-gray-600">リード着用必須で、愛犬と一緒にキャンプをお楽しみください</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-emerald-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="text-xl font-medium text-gray-900 mb-2">コワーキングスペース</h4>
                    <p className="text-gray-600">インターネットが利用可能なコワーキングスペースで急な仕事も安心</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rental Equipment Section */}
      <section id="rental" className="py-24 bg-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-8">レンタル用品</h3>
            <p className="text-lg text-gray-600 text-center mb-16 max-w-3xl mx-auto">
              手ぶらでキャンプを楽しめるよう、高品質なキャンプ用品をご用意しています。
              <br />
              クラウドファンディング支援者様のネームプレートが付いた特別な用品もございます。
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/rental-equipment/tent.svg"
                      alt="テント"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                      支援者様提供
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">テント（2〜4人用）</h4>
                  <p className="text-gray-600 mb-4">設営簡単な高品質テント。防水性能も抜群です。</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-600">¥2,000</span>
                    <span className="text-gray-500">/泊</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">支援者：田中様</p>
                    <p className="text-xs text-green-600">「みんなで楽しいキャンプを！」</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/rental-equipment/camping-chair.svg"
                      alt="チェア・テーブルセット"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                      支援者様提供
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">チェア・テーブルセット</h4>
                  <p className="text-gray-600 mb-4">軽量で持ち運びやすいアウトドア家具セット。</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-600">¥1,500</span>
                    <span className="text-gray-500">/泊</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">支援者：山田様</p>
                    <p className="text-xs text-green-600">「快適なキャンプライフを応援！」</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="relative mb-4">
                    <Image
                      src="/rental-equipment/bbq-grill.svg"
                      alt="BBQグリル"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                    <div className="absolute top-2 right-2 bg-green-600 text-white px-2 py-1 rounded-full text-xs">
                      支援者様提供
                    </div>
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">BBQグリル</h4>
                  <p className="text-gray-600 mb-4">炭火で楽しむ本格BBQグリル。炭・着火剤付き。</p>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-bold text-green-600">¥1,800</span>
                    <span className="text-gray-500">/泊</span>
                  </div>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-sm text-green-800 font-medium">支援者：佐藤様</p>
                    <p className="text-xs text-green-600">「美味しいBBQをみんなで！」</p>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image
                      src="/rental-equipment/sleeping-bag.svg"
                      alt="寝袋・マット"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">寝袋・マット</h4>
                  <p className="text-gray-600 mb-4">快適な睡眠をサポートする寝袋とマットのセット。</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">¥1,200</span>
                    <span className="text-gray-500">/泊</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image
                      src="/rental-equipment/lantern.svg"
                      alt="ランタン・照明"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">ランタン・照明</h4>
                  <p className="text-gray-600 mb-4">夜のキャンプを明るく照らすLEDランタンセット。</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">¥800</span>
                    <span className="text-gray-500">/泊</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-white border-green-200 shadow-lg hover:shadow-xl transition-shadow">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <Image
                      src="/rental-equipment/cooking-set.svg"
                      alt="調理器具セット"
                      width={300}
                      height={200}
                      className="rounded-lg w-full object-cover"
                    />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">調理器具セット</h4>
                  <p className="text-gray-600 mb-4">キャンプ料理に必要な調理器具一式をご用意。</p>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-green-600">¥1,000</span>
                    <span className="text-gray-500">/泊</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">クラウドファンディング支援者様へ</h4>
                <p className="text-gray-600 mb-4">
                  プロジェクトを支援いただいた皆様のお名前とメッセージを、
                  レンタル用品に特製ネームプレートとして取り付けさせていただいております。
                </p>
                <Button className="bg-green-600 hover:bg-green-700 text-white">プロジェクトを応援する</Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sauna Section */}
      <section id="sauna" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-16">テントサウナ</h3>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-lg text-gray-600 leading-relaxed">
                  校舎を眺める絶好のロケーションで、薪ストーブ式テントサウナをお楽しみいただけます。
                  地元の間伐材を使った薪で温められたサウナで汗を流し、地下水を利用した水風呂で身体を冷やし、
                  外気浴スペースで里山の風を感じながら &quot;ととのう&quot; 体験をどうぞ。
                </p>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Flame className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">薪ストーブ式テントサウナ数基設置（要予約）</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Droplets className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">仮設水風呂を完備</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-emerald-600" />
                    <span className="text-gray-700">プライベートサウナプランあり</span>
                  </div>
                </div>
              </div>
              <div>
                <Image
                  src="/tent-sauna.jpg"
                  alt="テントサウナとロウリュの様子"
                  width={600}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-8">あなたにぴったりのキャンプ体験を</h3>
            <p className="text-lg text-gray-600 text-center mb-16">初めての方から本格的なアウトドア体験を求める方まで、様々なニーズに合わせた３つのプランをご用意しています。</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-medium text-gray-900 mb-4">ライトプラン</h4>
                  <p className="text-sm text-gray-600 mb-4">気軽に学校キャンプ体験</p>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    ¥5,000<span className="text-lg font-normal text-gray-600">/泊</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">チェックイン：15:00〜18:00</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">チェックアウト：〜11:00</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">区画サイト利用のみ<br />トイレ、炊事場が利用可能</p>
                  <Link href="/reservation">
                    <Button className="w-full bg-green-600 hover:bg-green-700">今すぐ予約</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white border-emerald-200 shadow-lg border-2">
                <CardContent className="p-8">
                  <div className="bg-emerald-100 text-emerald-800 text-sm font-medium px-3 py-1 rounded-full inline-block mb-4">
                    オススメ
                  </div>
                  <h4 className="text-2xl font-medium text-gray-900 mb-4">スタンダードプラン</h4>
                  <p className="text-sm text-gray-600 mb-4">手ぶらで設営！らくらくキャンプ</p>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    ¥8,000<span className="text-lg font-normal text-gray-600">/泊</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">チェックイン：15:00〜18:00</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">チェックアウト：〜11:00</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">基本キャンプギア貸し出し付き区画サイト<br />トイレ、炊事場、シャワー施設が利用可能</p>
                  <Link href="/reservation">
                    <Button className="w-full bg-green-600 hover:bg-green-700">今すぐ予約</Button>
                  </Link>
                </CardContent>
              </Card>

              <Card className="bg-white border-gray-200 shadow-lg">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-medium text-gray-900 mb-4">プレミアムプラン</h4>
                  <p className="text-sm text-gray-600 mb-4">贅沢！廃校グランピング</p>
                  <div className="text-3xl font-bold text-green-600 mb-4">
                    ¥12,000<span className="text-lg font-normal text-gray-600">/泊</span>
                  </div>
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">チェックイン：15:00〜18:00</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4 text-gray-500" />
                      <span className="text-gray-600">チェックアウト：〜11:00</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-6">グランピングサイト<br />ベッド、ソファ完備<br />特別アクティビティ</p>
                  <Link href="/reservation">
                    <Button className="w-full bg-green-600 hover:bg-green-700">今すぐ予約</Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Access Section */}
      <section id="access" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-16">アクセス</h3>
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h4 className="text-2xl font-medium text-gray-900 mb-6">所在地</h4>
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="text-gray-900 font-medium">〒298-0202</p>
                      <p className="text-gray-900 font-medium">千葉県夷隅郡大多喜町下大多喜１００</p>
                      <p className="text-gray-600">（旧上瀑小学校）</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Car className="w-5 h-5 text-emerald-600 mt-1" />
                    <div>
                      <p className="text-gray-600">勝浦市街から車で約20分</p>
                      <p className="text-gray-600">都心から約2時間</p>
                    </div>
                  </div>
                  <div className="bg-green-100 p-4 rounded-lg mt-6">
                    <h5 className="font-medium text-gray-900 mb-2">営業時間</h5>
                    <p className="text-gray-700">チェックイン：15:00〜18:00</p>
                    <p className="text-gray-700">チェックアウト：〜11:00</p>
                  </div>
                </div>
              </div>
              <div>
                <div className="rounded-lg overflow-hidden shadow-lg">
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3256.247591177041!2d140.24864785373208!3d35.299828964359115!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6022b1451ba7d83f%3A0x98bd61e58198588!2z5aSn5aSa5Zac55S656uL5LiK54Kr5bCP5a2m5qCh!5e0!3m2!1sja!2smy!4v1749694394133!5m2!1sja!2smy" 
                    width="100%" 
                    height="450" 
                    style={{ border: 0 }} 
                    allowFullScreen={true}
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                    title="大多喜町立上瀑小学校 - Google マップ"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-8">お客様の声</h3>
            <p className="text-lg text-gray-600 text-center mb-16">実際にご利用いただいたお客様からの感想</p>
            <div className="grid md:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    「奥房総みらいプロジェクトのおかげで、地域の魅力を再発見し、自然と人がつながる新しい体験ができました。」
                  </p>
                  <p className="text-gray-900 font-medium">— 佐藤一郎</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className={`w-5 h-5 ${
                            star <= 4 
                              ? "fill-yellow-400 text-yellow-400" 
                              : "fill-gray-300 text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    「古民家でのイベントは心温まるもので、参加者同士の絆が深まりました。ここでしか味わえない貴重な体験です。」
                  </p>
                  <p className="text-gray-900 font-medium">— 中村花子</p>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex justify-center mb-4">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star
                          key={star}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 italic">
                    「自然豊かな場所で、心身ともにリフレッシュできました。地域の人々との交流も素晴らしい体験でした。」
                  </p>
                  <p className="text-gray-900 font-medium">— 木村健</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-4xl font-light text-gray-900 text-center mb-16">よくある質問</h3>
            <div className="space-y-6">
              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Q. 初心者でも参加できますか？</h4>
                  <p className="text-gray-600">はい、初心者の方でも安心してご参加いただけるよう、スタッフがサポートいたします。基本的なキャンプ用品もレンタル可能です。</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Q. 雨天時はどうなりますか？</h4>
                  <p className="text-gray-600">小雨程度であれば実施いたします。校舎内の設備も利用可能なため、天候に関わらずお楽しみいただけます。</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Q. 持参すべきものはありますか？</h4>
                  <p className="text-gray-600">基本的な道具はレンタル可能ですが、個人の着替えや洗面用具、タオルなどはご持参ください。詳細は予約時にご案内いたします。</p>
                </CardContent>
              </Card>

              <Card className="bg-gray-50">
                <CardContent className="p-6">
                  <h4 className="text-xl font-medium text-gray-900 mb-3">Q. キャンセル料はかかりますか？</h4>
                  <p className="text-gray-600">ご利用日の3日前までのキャンセルは無料です。それ以降は50%、当日キャンセルは100%のキャンセル料をいただいております。</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-stone-800 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-4xl font-light mb-8">お問い合わせ・ご予約</h3>
            <p className="text-xl mb-12 opacity-90">ご不明な点やご予約については、お気軽にお問い合わせください</p>
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex items-center justify-center space-x-3">
                <Mail className="w-6 h-6" />
                <span className="text-lg">jifgv.tools@gmail.com</span>
              </div>
              <div className="flex items-center justify-center space-x-3">
                <MapPin className="w-6 h-6" />
                <span className="text-lg">千葉県夷隅郡大多喜町下大多喜１００</span>
              </div>
            </div>
            <Link href="/reservation">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 text-lg">
                予約フォームへ
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="py-16 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-3xl font-light mb-4">コミュニティに参加する</h3>
            <p className="text-xl mb-8 opacity-90">
              Slackコミュニティへの参加でプロジェクト全体の最新情報を入手できます
            </p>
            <Button size="lg" className="bg-white text-green-600 hover:bg-gray-100 px-8 py-3 text-lg">
              Slackコミュニティに参加
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-stone-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h4 className="text-2xl font-bold mb-4">奥房総みらいプロジェクト</h4>
            <p className="text-stone-400 mb-4">古民家とロッジと廃校活用から始まる新しい&quot;つながり&quot;づくり</p>
            <p className="text-stone-400">〒298-0202 千葉県夷隅郡大多喜町下大多喜１００（旧上瀑小学校）</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
