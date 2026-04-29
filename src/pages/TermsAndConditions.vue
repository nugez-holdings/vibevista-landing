<template>
  <div class="max-w-3xl mx-auto px-6">

    <div class="mb-12">
      <p class="text-primary text-xs font-semibold tracking-widest uppercase mb-3">Legal</p>
      <h1 class="text-4xl font-bold text-white mb-4">Terms &amp; Conditions</h1>
      <p class="text-gray-500 text-sm">Last updated: April 29, 2026</p>
    </div>

    <div class="space-y-10 text-gray-400 leading-relaxed">

      <section v-for="section in sections" :key="section.title" class="space-y-3">
        <h2 class="text-xl font-semibold text-white">{{ section.title }}</h2>
        <p v-for="(para, i) in section.paragraphs" :key="i">{{ para }}</p>
        <ul v-if="section.items" class="list-disc list-inside space-y-1 text-gray-500 pl-2">
          <li v-for="item in section.items" :key="item">{{ item }}</li>
        </ul>
      </section>

      <section class="space-y-3">
        <h2 class="text-xl font-semibold text-white">Contact</h2>
        <p>For questions about these Terms, contact us at
          <a href="mailto:legal@vibevista.com" class="text-primary hover:underline">legal@vibevista.com</a>.
        </p>
      </section>

    </div>
  </div>
</template>

