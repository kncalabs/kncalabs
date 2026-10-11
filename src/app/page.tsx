/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
/* eslint-disable */
"use client";
import { useEffect, useRef } from "react";
import "./showreel.css";

function initPage(root: HTMLElement) {
  const q = (sel: string): HTMLElement => root.querySelector(sel) as HTMLElement;
  const qa = (sel: string): HTMLElement[] => Array.from(root.querySelectorAll(sel)) as HTMLElement[];

  const listeners: Array<{ el: EventTarget; type: string; fn: EventListener; opts?: AddEventListenerOptions | boolean }> = [];
  const origWinAdd = window.addEventListener.bind(window);
  (window as unknown as { addEventListener: (type: string, fn: EventListener, opts?: AddEventListenerOptions | boolean) => void }).addEventListener = (type: string, fn: EventListener, opts?: AddEventListenerOptions | boolean) => {
    listeners.push({ el: window, type, fn, opts });
    origWinAdd(type, fn, opts);
  };
  const observers: IntersectionObserver[] = [];
  const OrigIO = window.IntersectionObserver;
  (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = function (this: unknown, cb: IntersectionObserverCallback, opts?: IntersectionObserverInit) {
    const o = new OrigIO(cb, opts);
    observers.push(o);
    return o;
  } as unknown as typeof IntersectionObserver;
  ((window as unknown as { IntersectionObserver: unknown }).IntersectionObserver as typeof IntersectionObserver).prototype = OrigIO.prototype;


      var nav = root.querySelector('#nav');
      function updateNav() { nav.classList.toggle('scrolled', window.scrollY > 24); }
      updateNav();
      window.addEventListener('scroll', updateNav, { passive: true });

      var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      var revealItems = root.querySelectorAll('.reveal:not(.demo-result-card):not(.demo-finish)');
      revealItems.forEach(function (item) {
        var delayStep = Number(item.getAttribute('data-delay')) || 0;
        item.style.setProperty('--reveal-delay', (delayStep * 95) + 'ms');
      });
      if ('IntersectionObserver' in window && !reduceMotion) {
        var revealObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) {
            if (entry.isIntersecting) {
              entry.target.classList.add('in');
              revealObserver.unobserve(entry.target);
            }
          });
        }, { threshold: .12, rootMargin: '0px 0px -6% 0px' });
        revealItems.forEach(function (item) { revealObserver.observe(item); });
      } else {
        revealItems.forEach(function (item) { item.classList.add('in'); });
      }

      var heroStage = root.querySelector('#heroStage');
      var floatCards = heroStage.querySelectorAll('[data-depth]');
      if (!reduceMotion && window.matchMedia('(pointer: fine)').matches) {
        var heroMotionFrame = 0;
        var targetX = 0;
        var targetY = 0;
        var currentX = 0;
        var currentY = 0;
        function renderHeroMotion() {
          currentX += (targetX - currentX) * .085;
          currentY += (targetY - currentY) * .085;
          floatCards.forEach(function (card) {
            var depth = Number(card.getAttribute('data-depth'));
            card.style.setProperty('--px', (currentX * 20 * depth).toFixed(2) + 'px');
            card.style.setProperty('--py', (currentY * 15 * depth).toFixed(2) + 'px');
          });
          if (Math.abs(targetX - currentX) > .002 || Math.abs(targetY - currentY) > .002) heroMotionFrame = window.requestAnimationFrame(renderHeroMotion);
          else heroMotionFrame = 0;
        }
        function queueHeroMotion() { if (!heroMotionFrame) heroMotionFrame = window.requestAnimationFrame(renderHeroMotion); }
        heroStage.addEventListener('pointermove', function (event) {
          var rect = heroStage.getBoundingClientRect();
          targetX = (event.clientX - rect.left) / rect.width - .5;
          targetY = (event.clientY - rect.top) / rect.height - .5;
          queueHeroMotion();
        });
        heroStage.addEventListener('pointerleave', function () { targetX = 0; targetY = 0; queueHeroMotion(); });
      }

      var counters = root.querySelectorAll('.counter');
      function animateCounter(counter) {
        var target = Number(counter.getAttribute('data-count')) || 0;
        var started = performance.now();
        function step(now) {
          var progress = Math.min(1, (now - started) / 1250);
          var eased = 1 - Math.pow(1 - progress, 5);
          counter.textContent = String(Math.min(target, Math.round(target * eased))).padStart(2, '0');
          if (progress < 1) requestAnimationFrame(step);
          else counter.animate([{ transform: 'translateY(0) scale(1)' }, { transform: 'translateY(-3px) scale(1.08)' }, { transform: 'translateY(0) scale(1)' }], { duration: 420, easing: 'cubic-bezier(.34,1.56,.64,1)' });
        }
        requestAnimationFrame(step);
      }
      if ('IntersectionObserver' in window && !reduceMotion) {
        var counterObserver = new IntersectionObserver(function (entries) {
          entries.forEach(function (entry) { if (entry.isIntersecting) { animateCounter(entry.target); counterObserver.unobserve(entry.target); } });
        }, { threshold: .6 });
        counters.forEach(function (counter) { counterObserver.observe(counter); });
      } else {
        counters.forEach(function (counter) { counter.textContent = String(Number(counter.getAttribute('data-count'))).padStart(2, '0'); });
      }

      var demoForm = root.querySelector('#demoForm');
      var demoInput = root.querySelector('#youtubeUrl');
      var demoStart = root.querySelector('#demoStart');
      var demoError = root.querySelector('#demoError');
      var demoState = root.querySelector('#demoState');
      var demoVideoId = root.querySelector('#demoVideoId');
      var demoMessage = root.querySelector('#demoMessage');
      var demoProgress = root.querySelector('#demoProgress');
      var demoChoices = root.querySelector('#demoChoices');
      var outputChoices = root.querySelectorAll('[data-output-choice]');
      var demoResults = root.querySelector('#demoResults');
      var demoResultsCount = root.querySelector('.demo-results-head span');
      var demoFinish = root.querySelector('#demoFinish');
      var demoRetry = root.querySelector('#demoRetry');
      var demoPhases = root.querySelectorAll('[data-demo-phase]');
      var demoCards = root.querySelectorAll('.demo-result-card');
      var demoTimers = [];
      var demoFrame = 0;
      var phaseMessages = ['YouTube URL을 확인하고 있어요...', '영상의 전체 맥락을 읽고 있어요...', '핵심 구간과 메시지를 찾고 있어요...', '선택한 채널에 맞춰 결과를 준비하고 있어요...'];
      var phaseDurations = [850, 950, 900, 900];
      var outputDetails = {
        youtube: { reasons: ['채널 선호 방식인 3초 결론 선공개로 이탈을 줄이고, 최신 키네틱 자막으로 핵심 단어를 즉시 읽게 했어요.', '완주를 유도하는 숫자형 리스트에 단어 단위 하이라이트 자막을 붙여 다음 항목을 기다리게 했어요.', '반전 장면을 먼저 던지는 오픈 루프와 중간 리훅을 넣어 시청 유지 흐름을 만들었어요.'], seo: '채널 선호 · 시청 유지 / 최신 트렌드 · 3초 훅·키네틱 자막·리훅' },
        reels: { reasons: ['릴스가 선호하는 저장형 순서 콘텐츠를 트렌딩 오디오의 비트 컷에 맞춰 빠르게 전개했어요.', '공감 문장을 첫 화면에 두고 친구에게 보내기 좋은 공유 훅으로 자연스럽게 연결했어요.', '마지막 프레임이 첫 장면으로 이어지는 심리스 루프와 저장 CTA를 함께 설계했어요.'], seo: '채널 선호 · 저장·공유 / 최신 트렌드 · 트렌딩 오디오·비트 컷·심리스 루프' },
        tiktok: { reasons: ['틱톡 특유의 POV 챌린지 문법과 빠른 컷으로 시청자가 상황에 바로 들어오게 했어요.', '원본 주장에 바로 답하는 듀엣·리액션 포맷으로 참여와 2차 대화를 만들었어요.', '검색형 문장을 첫 자막에 두고 따라 하기 쉬운 3단계 챌린지를 루프로 마무리했어요.'], seo: '채널 선호 · 참여·재현 / 최신 트렌드 · POV 챌린지·듀엣·검색 훅' },
        cards: { reasons: ['최신 캐러셀의 에디토리얼 표지와 스와이프 큐로 첫 장에서 다음 장을 기대하게 했어요.', '저장하기 좋은 체크리스트를 장당 한 메시지로 나눠 모바일 가독성을 높였어요.', '문제–발견–실행의 스토리 아크를 한 장 한 문장으로 이어 완독 흐름을 만들었어요.'], seo: '채널 선호 · 저장·완독 / 최신 트렌드 · 에디토리얼 표지·스와이프 큐·스토리 아크' },
        blog: { reasons: ['Naver 검색 의도를 제목에 분명히 넣고 비용·도구·순서까지 답하는 완결형 구성을 택했어요.', '목차와 실제 사용 경험, 비교 기준을 앞쪽에 배치해 원하는 정보까지 계속 읽게 했어요.', '연관 검색어를 반영한 단계별 설명과 FAQ로 다음 궁금증까지 한 글에서 해결하게 했어요.'], seo: '채널 선호 · 검색 만족·체류 / 최신 트렌드 · 의도형 제목·목차·체험 정보·FAQ' },
        threads: { reasons: ['의견이 갈리는 한 줄 훅으로 시작해 Threads 특유의 빠른 공감과 답글 흐름을 열었어요.', '번호형 미니 스레드로 한 포스트에 한 팁만 담아 저장하고 이어 읽기 쉽게 했어요.', '정답을 요구하지 않는 열린 질문으로 마무리해 자신의 경험을 댓글로 보태기 쉽게 했어요.'], seo: '채널 선호 · 답글 대화 / 최신 트렌드 · 반론 훅·미니 스레드·열린 질문' },
        x: { reasons: ['X 피드에서 빠르게 읽히도록 첫 문장에 논지를 압축하고 정보 밀도를 높였어요.', '인용하기 좋은 대비 문장으로 만들어 재게시할 때도 핵심이 그대로 남게 했어요.', '짧은 네이티브 스레드에 시각적 증거를 붙이는 최신 포맷으로 실행 순서를 전개했어요.'], seo: '채널 선호 · 재게시·인용 / 최신 트렌드 · 논지 선공개·대비 문장·네이티브 스레드' },
        facebook: { reasons: ['피드 미리보기의 첫 두 줄에 질문을 두어 댓글 대화를 시작하기 쉽게 했어요.', '외부 링크보다 맥락이 풍부한 네이티브 경험담으로 읽고 머무를 이유를 만들었어요.', '그룹과 지인에게 전달할 실용 팁을 정리해 공유할 명분이 분명하도록 구성했어요.'], seo: '채널 선호 · 의미 있는 대화·공유 / 최신 트렌드 · 첫 두 줄 훅·네이티브 스토리·그룹 가치' },
        newsletter: { reasons: ['호기심 간극을 만든 제목 A/B안으로 받은편지함에서 열어볼 이유를 먼저 제시했어요.', '시간과 결과를 구체적으로 약속하고 프리헤더가 제목의 의미를 이어받게 했어요.', '익숙한 시리즈명과 개인적인 말투를 결합해 정기 구독자가 빠르게 알아보게 했어요.'], seo: '채널 선호 · 오픈·클릭 / 최신 트렌드 · 호기심 간극·구체적 혜택·프리헤더' },
        ad: { reasons: ['광고처럼 보이지 않는 UGC형 데모로 시작해 첫 프레임에서 결과를 직접 보여줬어요.', '문제–해결 구조의 텍스트 중심 소재로 작은 화면에서도 혜택을 바로 이해하게 했어요.', '훅·증거·CTA를 바꾼 매트릭스형 변형을 만들어 성과에 따라 빠르게 비교할 수 있게 했어요.'], seo: '채널 선호 · 첫 프레임 주목·행동 / 최신 트렌드 · UGC 데모·텍스트 중심·훅 매트릭스' }
      };
      var viralReferences = {
        youtube: [
          { channel: 'AI 실전 노트', subs: '1.2만', views: '71만', ratio: '59.2×', why: '3초 결론 훅 + 단어별 키네틱 자막으로 초반 이탈을 줄인 구성' },
          { channel: '솔로 빌더 랩', subs: '4.8만', views: '180만', ratio: '37.5×', why: '숫자형 리스트 + 중간 리훅으로 완주 기대를 이어간 구성' },
          { channel: '노코드 사장님', subs: '6.3천', views: '39만', ratio: '61.9×', why: '실패 장면 선공개 + 열린 결말로 다음 컷을 보게 만든 구성' }
        ],
        reels: [
          { channel: '워크플로우 다이어리', subs: '1.8만', views: '82만', ratio: '45.6×', why: '트렌딩 오디오 비트 컷 + 저장형 5단계 요약' },
          { channel: '1인팀의 기록', subs: '3.2만', views: '96만', ratio: '30.0×', why: '공감 질문 첫 화면 + 친구 공유를 부르는 결론' },
          { channel: '메이커스 루틴', subs: '9.4천', views: '51만', ratio: '54.3×', why: '끝과 처음이 맞물리는 심리스 루프로 반복 재생 유도' }
        ],
        tiktok: [
          { channel: 'AI 실험실', subs: '7.6천', views: '68만', ratio: '89.5×', why: 'POV 챌린지 + 1초 단위 빠른 컷으로 즉시 몰입' },
          { channel: '창업생존기', subs: '2.7만', views: '110만', ratio: '40.7×', why: '화제 영상 듀엣 + 반응형 답변으로 참여 맥락 생성' },
          { channel: '오늘의 자동화', subs: '1.1만', views: '73만', ratio: '66.4×', why: '검색형 첫 자막 + 따라 하기 쉬운 3단계 챌린지' }
        ],
        cards: [
          { channel: '브랜드 메모', subs: '1.5만', views: '44만', ratio: '29.3×', why: '에디토리얼 표지 + 명확한 스와이프 큐로 넘김 유도' },
          { channel: '마케팅 한 장', subs: '4.1만', views: '92만', ratio: '22.4×', why: '장당 한 메시지 + 마지막 저장 체크리스트' },
          { channel: '기획자의 서랍', subs: '8.8천', views: '31만', ratio: '35.2×', why: '문제–발견–실행의 스토리 아크로 완독 흐름 설계' }
        ],
        blog: [
          { channel: '바이브코딩 실전', subs: '3.6천', views: '18만', ratio: '50.0×', why: '검색 의도형 제목 + 첫 화면 목차로 원하는 답에 빠르게 연결' },
          { channel: '혼자 만드는 사업', subs: '9.2천', views: '27만', ratio: '29.3×', why: '실제 사용 경험 + 비교표로 신뢰와 체류시간 강화' },
          { channel: 'AI 업무연구소', subs: '1.4만', views: '33만', ratio: '23.6×', why: '연관 키워드 FAQ + 단계별 체크리스트로 후속 검색까지 해결' }
        ],
        threads: [
          { channel: '@build.small', subs: '4.9천', views: '21만', ratio: '42.9×', why: '반론을 부르는 한 줄 훅 + 즉답 가능한 질문' },
          { channel: '@maker.log', subs: '1.1만', views: '38만', ratio: '34.5×', why: '번호형 미니 스레드 + 포스트당 하나의 실전 팁' },
          { channel: '@work.less', subs: '6.7천', views: '29만', ratio: '43.3×', why: '개인 경험 고백 + 독자의 사례를 묻는 열린 결말' }
        ],
        x: [
          { channel: '@SoloBuildLab', subs: '8.1천', views: '46만', ratio: '56.8×', why: '첫 문장 논지 선공개 + 인용하기 쉬운 대비 문장' },
          { channel: '@AIWorkNotes', subs: '2.3만', views: '88만', ratio: '38.3×', why: '고밀도 5포스트 스레드 + 네이티브 도식 첨부' },
          { channel: '@MakerSignal', subs: '5.4천', views: '34만', ratio: '63.0×', why: '강한 관점 한 줄 + 재게시하며 덧붙이기 좋은 여백' }
        ],
        facebook: [
          { channel: '작은 팀의 AI', subs: '1.7만', views: '39만', ratio: '22.9×', why: '첫 두 줄 질문 + 댓글에서 경험을 나누는 대화 구조' },
          { channel: '1인 비즈니스 클럽', subs: '3.8만', views: '74만', ratio: '19.5×', why: '외부 링크 없는 네이티브 경험담 + 구체적인 시행착오' },
          { channel: '일잘러 커뮤니티', subs: '9.6천', views: '28만', ratio: '29.2×', why: '그룹에 공유할 체크리스트 + 함께 해볼 사람 태그 유도' }
        ],
        newsletter: [
          { channel: '월요 메이커 레터', subs: '6.2천', views: '2.9만', ratio: '4.7×', why: '호기심 간극 제목 + 프리헤더에서 구체적 결과 제시' },
          { channel: 'AI 실무 브리프', subs: '1.9만', views: '7.4만', ratio: '3.9×', why: '숫자·시간·혜택을 한 줄에 담은 실용형 제목' },
          { channel: '솔로워크 위클리', subs: '8.5천', views: '3.6만', ratio: '4.2×', why: '익숙한 시리즈명 + 개인적인 첫 문장으로 오픈 동기 강화' }
        ],
        ad: [
          { channel: '크리에이터 데모 A', subs: '1.3만', views: '57만', ratio: '43.8×', why: '광고처럼 보이지 않는 UGC 오프닝 + 결과 화면 선공개' },
          { channel: '퍼포먼스 테스트 B', subs: '2.1만', views: '69만', ratio: '32.9×', why: '문제–해결 텍스트 중심 소재 + 한 문장 혜택' },
          { channel: '브랜드 실험실 C', subs: '7.9천', views: '41만', ratio: '51.9×', why: '훅·증거·CTA를 바꾼 변형으로 승자 소재를 빠르게 탐색' }
        ]
      };
      root.querySelectorAll('.quick-output').forEach(function (card) {
        var outputKey = card.getAttribute('data-output');
        var detail = outputDetails[outputKey] || { reasons: ['핵심 메시지를 채널에 맞게 다시 구성했어요.'], seo: '길이 · 말투 · 노출 방식' };
        card.querySelectorAll('.quick-sample').forEach(function (sample, index) {
          var description = document.createElement('small');
          description.textContent = '이렇게 만든 이유 · ' + (detail.reasons[index] || detail.reasons[0]);
          var seo = document.createElement('em');
          seo.textContent = '최적화 포인트 · ' + detail.seo;
          sample.appendChild(description);
          sample.appendChild(seo);
        });
        var references = viralReferences[outputKey] || [];
        var referenceSection = document.createElement('section');
        referenceSection.className = 'viral-reference';
        referenceSection.setAttribute('aria-label', '지난 7일 바이럴 레퍼런스 예시');
        var referenceHead = document.createElement('div');
        referenceHead.className = 'viral-reference-head';
        var referenceTitle = document.createElement('strong');
        referenceTitle.textContent = '지난 7일, 비슷한 콘텐츠 3개';
        var referenceNote = document.createElement('small');
        referenceNote.textContent = '예시 데이터입니다';
        referenceHead.appendChild(referenceTitle);
        referenceHead.appendChild(referenceNote);
        referenceSection.appendChild(referenceHead);
        var guide = document.createElement('p');
        guide.className = 'viral-guide';
        guide.textContent = '‘확산 배수’가 높을수록 구독자 규모를 넘어 더 넓은 이용자에게 도달한 콘텐츠예요.';
        referenceSection.appendChild(guide);
        var referenceList = document.createElement('div');
        referenceList.className = 'viral-list';
        references.forEach(function (reference, index) {
          var item = document.createElement('article');
          item.className = 'viral-item';
          var thumb = document.createElement('span');
          thumb.className = 'viral-thumb';
          thumb.setAttribute('aria-hidden', 'true');
          thumb.style.filter = 'hue-rotate(' + (index * 34) + 'deg)';
          var copy = document.createElement('div');
          copy.className = 'viral-copy';
          var channel = document.createElement('span');
          channel.className = 'viral-channel';
          channel.textContent = reference.channel;
          var metrics = document.createElement('span');
          metrics.className = 'viral-metrics';
          metrics.textContent = '구독자 ' + reference.subs + ' · 조회수 ' + reference.views + ' = 확산 ' + reference.ratio.replace('×', '배');
          var why = document.createElement('p');
          why.className = 'viral-why';
          var whyLabel = document.createElement('b');
          whyLabel.textContent = '주목받은 이유 · ';
          why.appendChild(whyLabel);
          why.appendChild(document.createTextNode(reference.why));
          copy.appendChild(channel);
          copy.appendChild(metrics);
          copy.appendChild(why);
          item.appendChild(thumb);
          item.appendChild(copy);
          referenceList.appendChild(item);
        });
        referenceSection.appendChild(referenceList);
        card.appendChild(referenceSection);
      });

      function setResultDetailMode() {
        var count = getSelectedChoices().length;
        demoResults.classList.remove('detail-full', 'detail-medium', 'detail-compact');
        demoResults.classList.add(count === 1 ? 'detail-full' : count === 2 ? 'detail-medium' : 'detail-compact');
      }

      function extractYoutubeId(value) {
        var raw = value.trim();
        if (!raw) return '';
        try {
          var parsed = new URL(/^https?:\/\//i.test(raw) ? raw : 'https://' + raw);
          var host = parsed.hostname.toLowerCase().replace(/^www\./, '');
          var isYoutubeHost = host === 'youtube.com' || host.endsWith('.youtube.com');
          var pathParts = parsed.pathname.split('/').filter(Boolean);
          var id = '';
          if (isYoutubeHost && pathParts[0] === 'watch') id = parsed.searchParams.get('v') || '';
          else if (host === 'youtu.be') id = pathParts[0] || '';
          else if (isYoutubeHost && pathParts[0] === 'shorts') id = pathParts[1] || '';
          return /^[A-Za-z0-9_-]{6,}$/.test(id) ? id : '';
        } catch (error) { return ''; }
      }

      function clearDemoTimers() {
        demoTimers.forEach(function (timer) { window.clearTimeout(timer); });
        demoTimers = [];
        if (demoFrame) window.cancelAnimationFrame(demoFrame);
        demoFrame = 0;
      }
      function setDemoPhase(index, videoId) {
        demoPhases.forEach(function (phase, phaseIndex) {
          phase.classList.toggle('active', phaseIndex === index);
          phase.classList.toggle('done', phaseIndex < index);
        });
        demoState.textContent = '영상 ID ' + videoId + ' 분석 중...';
        demoState.className = 'is-running';
        demoMessage.textContent = index === 0 ? '입력한 영상의 형식을 확인했습니다. 예시 데이터로 분석 흐름을 시연합니다.' : phaseMessages[index];
      }
      function getSelectedChoices() {
        return Array.prototype.filter.call(outputChoices, function (choice) { return choice.getAttribute('aria-pressed') === 'true'; });
      }
      function getSelectedGroups() {
        var groups = [];
        getSelectedChoices().forEach(function (choice) {
          var group = choice.getAttribute('data-output-group');
          if (groups.indexOf(group) === -1) groups.push(group);
        });
        return groups;
      }
      function updateSelectionState() {
        var count = getSelectedChoices().length;
        var groups = getSelectedGroups();
        demoStart.disabled = count === 0;
        demoStart.textContent = count ? '선택한 ' + count + '개 변환 시작' : '채널을 선택해 주세요';
        setResultDetailMode();
        root.querySelector('#optimizationEmpty').hidden = count > 0;
        root.querySelectorAll('[data-optimization]').forEach(function (card) {
          card.hidden = groups.indexOf(card.getAttribute('data-optimization')) === -1;
        });
      }
      function revealDemoResults() {
        var selected = getSelectedChoices();
        var groups = getSelectedGroups();
        var visibleCards = [];
        demoPhases.forEach(function (phase) { phase.classList.remove('active'); phase.classList.add('done'); });
        demoProgress.style.width = '100%';
        demoState.textContent = '선택한 콘텐츠가 준비됐어요';
        demoState.className = 'is-complete';
        demoMessage.textContent = selected.length + '개 채널에 맞춘 결과를 검수할 수 있어요.';
        demoResultsCount.textContent = '선택한 ' + selected.length + '개 플랫폼용 콘텐츠 구성';
        demoCards.forEach(function (card) {
          var visible = groups.indexOf(card.getAttribute('data-output')) !== -1;
          card.hidden = !visible;
          card.classList.remove('reveal');
          if (visible) visibleCards.push(card);
        });
        demoResults.hidden = false;
        visibleCards.forEach(function (card, index) { demoTimers.push(window.setTimeout(function () { card.classList.add('reveal'); }, index * 180)); });
        demoTimers.push(window.setTimeout(function () { demoFinish.classList.add('reveal'); }, visibleCards.length * 180));
        demoStart.disabled = false;
        demoInput.readOnly = false;
        outputChoices.forEach(function (choice) { choice.disabled = false; });
        updateSelectionState();
      }
      function runDemo(videoId) {
        clearDemoTimers();
        demoResults.hidden = true;
        demoCards.forEach(function (card) { card.classList.remove('reveal'); card.hidden = true; });
        demoFinish.classList.remove('reveal');
        demoPhases.forEach(function (phase) { phase.classList.remove('active', 'done'); });
        demoProgress.style.width = '0%';
        demoVideoId.textContent = 'VIDEO ID / ' + videoId;
        demoStart.disabled = true;
        demoInput.readOnly = true;
        outputChoices.forEach(function (choice) { choice.disabled = true; });
        var elapsed = 0;
        phaseDurations.forEach(function (duration, index) { demoTimers.push(window.setTimeout(function () { setDemoPhase(index, videoId); }, elapsed)); elapsed += duration; });
        demoTimers.push(window.setTimeout(revealDemoResults, elapsed));
        var startedAt = performance.now();
        function updateProgress(now) {
          var progress = Math.min(1, (now - startedAt) / elapsed);
          var eased = progress < .5 ? 4 * progress * progress * progress : 1 - Math.pow(-2 * progress + 2, 3) / 2;
          demoProgress.style.width = (eased * 100) + '%';
          if (progress < 1) demoFrame = window.requestAnimationFrame(updateProgress);
        }
        demoFrame = window.requestAnimationFrame(updateProgress);
      }
      function resetDemo() {
        clearDemoTimers();
        demoInput.value = 'https://youtu.be/P3jFI-VpyLg';
        demoInput.readOnly = false;
        demoInput.setAttribute('aria-invalid', 'false');
        demoStart.disabled = false;
        demoError.textContent = '';
        demoState.textContent = '예시 영상을 준비했어요';
        demoState.className = '';
        demoVideoId.textContent = 'VIDEO / 바이브 코딩 1인 창업 3시간 통합본';
        demoMessage.textContent = '3시간 12분 분량의 예시 영상입니다. 원하는 채널을 고르면 분석부터 결과 준비까지 보여드려요.';
        demoProgress.style.width = '0%';
        demoPhases.forEach(function (phase) { phase.classList.remove('active', 'done'); });
        demoCards.forEach(function (card) { card.classList.remove('reveal'); card.hidden = true; });
        demoFinish.classList.remove('reveal');
        demoResults.hidden = true;
        outputChoices.forEach(function (choice) { choice.disabled = false; choice.setAttribute('aria-pressed', 'false'); });
        updateSelectionState();
        demoInput.focus();
      }
      demoForm.addEventListener('submit', function (event) {
        event.preventDefault();
        var rawUrl = demoInput.value.trim();
        if (!rawUrl) {
          demoInput.setAttribute('aria-invalid', 'true');
          demoError.textContent = '분석할 YouTube 영상 URL을 입력해 주세요.';
          demoInput.focus();
          return;
        }
        var videoId = extractYoutubeId(rawUrl);
        if (!videoId) {
          demoInput.setAttribute('aria-invalid', 'true');
          demoError.textContent = '올바른 YouTube URL을 입력해 주세요. watch?v=, youtu.be/, shorts/ 형식을 사용할 수 있어요.';
          demoInput.focus();
          return;
        }
        if (!getSelectedChoices().length) {
          demoInput.setAttribute('aria-invalid', 'false');
          demoError.textContent = '먼저 만들고 싶은 콘텐츠를 하나 이상 선택해 주세요.';
          return;
        }
        demoInput.setAttribute('aria-invalid', 'false');
        demoError.textContent = '';
        runDemo(videoId);
      });
      demoInput.addEventListener('input', function () { demoInput.setAttribute('aria-invalid', 'false'); demoError.textContent = ''; });
      outputChoices.forEach(function (choice) {
        choice.addEventListener('click', function () {
          var selected = choice.getAttribute('aria-pressed') === 'true';
          choice.setAttribute('aria-pressed', selected ? 'false' : 'true');
          demoError.textContent = '';
          updateSelectionState();
        });
      });
      updateSelectionState();
      root.querySelectorAll('.timestamp').forEach(function (button) {
        button.addEventListener('click', function () {
          var previous = button.textContent;
          button.textContent = 'PREVIEW';
          button.setAttribute('aria-pressed', 'true');
          window.setTimeout(function () { button.textContent = previous; button.setAttribute('aria-pressed', 'false'); }, 900);
        });
      });
      demoRetry.addEventListener('click', resetDemo);

      var channelTabs = root.querySelectorAll('.channel-tab');
      var channelPreview = root.querySelector('#channelPreview');
      var channelName = root.querySelector('#channelName');
      var channelFormat = root.querySelector('#channelFormat');
      var channelTitle = root.querySelector('#channelTitle');
      var channelCopy = root.querySelector('#channelCopy');
      var channelMeta = root.querySelector('#channelMeta');
      channelTabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
          channelTabs.forEach(function (item) { item.setAttribute('aria-selected', 'false'); });
          tab.setAttribute('aria-selected', 'true');
          channelPreview.setAttribute('data-platform', tab.getAttribute('data-platform'));
          channelName.textContent = tab.getAttribute('data-name');
          channelFormat.textContent = tab.getAttribute('data-format');
          channelTitle.textContent = tab.getAttribute('data-title');
          channelCopy.textContent = tab.getAttribute('data-copy');
          channelMeta.textContent = tab.getAttribute('data-meta');
        });
      });

  return () => {
    listeners.forEach(({ el, type, fn, opts }) => {
      el.removeEventListener(type, fn, opts);
    });
    observers.forEach(o => o.disconnect());
    (window as unknown as { addEventListener: unknown }).addEventListener = origWinAdd;
    (window as unknown as { IntersectionObserver: unknown }).IntersectionObserver = OrigIO;
  };
}


