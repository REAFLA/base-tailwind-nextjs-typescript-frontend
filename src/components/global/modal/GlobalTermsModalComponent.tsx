import { ReactElement } from 'react'

interface InitialProps {
  title?: string
  content?: string
  onCancelClick?: (e?: any) => void
  onOkClick?: (e?: any) => void
}

export default function GlobalTermsModalComponent({
  title = '개인정보 수집 및 이용 동의',
  content,
  onCancelClick,
}: InitialProps): ReactElement {
  return (
    <>
      <div className="modal-overlay" onClick={onCancelClick}></div>
      <div className="modal terms relative">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                {title}
              </h3>
              <button
                type="button"
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-toggle="defaultModal"
                onClick={onCancelClick}
              >
                <svg
                  aria-hidden="true"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <div className="p-6 space-y-6">
              <textarea
                className="w-full h-full text-base leading-relaxed text-gray-500 dark:text-gray-400 resize-none border-none outline-none overflow-x-hidden overflow-y-scroll"
                readOnly
              >
                (주)통신나라 미래교육('http://43.200.190.224'이하
                '도깨비에디터')은(는) 「개인정보 보호법」 제30조에 따라
                정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고
                원활하게 처리할 수 있도록 하기 위하여 다음과 같이 개인정보
                처리방침을 수립·공개합니다. ○ 이 개인정보처리방침은 2022년 1월
                1부터 적용됩니다. 제1조(개인정보의 처리 목적) (주)통신나라
                미래교육('http://43.200.190.224'이하 '도깨비에디터')은(는)
                다음의 목적을 위하여 개인정보를 처리합니다. 처리하고 있는
                개인정보는 다음의 목적 이외의 용도로는 이용되지 않으며 이용
                목적이 변경되는 경우에는 「개인정보 보호법」 제18조에 따라
                별도의 동의를 받는 등 필요한 조치를 이행할 예정입니다. 1.
                홈페이지 회원가입 및 관리 회원 가입의사 확인, 회원제 서비스
                제공에 따른 본인 식별·인증, 회원자격 유지·관리, 서비스 부정이용
                방지, 각종 고지·통지, 고충처리 목적으로 개인정보를 처리합니다.
                2. 민원사무 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를
                위한 연락·통지, 처리결과 통보 목적으로 개인정보를 처리합니다. 3.
                재화 또는 서비스 제공 서비스 제공, 콘텐츠 제공, 맞춤서비스
                제공을 목적으로 개인정보를 처리합니다. 4. 마케팅 및 광고에의
                활용 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및
                광고성 정보 제공 및 참여기회 제공 등을 목적으로 개인정보를
                처리합니다. 제2조(개인정보의 처리 및 보유 기간) ① (주)통신나라
                미래교육은(는) 법령에 따른 개인정보 보유·이용기간 또는
                정보주체로부터 개인정보를 수집 시에 동의받은 개인정보
                보유·이용기간 내에서 개인정보를 처리·보유합니다. ② 각각의
                개인정보 처리 및 보유 기간은 다음과 같습니다. 1.홈페이지
                회원가입 및 관리 홈페이지 회원가입 및 관리와 관련한 개인정보는
                수집.이용에 관한 동의일로부터 3년 까지 위 이용목적을 위하여
                보유.이용됩니다. 보유근거 : 소비자의 불만 또는 분쟁처리,
                대금결제 및 재화 등의 공급, 계약 또는 청약철회 등 관련법령 :
                1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 2) 소비자의
                불만 또는 분쟁처리에 관한 기록 : 3년 예외사유 : 소비자의 불만
                또는 분쟁처리, 대금결제 및 재화 등의 공급, 계약 또는 청약철회 등
                2.민원사무 처리 민원사무 처리와 관련한 개인정보는 수집.이용에
                관한 동의일로부터 3년 까지 위 이용목적을 위하여 보유.이용됩니다.
                보유근거 : 소비자의 불만 또는 분쟁처리, 대금결제 및 재화 등의
                공급, 계약 또는 청약철회 등 관련법령 : 소비자의 불만 또는
                분쟁처리에 관한 기록 : 3년 예외사유 : 소비자의 불만 또는
                분쟁처리, 대금결제 및 재화 등의 공급, 계약 또는 청약철회 등
                3.재화 또는 서비스 제공 재화 또는 서비스 제공와 관련한
                개인정보는 수집.이용에 관한 동의일로부터 5년 까지 위 이용목적을
                위하여 보유.이용됩니다. 보유근거 : 소비자의 불만 또는 분쟁처리,
                대금결제 및 재화 등의 공급, 계약 또는 청약철회 등 관련법령 :
                1)신용정보의 수집/처리 및 이용 등에 관한 기록 : 3년 2) 소비자의
                불만 또는 분쟁처리에 관한 기록 : 3년 1)대금결제 및 재화 등의
                공급에 관한 기록 : 5년 2) 계약 또는 청약철회 등에 관한 기록 :
                5년 예외사유 : 소비자의 불만 또는 분쟁처리, 대금결제 및 재화
                등의 공급, 계약 또는 청약철회 등 4.마케팅 및 광고에의 활용
                마케팅 및 광고에의 활용와 관련한 개인정보는 수집.이용에 관한
                동의일로부터 6개월 까지 위 이용목적을 위하여 보유.이용됩니다.
                보유근거 : 소비자의 불만 또는 분쟁처리, 대금결제 및 재화 등의
                공급, 계약 또는 청약철회 등 관련법령 : 표시/광고에 관한 기록 :
                6개월 예외사유 : 소비자의 불만 또는 분쟁처리, 대금결제 및 재화
                등의 공급, 계약 또는 청약철회 등 제3조(처리하는 개인정보의 항목)
                ① (주)통신나라 미래교육은(는) 다음의 개인정보 항목을 처리하고
                있습니다. 1홈페이지 회원가입 및 관리 필수항목 : 이메일,
                휴대전화번호, 자택주소, 비밀번호, 로그인ID, 이름, 서비스 이용
                기록, 접속 로그, 쿠키, 접속 IP 정보, 결제기록 선택항목 :
                2민원사무 처리 필수항목 : 이메일, 휴대전화번호, 이름 선택항목 :
                3재화 또는 서비스 제공 필수항목 : 이메일, 휴대전화번호,
                자택주소, 비밀번호, 로그인ID, 이름 선택항목 : 4마케팅 및
                광고에의 활용 필수항목 : 이메일, 휴대전화번호, 비밀번호,
                로그인ID, 이름 선택항목 : 제4조(개인정보의 제3자 제공에 관한
                사항) ① (주)통신나라 미래교육은(는) 개인정보를 제1조(개인정보의
                처리 목적)에서 명시한 범위 내에서만 처리하며, 정보주체의 동의,
                법률의 특별한 규정 등 「개인정보 보호법」 제17조 및 제18조에
                해당하는 경우에만 개인정보를 제3자에게 제공합니다. ②
                (주)통신나라 미래교육은(는) 다음과 같이 개인정보를 제3자에게
                제공하고 있습니다. 1. (주)통신나라 미래교육 개인정보를 제공받는
                자 : (주)통신나라 미래교육 제공받는 자의 개인정보 이용목적 :
                이메일, 휴대전화번호, 자택주소, 비밀번호, 로그인ID, 이름
                제공받는 자의 보유.이용기간: 5년 제5조(개인정보처리의 위탁에
                관한 사항) ① (주)통신나라 미래교육은(는) 원활한 개인정보
                업무처리를 위하여 다음과 같이 개인정보 처리업무를 위탁하고
                있습니다. 1. 위탁받는 자 (수탁자) : 위탁하는 업무의 내용 :
                위탁기간 : ② (주)통신나라 미래교육은(는) 위탁계약 체결시
                「개인정보 보호법」 제26조에 따라 위탁업무 수행목적 외 개인정보
                처리금지, 기술적․관리적 보호조치, 재위탁 제한, 수탁자에 대한
                관리․감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에
                명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독하고
                있습니다. ③ 위탁업무의 내용이나 수탁자가 변경될 경우에는
                지체없이 본 개인정보 처리방침을 통하여 공개하도록 하겠습니다.
                제6조(개인정보의 파기절차 및 파기방법) ① (주)통신나라 미래교육
                은(는) 개인정보 보유기간의 경과, 처리목적 달성 등 개인정보가
                불필요하게 되었을 때에는 지체없이 해당 개인정보를 파기합니다. ②
                정보주체로부터 동의받은 개인정보 보유기간이 경과하거나
                처리목적이 달성되었음에도 불구하고 다른 법령에 따라 개인정보를
                계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의
                데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다. 1.
                법령 근거 : 2. 보존하는 개인정보 항목 : 계좌정보, 거래날짜 ③
                개인정보 파기의 절차 및 방법은 다음과 같습니다. 1. 파기절차
                (주)통신나라 미래교육 은(는) 파기 사유가 발생한 개인정보를
                선정하고, (주)통신나라 미래교육 의 개인정보 보호책임자의 승인을
                받아 개인정보를 파기합니다. 2. 파기방법 전자적 파일 형태의
                정보는 기록을 재생할 수 없는 기술적 방법을 사용합니다. 종이에
                출력된 개인정보는 분쇄기로 분쇄하거나 소각을 통하여 파기합니다
                제7조(정보주체와 법정대리인의 권리·의무 및 그 행사방법에 관한
                사항) ① 정보주체는 (주)통신나라 미래교육에 대해 언제든지
                개인정보 열람·정정·삭제·처리정지 요구 등의 권리를 행사할 수
                있습니다. ② 제1항에 따른 권리 행사는(주)통신나라 미래교육에 대해
                「개인정보 보호법」 시행령 제41조제1항에 따라 서면, 전자우편,
                모사전송(FAX) 등을 통하여 하실 수 있으며 (주)통신나라
                미래교육은(는) 이에 대해 지체 없이 조치하겠습니다. ③ 제1항에
                따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등
                대리인을 통하여 하실 수 있습니다.이 경우 “개인정보 처리 방법에
                관한 고시(제2020-7호)” 별지 제11호 서식에 따른 위임장을
                제출하셔야 합니다. ④ 개인정보 열람 및 처리정지 요구는 「개인정보
                보호법」 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가
                제한 될 수 있습니다. ⑤ 개인정보의 정정 및 삭제 요구는 다른
                법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그
                삭제를 요구할 수 없습니다. ⑥ (주)통신나라 미래교육은(는)
                정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리정지의
                요구 시 열람 등 요구를 한 자가 본인이거나 정당한 대리인인지를
                확인합니다. 제8조(개인정보의 안전성 확보조치에 관한 사항)
                (주)통신나라 미래교육은(는) 개인정보의 안전성 확보를 위해 다음과
                같은 조치를 취하고 있습니다. 1. 정기적인 자체 감사 실시 개인정보
                취급 관련 안정성 확보를 위해 정기적(분기 1회)으로 자체 감사를
                실시하고 있습니다. 2. 개인정보 취급 직원의 최소화 및 교육
                개인정보를 취급하는 직원을 지정하고 담당자에 한정시켜 최소화
                하여 개인정보를 관리하는 대책을 시행하고 있습니다. 3.
                내부관리계획의 수립 및 시행 개인정보의 안전한 처리를 위하여
                내부관리계획을 수립하고 시행하고 있습니다. 4. 해킹 등에 대비한
                기술적 대책 (주)통신나라 미래교육('도깨비에디터')은 해킹이나
                컴퓨터 바이러스 등에 의한 개인정보 유출 및 훼손을 막기 위하여
                보안프로그램을 설치하고 주기적인 갱신·점검을 하며 외부로부터
                접근이 통제된 구역에 시스템을 설치하고 기술적/물리적으로 감시 및
                차단하고 있습니다. 5. 개인정보의 암호화 이용자의 개인정보는
                비밀번호는 암호화 되어 저장 및 관리되고 있어, 본인만이 알 수
                있으며 중요한 데이터는 파일 및 전송 데이터를 암호화 하거나 파일
                잠금 기능을 사용하는 등의 별도 보안기능을 사용하고 있습니다. 6.
                접속기록의 보관 및 위변조 방지 개인정보처리시스템에 접속한
                기록을 최소 1년 이상 보관, 관리하고 있으며,다만, 5만명 이상의
                정보주체에 관하여 개인정보를 추가하거나, 고유식별정보 또는
                민감정보를 처리하는 경우에는 2년이상 보관, 관리하고 있습니다.
                또한, 접속기록이 위변조 및 도난, 분실되지 않도록 보안기능을
                사용하고 있습니다. 7. 개인정보에 대한 접근 제한 개인정보를
                처리하는 데이터베이스시스템에 대한 접근권한의 부여,변경,말소를
                통하여 개인정보에 대한 접근통제를 위하여 필요한 조치를 하고
                있으며 침입차단시스템을 이용하여 외부로부터의 무단 접근을
                통제하고 있습니다. 8. 문서보안을 위한 잠금장치 사용 개인정보가
                포함된 서류, 보조저장매체 등을 잠금장치가 있는 안전한 장소에
                보관하고 있습니다. 9. 비인가자에 대한 출입 통제 개인정보를
                보관하고 있는 물리적 보관 장소를 별도로 두고 이에 대해 출입통제
                절차를 수립, 운영하고 있습니다. 제9조(개인정보를 자동으로
                수집하는 장치의 설치·운영 및 그 거부에 관한 사항) ① (주)통신나라
                미래교육 은(는) 이용자에게 개별적인 맞춤서비스를 제공하기 위해
                이용정보를 저장하고 수시로 불러오는 ‘쿠키(cookie)’를 사용합니다.
                ② 쿠키는 웹사이트를 운영하는데 이용되는 서버(http)가 이용자의
                컴퓨터 브라우저에게 보내는 소량의 정보이며 이용자들의 PC
                컴퓨터내의 하드디스크에 저장되기도 합니다. 가. 쿠키의 사용 목적
                : 이용자가 방문한 각 서비스와 웹 사이트들에 대한 방문 및
                이용형태, 인기 검색어, 보안접속 여부, 등을 파악하여 이용자에게
                최적화된 정보 제공을 위해 사용됩니다. 나. 쿠키의 설치•운영 및
                거부 : 웹브라우저 상단의 도구 → 인터넷 옵션 → 개인정보 메뉴의
                옵션 설정을 통해 쿠키 저장을 거부 할 수 있습니다. 다. 쿠키
                저장을 거부할 경우 맞춤형 서비스 이용에 어려움이 발생할 수
                있습니다. 제10조(행태정보의 수집·이용·제공 및 거부 등에 관한
                사항) 행태정보의 수집·이용·제공 및 거부등에 관한 사항
                개인정보처리자명은(는) 온라인 맞춤형 광고 등을 위한 행태정보를
                수집·이용·제공하지 않습니다. 제11조(추가적인 이용·제공 판단기준)
                (주)통신나라 미래교육 은(는) ｢개인정보 보호법｣ 제15조제3항 및
                제17조제4항에 따라 ｢개인정보 보호법 시행령｣ 제14조의2에 따른
                사항을 고려하여 정보주체의 동의 없이 개인정보를 추가적으로
                이용·제공할 수 있습니다. 이에 따라 (주)통신나라 미래교육 가(이)
                정보주체의 동의 없이 추가적인 이용·제공을 하기 위해서 다음과
                같은 사항을 고려하였습니다. ▶ 개인정보를 추가적으로
                이용·제공하려는 목적이 당초 수집 목적과 관련성이 있는지 여부 ▶
                개인정보를 수집한 정황 또는 처리 관행에 비추어 볼 때 추가적인
                이용·제공에 대한 예측 가능성이 있는지 여부 ▶ 개인정보의 추가적인
                이용·제공이 정보주체의 이익을 부당하게 침해하는지 여부 ▶
                가명처리 또는 암호화 등 안전성 확보에 필요한 조치를 하였는지
                여부 ※ 추가적인 이용·제공 시 고려사항에 대한 판단기준은
                사업자/단체 스스로 자율적으로 판단하여 작성·공개함
                제12조(가명정보를 처리하는 경우 가명정보 처리에 관한 사항)
                (주)통신나라 미래교육 은(는) 다음과 같은 목적으로 가명정보를
                처리하고 있습니다. ▶ 가명정보의 처리 목적 - 직접작성 가능합니다.
                ▶ 가명정보의 처리 및 보유기간 - 직접작성 가능합니다. ▶
                가명정보의 제3자 제공에 관한 사항(해당되는 경우에만 작성) -
                직접작성 가능합니다. ▶ 가명정보 처리의 위탁에 관한 사항(해당되는
                경우에만 작성) - 직접작성 가능합니다. ▶ 가명처리하는 개인정보의
                항목 - 직접작성 가능합니다. ▶ 법 제28조의4(가명정보에 대한
                안전조치 의무 등)에 따른 가명정보의 안전성 확보조치에 관한 사항
                - 직접작성 가능합니다. 제13조 (개인정보 보호책임자에 관한 사항)
                ① (주)통신나라 미래교육 은(는) 개인정보 처리에 관한 업무를
                총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만처리 및
                피해구제 등을 위하여 아래와 같이 개인정보 보호책임자를 지정하고
                있습니다. ▶ 개인정보 보호책임자 성명 :홍길동 직책
                :개인정보보호책임자 직급 :팀장 연락처 :01012345678,
                test@test.com, 03212345678 ※ 개인정보 보호 담당부서로
                연결됩니다. ▶ 개인정보 보호 담당부서 부서명 :개인정보 보호
                담당부서 담당자 :홍길동 연락처 :01012345678, test@test.com,
                03212345678 ② 정보주체께서는 (주)통신나라 미래교육 의
                서비스(또는 사업)을 이용하시면서 발생한 모든 개인정보 보호 관련
                문의, 불만처리, 피해구제 등에 관한 사항을 개인정보 보호책임자 및
                담당부서로 문의하실 수 있습니다. (주)통신나라 미래교육 은(는)
                정보주체의 문의에 대해 지체 없이 답변 및 처리해드릴 것입니다.
                제14조(국내대리인의 지정) 정보주체는 ｢개인정보 보호법｣
                제39조의11에 따라 지정된 (주)통신나라 미래교육의 국내대리인에게
                개인정보 관련 고충처리 등의 업무를 위하여 연락을 취할 수
                있습니다. (주)통신나라 미래교육은(는) 정보주체의 개인정보 관련
                고충처리 등 개인정보 보호책임자의 업무 등을 신속하게 처리할 수
                있도록 노력하겠습니다. ▶ (주)통신나라 미래교육 은(는) ｢개인정보
                보호법｣ 제39조의11에 따라 국내대리인을 지정하였습니다. -
                국내대리인의 성명 : [대리인 성명_직접입력] (법인의 경우 법인명,
                대표자의 성명) - 국내대리인의 주소 : [대리인 주소_직접입력]
                (법인의 경우 영업소 소재지) - 국내대리인의 전화번호 : [대리인
                전화번호_직접입력] - 국내대리인의 전자우편 주소 : [대리인
                전자우편_직접입력] 제15조(개인정보의 열람청구를 접수·처리하는
                부서) 정보주체는 ｢개인정보 보호법｣ 제35조에 따른 개인정보의 열람
                청구를 아래의 부서에 할 수 있습니다. (주)통신나라 미래교육은(는)
                정보주체의 개인정보 열람청구가 신속하게 처리되도록
                노력하겠습니다. ▶ 개인정보 열람청구 접수·처리 부서 부서명 :
                개인정보 열람청구 담당자 : 홍길동 연락처 : 01012345678,
                test@test.com, 03212345678 제16조(정보주체의 권익침해에 대한
                구제방법) 정보주체는 개인정보침해로 인한 구제를 받기 위하여
                개인정보분쟁조정위원회, 한국인터넷진흥원 개인정보침해신고센터
                등에 분쟁해결이나 상담 등을 신청할 수 있습니다. 이 밖에 기타
                개인정보침해의 신고, 상담에 대하여는 아래의 기관에 문의하시기
                바랍니다. 1. 개인정보분쟁조정위원회 : (국번없이) 1833-6972
                (www.kopico.go.kr) 2. 개인정보침해신고센터 : (국번없이) 118
                (privacy.kisa.or.kr) 3. 대검찰청 : (국번없이) 1301
                (www.spo.go.kr) 4. 경찰청 : (국번없이) 182 (ecrm.cyber.go.kr)
                「개인정보보호법」제35조(개인정보의 열람), 제36조(개인정보의
                정정·삭제), 제37조(개인정보의 처리정지 등)의 규정에 의한 요구에
                대 하여 공공기관의 장이 행한 처분 또는 부작위로 인하여 권리 또는
                이익의 침해를 받은 자는 행정심판법이 정하는 바에 따라 행정심판을
                청구할 수 있습니다. ※ 행정심판에 대해 자세한 사항은
                중앙행정심판위원회(www.simpan.go.kr) 홈페이지를 참고하시기
                바랍니다. 제17조(영상정보처리기기 운영·관리에 관한 사항) ①
                (주)통신나라 미래교육은(는) 아래와 같이 영상정보처리기기를
                설치·운영하고 있습니다. 1.영상정보처리기기 설치근거·목적 :
                (주)통신나라 미래교육의 2.설치 대수, 설치 위치, 촬영 범위 :
                설치대수 : 대 설치위치 : 촬영범위 : 3.관리책임자, 담당부서 및
                영상정보에 대한 접근권한자 : 4.영상정보 촬영시간, 보관기간,
                보관장소, 처리방법 촬영시간 : 시간 보관기간 : 촬영시부터
                보관장소 및 처리방법 : 5.영상정보 확인 방법 및 장소 :
                6.정보주체의 영상정보 열람 등 요구에 대한 조치 : 개인영상정보
                열람.존재확인 청구서로 신청하여야 하며, 정보주체 자신이 촬영된
                경우 또는 명백히 정보주체의 생명.신체.재산 이익을 위해 필요한
                경우에 한해 열람을 허용함 7.영상정보 보호를 위한
                기술적.관리적.물리적 조치 : 제18조(개인정보 처리방침 변경) ① 이
                개인정보처리방침은 2022년 1월 1부터 적용됩니다. ② 이전의
                개인정보 처리방침은 아래에서 확인하실 수 있습니다. 예시 ) -
                20XX. X. X ~ 20XX. X. X 적용 (클릭) 예시 ) - 20XX. X. X ~ 20XX.
                X. X 적용 (클릭) 예시 ) - 20XX. X. X ~ 20XX. X. X 적용 (클릭)
              </textarea>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