<script setup lang="ts">
const sections = [
  {
    title: '1. Acceptance of Terms',
    paragraphs: [
      'By accessing or using VibeVista, you agree to be bound by these Terms and Conditions. If you do not agree, please do not use the platform.',
    ],
  },
  {
    title: '2. Eligibility',
    paragraphs: [
      'You must be at least 13 years old to use VibeVista. By using the platform, you represent that you meet this requirement and that the information you provide is accurate.',
    ],
  },
  {
    title: '3. User Accounts',
    paragraphs: [
      'You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account. Notify us immediately of any unauthorised use.',
    ],
    items: [
      'You may not create accounts for others without their consent',
      'One person may not maintain multiple accounts',
      'Account sharing is not permitted',
    ],
  },
  {
    title: '4. Acceptable Use',
    paragraphs: [
      'You agree not to use VibeVista to:',
    ],
    items: [
      'Post content that is illegal, harmful, threatening, or harassing',
      'Impersonate any person or entity',
      'Spam or send unsolicited messages',
      'Scrape or extract data without permission',
      'Attempt to gain unauthorised access to other accounts or systems',
      'Post false or misleading information',
    ],
  },
  {
    title: '5. Content Ownership',
    paragraphs: [
      'You retain full ownership of all original content you post on VibeVista, including course materials, videos, text, and attachments. By posting content, you grant VibeVista a non-exclusive, worldwide, royalty-free licence to host, display, transcode, and distribute your content solely for the purpose of operating the platform.',
      'We do not claim ownership of your creative work. This licence terminates when you remove your content from the platform, subject to the provisions in Section 11 (Creator Programme) regarding content that has active student enrolments.',
      'When you enrol in a course, the creator grants you a personal, non-transferable, non-sublicensable licence to access and view the course content for your own learning purposes only. This licence does not grant you any right to reproduce, redistribute, resell, broadcast, or otherwise share course content with third parties.',
    ],
  },
  {
    title: '6. Payments',
    paragraphs: [
      'Some features on VibeVista require payment. All fees are stated in Nigerian Naira (NGN) at the time of purchase. Payments are processed securely via Paystack. We do not store your card details.',
      'Refunds are evaluated on a case-by-case basis. Contact support@vibevista.com within 7 days of a charge for refund requests. Course-specific refund terms are set out in Section 12.',
    ],
  },
  {
    title: '7. Termination',
    paragraphs: [
      'We reserve the right to suspend or terminate accounts that violate these Terms, engage in harmful behaviour, or at our sole discretion. You may also delete your account at any time from your account settings.',
    ],
  },
  {
    title: '8. Disclaimer of Warranties',
    paragraphs: [
      'VibeVista is provided "as is" without warranties of any kind, either express or implied. We do not guarantee uninterrupted or error-free service.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    paragraphs: [
      'To the fullest extent permitted by law, VibeVista shall not be liable for any indirect, incidental, or consequential damages arising from your use of the platform.',
    ],
  },
  {
    title: '10. Changes to Terms',
    paragraphs: [
      'We may update these Terms at any time. Continued use of the platform after changes constitutes acceptance. We will notify you of material changes via email or in-app notification.',
    ],
  },
  {
    title: '11. Creator Programme',
    paragraphs: [
      'VibeVista allows qualified users to publish and sell educational courses through the platform ("Creators"). By participating in the Creator Programme, you agree to the additional terms in this section.',
    ],
    items: [
      'Eligibility: You must have a verified creator profile, a valid Nigerian bank account, and a Paystack subaccount registered through the platform before publishing paid courses.',
      'Content Standards: All course content must be original, accurate, and of reasonable quality. Courses must deliver on what is described in the title, description, and curriculum.',
      'Creator Responsibilities: You are solely responsible for the accuracy, legality, and quality of your course content. VibeVista does not endorse or verify the accuracy of any course.',
      'Prohibited Content: Courses may not contain content that is illegal, plagiarised, sexually explicit, discriminatory, or in violation of any third-party intellectual property rights.',
      'Review Process: All courses are subject to admin review before being published. VibeVista reserves the right to reject or remove any course at its sole discretion without liability.',
      'Suspension: VibeVista may suspend or permanently remove a creator\'s profile and courses if they are found to be in breach of these Terms. Earnings accrued prior to suspension will be handled in accordance with Section 13.',
    ],
  },
  {
    title: '12. Course Enrolment & Refunds',
    paragraphs: [
      'When you purchase a course on VibeVista, you receive lifetime access to that course unless your enrolment is suspended or your account is terminated for breach of these Terms.',
      'Free courses are available to all registered users at no charge and are subject to the same access conditions.',
    ],
    items: [
      'Refund Window: You may request a refund within 7 days of purchase, provided you have not completed more than 20% of the course content.',
      'Refund Process: Approved refunds will be returned to your original payment method via Paystack. Processing times may vary by bank.',
      'Non-Refundable Circumstances: Refunds will not be granted if the course has been substantially consumed, if the request is made after the 7-day window, or if there is evidence of abuse of the refund policy.',
      'Access After Refund: Upon successful refund, your access to the course will be revoked immediately.',
      'Suspended Enrolments: VibeVista reserves the right to suspend a student\'s access to a course if they are found to be in violation of these Terms, including unauthorised sharing or redistribution of course content.',
    ],
  },
  {
    title: '13. Payouts & Creator Earnings',
    paragraphs: [
      'Creators earn a percentage of each successful course sale after platform fees. The current revenue split is 78% to the creator and 22% to VibeVista. This split is snapshotted at the time of course creation and may be updated for new courses with prior notice.',
    ],
    items: [
      'Earnings Accrual: Earnings are credited to your creator account upon successful payment confirmation by Paystack.',
      'Minimum Withdrawal: The minimum payout amount is ₦1,000. Withdrawals below this threshold will not be processed.',
      'Payout Method: Payouts are made via Paystack bank transfer to the account registered on your creator profile. You are responsible for ensuring your bank details are accurate and up to date.',
      'Payout Timeline: Payouts are initiated on demand by the creator and are typically processed within 1 business day, subject to Paystack\'s transfer timelines.',
      'Withheld Earnings: VibeVista reserves the right to withhold or reverse earnings in cases of fraud, disputed payments, refunded enrolments, or violation of these Terms.',
      'Tax Obligations: Creators are solely responsible for declaring and paying any applicable taxes on their earnings. VibeVista does not withhold tax on creator payouts.',
      'Account Closure: If your creator account is closed or suspended, outstanding earnings may be withheld pending investigation. Valid outstanding earnings will be paid out within 30 days of account closure where no breach is found.',
    ],
  },
  {
    title: '14. Intellectual Property & Content Protection',
    paragraphs: [
      'VibeVista respects intellectual property rights and expects all users to do the same. This section applies to all content posted on the platform, including but not limited to course videos, lesson text, attachments, and promotional materials.',
    ],
    items: [
      'Prohibited Acts: You may not copy, reproduce, redistribute, resell, screen-record, or otherwise exploit any content on VibeVista without the explicit written permission of the content owner.',
      'Creator Warranties: By publishing a course, you warrant that you own or have the necessary rights to all content included in the course, and that your content does not infringe the intellectual property rights of any third party.',
      'Third-Party Content: You may only include third-party content in your courses if you have a valid licence to do so. Using copyrighted music, images, video clips, or text without permission is strictly prohibited.',
      'Content Theft: Any user found to have plagiarised, copied, or misappropriated another creator\'s course content may have their account permanently terminated and may be subject to legal action.',
      'Platform IP: The VibeVista name, logo, and platform software are the exclusive property of VibeVista. You may not use our branding without written permission.',
    ],
  },
  {
    title: '15. DMCA & Takedown Requests',
    paragraphs: [
      'VibeVista complies with the Digital Millennium Copyright Act (DMCA) and equivalent intellectual property laws. If you believe that content on the platform infringes your copyright, you may submit a takedown request.',
      'To submit a valid takedown notice, send the following to legal@vibevista.com:',
    ],
    items: [
      'A description of the copyrighted work you claim has been infringed',
      'A description of the infringing content and its location on the platform (e.g. course URL)',
      'Your contact information (name, address, email, phone number)',
      'A statement that you have a good-faith belief that the use is not authorised by the copyright owner',
      'A statement, under penalty of perjury, that the information in your notice is accurate and that you are the copyright owner or authorised to act on their behalf',
      'Your electronic or physical signature',
    ],
  },
  {
    title: '16. Counter-Notices & Repeat Infringers',
    paragraphs: [
      'If you believe your content was removed in error, you may submit a counter-notice to legal@vibevista.com. Your counter-notice must include your name, contact details, identification of the removed content, a statement under penalty of perjury that the content was removed by mistake, and your consent to the jurisdiction of a competent court.',
      'VibeVista operates a repeat infringer policy. Users or creators who receive multiple valid takedown notices may have their accounts suspended or permanently terminated at VibeVista\'s sole discretion.',
    ],
  },
]
</script>
