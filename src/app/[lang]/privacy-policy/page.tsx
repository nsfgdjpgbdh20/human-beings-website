"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Simple Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[var(--background)]/95 backdrop-blur-2xl border-b border-gray-300/50">
        <nav className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-24">
            <Link href="/" className="flex items-center flex-shrink-0">
              <span className="text-[13px] font-semibold tracking-[0.42em] text-gray-800 uppercase whitespace-nowrap">
                Human Beings Inc.
              </span>
            </Link>

            <Link
              href="/"
              className="text-[12px] tracking-[0.35em] text-gray-600 hover:text-gray-900 transition-all duration-300 px-5 py-3 rounded-full border border-transparent hover:border-gray-300/70 hover:bg-white/70 backdrop-blur-sm whitespace-nowrap"
            >
              HOME
            </Link>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto max-w-4xl px-6 lg:px-12 py-32 lg:py-40">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-12 text-center">
            プライバシーポリシー
          </h1>

          <div className="space-y-12 text-gray-700 leading-relaxed">
            <section>
              <p className="mb-6">
                株式会社Human Beings（以下、「当社」といいます。）は、本ウェブサイト上で提供するサービス（以下、「本サービス」といいます。）における、ユーザーの個人情報の取扱いについて、以下のとおりプライバシーポリシー（以下、「本ポリシー」といいます。）を定めます。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第1条（個人情報）
              </h2>
              <p>
                「個人情報」とは、個人情報保護法にいう「個人情報」を指すものとし、生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日、住所、電話番号、連絡先その他の記述等により特定の個人を識別できる情報及び容貌、指紋、声紋にかかるデータ、及び健康保険証の保険者番号などの当該情報単体から特定の個人を識別できる情報（個人識別情報）を指します。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第2条（個人情報の収集方法）
              </h2>
              <p>
                当社は、ユーザーが利用登録をする際に氏名、生年月日、住所、電話番号、メールアドレス、銀行口座番号、クレジットカード番号、運転免許証番号などの個人情報をお尋ねすることがあります。また、ユーザーと提携先などとの間でなされたユーザーの個人情報を含む取引記録や決済に関する情報を、当社の提携先（情報提供元、広告主、広告配信先などを含みます。以下、｢提携先｣といいます。）などから収集することがあります。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第3条（個人情報を収集・利用する目的）
              </h2>
              <p className="mb-4">当社が個人情報を収集・利用する目的は、以下のとおりです。</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社サービスの提供・運営のため</li>
                <li>ユーザーからのお問い合わせに回答するため（本人確認を行うことを含む）</li>
                <li>ユーザーが利用中のサービスの新機能、更新情報、キャンペーン等及び当社が提供する他のサービスの案内のメールを送付するため</li>
                <li>メンテナンス、重要なお知らせなど必要に応じたご連絡のため</li>
                <li>利用規約に違反したユーザーや、不正・不当な目的でサービスを利用しようとするユーザーの特定をし、ご利用をお断りするため</li>
                <li>ユーザーにご自身の登録情報の閲覧や変更、削除、ご利用状況の閲覧を行っていただくため</li>
                <li>有料サービスにおいて、ユーザーに利用料金を請求するため</li>
                <li>上記の利用目的に付随する目的</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第4条（利用目的の変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社は、利用目的が変更前と関連性を有すると合理的に認められる場合に限り、個人情報の利用目的を変更するものとします。</li>
                <li>利用目的の変更を行った場合には、変更後の目的について、当社所定の方法により、ユーザーに通知し、または本ウェブサイト上に公表するものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第5条（個人情報の第三者提供）
              </h2>
              <p className="mb-4">
                当社は、次に掲げる場合を除いて、あらかじめユーザーの同意を得ることなく、第三者に個人情報を提供することはありません。ただし、個人情報保護法その他の法令で認められる場合を除きます。
              </p>
              <ol className="list-decimal list-inside space-y-2 pl-4 mb-4">
                <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
                <li>国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき</li>
                <li>予め次の事項を告知あるいは公表し、かつ当社が個人情報保護委員会に届出をしたとき
                  <ul className="list-disc list-inside pl-6 mt-2 space-y-1">
                    <li>利用目的に第三者への提供を含むこと</li>
                    <li>第三者に提供されるデータの項目</li>
                    <li>第三者への提供の手段または方法</li>
                    <li>本人の求めに応じて個人情報の第三者への提供を停止すること</li>
                    <li>本人の求めを受け付ける方法</li>
                  </ul>
                </li>
              </ol>
              <p className="mb-2">前項の定めにかかわらず、次に掲げる場合には、当該情報の提供先は第三者に該当しないものとします。</p>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>当社が利用目的の達成に必要な範囲内において個人情報の取扱いの全部または一部を委託する場合</li>
                <li>合併その他の事由による事業の承継に伴って個人情報が提供される場合</li>
                <li>個人情報を特定の者との間で共同して利用する場合であって、その旨並びに共同して利用される個人情報の項目、共同して利用する者の範囲、利用する者の利用目的および当該個人情報の管理について責任を有する者の氏名または名称について、あらかじめ本人に通知し、または本人が容易に知り得る状態に置いた場合</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第6条（アクセス解析ツールについて）
              </h2>
              <p>
                当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第7条（広告の配信について）
              </h2>
              <p>
                当サイトは、第三者配信の広告サービス（Googleアドセンス等）を利用しています。このような広告配信事業者は、ユーザーの興味に応じた商品やサービスの広告を表示するため、当サイトや他サイトへのアクセスに関する情報「Cookie」（氏名、住所、メールアドレス、電話番号は含まれません）を使用することがあります。またGoogleアドセンスに関して、このプロセスの詳細やこのような情報が広告配信事業者に使用されないようにする方法については、<a href="https://policies.google.com/technologies/ads?hl=ja" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">こちら</a>をご参照ください。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第8条（プライバシーポリシーの変更）
              </h2>
              <ol className="list-decimal list-inside space-y-2 pl-4">
                <li>本ポリシーの内容は、法令その他本ポリシーに別段の定めのある事項を除いて、ユーザーに通知することなく、変更することができるものとします。</li>
                <li>当社が別途定める場合を除いて、変更後のプライバシーポリシーは、本ウェブサイトに掲載したときから効力を生じるものとします。</li>
              </ol>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mb-4 border-b pb-2 border-gray-200">
                第9条（お問い合わせ窓口）
              </h2>
              <p className="mb-4">
                本ポリシーに関するお問い合わせは、サイト内のお問い合わせフォームよりご連絡ください。
              </p>
              <div className="mt-8 p-6 bg-gray-50 rounded-lg">
                <p className="font-semibold">株式会社Human Beings</p>
                <p>代表者：中山 舜</p>
                <p>住所：[住所]</p>
              </div>
            </section>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="relative border-t border-gray-300/60 bg-white/80 py-12">
        <div className="container mx-auto flex flex-col items-center gap-4 px-6 text-center">
          <p className="text-sm tracking-[0.35em] text-gray-500">
            © 2025 株式会社Human Beings
          </p>
        </div>
      </footer>
    </div>
  );
}
