'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Clock, Tent, ArrowLeft, ArrowRight, Check } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState<string | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)
  const [selectedTime, setSelectedTime] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedRentals, setSelectedRentals] = useState<{[key: string]: number}>({})

  // カレンダー生成
  const generateCalendar = (date: Date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()

    const days = []
    
    // 前月の日付で埋める
    for (let i = 0; i < startingDayOfWeek; i++) {
      days.push(null)
    }
    
    // 今月の日付
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(day)
    }
    
    return days
  }

  const plans = [
    {
      id: 'light',
      name: 'ライト',
      price: 5000,
      description: '気軽に学校キャンプ体験',
      features: ['区画サイト利用', 'トイレ・炊事場', 'チェックイン 15:00-18:00'],
      popular: false
    },
    {
      id: 'standard',
      name: 'スタンダード',
      price: 8000,
      description: '手ぶらでらくらくキャンプ',
      features: ['基本ギア貸出付き', 'シャワー施設', 'チェックイン 15:00-18:00'],
      popular: true
    },
    {
      id: 'premium',
      name: 'プレミアム',
      price: 12000,
      description: '贅沢廃校グランピング',
      features: ['グランピングサイト', 'ベッド・ソファ完備', '特別アクティビティ'],
      popular: false
    }
  ]

  const timeSlots = [
    '15:00', '15:30', '16:00', '16:30', '17:00', '17:30', '18:00'
  ]

  const rentalItems = [
    {
      id: 'tent',
      name: 'テント（2〜4人用）',
      price: 2000,
      description: '設営簡単な高品質テント',
      supporter: '田中様',
      message: 'みんなで楽しいキャンプを！',
      image: '/20250430044233.JPEG'
    },
    {
      id: 'chair-table',
      name: 'チェア・テーブルセット',
      price: 1500,
      description: '軽量アウトドア家具セット',
      supporter: '山田様',
      message: '快適なキャンプライフを応援！',
      image: '/20250430044445.JPEG'
    },
    {
      id: 'bbq',
      name: 'BBQグリル',
      price: 1800,
      description: '炭火BBQグリル（炭・着火剤付き）',
      supporter: '佐藤様',
      message: '美味しいBBQをみんなで！',
      image: '/20250430044800.JPEG'
    },
    {
      id: 'sleeping',
      name: '寝袋・マット',
      price: 1200,
      description: '快適睡眠サポートセット',
      supporter: null,
      message: null,
      image: '/20250430043740.JPEG'
    },
    {
      id: 'lantern',
      name: 'ランタン・照明',
      price: 800,
      description: 'LEDランタンセット',
      supporter: null,
      message: null,
      image: '/20250429045836.JPEG'
    },
    {
      id: 'cooking',
      name: '調理器具セット',
      price: 1000,
      description: 'キャンプ料理必需品一式',
      supporter: null,
      message: null,
      image: '/20250429045817.JPEG'
    }
  ]

  const updateRentalQuantity = (itemId: string, change: number) => {
    setSelectedRentals(prev => ({
      ...prev,
      [itemId]: Math.max(0, (prev[itemId] || 0) + change)
    }))
  }

  const getTotalPrice = () => {
    const planPrice = plans.find(p => p.id === selectedPlan)?.price || 0
    const rentalPrice = Object.entries(selectedRentals).reduce((total, [itemId, quantity]) => {
      const item = rentalItems.find(r => r.id === itemId)
      return total + (item?.price || 0) * quantity
    }, 0)
    return planPrice + rentalPrice
  }

  const days = generateCalendar(currentMonth)
  const monthNames = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月']

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-black/20 border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-3 group">
              <ArrowLeft className="w-6 h-6 text-white/80 group-hover:text-white transition-colors" />
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-600 rounded-xl flex items-center justify-center">
                  <Tent className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  奥房総みらいプロジェクト
                </span>
              </div>
            </Link>
            <div className="text-right">
              <h1 className="text-2xl font-bold text-white">予約フォーム</h1>
              <p className="text-white/60">廃校キャンプの特別な体験を</p>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-20">
        <div className="absolute inset-0">
          <Image
            src="/20250527020429.JPEG"
            alt="予約背景"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/80"></div>
        </div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-black mb-6 bg-gradient-to-r from-white via-emerald-200 to-white bg-clip-text text-transparent">
            予約する
          </h1>
          <p className="text-xl text-white/80 leading-relaxed">
            懐かしい校庭での特別なキャンプ体験をご予約ください
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto space-y-16">
          
          {/* Step 1: プラン選択 */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Step 1: プラン選択
              </h2>
              <p className="text-white/70">あなたにぴったりのキャンプ体験を選択してください</p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {plans.map((plan) => (
                <Card 
                  key={plan.id}
                  className={`relative overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 ${
                    selectedPlan === plan.id
                      ? 'bg-gradient-to-b from-emerald-500/30 to-teal-600/30 border-2 border-emerald-400 shadow-2xl shadow-emerald-500/20'
                      : plan.popular 
                        ? 'bg-gradient-to-b from-emerald-500/20 to-teal-600/20 border-2 border-emerald-400/50' 
                        : 'bg-white/10 border border-white/20'
                  } backdrop-blur-xl hover:shadow-2xl hover:shadow-emerald-500/10`}
                  onClick={() => setSelectedPlan(plan.id)}
                >
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-emerald-400 to-teal-600 text-center py-2">
                      <span className="text-sm font-bold text-white">オススメ</span>
                    </div>
                  )}
                  {selectedPlan === plan.id && (
                    <div className="absolute top-4 right-4 w-8 h-8 bg-emerald-400 rounded-full flex items-center justify-center">
                      <Check className="w-5 h-5 text-white" />
                    </div>
                  )}
                  <CardContent className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}プラン</h3>
                    <p className="text-white/70 mb-6">{plan.description}</p>
                    <div className="mb-8">
                      <span className="text-4xl font-black text-white">¥{plan.price.toLocaleString()}</span>
                      <span className="text-white/60 ml-2">/泊</span>
                    </div>
                    <ul className="space-y-3">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-white/80">
                          <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Step 2: 日付選択 */}
          <section>
            <div className="text-center mb-12">
              <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Step 2: 日付選択
              </h2>
              <p className="text-white/70">ご希望の宿泊日を選択してください</p>
            </div>
            
            <Card className="bg-white/10 backdrop-blur-xl border border-white/20 max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex items-center justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))}
                    className="text-white hover:bg-white/10"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </Button>
                  <CardTitle className="text-2xl font-bold text-white">
                    {currentMonth.getFullYear()}年 {monthNames[currentMonth.getMonth()]}
                  </CardTitle>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))}
                    className="text-white hover:bg-white/10"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                </div>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid grid-cols-7 gap-2 mb-4">
                  {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                    <div key={day} className="text-center text-white/60 font-medium py-2">
                      {day}
                    </div>
                  ))}
                </div>
                <div className="grid grid-cols-7 gap-2">
                  {days.map((day, index) => {
                    if (day === null) {
                      return <div key={index} className="h-12"></div>
                    }
                    
                    const dateString = `${currentMonth.getFullYear()}-${String(currentMonth.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`
                    const isSelected = selectedDate === dateString
                    const isAvailable = Math.random() > 0.3 // ランダムで空き状況を表示
                    
                    return (
                      <button
                        key={day}
                        onClick={() => isAvailable && setSelectedDate(dateString)}
                        disabled={!isAvailable}
                        className={`h-12 rounded-xl font-medium transition-all duration-300 ${
                          isSelected
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg'
                            : isAvailable
                              ? 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                              : 'bg-gray-600/20 text-gray-500 cursor-not-allowed'
                        }`}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
                <div className="flex items-center justify-center space-x-6 mt-6 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-teal-600 rounded"></div>
                    <span className="text-white/70">選択中</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-white/10 rounded"></div>
                    <span className="text-white/70">空きあり</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-gray-600/20 rounded"></div>
                    <span className="text-white/70">満室</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </section>

          {/* Step 3: チェックイン時間 */}
          {selectedDate && (
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Step 3: チェックイン時間
                </h2>
                <p className="text-white/70">ご希望のチェックイン時間を選択してください</p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-4xl mx-auto">
                {timeSlots.map((time) => (
                  <button
                    key={time}
                    onClick={() => setSelectedTime(time)}
                    className={`p-4 rounded-xl font-medium transition-all duration-300 ${
                      selectedTime === time
                        ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-lg scale-105'
                        : 'bg-white/10 text-white hover:bg-white/20 hover:scale-105'
                    } backdrop-blur-md border border-white/20`}
                  >
                    <Clock className="w-5 h-5 mx-auto mb-2" />
                    {time}
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Step 4: レンタル用品 */}
          {selectedTime && (
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  Step 4: レンタル用品
                </h2>
                <p className="text-white/70">必要なレンタル用品を選択してください（オプション）</p>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {rentalItems.map((item) => (
                  <Card key={item.id} className="bg-white/10 backdrop-blur-xl border border-white/20 hover:bg-white/15 transition-all duration-300 hover:scale-105 group overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                      {item.supporter && (
                        <div className="absolute top-3 right-3 bg-emerald-500/90 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-medium">
                          支援者様提供
                        </div>
                      )}
                    </div>
                    <CardContent className="p-6">
                      <h4 className="text-xl font-bold text-white mb-2">{item.name}</h4>
                      <p className="text-white/70 mb-4">{item.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-2xl font-bold text-emerald-400">¥{item.price.toLocaleString()}</span>
                        <span className="text-white/60">/泊</span>
                      </div>
                      
                      {item.supporter && (
                        <div className="bg-emerald-500/20 backdrop-blur-md p-3 rounded-xl mb-4 border border-emerald-400/30">
                          <p className="text-sm text-emerald-300 font-medium">支援者：{item.supporter}</p>
                          <p className="text-xs text-emerald-200">「{item.message}」</p>
                        </div>
                      )}
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                          <button
                            onClick={() => updateRentalQuantity(item.id, -1)}
                            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                            disabled={!selectedRentals[item.id]}
                          >
                            -
                          </button>
                          <span className="text-white font-medium w-8 text-center">
                            {selectedRentals[item.id] || 0}
                          </span>
                          <button
                            onClick={() => updateRentalQuantity(item.id, 1)}
                            className="w-8 h-8 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
                          >
                            +
                          </button>
                        </div>
                        <span className="text-white/70 text-sm">
                          ¥{((selectedRentals[item.id] || 0) * item.price).toLocaleString()}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>
          )}

          {/* 予約確認 */}
          {selectedPlan && selectedDate && selectedTime && (
            <section>
              <div className="text-center mb-12">
                <h2 className="text-4xl font-black mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                  予約確認
                </h2>
                <p className="text-white/70">ご予約内容をご確認ください</p>
              </div>
              
              <Card className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl border border-white/20 max-w-2xl mx-auto">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span className="text-white/70">プラン</span>
                      <span className="text-white font-medium">
                        {plans.find(p => p.id === selectedPlan)?.name}プラン
                      </span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span className="text-white/70">宿泊日</span>
                      <span className="text-white font-medium">{selectedDate}</span>
                    </div>
                    
                    <div className="flex justify-between items-center pb-4 border-b border-white/20">
                      <span className="text-white/70">チェックイン時間</span>
                      <span className="text-white font-medium">{selectedTime}</span>
                    </div>
                    
                                         {Object.entries(selectedRentals).filter(([, quantity]) => quantity > 0).length > 0 && (
                      <div className="pb-4 border-b border-white/20">
                        <span className="text-white/70 block mb-3">レンタル用品</span>
                        <div className="space-y-2">
                                                     {Object.entries(selectedRentals)
                             .filter(([, quantity]) => quantity > 0)
                             .map(([itemId, quantity]) => {
                              const item = rentalItems.find(r => r.id === itemId)
                              return (
                                <div key={itemId} className="flex justify-between text-sm">
                                  <span className="text-white/80">{item?.name} × {quantity}</span>
                                  <span className="text-white">¥{((item?.price || 0) * quantity).toLocaleString()}</span>
                                </div>
                              )
                            })}
                        </div>
                      </div>
                    )}
                    
                    <div className="flex justify-between items-center text-xl font-bold">
                      <span className="text-white">合計金額</span>
                      <span className="text-emerald-400">¥{getTotalPrice().toLocaleString()}</span>
                    </div>
                  </div>
                  
                  <Button className="w-full mt-8 bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white py-4 text-lg font-bold rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-emerald-500/25">
                    この内容で予約する
                  </Button>
                  
                  <p className="text-center text-white/60 text-sm mt-4">
                    予約確定後、確認メールをお送りいたします
                  </p>
                </CardContent>
              </Card>
            </section>
          )}
        </div>
      </div>
    </div>
  )
}