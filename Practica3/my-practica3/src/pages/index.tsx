import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import HouseList from '@/components/HouseList'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <HouseList/>
    <Link href={`/wizard`}>Ir a Wizards</Link>
    </>
  )
}