export default function Home() {
  const rootRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!rootRef.current) return;
    const cleanup = initPage(rootRef.current);
    return cleanup;
  }, []);
  return (
    <div ref={rootRef}>

  <nav className="nav" id="nav" aria-label="페이지 탐색">
    <div className="wrap nav-inner">
      <a className="nav-mark" href="#top">KNCA / ALPHA 02</a>
      <div className="nav-links">
        <a href="#demo">DEMO</a>
        <a href="#pipeline">PIPELINE</a>
        <a href="#audience">FOR WHOM</a>
        <a className="nav-cta" href="https://kncalabs.com/" target="_blank" rel="noreferrer">LIVE SITE ↗</a>
      </div>
    </div>
  </nav>

  <main id="top">
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-halo" aria-hidden="true"></div>
      <div className="wrap">
        <div className="hero-copy">
          <p className="kicker">KNCA LABS / AI CONTENT AUTOMATION</p>
          <h1 id="hero-title">
            <span className="hero-line"><span>One Source.</span></span>
            <span className="hero-line blue"><span>Many Possibilities.</span></span>
          </h1>
          <p className="lede">영상이나 문서 하나에서 시작해 보세요. Claude API 기반의 하나의 흐름이 핵심을 이해하고, 여러 콘텐츠로 만들고, 각 채널에 맞게 다듬습니다.</p>
          <div className="hero-actions">
            <a className="button primary" href="#demo">직접 살펴보기 <i aria-hidden="true">↓</i></a>
            <a className="button" href="#pipeline">작동 방식 보기 <i aria-hidden="true">↓</i></a>
          </div>
          <span className="hero-founded">STAY C · SINCE 2023</span>
        </div>

        <div className="hero-stage" id="heroStage" aria-label="하나의 원천에서 영상, 아티클, 뉴스레터, 소셜 콘텐츠로 확장되는 흐름">
          <svg className="orbit-svg" viewBox="0 0 1040 360" aria-hidden="true">
            <path d="M70 80 C230 320 370 320 520 180 S810 0 970 84"></path>
            <path d="M72 282 C275 80 385 80 520 180 S765 326 972 278"></path>
          </svg>
          <span className="signal" aria-hidden="true"></span>
          <span className="hero-particle hp1" aria-hidden="true"></span><span className="hero-particle hp2" aria-hidden="true"></span><span className="hero-particle hp3" aria-hidden="true"></span><span className="hero-particle hp4" aria-hidden="true"></span>
          <div className="source-core"><div className="core-copy"><span>ONE SOURCE</span><strong>UNDERSTAND</strong></div></div>
          <div className="float-card fc1" data-depth=".8"><span className="glyph">VID</span><strong>영상</strong><small>SOURCE INPUT</small></div>
          <div className="float-card fc2" data-depth=".45"><span className="glyph">TXT</span><strong>아티클</strong><small>LONG FORM</small></div>
          <div className="float-card fc3" data-depth=".65"><span className="glyph">LTR</span><strong>뉴스레터</strong><small>OWNED MEDIA</small></div>
          <div className="float-card fc4" data-depth=".95"><span className="glyph">SOC</span><strong>소셜</strong><small>MULTI CHANNEL</small></div>
        </div>
      </div>
      <span className="hero-corner left">AI PUBLISHING INFRASTRUCTURE<br />BUILDING IN PUBLIC</span>
      <span className="hero-corner right">SCROLL TO EXPLORE<br />KNCA LABS © 2026</span>
    </section>

    <div className="ticker" aria-label="핵심 기능">
      <div className="ticker-track">
        <span>ONE SOURCE ORCHESTRATION</span><span>UNIFIED AGENT PIPELINE</span><span>HUMAN-IN-THE-LOOP</span><span>BUILT ON CLAUDE API</span>
        <span aria-hidden="true">ONE SOURCE ORCHESTRATION</span><span aria-hidden="true">UNIFIED AGENT PIPELINE</span><span aria-hidden="true">HUMAN-IN-THE-LOOP</span><span aria-hidden="true">BUILT ON CLAUDE API</span>
      </div>
    </div>

    <section className="example" id="demo" aria-labelledby="demo-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">LIVE-FEEL DEMO / START HERE</p>
          <div><h2 id="demo-title">30분 영상 하나로,<br /><span className="blue">일주일치 콘텐츠.</span></h2><p className="section-intro">YouTube URL 하나만 넣어보세요. 실제 영상 업로드나 서버 전송 없이, 하나의 원천이 여러 결과물로 확장되는 제품 흐름을 인터랙티브 시퀀스로 보여드립니다.</p></div>
        </div>

        <aside className="channel-map reveal" data-delay="1" aria-labelledby="channel-map-title">
          <div className="channel-map-head">
            <h3 id="channel-map-title">하나의 원천에서<br /><span className="blue">모든 채널로.</span></h3>
            <p>YouTube URL을 넣고 필요한 채널만 골라보세요. 선택한 채널마다 서로 다른 예시 3개를 준비합니다.</p>
          </div>
          <div className="demo-shell">
          <div className="demo-top">
            <div className="demo-index">01</div>
            <form className="demo-form" id="demoForm" novalidate>
              <label htmlFor="youtubeUrl">PASTE A YOUTUBE SOURCE URL</label>
              <div className="demo-input-row">
                <input className="demo-input" id="youtubeUrl" name="youtubeUrl" type="url" inputmode="url" autocomplete="url" value="https://youtu.be/P3jFI-VpyLg" aria-label="YouTube 영상 URL" aria-describedby="demoError" />
                <button className="demo-start" id="demoStart" type="submit" disabled>채널을 선택해 주세요</button>
              </div>
              <p className="demo-error" id="demoError" role="alert"></p>
              <p className="demo-note">URL 형식을 확인한 뒤, 아래 결과는 예시 데이터로 시연합니다.</p>
              <div className="demo-choices" id="demoChoices">
                <div className="demo-choice-head"><div><p>CHOOSE CHANNELS</p><h3>원하는 채널을 골라주세요</h3></div><span>멀티 선택</span></div>
                <div className="demo-choice-grid" aria-label="만들 콘텐츠 선택">
                  <button className="demo-choice" type="button" aria-label="YouTube Shorts" aria-pressed="false" data-output-choice="youtube" data-output-group="youtube"><i className="channel-icon ch-youtube" aria-hidden="true"></i><span className="demo-choice-copy"><strong>YT</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="Instagram Reels" aria-pressed="false" data-output-choice="reels" data-output-group="reels"><i className="channel-icon ch-instagram" aria-hidden="true"></i><span className="demo-choice-copy"><strong>IG</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="TikTok" aria-pressed="false" data-output-choice="tiktok" data-output-group="tiktok"><i className="channel-icon ch-tiktok" aria-hidden="true"></i><span className="demo-choice-copy"><strong>TT</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="카드뉴스" aria-pressed="false" data-output-choice="cards" data-output-group="cards"><i className="channel-icon ch-cards" aria-hidden="true"></i><span className="demo-choice-copy"><strong>CARD</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="블로그" aria-pressed="false" data-output-choice="blog" data-output-group="blog"><i className="channel-icon ch-blog" aria-hidden="true"></i><span className="demo-choice-copy"><strong>BLOG</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="Threads" aria-pressed="false" data-output-choice="threads" data-output-group="threads"><i className="channel-icon ch-threads" aria-hidden="true"></i><span className="demo-choice-copy"><strong>TH</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="X" aria-pressed="false" data-output-choice="x" data-output-group="x"><i className="channel-icon ch-x" aria-hidden="true"></i><span className="demo-choice-copy"><strong>X</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="Facebook" aria-pressed="false" data-output-choice="facebook" data-output-group="facebook"><i className="channel-icon ch-facebook" aria-hidden="true"></i><span className="demo-choice-copy"><strong>FB</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="뉴스레터" aria-pressed="false" data-output-choice="newsletter" data-output-group="newsletter"><i className="channel-icon ch-mail" aria-hidden="true"></i><span className="demo-choice-copy"><strong>MAIL</strong></span></button>
                  <button className="demo-choice" type="button" aria-label="광고 소재" aria-pressed="false" data-output-choice="ad" data-output-group="ad"><i className="channel-icon ch-ad" aria-hidden="true"></i><span className="demo-choice-copy"><strong>AD</strong></span></button>
                </div>
              </div>
            </form>
          </div>

          <div className="demo-workspace" id="demoWorkspace" aria-live="polite">
            <div className="demo-statusbar"><strong id="demoState">예시 영상을 준비했어요</strong><span id="demoVideoId">VIDEO / 바이브 코딩 1인 창업 3시간 통합본</span></div>
            <div className="demo-phases" aria-label="콘텐츠 변환 진행 단계">
              <div className="demo-phase" data-demo-phase="0"><span>01</span><strong>URL CHECK</strong></div>
              <div className="demo-phase" data-demo-phase="1"><span>02</span><strong>CONTEXT</strong></div>
              <div className="demo-phase" data-demo-phase="2"><span>03</span><strong>HIGHLIGHTS</strong></div>
              <div className="demo-phase" data-demo-phase="3"><span>04</span><strong>READY</strong></div>
            </div>
            <div className="demo-progress" aria-hidden="true"><i id="demoProgress"></i></div>
            <p className="demo-message" id="demoMessage">3시간 12분 분량의 예시 영상입니다. 원하는 채널을 고르면 분석부터 결과 준비까지 보여드려요.</p>

            <div className="demo-results" id="demoResults" hidden>
              <div className="demo-results-head"><p>CHANNEL-NATIVE OUTPUT / READY TO REVIEW</p><span>채널 선호 방식과 최신 포맷을 반영한 콘텐츠 구성</span></div>
              <div className="demo-result-grid">
                <article className="demo-result-card quick-output" data-output="youtube"><span className="demo-result-type">YOUTUBE SHORTS</span><h3>쇼츠 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>3SEC HOOK · KINETIC CAPTION</span><strong>“첫 수익, 여기서 갈렸습니다” 결론 선공개</strong></div><div className="quick-sample"><span>LISTICLE · WORD HIGHLIGHT</span><strong>AI 도구 5선, 단어별 강조 자막으로</strong></div><div className="quick-sample"><span>OPEN LOOP · RE-HOOK</span><strong>실패 장면부터 시작하는 반전 스토리</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="reels"><span className="demo-result-type">INSTAGRAM REELS</span><h3>릴스 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>TRENDING AUDIO · BEAT CUT</span><strong>비트에 맞춰 보는 첫 MVP 제작 순서</strong></div><div className="quick-sample"><span>RELATABLE · SHARE HOOK</span><strong>“도구만 고르다 지친 사람?” 공감 릴스</strong></div><div className="quick-sample"><span>SEAMLESS LOOP · SAVE CTA</span><strong>끝이 처음으로 이어지는 검증 루틴</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="cards"><span className="demo-result-type">INSTAGRAM CAROUSEL</span><h3>카드뉴스 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>EDITORIAL COVER · SWIPE CUE</span><strong>첫 장에서 멈추는 MVP 8단계 가이드</strong></div><div className="quick-sample"><span>SAVEABLE · CHECKLIST</span><strong>저장해 두는 AI 창업 체크리스트</strong></div><div className="quick-sample"><span>STORY ARC · 1 IDEA/CARD</span><strong>3시간 영상을 한 장 한 메시지로</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="facebook"><span className="demo-result-type">FACEBOOK</span><h3>Facebook 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>CONVERSATION · FIRST 2 LINES</span><strong>첫 두 줄에서 묻는 “첫 결제가 먼저일까요?”</strong></div><div className="quick-sample"><span>PERSONAL STORY · NATIVE POST</span><strong>링크보다 경험담으로 풀어낸 MVP 실패기</strong></div><div className="quick-sample"><span>SHAREABLE TIP · GROUP VALUE</span><strong>팀과 공유하는 AI 업무 분담 3가지</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="tiktok"><span className="demo-result-type">TIKTOK</span><h3>TikTok 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>POV CHALLENGE · FAST CUT</span><strong>POV: 20초 안에 3시간 영상을 요약한다면</strong></div><div className="quick-sample"><span>DUET · REACTION FORMAT</span><strong>“AI로 창업 가능?” 듀엣 리액션 답변</strong></div><div className="quick-sample"><span>SEARCH HOOK · LOOP</span><strong>1인 창업 자동화 3단계 챌린지</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="ad"><span className="demo-result-type">AD CREATIVE</span><h3>광고 소재 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>UGC HOOK · DEMO FIRST</span><strong>직접 보여주는 “3시간 영상 → 10분 콘텐츠”</strong></div><div className="quick-sample"><span>PROBLEM–SOLUTION · TEXT-LED</span><strong>채널마다 다시 쓰는 고통, 한 화면에서 해결</strong></div><div className="quick-sample"><span>HOOK MATRIX · CTA TEST</span><strong>혜택·증거·행동 문구를 바꾼 3종 테스트</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="blog"><span className="demo-result-type">NAVER BLOG</span><h3>블로그 글 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>SEARCH INTENT · KEYWORD TITLE</span><strong>바이브 코딩 1인 창업: 비용·도구·순서 총정리</strong></div><div className="quick-sample"><span>TOC · EXPERIENCE SIGNAL</span><strong>직접 써본 AI 도구 5가지 비교와 선택 기준</strong></div><div className="quick-sample"><span>Q&amp;A · RELATED KEYWORDS</span><strong>첫 MVP 검증 방법: 단계별 체크리스트와 FAQ</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="threads"><span className="demo-result-type">THREADS</span><h3>Threads 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>CONTRARIAN HOOK · ONE-LINER</span><strong>완벽한 제품보다 첫 결제가 먼저입니다.</strong></div><div className="quick-sample"><span>MINI THREAD · NUMBERED TIP</span><strong>AI 결과가 달라지는 완료 기준 3가지.</strong></div><div className="quick-sample"><span>REPLY BAIT · OPEN QUESTION</span><strong>오늘 가장 반복한 일, 하나만 적어볼까요?</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="x"><span className="demo-result-type">X</span><h3>X 포스트 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>THESIS FIRST · HIGH DENSITY</span><strong>AI의 가치는 속도가 아니라 검증 주기다.</strong></div><div className="quick-sample"><span>QUOTEABLE · CONTRAST</span><strong>도구는 바뀌어도 완료 기준은 남는다.</strong></div><div className="quick-sample"><span>NATIVE THREAD · VISUAL PROOF</span><strong>1인 창업 자동화, 5포스트 실전 스레드</strong></div></div></article>
                <article className="demo-result-card quick-output" data-output="newsletter"><span className="demo-result-type">NEWSLETTER</span><h3>뉴스레터 예시 3개</h3><div className="quick-samples"><div className="quick-sample"><span>CURIOSITY GAP · A/B SUBJECT</span><strong>혼자 일하는 방식을 바꾼 3가지, 하나는 의외였습니다</strong></div><div className="quick-sample"><span>SPECIFIC BENEFIT · PREHEADER</span><strong>10분 만에 첫 MVP 검증 계획 세우기</strong></div><div className="quick-sample"><span>FAMILIAR SERIES · PERSONAL TONE</span><strong>이번 주 당신이 바로 써볼 AI 실행법 3선</strong></div></div></article>
                <article className="demo-result-card platform-card shorts-result" data-output="legacy-shorts"><span className="demo-result-type">YOUTUBE SHORTS · 3 ASSETS</span><h3>쇼츠 하이라이트 3개</h3><div className="shorts-deck" aria-label="YouTube Shorts 형식의 하이라이트 미리보기">
                  <div className="short-card"><div className="short-top"><span className="shorts-wordmark"><i className="yt-red" aria-hidden="true"></i>Shorts</span><span className="short-duration">00:42</span></div><span className="short-center-play" aria-hidden="true"></span><div className="short-actions"><span className="short-action"><i className="css-icon icon-heart" aria-hidden="true"></i>4.8만</span><span className="short-action"><i className="css-icon icon-comment" aria-hidden="true"></i>328</span><span className="short-action"><i className="css-icon icon-share" aria-hidden="true"></i>공유</span></div><div className="short-copy"><span className="short-channel"><i className="short-profile" aria-hidden="true"></i>@kncalabs</span><strong>바이브 코딩으로 첫 수익 내기</strong><small>00:42 · 예상 조회수 48K</small></div><span className="short-scrub" aria-hidden="true"></span></div>
                  <div className="short-card"><div className="short-top"><span className="shorts-wordmark"><i className="yt-red" aria-hidden="true"></i>Shorts</span><span className="short-duration">1:15:30</span></div><span className="short-center-play" aria-hidden="true"></span><div className="short-actions"><span className="short-action"><i className="css-icon icon-heart" aria-hidden="true"></i>7.2만</span><span className="short-action"><i className="css-icon icon-comment" aria-hidden="true"></i>516</span><span className="short-action"><i className="css-icon icon-share" aria-hidden="true"></i>공유</span></div><div className="short-copy"><span className="short-channel"><i className="short-profile" aria-hidden="true"></i>@kncalabs</span><strong>1인 창업가가 쓰는 AI 도구 5선</strong><small>1:15:30 · 예상 조회수 72K</small></div><span className="short-scrub" aria-hidden="true"></span></div>
                  <div className="short-card"><div className="short-top"><span className="shorts-wordmark"><i className="yt-red" aria-hidden="true"></i>Shorts</span><span className="short-duration">2:48:12</span></div><span className="short-center-play" aria-hidden="true"></span><div className="short-actions"><span className="short-action"><i className="css-icon icon-heart" aria-hidden="true"></i>3.9만</span><span className="short-action"><i className="css-icon icon-comment" aria-hidden="true"></i>241</span><span className="short-action"><i className="css-icon icon-share" aria-hidden="true"></i>공유</span></div><div className="short-copy"><span className="short-channel"><i className="short-profile" aria-hidden="true"></i>@kncalabs</span><strong>실패에서 배운 3가지</strong><small>2:48:12 · 예상 조회수 39K</small></div><span className="short-scrub" aria-hidden="true"></span></div>
                </div></article>
                <article className="demo-result-card platform-card naver-card" data-output="legacy-blog"><span className="demo-result-type">NAVER BLOG · LONG FORM</span><h3>바이브 코딩 1인 창업 완벽 가이드</h3><div className="naver-blog" aria-label="네이버 블로그 형식의 글 미리보기"><div className="naver-bar"><span className="naver-brand">NAVER 블로그</span><span className="naver-follow">+ 이웃추가</span></div><div className="naver-body"><span className="naver-category">AI 창업 · 실전 가이드</span><h4>바이브 코딩으로 첫 MVP 만드는 순서</h4><div className="naver-author"><span className="naver-avatar" aria-hidden="true"></span><span><b>KNCA Labs</b><br />2026. 10. 11. 21:30</span></div><div className="naver-hero">아이디어에서 첫 결제까지</div><p className="naver-excerpt">3시간 영상의 핵심을 실행 순서로 다시 구성했습니다. 문제 정의, AI 도구 선택, MVP 제작, 첫 사용자 검증까지 단계별로 확인해 보세요.</p><div className="naver-footer"><span>공감 <strong>128</strong></span><span>댓글 <strong>24</strong></span></div></div></div></article>
                <article className="demo-result-card platform-card gmail-card" data-output="legacy-newsletter"><span className="demo-result-type">EMAIL NEWSLETTER · GMAIL PREVIEW</span><h3>이번 주 1인 창업 인사이트 3선</h3><div className="mail-window" aria-label="Gmail 이메일 수신 화면 형식의 뉴스레터 미리보기"><div className="mail-top"><span className="gmail-m">M</span><span className="mail-search">메일 검색</span></div><div className="mail-toolbar">← &nbsp; 보관 &nbsp; 삭제 &nbsp; 읽지 않음</div><div className="mail-subject">이번 주 1인 창업 인사이트 3선</div><div className="mail-meta"><span className="mail-avatar">K</span><span className="mail-from"><strong>KNCA Labs</strong><small>founder@kncalabs.com · 나에게</small></span><time className="mail-time">오후 9:30</time></div><div className="mail-content"><b>One source, three practical ideas.</b><p>01. 완성보다 먼저 유료 문제를 찾는 검증 방식</p><p>02. 혼자서도 속도를 유지하는 AI 업무 분담법</p><p>03. 실패 기록을 다음 제품의 데이터로 바꾸기</p></div></div></article>
                <article className="demo-result-card platform-card cards-result" data-output="legacy-cards"><span className="demo-result-type">INSTAGRAM CAROUSEL · 8 SLIDES</span><h3>넘기며 이해하는 카드뉴스</h3><div className="carousel-preview" aria-label="Instagram 캐러셀형 카드뉴스 미리보기"><div className="carousel-head"><strong>knca.labs</strong><span>•••</span></div><div className="carousel-slide"><span>VIBE CODING / START HERE</span><strong>첫 MVP는<br />이 순서로<br />만드세요.</strong><span>옆으로 넘겨 8단계 보기 →</span></div><div className="carousel-dots"><i></i><i></i><i></i><i></i><i></i></div></div></article>
                <article className="demo-result-card platform-card ad-result" data-output="legacy-ad"><span className="demo-result-type">AD CREATIVE · 3 VARIANTS</span><h3>애드포스트 후킹 소재 3종</h3><div className="ad-preview" aria-label="애드포스트 광고 소재 미리보기"><div className="ad-preview-top"><span>KNCA / AD 01</span><span>SPONSORED</span></div><strong>3시간 영상을<br />10분 콘텐츠로.</strong><p>좋은 원천 하나로 쇼츠부터 뉴스레터까지 준비하세요.</p><span className="ad-cta">지금 데모 보기 →</span></div></article>
                <article className="demo-result-card platform-card social-card" data-output="legacy-threads"><span className="demo-result-type">SOCIAL THREAD · THREADS / X</span><h3>대화로 이어지는 스레드 포스트</h3><div className="social-suite">
                  <section className="social-panel" aria-label="Threads 포스트 미리보기"><div className="social-label">THREADS</div><div className="thread-list"><article className="thread-post"><span className="thread-avatar" aria-hidden="true"></span><div><div className="thread-head"><strong>knca.labs</strong><time>2분</time><span className="thread-menu" aria-label="더보기">•••</span></div><p className="thread-text">1인 창업의 첫 목표는 ‘완벽한 제품’이 아니라 ‘첫 결제’입니다. 작게 만들고, 빠르게 검증하세요.</p><div className="thread-actions" aria-label="게시물 반응"><i className="css-icon icon-heart" aria-label="좋아요"></i><i className="css-icon icon-comment" aria-label="댓글"></i><i className="css-icon icon-repost" aria-label="리포스트"></i><i className="css-icon icon-share" aria-label="공유"></i></div></div></article><article className="thread-post"><span className="thread-avatar" aria-hidden="true"></span><div><div className="thread-head"><strong>knca.labs</strong><time>8분</time><span className="thread-menu" aria-label="더보기">•••</span></div><p className="thread-text">오늘도 도구만 고르고 있다면 고객 문제 한 문장부터 적어보세요.</p><div className="thread-actions" aria-label="게시물 반응"><i className="css-icon icon-heart" aria-label="좋아요"></i><i className="css-icon icon-comment" aria-label="댓글"></i><i className="css-icon icon-repost" aria-label="리포스트"></i><i className="css-icon icon-share" aria-label="공유"></i></div></div></article></div></section>
                  <section className="social-panel" aria-label="X 포스트 미리보기"><div className="social-label">X</div><article className="x-post"><div className="x-head"><span className="x-avatar" aria-hidden="true"></span><div><div className="x-author"><b>KNCA Labs</b><span>@kncalabs · 4분</span></div><p className="x-copy">바이브 코딩의 진짜 변화는 개발 속도보다 검증 주기가 짧아진다는 데 있습니다.</p><div className="x-actions" aria-label="게시물 반응"><i className="css-icon icon-comment" aria-label="답글"></i><i className="css-icon icon-repost" aria-label="재게시"></i><i className="css-icon icon-heart" aria-label="좋아요"></i><i className="css-icon icon-share" aria-label="공유"></i></div></div></div></article><article className="x-post"><div className="x-head"><span className="x-avatar" aria-hidden="true"></span><div><div className="x-author"><b>KNCA Labs</b><span>@kncalabs · 12분</span></div><p className="x-copy">AI에게 일을 맡길 때는 도구보다 먼저 ‘완료의 기준’을 알려줘야 결과가 달라집니다.</p><div className="x-actions" aria-label="게시물 반응"><i className="css-icon icon-comment" aria-label="답글"></i><i className="css-icon icon-repost" aria-label="재게시"></i><i className="css-icon icon-heart" aria-label="좋아요"></i><i className="css-icon icon-share" aria-label="공유"></i></div></div></div></article></section>
                  <section className="social-panel" aria-label="Instagram 피드 미리보기"><div className="social-label">INSTAGRAM</div><div className="instagram-head"><span className="ig-avatar-ring" aria-hidden="true"></span><span><strong>knca.labs</strong><small>AI content system</small></span></div><div className="ig-image"><span>BUILD ONCE.<br />ADAPT EVERYWHERE.</span></div><div className="ig-actions" aria-label="게시물 반응"><i className="css-icon icon-heart" aria-label="좋아요"></i><i className="css-icon icon-comment" aria-label="댓글"></i><i className="css-icon icon-share" aria-label="공유"></i></div><div className="ig-caption"><strong>좋아요 1,284개</strong><b>knca.labs</b> 하나의 좋은 원천을 각 채널에 맞는 콘텐츠로.</div></section>
                </div></article>
              </div>
              <div className="demo-finish" id="demoFinish"><p>작업 시간 비교<strong>기존 방식 4시간 <span className="blue">→</span> KNCA 10분 검수</strong></p><button className="demo-retry" id="demoRetry" type="button">다시 해보기</button></div>
            </div>
          </div>
        </div>

          <section className="optimization" aria-labelledby="optimization-title">
            <div className="optimization-head">
              <div><span>CHANNEL PREFERENCE × LATEST FORMAT</span><h3 id="optimization-title">채널의 선호 신호를 읽고,<br /><span className="blue">최신 포맷으로 다시 만듭니다.</span></h3></div>
              <p>시스템이 플랫폼별 노출 방식, 참여 신호, 최신 콘텐츠 포맷을 함께 판단해 훅·구조·자막·CTA를 자동으로 다시 설계합니다.</p>
            </div>
            <p className="optimization-empty" id="optimizationEmpty">위에서 채널을 고르면, 채널 선호 방식과 최신 트렌드가 어떻게 반영되는지 보여드려요.</p>
            <div className="optimization-grid">
              <article className="optimization-card" data-optimization="youtube" hidden><i className="channel-icon ch-youtube" aria-hidden="true"></i><h4>YouTube Shorts</h4><p>시청 유지에 유리한 3초 결론 훅, 키네틱 강조 자막, 중간 리훅을 조합해요.</p></article>
              <article className="optimization-card" data-optimization="reels" hidden><i className="channel-icon ch-instagram" aria-hidden="true"></i><h4>Instagram Reels</h4><p>공유·저장을 부르는 공감 포맷에 트렌딩 오디오 비트 컷과 심리스 루프를 맞춰요.</p></article>
              <article className="optimization-card" data-optimization="tiktok" hidden><i className="channel-icon ch-tiktok" aria-hidden="true"></i><h4>TikTok</h4><p>POV 챌린지, 듀엣 리액션, 검색형 첫 문장처럼 참여하기 쉬운 포맷으로 바꿔요.</p></article>
              <article className="optimization-card" data-optimization="cards" hidden><i className="channel-icon ch-cards" aria-hidden="true"></i><h4>카드뉴스</h4><p>에디토리얼 표지, 스와이프 큐, 장당 한 메시지로 저장하고 넘기기 좋은 캐러셀을 만들어요.</p></article>
              <article className="optimization-card" data-optimization="blog" hidden><i className="channel-icon ch-blog" aria-hidden="true"></i><h4>블로그</h4><p>Naver 검색 의도에 맞춘 제목·목차·체험 정보·FAQ로 체류시간을 늘리는 구조를 설계해요.</p></article>
              <article className="optimization-card" data-optimization="threads" hidden><i className="channel-icon ch-threads" aria-hidden="true"></i><h4>Threads</h4><p>반론을 부르는 한 줄 훅, 번호형 미니 스레드, 답하기 쉬운 질문으로 대화를 열어요.</p></article>
              <article className="optimization-card" data-optimization="x" hidden><i className="channel-icon ch-x" aria-hidden="true"></i><h4>X</h4><p>첫 문장에 주장을 압축하고 인용 가능한 대비 문장과 네이티브 스레드로 재게시를 유도해요.</p></article>
              <article className="optimization-card" data-optimization="facebook" hidden><i className="channel-icon ch-facebook" aria-hidden="true"></i><h4>Facebook</h4><p>첫 두 줄의 대화 훅, 네이티브 경험담, 그룹에 공유할 실용 정보로 확산 포인트를 만들어요.</p></article>
              <article className="optimization-card" data-optimization="newsletter" hidden><i className="channel-icon ch-mail" aria-hidden="true"></i><h4>뉴스레터</h4><p>호기심 간극·구체적 혜택을 담은 제목 A/B안과 프리헤더로 오픈 이유를 선명하게 해요.</p></article>
              <article className="optimization-card" data-optimization="ad" hidden><i className="channel-icon ch-ad" aria-hidden="true"></i><h4>광고 소재</h4><p>UGC 데모, 문제–해결형 카피, 훅·증거·CTA 매트릭스로 테스트할 크리에이티브를 만들어요.</p></article>
            </div>
          </section>
        </aside>

        <aside className="channel-map reveal" data-delay="2" aria-labelledby="legacy-channel-map-title" hidden>
          <div className="channel-map-head">
            <h3 id="legacy-channel-map-title">하나의 원천에서<br /><span className="blue">이 모든 채널로.</span></h3>
            <p>플랫폼을 탭하면 같은 핵심이 각 채널의 문법에 맞춰 바뀌는 모습을 볼 수 있어요.</p>
          </div>
          <div className="channel-map-grid">
            <div className="channel-tabs" role="tablist" aria-label="지원 플랫폼">
              <button className="channel-tab" type="button" role="tab" aria-selected="true" data-platform="youtube" data-name="YOUTUBE SHORTS" data-format="세로형 하이라이트 · 42초" data-title="첫 3초에 결론부터 보여주는 쇼츠" data-copy="긴 영상의 반전 구간을 찾아 훅, 자막, 컷 포인트로 재구성합니다." data-meta="9:16 · HOOK / CAPTION / CUT"><i className="channel-icon ch-youtube" aria-hidden="true"></i><span>YouTube Shorts</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="instagram" data-name="INSTAGRAM REELS" data-format="리듬형 릴스 · 28초" data-title="저장하고 싶은 핵심만 빠르게" data-copy="시각적 문장과 템포를 살려 반복 재생에 어울리는 릴스로 바꿉니다." data-meta="9:16 · COVER / CAPTION / AUDIO"><i className="channel-icon ch-instagram" aria-hidden="true"></i><span>Instagram Reels</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="cards" data-name="CARD NEWS" data-format="카드뉴스 · 8장" data-title="한 장에 하나씩, 넘기며 이해하기" data-copy="긴 설명을 문제·핵심·실행 순서로 나눠 읽기 쉬운 슬라이드로 만듭니다." data-meta="1:1 · 8 SLIDES / COPY / CTA"><i className="channel-icon ch-cards" aria-hidden="true"></i><span>카드뉴스</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="facebook" data-name="FACEBOOK" data-format="피드 게시물 · 1건" data-title="맥락을 더한 공유형 포스트" data-copy="관심을 끄는 첫 문장과 토론을 부르는 질문으로 피드 문법에 맞춥니다." data-meta="FEED · COPY / VISUAL / CTA"><i className="channel-icon ch-facebook" aria-hidden="true"></i><span>Facebook</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="tiktok" data-name="TIKTOK" data-format="트렌드형 클립 · 24초" data-title="멈춰 보게 만드는 빠른 전개" data-copy="짧은 호흡, 화면 자막, 루프 구조를 반영해 발견 피드에 맞게 편집합니다." data-meta="9:16 · HOOK / LOOP / CAPTION"><i className="channel-icon ch-tiktok" aria-hidden="true"></i><span>TikTok</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="ad" data-name="AD CREATIVE" data-format="애드포스트 · 3종" data-title="혜택과 행동을 선명하게 보여주는 광고" data-copy="같은 소재에서 후킹 문구와 비주얼 각도를 달리한 광고 크리에이티브를 만듭니다." data-meta="1:1 · 3 VARIANTS / CTA"><i className="channel-icon ch-ad" aria-hidden="true"></i><span>애드포스트</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="blog" data-name="BLOG" data-format="검색형 아티클 · 1편" data-title="검색하고 오래 읽는 완성형 가이드" data-copy="영상의 핵심을 목차와 단계별 설명으로 확장해 검색 친화적인 글로 정리합니다." data-meta="LONG FORM · SEO / OUTLINE / CTA"><i className="channel-icon ch-blog" aria-hidden="true"></i><span>블로그</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="threads" data-name="THREADS" data-format="대화형 스레드 · 5개" data-title="공감으로 시작해 대화로 이어지는 글" data-copy="주장을 짧고 자연스럽게 나누고, 답하고 싶은 여지를 남기는 흐름으로 바꿉니다." data-meta="TEXT · 5 POSTS / REPLIES"><i className="channel-icon ch-threads" aria-hidden="true"></i><span>Threads</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="x" data-name="X" data-format="인사이트 포스트 · 4개" data-title="한 문장으로 선명해지는 핵심" data-copy="정보 밀도를 높이고 인용하기 좋은 문장으로 다듬어 빠른 피드에 맞춥니다." data-meta="TEXT · 4 POSTS / THREAD"><i className="channel-icon ch-x" aria-hidden="true"></i><span>X</span></button>
              <button className="channel-tab" type="button" role="tab" aria-selected="false" data-platform="newsletter" data-name="NEWSLETTER" data-format="주간 이메일 · 1편" data-title="받은 편지함에서 읽는 깊이 있는 요약" data-copy="핵심 인사이트와 실행 항목을 편집해 다음 행동으로 이어지는 레터로 만듭니다." data-meta="EMAIL · SUBJECT / BODY / CTA"><i className="channel-icon ch-mail" aria-hidden="true"></i><span>뉴스레터</span></button>
            </div>
            <article className="channel-preview" id="channelPreview" data-platform="youtube" role="tabpanel" aria-live="polite">
              <div className="channel-preview-top"><span id="channelName">YOUTUBE SHORTS</span><span>PREVIEW</span></div>
              <div className="native-header"><span className="native-avatar">KC</span><span className="native-account"><b>KNCA Labs</b><small id="nativeHandle">@kncalabs · 지금</small></span><span className="native-more" aria-label="더보기">•••</span></div>
              <div className="channel-preview-body"><span className="channel-preview-format" id="channelFormat">세로형 하이라이트 · 42초</span><strong id="channelTitle">첫 3초에 결론부터 보여주는 쇼츠</strong><p id="channelCopy">긴 영상의 반전 구간을 찾아 훅, 자막, 컷 포인트로 재구성합니다.</p><span className="native-play" aria-hidden="true"></span></div>
              <div className="native-actions" aria-label="플랫폼 반응 UI"><span className="native-like">4.8만</span><span className="native-comment">328</span><span className="native-share">공유</span><span className="native-cta" id="nativeCta">구독</span></div>
              <div className="channel-preview-bottom"><span>ONE SOURCE</span><span id="channelMeta">9:16 · HOOK / CAPTION / CUT</span></div>
            </article>
          </div>
        </aside>
      </div>
    </section>

    <section className="architecture" id="pipeline" aria-labelledby="pipeline-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">SYSTEM MAP / FOUR STAGES</p>
          <div><h2 id="pipeline-title">복잡한 도구 대신,<br /><span className="blue">하나의 연결된 흐름.</span></h2><p className="section-intro">원천을 이해하고, 만들고, 채널에 맞춰 다듬은 뒤 배포 준비까지. 네 단계가 같은 맥락을 공유합니다.</p></div>
        </div>

        <div className="pipeline-board reveal" data-delay="1" aria-label="KNCA Labs의 네 단계 AI 콘텐츠 파이프라인">
          <svg className="pipeline-svg" viewBox="0 0 1280 640" preserveAspectRatio="none" aria-hidden="true">
            <path className="blue-path" d="M270 125 C420 145 420 260 545 320"></path>
            <path d="M1010 125 C850 155 850 265 735 320"></path>
            <path d="M270 525 C420 490 420 395 545 320"></path>
            <path className="blue-path" d="M1010 525 C850 490 850 390 735 320"></path>
            <path className="energy-path e1" d="M270 125 C420 145 420 260 545 320"></path>
            <path className="energy-path e2" d="M1010 125 C850 155 850 265 735 320"></path>
            <path className="energy-path e3" d="M270 525 C420 490 420 395 545 320"></path>
            <path className="energy-path e4" d="M1010 525 C850 490 850 390 735 320"></path>
            <circle cx="640" cy="320" r="235" fill="none" stroke="currentColor" stroke-opacity=".08"></circle>
          </svg>
          <span className="particle p1" aria-hidden="true"></span><span className="particle p2" aria-hidden="true"></span><span className="particle p3" aria-hidden="true"></span><span className="particle p4" aria-hidden="true"></span>
          <article className="pipeline-node pn1"><span>01 / UNDERSTANDING</span><h3>원천을 읽습니다</h3><p>이야기와 핵심 논리, 반복될 맥락을 구조화합니다.</p></article>
          <article className="pipeline-node pn2"><span>02 / SYNTHESIS</span><h3>여러 초안을 펼칩니다</h3><p>쇼츠, 아티클, 뉴스레터, 소셜 형식으로 생성합니다.</p></article>
          <article className="pipeline-node pn3"><span>03 / ADAPTATION</span><h3>채널에 맞춥니다</h3><p>말투, 훅, 길이와 표현을 플랫폼 문법에 맞게 조정합니다.</p></article>
          <article className="pipeline-node pn4"><span>04 / DISTRIBUTION</span><h3>검수 준비를 마칩니다</h3><p>사람이 사실과 표현을 확인할 수 있는 패키지로 정리합니다.</p></article>
          <div className="pipeline-core"><div><span>UNIFIED AGENT</span><strong>PIPELINE</strong></div></div>
        </div>

        <div className="stages">
          <article className="stage-card reveal"><span className="stage-number">01</span><h3>Single Source<br />Orchestration</h3><p>흩어진 입력 대신 하나의 원천을 중심으로 맥락을 유지합니다.</p><div className="stage-tags">KNOWLEDGE GRAPH / SOURCE CONTEXT</div></article>
          <article className="stage-card reveal" data-delay="1"><span className="stage-number">02</span><h3>Unified Agent<br />Pipeline</h3><p>전문화된 에이전트가 같은 목표와 기준을 공유하며 이어서 작업합니다.</p><div className="stage-tags">HYBRID RAG / FUNCTION CALLING</div></article>
          <article className="stage-card reveal" data-delay="2"><span className="stage-number">03</span><h3>Channel-native<br />Adaptation</h3><p>복사본을 늘리는 대신 각 채널에서 자연스러운 콘텐츠로 바꿉니다.</p><div className="stage-tags">FORMAT LOGIC / TONE CONTROL</div></article>
          <article className="stage-card reveal" data-delay="3"><span className="stage-number">04</span><h3>Human-in-the-Loop<br />Control</h3><p>자동화는 반복을 줄이고, 최종 판단과 책임은 사람이 맡습니다.</p><div className="stage-tags">REVIEW GATE / FINAL APPROVAL</div></article>
        </div>
      </div>
    </section>

    <section className="principle" id="principle" aria-labelledby="principle-title">
      <div className="wrap">
        <p className="kicker reveal">THE PRINCIPLE / BUILD ONCE</p>
        <h2 className="principle-title reveal" data-delay="1" id="principle-title">더 많이 만드는 것보다,<br /><span className="outline">좋은 원천 하나에</span><br /><span className="blue">집중해요.</span></h2>
        <div className="comparison">
          <article className="compare-card reveal"><span className="compare-label">BEFORE / MANUAL</span><h3>채널마다 처음부터 다시 쓰기</h3><p>같은 내용을 요약하고 또 고치는 사이 시간이 흩어지고 메시지도 조금씩 달라집니다.</p><div className="compare-metric"><span>WORKFLOW</span><strong>FRAGMENTED</strong></div></article>
          <div className="compare-arrow reveal" aria-hidden="true">→</div>
          <article className="compare-card after reveal" data-delay="2"><span className="compare-label">AFTER / AI-NATIVE</span><h3>원천 하나를 여러 채널로 자연스럽게</h3><p>핵심 아이디어는 사람이 만들고, 반복되는 구조화와 조정은 연결된 시스템이 맡습니다.</p><div className="compare-metric"><span>OPERATING MODEL</span><strong>BUILD ONCE</strong></div></article>
        </div>
      </div>
    </section>

    <section className="audience" id="audience" aria-labelledby="audience-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">FOR WHOM / START WITH YOUR WORK</p>
          <div><h2 id="audience-title">AI는 빠른데,<br /><span className="blue">내 일은 그대로라면.</span></h2><p className="section-intro">새 도구를 더 배우기보다, 지금 가진 자료와 아이디어를 실제 업무 흐름으로 연결하고 싶은 사람과 팀을 생각했습니다.</p></div>
        </div>
        <div className="audience-grid">
          <article className="audience-card featured reveal"><span className="audience-no">PRIMARY</span><h3>AI가 중요한 건 알지만, 어디서 어떻게 시작할지 막막한 분</h3><p>유행하는 도구를 좇기보다 내 업무·창작·사업에 맞는 실제 흐름부터 만들고 싶은 분께 잘 맞습니다.</p></article>
          <article className="audience-card reveal" data-delay="1"><span className="audience-no">CONTENT TEAM</span><h3>반복 제작 시간을 줄이고 싶은 팀</h3><p>한 메시지를 채널마다 다시 만드는 대신 더 중요한 기획과 판단에 집중합니다.</p></article>
          <article className="audience-card reveal" data-delay="2"><span className="audience-no">BRAND</span><h3>일관성과 속도를 함께 지키고 싶은 브랜드</h3><p>콘텐츠가 많아져도 우리다운 말투와 핵심 맥락을 놓치지 않습니다.</p></article>
        </div>
      </div>
    </section>

    <section className="team-note" aria-labelledby="team-title">
      <div className="wrap team-note-inner reveal">
        <h2 id="team-title">KNCA Labs는<br /><span className="blue">AI 콘텐츠 자동화</span><br />플랫폼을 만듭니다.</h2>
        <div className="team-note-copy"><p>하나의 원천이 여러 가능성으로 이어지도록, 콘텐츠 제작의 반복을 줄이고 사람이 더 중요한 판단에 집중할 수 있는 퍼블리싱 인프라를 설계합니다.</p><p className="tech">BUILT ON CLAUDE API<br />HYBRID RAG · FUNCTION CALLING · HUMAN REVIEW</p></div>
      </div>
    </section>

    <section className="status" id="status" aria-labelledby="status-title">
      <div className="wrap">
        <div className="section-head reveal">
          <p className="kicker">BUILDING IN PUBLIC / 2026</p>
          <div><h2 id="status-title">지금은 코어 알파를<br /><span className="blue">만들고 있어요.</span></h2><p className="section-intro">작은 단위로 직접 시험하고 다듬으며, 네 단계의 흐름을 실제 제품으로 연결하고 있습니다.</p></div>
        </div>
        <div className="status-grid">
          <article className="status-main reveal"><span className="status-live">CORE ALPHA IN PROGRESS</span><div><h3>One source in.<br />Complete workflow out.</h3><p>Phase 01의 코어 인프라를 마치고, Phase 02 퍼블리싱 파이프라인을 개발하고 있습니다. 다음 단계는 제한된 사용자와 함께하는 Closed Beta입니다.</p></div></article>
          <div className="status-aside">
            <article className="metric reveal" data-delay="1"><span>PHASES DESIGNED</span><strong className="counter" data-count="4">0</strong><small>이해부터 배포 준비까지</small></article>
            <article className="metric reveal" data-delay="2"><span>CURRENT PHASE</span><strong>02</strong><small>Publishing Pipeline / Building</small></article>
            <article className="metric reveal" data-delay="3"><span>NEXT MILESTONE</span><strong>BETA</strong><small>Closed Beta / Planned</small></article>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div className="wrap">
      <div className="footer-top"><p className="footer-statement">One Source.<br /><span className="blue">Many Possibilities.</span></p><div className="footer-links">KNCA Labs · AI Content Automation Platform<br />Operated by Stay C (스테이씨)<br /><span className="founded-badge">2023년 설립</span><br /><a href="mailto:founder@kncalabs.com">founder@kncalabs.com</a> · <a href="https://kncalabs.com/" target="_blank" rel="noreferrer">kncalabs.com ↗</a></div></div>
      <div className="business"><address>대표 김하늘 · 사업자등록번호 782-26-015552 · 제주특별자치도 제주시 애월읍 예원로 144 · 010-3298-3775</address><span className="corner">KNCA LABS © 2026<br />ALPHA / SOUTH KOREA</span></div>
    </div>
  </footer>

  

    </div>
  );
}
