// --------------------------------------------------------------------------
// 실습: 다중 요소 선택과 반복 (querySelectorAll vs getElementsBy...)
// --------------------------------------------------------------------------

// 리마인드 while, for, for-of, forEach
{
  console.group("0. 반복문 리마인드 연습");

  const sectionList = document.querySelectorAll("section");
  {
    // 순반향(정순) 루프
    let i = 0;
    const sectionCount = sectionList.length;

    while (i < sectionCount) {
      const sectionItem = sectionList.item(i);
      console.log(sectionItem);
      i = i + 1;
    }
  }

  {
    // 역방향(역순) 루프
    // 여기에 코드 작성
    // let i = sectionList.length - 1 // 2 → 1 → 0
    let i = sectionList.length; // 3

    while (--i >= 0) {
      const sectionItem = sectionList.item(i);
      console.log(sectionItem);
      // i -= 1
    }
  }

  // 순방향(정순)
  for (let i = 0, l = sectionList.length; i < l; ++i) {
    const sectionItem = sectionList.item(i);
    console.log(sectionItem);
  }

  // 역방향(역순)
  for (let i = sectionList.length - 1; i >= 0; --i) {
    const sectionItem = sectionList[i];
    console.log(sectionItem);
  }

  // for-of 문
  for (const sectionItem of sectionList) {
    console.log(sectionItem);
  }

  // forEach 메서드
  sectionList.forEach((section, key) => {
    console.log(section, key);
  });

  console.groupEnd();
}

// '.prose header > *' 요소들 수집해 참조
{
  const headerChildren = document.querySelectorAll(".prose header > *");
  // console.log(headerChildren) // NodeList [h1, p]

  // 헤더 내부의 자식 요소들에 프라이머리 컬러 일괄 적용
  {
    // for 문
    for (let i = 0, l = headerChildren.length; i < l; ++i) {
      // eslint-disable-next-line no-unused-vars
      const childElement = headerChildren.item(i);
      // console.log(i, childElement)
      // childElement.classList.add('color--primary')
    }
  }

  {
    // for...of 문
    // eslint-disable-next-line no-unused-vars
    for (const childElement of headerChildren) {
      // console.log(childElement)
      // childElement.classList.add('color--primary')
    }
  }

  {
    // forEach 메서드
    // eslint-disable-next-line no-unused-vars
    headerChildren.forEach((childElement) => {
      // console.log(childElement)
      // childElement.classList.add('color--primary')
    });
  }
}

// [실습] querySelectorAll을 이용한 다중 선택
// 1. '.life-tips' 내부의 모든 'p' 요소를 선택하여 'paragraphs' 변수에 할당하세요.
// 2. 수집된 NodeList의 길이를 콘솔에 출력하세요.
console.group("1. 요소 일괄 선택");

const paragraphs = document.querySelectorAll(".life-tips p");
console.log(paragraphs.length);

console.groupEnd();

// [실습] 다양한 반복문을 활용한 스타일 적용
// 1. for...of 문을 사용하여 모든 단락에 'color-primary' 클래스를 추가하세요.
// 2. forEach 메서드를 사용하여 모든 단락의 배경색을 변경해 보세요.
console.group("2. NodeList 루프 수행");

// 여기에 코드를 작성하세요.

console.groupEnd();

// [실습] NodeList를 진짜 배열로 변환하기
// 1. Array.from()을 사용하여 'paragraphs'를 'paragraphArray'로 변환하세요.
// 2. Array.isArray()를 통해 변환 여부를 확인하고 콘솔에 출력하세요.
console.group("3. 배열로 변환");

const allParagraph = document.querySelectorAll("main p");
console.log(allParagraph); // NodeList

// 배열 바꾸기 (NodeList -> Array.from() -> 새로운 Array 생성)
const allParagraphArray = Array.from(allParagraph);
console.log(Array.isArray(allParagraph)); // false
console.log(typeof allParagraphArray); // Arra
// 배열인지 아닌지 정확히 감지하는 메서드
// Array.isArray()
console.log(Array.isArray(allParagraphArray)); // true

console.groupEnd();

// [실습] 정적(Static) vs 라이브(Live) 컬렉션 비교
// 1. getElementsByTagName을 사용하여 라이브 컬렉션을 'liveCol'에 담으세요.
// 2. querySelectorAll을 사용하여 정적 컬렉션을 'staticCol'에 담으세요.
// 3. 부모 요소에 innerHTML을 사용하여 새로운 <p>를 추가한 후, 두 컬렉션의 length 차이를 확인하세요.
console.group("4. Live vs Static 컬렉션");

// 문서의 모든 섹션 요소 찾아보자.
const allSectionElements = document.getElementsByTagName("section");

console.log(allSectionElements); // HTMLCollection

// TypeError: allSectionElements.forEach is not a function
// 반복하고 싶은데??? 어떻게 해야 할까?
// allSectionElements.forEach((element) => {
//   console.log(element);
// });

console.groupEnd();

// [미션 5] 라이브 컬렉션과 이벤트 연결의 한계
// 1. '.live-collection li' 요소들을 getElementsByTagName으로 수집하세요.
// 2. 루프를 돌며 클릭 시 textContent를 출력하는 이벤트를 연결하세요.
// 3. 새로운 <li>를 추가한 후, 새 요소에서도 클릭 이벤트가 작동하는지 확인하세요. (작동하지 않음이 정상)
console.group("5. 이벤트 위임의 필요성 체감");

// 여기에 코드를 작성하세요.

console.groupEnd();

// --------------------------------------------------------------------------
// 핵심 요약!
// --------------------------------------------------------------------------
// 1. querySelectorAll()은 정적(Static) 컬렉션인 NodeList를 반환합니다.
// 2. NodeList는 배열이 아니지만 for...of와 forEach를 직접 사용할 수 있습니다.
// 3. getElementsByTagName 등은 라이브(Live) 컬렉션을 반환하여 실시간 DOM 변화를 감지합니다.
// 4. 새로운 요소가 추가되어도 이미 연결된 이벤트는 자동으로 전파되지 않으므로 '이벤트 위임'이 유리합니다.
// 5. Array.from(nodeList)를 사용하면 NodeList를 완전한 배열로 변환하여 map, filter 등을 쓸 수 있습니다.
// --------------------------------------------------------------------------

// `querySelectorAll()` 메서드를 사용해 연습해보세요.

// 1. 좋은 사람(Good Guy)을 모두 선택하세요.
const goodGuys = document.querySelectorAll('[data-type="good-guy"]');
console.log(goodGuys);

// 2. 좋은 사람(Good Guy) 모두에게 `excellent` 클래스 이름을 추가하세요.
goodGuys.forEach((guy) => guy.classList.add("excellent"));

// 3. 빌런(Villain)을 모두 선택하세요.
const villains = document.querySelectorAll('[data-type="villain"]');
console.log(villains);

// 4. 빌런 모두에게 `naughty` 클래스 이름을 추가하세요.
for (const villain of villains) {
  villain.classList.add("naughty");
}
// villains.forEach((villain) => villain.classList.add("naughty"));

// 5. 모든 캐릭터(Character)를 선택하세요.
const characters = document.querySelectorAll(".character");
console.log(characters);

// 6. 모든 캐릭터에 `star-wars` 클래스 이름을 추가하세요.
characters.forEach((c) => c.classList.add("star-wars"));
