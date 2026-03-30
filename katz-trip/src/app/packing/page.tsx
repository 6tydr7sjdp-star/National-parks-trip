'use client'
import { useState } from 'react'
import styles from './page.module.css'

type Item = { id: string; label: string; checked: boolean }
type Category = { name: string; icon: string; items: Item[] }

const initialCategories: Category[] = [
  {
    name: 'Camping Gear',
    icon: '🏕️',
    items: [
      { id: 'c1', label: 'Tent', checked: false },
      { id: 'c2', label: 'Sleeping bags (all temps)', checked: false },
      { id: 'c3', label: 'Sleeping pads', checked: false },
      { id: 'c4', label: 'Camp chairs', checked: false },
      { id: 'c5', label: 'Headlamps + extra batteries', checked: false },
      { id: 'c6', label: 'Lantern', checked: false },
      { id: 'c7', label: 'Camp stove + fuel', checked: false },
      { id: 'c8', label: 'Cooking pot + utensils', checked: false },
      { id: 'c9', label: 'Cooler + ice packs', checked: false },
    ],
  },
  {
    name: 'Clothing',
    icon: '👕',
    items: [
      { id: 'cl1', label: 'Layers (mornings are cold)', checked: false },
      { id: 'cl2', label: 'Rain jacket (everyone)', checked: false },
      { id: 'cl3', label: 'Hiking shoes / boots', checked: false },
      { id: 'cl4', label: 'Sandals or camp shoes', checked: false },
      { id: 'cl5', label: 'Sun hat', checked: false },
      { id: 'cl6', label: 'Swimsuits (hotel pool days)', checked: false },
      { id: 'cl7', label: 'Warm hat + gloves (Yellowstone)', checked: false },
    ],
  },
  {
    name: 'Hiking & Outdoors',
    icon: '🥾',
    items: [
      { id: 'h1', label: 'Daypacks', checked: false },
      { id: 'h2', label: 'Trekking poles', checked: false },
      { id: 'h3', label: 'Water bottles (everyone)', checked: false },
      { id: 'h4', label: 'Water filter / purifier', checked: false },
      { id: 'h5', label: 'Sunscreen SPF 50+', checked: false },
      { id: 'h6', label: 'Bug spray', checked: false },
      { id: 'h7', label: 'First aid kit', checked: false },
      { id: 'h8', label: 'Trail snacks / bars', checked: false },
    ],
  },
  {
    name: 'Car & Road',
    icon: '🚗',
    items: [
      { id: 'r1', label: 'America the Beautiful pass', checked: false },
      { id: 'r2', label: 'Phone mounts', checked: false },
      { id: 'r3', label: 'Car chargers / cables', checked: false },
      { id: 'r4', label: 'Offline maps downloaded', checked: false },
      { id: 'r5', label: 'Road trip playlist', checked: false },
      { id: 'r6', label: 'Car emergency kit', checked: false },
      { id: 'r7', label: 'Trash bags', checked: false },
    ],
  },
  {
    name: 'Kids & Family',
    icon: '👨‍👩‍👧‍👦',
    items: [
      { id: 'k1', label: 'Junior Ranger booklets', checked: false },
      { id: 'k2', label: 'Games / cards for camp', checked: false },
      { id: 'k3', label: 'Binoculars (wildlife!)', checked: false },
      { id: 'k4', label: 'Camera / extra SD cards', checked: false },
      { id: 'k5', label: 'Journals / sketchbooks', checked: false },
      { id: 'k6', label: 'Snack bag for car', checked: false },
    ],
  },
  {
    name: 'Toiletries & Health',
    icon: '🧴',
    items: [
      { id: 't1', label: 'Toiletries bag (everyone)', checked: false },
      { id: 't2', label: 'Hand sanitizer', checked: false },
      { id: 't3', label: 'Medications / vitamins', checked: false },
      { id: 't4', label: 'Altitude sickness meds', checked: false },
      { id: 't5', label: 'Lip balm SPF', checked: false },
      { id: 't6', label: 'Wet wipes (camp days)', checked: false },
    ],
  },
  {
    name: 'Documents & Logistics',
    icon: '📋',
    items: [
      { id: 'd1', label: 'Flight confirmations', checked: false },
      { id: 'd2', label: 'Hotel bookings printed/saved', checked: false },
      { id: 'd3', label: 'Campsite reservations (sites 34 & 48)', checked: false },
      { id: 'd4', label: 'Yellowstone tour confirmation (20331373)', checked: false },
      { id: 'd5', label: 'Travel insurance info', checked: false },
      { id: 'd6', label: 'Emergency contacts list', checked: false },
    ],
  },
]

export default function Packing() {
  const [cats, setCats] = useState(initialCategories)

  const toggle = (catIdx: number, itemId: string) => {
    setCats(prev => prev.map((cat, ci) =>
      ci !== catIdx ? cat : {
        ...cat,
        items: cat.items.map(item =>
          item.id === itemId ? { ...item, checked: !item.checked } : item
        )
      }
    ))
  }

  const totalItems  = cats.reduce((n, c) => n + c.items.length, 0)
  const checkedItems = cats.reduce((n, c) => n + c.items.filter(i => i.checked).length, 0)
  const pct = Math.round((checkedItems / totalItems) * 100)

  return (
    <div className={styles.wrap}>
      <div className={styles.pageHeader}>
        <h1 className={styles.pageTitle}>Packing List</h1>
        <p className={styles.pageSub}>Check things off as you pack</p>
      </div>

      {/* Progress */}
      <div className={styles.progressCard}>
        <div className={styles.progressInfo}>
          <span className={styles.progressCount}>{checkedItems} / {totalItems} packed</span>
          <span className={styles.progressPct}>{pct}%</span>
        </div>
        <div className={styles.progressBar}>
          <div className={styles.progressFill} style={{ width: `${pct}%` }} />
        </div>
      </div>

      {/* Categories */}
      <div className={styles.catGrid}>
        {cats.map((cat, ci) => {
          const done = cat.items.filter(i => i.checked).length
          return (
            <div key={cat.name} className={styles.catCard}>
              <div className={styles.catHeader}>
                <span className={styles.catIcon}>{cat.icon}</span>
                <span className={styles.catName}>{cat.name}</span>
                <span className={styles.catCount}>{done}/{cat.items.length}</span>
              </div>
              <ul className={styles.itemList}>
                {cat.items.map(item => (
                  <li
                    key={item.id}
                    className={`${styles.item} ${item.checked ? styles.itemChecked : ''}`}
                    onClick={() => toggle(ci, item.id)}
                  >
                    <span className={styles.checkbox}>
                      {item.checked ? '✓' : ''}
                    </span>
                    <span className={styles.itemLabel}>{item.label}</span>
                  </li>
                ))}
              </ul>
            </div>
          )
        })}
      </div>
    </div>
  )
}
