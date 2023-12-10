import styles from '../styles/Home.module.css';
import Link from 'next/link';
import { ConnectWallet } from '@thirdweb-dev/react';

export default function Navbar() {
  return (
    <main>
    <section className={styles.navbar}>
        <div className={styles.navbar_logo}>
          FoBU
        </div>
        <ul className={styles.navbar_menu}>
          <li><Link href="/">메인</Link></li>
          <li><Link href="/checkOradd">내정보확인</Link></li>
          <li><Link href="/changeinfo">내정보수정</Link></li>
          <li><Link href="/setcontract">거래조건설정</Link></li>
          <li><Link href="/checkcontract">거래내역확인</Link></li>
          <li><Link href="/contact">문의</Link></li>
        </ul>
        <div>
          <ConnectWallet 
          btnTitle='지갑 연결'
          modalTitle='연결할 지갑을 선택하세요'
          modalSize='compact'
          />
        </div>
      </section>
    </main>
  )
}