'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, Clock, Users, ChevronLeft, ChevronRight, Check, X, ShoppingBag } from "lucide-react"
import Link from "next/link"

interface TimeSlot {
  time: string
  available: boolean
  plan?: string
}

interface DayData {
  date: number
  available: boolean
  timeSlots: TimeSlot[]
}

export default function ReservationPage() {
  const [selectedDate, setSelectedDate] = useState<number | null>(null)
  const [selectedPlan, setSelectedPlan] = useState<string>('standard')
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [selectedRentals, setSelectedRentals] = useState<{ [key: string]: number }>({})

  // サンプルデータ（実際にはAPIから取得）
  const calendarData: { [key: number]: DayData } = {
    15: {
      date: 15,
      available: true,
      timeSlots: [
        { time: "15:00", available: true },
        { time: "16:00", available: false },
      ]
    },
    16: {
      date: 16,
      available: true,
      timeSlots: [
        { time: "15:00", available: true },
        { time: "16:00", available: true },
      ]
    },
    17: {
      date: 17,
      available: false,
      timeSlots: []
    },
    22: {
      date: 22,
      available: true,
      timeSlots: [
        { time: "15:00", available: true },
        { time: "16:00", available: false },
      ]
    },
    23: {
      date: 23,
      available: true,
      timeSlots: [
        { time: "15:00", available: true },
        { time: "16:00", available: true },
      ]
    },
    24: {
      date: 24,
      available: true,
      timeSlots: [
        { time: "15:00", available: false },
        { time: "16:00", available: true },
      ]
    },
  }

  const plans = [
    {
      id: 'light',
      name: 'ライトプラン',
      price: 5000,
      description: '気軽に学校キャンプ体験'
    },
    {
      id: 'standard',
      name: 'スタンダードプラン',
      price: 8000,
      description: '手ぶらで設営！らくらくキャンプ'
    },
    {
      id: 'premium',
      name: 'プレミアムプラン',
      price: 12000,
      description: '贅沢！廃校グランピング'
    }
  ]

  const rentalItems = [
    {
      id: 'tent',
      name: 'テント（2〜4人用）',
      price: 2000,
      description: '設営簡単な高品質テント。防水性能も抜群です。',
      supporter: '田中様'
    },
    {
      id: 'chair-table',
      name: 'チェア・テーブルセット',
      price: 1500,
      description: '軽量で持ち運びやすいアウトドア家具セット。',
      supporter: '山田様'
    },
    {
      id: 'bbq-grill',
      name: 'BBQグリル',
      price: 1800,
      description: '炭火で楽しむ本格BBQグリル。炭・着火剤付き。',
      supporter: '佐藤様'
    },
    {
      id: 'sleeping-bag',
      name: '寝袋・マット',
      price: 1200,
      description: '快適な睡眠をサポートする寝袋とマットのセット。'
    },
    {
      id: 'lantern',
      name: 'ランタン・照明',
      price: 800,
      description: '夜のキャンプを明るく照らすLEDランタンセット。'
    },
    {
      id: 'cooking-set',
      name: '調理器具セット',
      price: 1000,
      description: 'キャンプ料理に必要な調理器具一式をご用意。'
    }
  ]

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const monthNames = [
    "1月", "2月", "3月", "4月", "5月", "6月",
    "7月", "8月", "9月", "10月", "11月", "12月"
  ]

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentMonth)
    const firstDay = getFirstDayOfMonth(currentMonth)
    const days = []

    // 空白のセルを追加
    for (let i = 0; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="p-2"></div>)
    }

    // 日付のセルを追加
    for (let day = 1; day <= daysInMonth; day++) {
      const dayData = calendarData[day]
      const isAvailable = dayData?.available || false
      const isSelected = selectedDate === day

      days.push(
        <button
          key={day}
          onClick={() => isAvailable ? setSelectedDate(day) : null}
          className={`
            p-2 text-sm rounded-lg transition-colors
            ${isSelected 
              ? 'bg-green-600 text-white' 
              : isAvailable 
                ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }
          `}
          disabled={!isAvailable}
        >
          {day}
        </button>
      )
    }

    return days
  }

  const nextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
    setSelectedDate(null)
    setSelectedTimeSlot(null)
  }

  const prevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
    setSelectedDate(null)
    setSelectedTimeSlot(null)
  }

  const updateRentalQuantity = (itemId: string, quantity: number) => {
    setSelectedRentals(prev => {
      if (quantity === 0) {
        const newRentals = { ...prev }
        delete newRentals[itemId]
        return newRentals
      }
      return { ...prev, [itemId]: quantity }
    })
  }

  const calculateRentalTotal = () => {
    return Object.entries(selectedRentals).reduce((total, [itemId, quantity]) => {
      const item = rentalItems.find(item => item.id === itemId)
      return total + (item ? item.price * quantity : 0)
    }, 0)
  }

  const calculateTotal = () => {
    const planPrice = plans.find(p => p.id === selectedPlan)?.price || 0
    const rentalTotal = calculateRentalTotal()
    return planPrice + rentalTotal
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-bold text-gray-900">
              奥房総みらいプロジェクト
            </Link>
            <Link href="/" className="text-gray-600 hover:text-gray-900">
              ← ホームに戻る
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl font-light text-gray-900 text-center mb-12">ご予約</h1>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {/* カレンダーセクション */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  日程を選択
                </CardTitle>
              </CardHeader>
              <CardContent>
                {/* 月切り替え */}
                <div className="flex items-center justify-between mb-6">
                  <button
                    onClick={prevMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <h3 className="text-xl font-medium">
                    {currentMonth.getFullYear()}年{monthNames[currentMonth.getMonth()]}
                  </h3>
                  <button
                    onClick={nextMonth}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>

                {/* 曜日ヘッダー */}
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                    <div key={day} className="p-2 text-center text-sm font-medium text-gray-500">
                      {day}
                    </div>
                  ))}
                </div>

                {/* カレンダー */}
                <div className="grid grid-cols-7 gap-1">
                  {renderCalendar()}
                </div>

                {/* 凡例 */}
                <div className="mt-6 flex items-center space-x-4 text-sm">
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-green-100 rounded mr-2"></div>
                    <span>空きあり</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-4 h-4 bg-gray-100 rounded mr-2"></div>
                    <span>満室</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 時間・プラン選択セクション */}
            <div className="space-y-6">
              {/* プラン選択 */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="w-5 h-5 mr-2" />
                    プラン選択
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {plans.map((plan) => (
                      <button
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`
                          w-full p-4 rounded-lg border-2 text-left transition-colors
                          ${selectedPlan === plan.id 
                            ? 'border-green-600 bg-green-50' 
                            : 'border-gray-200 hover:border-gray-300'
                          }
                        `}
                      >
                        <div className="flex justify-between items-center">
                          <div>
                            <h4 className="font-medium text-gray-900">{plan.name}</h4>
                            <p className="text-sm text-gray-600">{plan.description}</p>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-green-600">¥{plan.price.toLocaleString()}</div>
                            <div className="text-sm text-gray-500">/泊</div>
                          </div>
                        </div>
                      </button>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* 時間選択 */}
              {selectedDate && (
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2" />
                      チェックイン時間選択
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-600 mb-4">
                      {currentMonth.getFullYear()}年{monthNames[currentMonth.getMonth()]}{selectedDate}日
                    </p>
                    <div className="grid grid-cols-2 gap-3">
                      {calendarData[selectedDate]?.timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() => slot.available ? setSelectedTimeSlot(slot.time) : null}
                          disabled={!slot.available}
                          className={`
                            p-3 rounded-lg border-2 transition-colors flex items-center justify-center
                            ${selectedTimeSlot === slot.time
                              ? 'border-green-600 bg-green-50'
                              : slot.available
                                ? 'border-gray-200 hover:border-gray-300'
                                : 'border-gray-200 bg-gray-100 cursor-not-allowed'
                            }
                          `}
                        >
                          <span className={slot.available ? 'text-gray-900' : 'text-gray-400'}>
                            {slot.time}
                          </span>
                          {slot.available ? (
                            <Check className="w-4 h-4 ml-2 text-green-600" />
                          ) : (
                            <X className="w-4 h-4 ml-2 text-red-400" />
                          )}
                        </button>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}

              {/* レンタル用品選択 */}
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <ShoppingBag className="w-5 h-5 mr-2" />
                    レンタル用品（オプション）
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {rentalItems.map((item) => (
                      <div key={item.id} className="border rounded-lg p-4">
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h4 className="font-medium text-gray-900 flex items-center">
                              {item.name}
                              {item.supporter && (
                                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                                  {item.supporter}提供
                                </span>
                              )}
                            </h4>
                            <p className="text-sm text-gray-600 mt-1">{item.description}</p>
                            <p className="text-lg font-bold text-green-600 mt-2">¥{item.price.toLocaleString()}/泊</p>
                          </div>
                        </div>
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-gray-600">数量:</span>
                          <div className="flex items-center space-x-3">
                            <button
                              onClick={() => updateRentalQuantity(item.id, Math.max(0, (selectedRentals[item.id] || 0) - 1))}
                              className="w-8 h-8 rounded-full bg-gray-200 hover:bg-gray-300 flex items-center justify-center"
                              disabled={(selectedRentals[item.id] || 0) === 0}
                            >
                              -
                            </button>
                            <span className="w-8 text-center font-medium">
                              {selectedRentals[item.id] || 0}
                            </span>
                            <button
                              onClick={() => updateRentalQuantity(item.id, (selectedRentals[item.id] || 0) + 1)}
                              className="w-8 h-8 rounded-full bg-green-600 hover:bg-green-700 text-white flex items-center justify-center"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {Object.keys(selectedRentals).length > 0 && (
                    <div className="mt-6 p-4 bg-green-50 rounded-lg">
                      <h5 className="font-medium text-gray-900 mb-2">選択中のレンタル用品</h5>
                      {Object.entries(selectedRentals).map(([itemId, quantity]) => {
                        const item = rentalItems.find(i => i.id === itemId)
                        if (!item) return null
                        return (
                          <div key={itemId} className="flex justify-between text-sm">
                            <span>{item.name} × {quantity}</span>
                            <span>¥{(item.price * quantity).toLocaleString()}</span>
                          </div>
                        )
                      })}
                      <div className="border-t pt-2 mt-2">
                        <div className="flex justify-between font-medium">
                          <span>レンタル小計</span>
                          <span>¥{calculateRentalTotal().toLocaleString()}</span>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* 予約確認 */}
              {selectedDate && selectedTimeSlot && (
                <Card className="bg-white shadow-lg">
                  <CardHeader>
                    <CardTitle>予約内容確認</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-gray-600">日程</span>
                        <span className="font-medium">
                          {currentMonth.getFullYear()}年{monthNames[currentMonth.getMonth()]}{selectedDate}日
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">チェックイン</span>
                        <span className="font-medium">{selectedTimeSlot}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">プラン</span>
                        <span className="font-medium">
                          {plans.find(p => p.id === selectedPlan)?.name}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">プラン料金</span>
                        <span className="font-medium">
                          ¥{plans.find(p => p.id === selectedPlan)?.price.toLocaleString()}
                        </span>
                      </div>
                      {Object.keys(selectedRentals).length > 0 && (
                        <div className="flex justify-between">
                          <span className="text-gray-600">レンタル用品</span>
                          <span className="font-medium">
                            ¥{calculateRentalTotal().toLocaleString()}
                          </span>
                        </div>
                      )}
                      <div className="border-t pt-3">
                        <div className="flex justify-between text-lg font-bold">
                          <span>合計金額</span>
                          <span className="text-green-600">
                            ¥{calculateTotal().toLocaleString()}
                          </span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full bg-green-600 hover:bg-green-700 text-white py-3">
                      予約手続きに進む
                    </Button>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 