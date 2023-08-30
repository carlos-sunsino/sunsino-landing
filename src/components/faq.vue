<template lang="pug">
section#faq
	#faq-pos
	.bg-img.star-01.web
	.bg-img.star-02.web
	.title
		span {{ t('main.faq') }}
	.faqlist
		.item(v-for="(item) in faqlist[locale]" @click="item.isOpen = !item.isOpen")
			.question(:class="item.isOpen?'open':''") {{ item.question }}
			.answer(:class="item.isOpen?'open':''") {{ item.answer }}
</template>

<script setup>
import { computed, reactive, ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, locale } = useI18n()

const faqlist = reactive({
	'zh-TW': [
		{
			isOpen: false,
			question: 'Q：可以同時報名多地區嗎？',
			answer: 'A：如參賽企業於確認可於多地區 PoC 而計畫報名多個地區，可於報名表上依志願填寫地區志願序。如團隊報名多個地區，將於初賽後將依參賽隊伍之志願序及評分安排後續賽制組別。\n唯參賽企業於報名前請務必確認後續 PoC 或其他合作可配合主辦單位安排。'
		},
		{
			isOpen: false,
			question: 'Q：是否需繳交報名費用？',
			answer: 'A：本競賽無需報名費。'
		},
		{
			isOpen: false,
			question: 'Q：如果報名或填寫申請文件遇到問題時，怎麼辦？',
			answer: 'A：發信至info@startup101.biz提問，或是來電承辦單位詢問\n（華陽創投／STARTUP101／Rayz+886-2-7718-6088 #240）。'
		},
		{
			isOpen: false,
			question: 'Q：初賽及複賽結果是否會通知？',
			answer: 'A：會由承辦單位以 E-mail 方式通知，並請關注本網站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要達成的義務嗎？',
			answer: 'A：通過複賽者之企業須達成義務：\n入圍決賽之企業需於決賽Demo Day前往香港決賽場地進行現場Pitch，報到時將提供團隊500美元交通補助。\n獲得創新未來獎之企業須達成義務：\n配合主辦單位及協辦單位安排進行PoC及PoC所衍生之相關活動。'
		},
		{
			isOpen: false,
			question: 'Q：最後申請日是何時？',
			answer: 'A：申請截止期間為 2023年09月19日 17點00分點選報名連結填寫，報名資格及文件審查完成後系統將寄送【成功報名通知信】，唯最後補件日為 9月20日 17點00分，故請儘早完成報名確保參賽資格。'
		},
		{
			isOpen: false,
			question: 'Q：參賽人員是否有人數及身分限制？',
			answer: 'A：人數無限制，參賽人員須為公司員工。'
		}
	],
	'zh-CN': [
		{
			isOpen: false,
			question: 'Q：可以同时报名多地区吗？',
			answer: 'A：如参赛企业于确认可于多地区 PoC 而计画报名多个地区，可于报名表上依志愿填写地区志愿序。如团队报名多个地区，将于初赛后将依参赛队伍之志愿序及评分安排后续赛制组别。\n唯参赛企业于报名前请务必确认后续 PoC 或其他合作可配合主办单位安排。'
		},
		{ isOpen: false, question: 'Q：是否需要缴纳报名费用？', answer: 'A：本竞赛无需报名费。' },
		{
			isOpen: false,
			question: 'Q：如果报名或填写申请文件遇到问题时，怎么办？',
			answer: 'A：发信至info@startup101.biz提问，或是来电承办单位询问\n（华阳创投／STARTUP101／Rayz+886-2-7718-6088 #240）。'
		},
		{
			isOpen: false,
			question: 'Q：初赛及复赛结果是否会通知？',
			answer: 'A：会由承办单位以 E-mail 方式通知，并请关注本网站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要达成的义务吗？',
			answer: 'A：通过复赛的企业须达成义务：\n入围决赛的企业需在决赛Demo Day前往香港决赛场地进行现场Pitch，报到时将提供团队500美元的交通补助\n通过决赛的冠军企业须达成义务：\n配合主办单位及协办单位安排，至少参与1场合作意向会议。'
		},
		{
			isOpen: false,
			question: 'Q：最后申请日是何时？',
			answer: 'A：申请截止期间为 2023年09月19日 17点00分点选报名连结填写，报名资格及文件审查完成后系统将寄送【成功报名通知信】，唯最后补件日为 9月20日 17点00分，故请尽早完成报名确保参赛资格。'
		},
		{
			isOpen: false,
			question: 'Q：参赛人员是否有人数及身份限制？',
			answer: 'A：人数无限制，参赛人员须为公司员工。'
		}
	],
	'en-US': [
		{
			isOpen: false,
			question: 'Q: Can I register for multiple regions at the same time?',
			answer: 'A: If Participating startup can confirm their ability to participate in Proof of Concept (PoC) in multiple regions and plan to apply for multiple regions, you can indicate your region preferences on the application form. If a team applies for multiple regions, the semifinal and final rounds that the team will participate in will be arranged based on the ranking of participating companies after the preliminary round. However, participating companies should ensure their ability to cooperate in PoC or other collaborations before registering.'
		},
		{
			isOpen: false,
			question: 'Q: Is there a application fee?',
			answer: 'A: There is no application fee for this competition.'
		},
		{
			isOpen: false,
			question:
				'Q: What if I encounter any problems while registering or filling out the application forms?',
			answer: 'A: You can send the problems or inquiries to  info@startup101.biz or call the  executing unit\n(Sunsino Rayz +886-2-7718-6088 #240).'
		},
		{
			isOpen: false,
			question: 'Q: Will the results of the preliminary and semi-final rounds be announced?',
			answer: 'A: The organizer will notify the contact by email, and please also pay attention to announcements on this website.'
		},
		{
			isOpen: false,
			question: 'Q: Are there any obligations to fulfill?',
			answer: 'A: For companies that pass the semifinals round must fulfill the following obligations.\n- Startup that make it to the final round must attend the on-site demo day at the final round venue in Hong Kong. A transportation subsidy of 500 USD per team will be provided upon on-site registration.\n\nThe InnoFuture awarded company must fulfill the following obligation:\n- Cooperate with the organizer and co-organizer to attend at least 1 cooperation intention meeting.'
		},
		{
			isOpen: false,
			question: 'Q: When is the last date of registration?',
			answer: 'A: The deadline for registration is September 19, 2023 at 5:00 pm. After you complete the online registration form the system will send a confirmation email. However, the last date for submitting additional documents is September 20, 2023 at 5:00 pm.Therefore, please complete the registration early to ensure eligibility.'
		},
		{
			isOpen: false,
			question: 'Q: Is there a limit to the number and identity of participants?',
			answer: 'A: There is no limit on participants, but those participating must be employees of the startup. '
		}
	]
})
</script>

