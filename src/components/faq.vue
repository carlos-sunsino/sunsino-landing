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
			question: 'Q：是否需繳交報名費用？',
			answer: 'A： 本競賽無需報名費。'
		},
		{
			isOpen: false,
			question: 'Q：如果報名或填寫申請文件遇到問題時，怎麼辦？',
			answer: 'A：發信至 info@startup101.biz 提問，或是來電執行單位詢問\n（華陽創投 Rayz +886-2-7718-6088 #240）'
		},
		{
			isOpen: false,
			question: 'Q：初賽及複賽結果是否會通知？',
			answer: 'A：會由承辦單位以 E-mail 方式通知聯絡人，並請關注本網站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要達成的義務嗎？',
			answer: 'A：通過複賽者之企業須達成義務：入圍決賽之企業需於決賽 Demo Day 前往香港決賽場地進行現場 Pitch，報到時將提供團隊500美元交通補助\n通過決賽者之冠軍企業須達成義務：配合主辦單位及協辦單位安排，至少參與1場合作意向會議。'
		},
		{
			isOpen: false,
			question: 'Q：最後申請日是何時？',
			answer: 'A：申請截止期間為 2023 年 09 月 14 日 17 點 00 分點選報名連結填寫，完成後系統將寄送【申請確認信】，唯最後補件日為 09 月 15 日 17 點 00 分，故請儘早完成報名確保參賽資格。'
		},
		{
			isOpen: false,
			question: 'Q：參賽人員是否有人數及身分限制？',
			answer: 'A：人數無限制，參賽人員須為公司員工；而報名系統中提列之參賽人員名單，皆須親筆簽署參賽同意書。'
		},
		{
			isOpen: false,
			question: 'Q：主辦、協辦、承辦企業是否會簽署保密同意書？',
			answer: 'A：是的。根據本競賽須知載明，主辦單位、協辦單位及承辦單位均須簽署【保密協議書】。'
		}
	],
	'zh-CN': [
		{ isOpen: false, question: 'Q：是否需要缴纳报名费用？', answer: 'A：本竞赛无需报名费。' },
		{
			isOpen: false,
			question: 'Q：如果报名或填写申请文件时遇到问题，怎么办？',
			answer: 'A：发信至 info@startup101.biz 提问，或来电执行单位询问\n（华阳创投 Rayz +886-2-7718-6088 #240）。'
		},
		{
			isOpen: false,
			question: 'Q：初赛及复赛结果是否会通知？',
			answer: 'A：会由承办单位以 E-mail 方式通知联络人，并请关注本网站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要达成的义务吗？',
			answer: 'A：通过复赛的企业须达成义务：入围决赛的企业需在决赛 Demo Day 前往香港决赛场地进行现场 Pitch，报到时将提供团队500美元的交通补助\n通过决赛的冠军企业须达成义务：配合主办单位及协办单位安排，至少参与1场合作意向会议。'
		},
		{
			isOpen: false,
			question: 'Q：最后申请日是何时？',
			answer: 'A：申请截止期间为 2023 年 09 月 14 日 17 点 00 分，点击报名链接填写，完成后系统将寄送【申请确认信】，最后补件日为 09 月 15 日 17 点 00 分，故请尽早完成报名，以确保参赛资格。'
		},
		{
			isOpen: false,
			question: 'Q：参赛人员是否有人数及身份限制？',
			answer: 'A：人数无限制，参赛人员须为公司员工；而报名系统中提列的参赛人员名单，皆须亲笔签署参赛同意书。'
		},
		{
			isOpen: false,
			question: 'Q：主办、协办、承办企业是否会签署保密同意书？',
			answer: 'A：是的。根据本竞赛须知载明，主办单位、协办单位及承办单位均须签署【保密协议书】。'
		}
	],
	'en-US': [
		{
			isOpen: false,
			question: 'Q: Is there a application fee?',
			answer: 'A: There is no application fee for this competition.'
		},
		{
			isOpen: false,
			question:
				'Q: What should I do if I encounter any problems while registering or filling out the application forms?',
			answer: 'A: You can send inquiries to  info@startup101.biz or call the organization office\n(Sunsino Rayz +886-2-7718-6088 #240).'
		},
		{
			isOpen: false,
			question: 'Q: Will the results of the preliminary and semi-final rounds be announced?',
			answer: 'A: The organizer will notify the contact person by email, and you can also find the announcements on this website.'
		},
		{
			isOpen: false,
			question: 'Q: Are there any obligations that must be met?',
			answer: 'A: For companies that pass the semifinals, the following obligations must be met:\n- Companies that make it to the final round must attend the on-site demo day at the final round venue in Hong Kong. A transportation subsidy of 500 USD per team will be provided upon registration.\n\nCompanies that win the finals must fulfill the following commitment:\n- The winning company must collaborate with the organizing and co-organizing entities and attend at least one collaboration meeting.'
		},
		{
			isOpen: false,
			question: 'Q: When is the last date to apply?',
			answer: 'A: The deadline for application is September 14, 2023 at 5:00 pm. After you complete the application through the provided link, the system will send a confirmation email. However, the last date for submitting additional documents is September 15, 2023 at 5:00 pm. It is therefore advisable to complete registration early to ensure eligibility.'
		},
		{
			isOpen: false,
			question: 'Q: Is there a limit to the number and identity of participants?',
			answer: 'A: There is no limit on participants, but those participating must be employees of the company. Everyone must hand-sign the list of participating individuals provided in the registration system.'
		},
		{
			isOpen: false,
			question:
				'Q: Do the organizing, co-organizing companies sign a confidentiality agreement?',
			answer: 'A: Yes. According to the contest guidelines, the organizing entity, co-organizing entities must sign a confidentiality agreement.'
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
