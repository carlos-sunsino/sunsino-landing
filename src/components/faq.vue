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
			answer: 'A：參賽新創企業至多得挑選兩地區參賽，一經選定後不得更換地區。'
		},
		{
			isOpen: false,
			question: 'Q：是否需繳交報名費用？',
			answer: 'A： 本競賽無需報名費。'
		},
		{
			isOpen: false,
			question: 'Q：如果報名或填寫申請文件遇到問題時，怎麼辦？',
			answer: 'A：發信至info@startup101.biz提問，或是來電執行單位詢問（華陽創投Rayz+886-2-7718-6088 #240）。'
		},
		{
			isOpen: false,
			question: 'Q：初賽及複賽結果是否會通知？',
			answer: 'A：會由承辦單位以E-mail方式通知聯絡人，並請關注本網站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要達成的義務嗎？',
			answer: 'A：通過複賽者之企業須達成義務：入圍決賽之企業需於決賽Demo Day前往香港決賽場地進行現場Pitch，報到時將提供團隊500美元交通補助\n通過決賽者之冠軍企業須達成義務：配合主辦單位及協辦單位安排，至少參與1場合作意向會議。'
		},
		{
			isOpen: false,
			question: 'Q：最後申請日是何時？',
			answer: 'A：申請截止期間為 2023 年 09 月 14 日 17 點 00 分點選報名連結填寫，完成後系統將寄送【申請確認信】，唯最後補件日為9月15日 17點00分，故請儘早完成報名確保參賽資格。'
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
		{
			isOpen: false,
			question: 'Q：可以同時報名多地區嗎？',
			answer: 'A：參賽新創企業至多得挑選兩地區參賽，一經選定後不得更換地區。'
		},
		{
			isOpen: false,
			question: 'Q：是否需繳交報名費用？',
			answer: 'A： 本競賽無需報名費。'
		},
		{
			isOpen: false,
			question: 'Q：如果報名或填寫申請文件遇到問題時，怎麼辦？',
			answer: 'A：發信至info@startup101.biz提問，或是來電執行單位詢問（華陽創投Rayz+886-2-7718-6088 #240）。'
		},
		{
			isOpen: false,
			question: 'Q：初賽及複賽結果是否會通知？',
			answer: 'A：會由承辦單位以E-mail方式通知聯絡人，並請關注本網站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要達成的義務嗎？',
			answer: 'A：通過複賽者之企業須達成義務：入圍決賽之企業需於決賽Demo Day前往香港決賽場地進行現場Pitch，報到時將提供團隊500美元交通補助\n通過決賽者之冠軍企業須達成義務：配合主辦單位及協辦單位安排，至少參與1場合作意向會議。'
		},
		{
			isOpen: false,
			question: 'Q：最後申請日是何時？',
			answer: 'A：申請截止期間為 2023 年 09 月 14 日 17 點 00 分點選報名連結填寫，完成後系統將寄送【申請確認信】，唯最後補件日為9月15日 17點00分，故請儘早完成報名確保參賽資格。'
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
	'en-US': [
		{
			isOpen: false,
			question: 'Q：可以同時報名多地區嗎？',
			answer: 'A：參賽新創企業至多得挑選兩地區參賽，一經選定後不得更換地區。'
		},
		{
			isOpen: false,
			question: 'Q：是否需繳交報名費用？',
			answer: 'A： 本競賽無需報名費。'
		},
		{
			isOpen: false,
			question: 'Q：如果報名或填寫申請文件遇到問題時，怎麼辦？',
			answer: 'A：發信至info@startup101.biz提問，或是來電執行單位詢問（華陽創投Rayz+886-2-7718-6088 #240）。'
		},
		{
			isOpen: false,
			question: 'Q：初賽及複賽結果是否會通知？',
			answer: 'A：會由承辦單位以E-mail方式通知聯絡人，並請關注本網站公告。'
		},
		{
			isOpen: false,
			question: 'Q：有需要達成的義務嗎？',
			answer: 'A：通過複賽者之企業須達成義務：入圍決賽之企業需於決賽Demo Day前往香港決賽場地進行現場Pitch，報到時將提供團隊500美元交通補助\n通過決賽者之冠軍企業須達成義務：配合主辦單位及協辦單位安排，至少參與1場合作意向會議。'
		},
		{
			isOpen: false,
			question: 'Q：最後申請日是何時？',
			answer: 'A：申請截止期間為 2023 年 09 月 14 日 17 點 00 分點選報名連結填寫，完成後系統將寄送【申請確認信】，唯最後補件日為9月15日 17點00分，故請儘早完成報名確保參賽資格。'
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

	padding-top: 40px;

	cursor: pointer;
	white-space: pre-line;

	color: #ffffff;

	gap: 10px;
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

		transition: all 0.5s;
		text-align: left;
		text-indent: -1.6em;

		&.open {
			display: flex;
		}
	}
}
</style>