<style lang="scss" scoped>
#faq {
    position: relative;

    display: flex;
    align-items: center;
    flex-direction: column;

    @include web() {
        padding: 80px 30px;

        gap: 50px;
    }
    @include phone() {
        padding: 50px 30px;

        gap: 20px;
    }
    @include web() {
        &::before,
        &::after {
            position: absolute;
            z-index: -1;

            content: '';

            background-repeat: no-repeat;
            background-size: contain;
        }
        &::before {
            top: 750px;
            left: 50%;

            width: 440px;
            height: 313px;

            transform: translateX(calc(-50% - 500px));

            background-image: url('/cube_purple.png');
        }
        &::after {
            top: -150px;
            left: 50%;

            width: 438px;
            height: 385px;

            transform: translateX(calc(-50% + 550px));

            background-image: url('/cube_yellow.png');
        }
    }
    .bg-img.star-01 {
        top: -50px;
        left: 50%;

        transform: translateX(calc(-50% + 300px));
    }
    .bg-img.star-02 {
        top: 250px;
        left: 50%;

        transform: translateX(calc(-50% - 550px));
    }
}
.faqlist {
    display: flex;
    flex-direction: column;

    width: 100%;
    padding: 30px 0;

    @include web() {
        max-width: $content_w;
    }
    @include phone() {
        max-width: 100vw;
    }
}
.item {
    display: flex;
    align-items: stretch;
    flex-direction: column;
    justify-content: center;

    padding-top: 30px;

    cursor: pointer;
    white-space: pre-line;

    color: #ffffff;

    &::after {
        width: 100%;
        height: 1px;
        margin-top: 30px;

        content: '';

        background-image: linear-gradient(131deg, #1663f1 0%, #9747ff 50%, #fcc200 100%);
    }
    .question {
        position: relative;

        display: flex;
        justify-content: flex-start;

        padding: 0 30px;

        text-align: left;
        text-indent: -1.6em;

        &.open {
            &::after {
                background-image: url('/faq-close.svg');
            }
        }
        &::after {
            position: absolute;
            top: 50%;
            right: 0;

            width: 20px;
            height: 20px;

            content: '';
            transform: translateY(-50%);

            background-image: url('/faq-open.svg');
        }
    }
    .answer {
        display: none;
        justify-content: flex-start;

        padding: 0 30px;

        transition: all .5s;
        text-align: left;
        text-indent: -1.6em;

        &.open {
            display: flex;

            margin-top: 10px;
        }
    }
}

</style>
