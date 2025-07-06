# CDRI 프론트엔드 과제

## 프로젝트 개요

사용자가 책을 검색하고 찜할 수 있는 웹 서비스입니다. 카카오 책 검색 API를 활용하여 검색합니다.

### 주요 기능

- 책 검색
- 검색 기록
- 찜하기

### 기술 스택

- Nextjs
- Tailwind CSS
- React Query
- axios

## 실행 방법 및 환경 설정

프로젝트를 클론 받은 후 아래 명령어를 실행하여 패키지를 설치합니다.

```bash
# npm을 사용할 경우
npm install

# yarn을 사용할 경우
yarn add
```

패키지를 설치 후 아래 명령어를 입력 하여 개발 서버를 실행합니다.

```bash
npm run dev
yarn run dev
```

브라우저에서 `http://localhost:3000`에 접속하여 프로젝트에 접속합니다.

.env 파일 추가가 필요합니다. .env 파일은 package.json과 같은 depth로 추가해주시면 됩니다.

## 폴더 구조 및 주요 코드 설명

### 폴더 구조

```markdown
. 📂 src
└── 📂 api/
│ ├── 📄 axios.ts
│ └── 📂 book/
│ ├── 📄 book.ts
│ ├── 📄 query.ts
│ └── 📂 wishlist/
│ ├── 📄 query.ts
│ ├── 📄 wishlist.ts
└── 📂 app/
│ ├── 📄 QueryProvider.tsx
│ └── 📂 components/
│ ├── 📄 Searchbox.tsx
│ ├── 📄 favicon.ico
│ ├── 📄 globals.css
│ ├── 📄 layout.tsx
│ ├── 📄 page.tsx
│ └── 📂 wishlist/
│ ├── 📄 page.tsx
└── 📂 components/
│ ├── 📄 BookItemDetail.tsx
│ ├── 📄 BookList.tsx
│ ├── 📄 BookListItem.tsx
│ ├── 📄 CountText.tsx
│ ├── 📄 Header.tsx
│ ├── 📄 NoData.tsx
│ ├── 📄 button.tsx
└── 📂 hooks/
│ └── 📂 home/
│ ├── 📄 useHome.ts
│ ├── 📄 useDebounce.ts
│ └── 📂 wishlist/
│ ├── 📄 useWishList.ts
└── 📂 model/
│ ├── 📄 book.dto.ts
│ └── 📄 book.ts
```

관심사의 분리를 위해 mvc 패턴을 적용하려고 하였습니다. 아래는 폴더별 간략한 설명입니다.

- api
  - api 연동을 위한 폴더.
  - query 함수 및 useQuery 함수
- app
  - 책 검색 및 찜하기 페이지
- components
  - 공통 컴포넌트
- hooks
  - controller 역할을 위해 각 페이지에서 사용하는 훅
  - 유틸리티 훅도 포함되어 있음
- model
  - api를 통해 받아온 값과 mapper 함수를 통해 리턴된 값

### 주요 코드 설명

### 책 검색

```ts
// useHome.ts
const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 500);
const {
  data: bookData,
  isLoading,
  isError,
  fetchNextPage,
  hasNextPage,
  refetch,
} = useQuerySearchBooks({ query: debouncedQuery });

// query.ts
export const useQuerySearchBooks = ({
  query,
  sort,
  size,
  target,
}: BookSearchRequest) =>
  useInfiniteQuery({
    queryKey: ["books", query],
    queryFn: ({ pageParam = 1 }) =>
      searchBooks({ query, page: pageParam, sort, size, target }),
    getNextPageParam: (lastPage, pages) => {
      return lastPage.data.meta.is_end ? undefined : pages.length + 1;
    },
    initialPageParam: 1,
    select: (data) => {
      const books = data.pages.flatMap((page) => page.data.documents);
      return {
        books,
        totalCount: data.pages[0].data.meta.total_count,
      };
    },
  });

// book.ts
export const searchBooks = async ({
  query,
  sort,
  page,
  size,
  target,
}: BookSearchRequest) => {
  const response = await instance.get<BookSearchResponse>(API_URL, {
    params: {
      query,
      sort,
      page,
      size,
      target,
    },
  });

  return response;
};
```

controller 역할을 하는 useHome.ts 훅에서 useQuery를 통해서 데이터를 받아옵니다. query는 사용자의 input을 통해서 받아오며 디바운스 설정을 통해 input마다 api 요청을 보내는 것이 아닌 입력이 끝났을 때 보내도록 설정해두었습니다.
값을 받아오면 이를 view 단에서 사용하고 있습니다.

## 라이브러리 선택 이유

### Tailwind Css

실무에서 사용하고 다른 라이브러리보다 로딩이 빠르다는 장점으로 사용했습니다. Nextjs 프로젝트를 셋팅할 때 Tailwind Css를 사용할지 묻고 있는데 이는 많은 개발자들이 사용하여 옵션을 제공하고 있다고 생각하고 사용하게 된 이유 중 하나입니다.

### axios

interceptor 패턴을 쉽게 구현할 수 있도록 되어있어 사용했습니다. api 연동시 header에 key값 추가가 필요한데 요청시 interceptor를 활용하였습니다.

## 강조 하고 싶은 기능

### 검색 데이터를 받아온 이후 검색 기록에 추가 기능

```ts
const {
  data: bookData,
  isLoading,
  isError,
  fetchNextPage,
  hasNextPage,
  refetch,
} = useQuerySearchBooks({ query: debouncedQuery });

useEffect(() => {
  if (debouncedQuery && bookData) {
    setSearchHistory(debouncedQuery);
    queryClient.invalidateQueries({ queryKey: ["searchHistory"] });
  }
}, [debouncedQuery, bookData, queryClient]);
```

검색 쿼리와 데이터가 있을 경우 검색 기록에 쿼리를 추가한 이후 invalidateQueries 메소드를 실행해 새로운 검색 결과를 받아도록 했습니다.

## 구현하지 못한 기능 및 구현 방향 정리

#### 상세 검색

상세 검색 클릭시 state 값을 바꿔 상세 검색 창을 띄웁니다. 창의 경우 absolute로 구현하여 레이아웃을 잡을 예정이였습니다.
상세 검색에서 받을 옵션 값을 state에 저장하고 이를 target 값에 대응하여 useQuery에 넘기는 방식으로 데이터를 가져오려고 했습니다.

```ts
// useHome.ts
const [target, setTarget] = useState("");
const {
  data: bookData,
  isLoading,
  isError,
  fetchNextPage,
  hasNextPage,
  refetch,
} = useQuerySearchBooks({ query: debouncedQuery, target: target });
```

#### 찜한 책인지 확인하고 찜 여부에 따라 아이콘 노출 및 찜 목록 추가/삭제 구현

찜한 책 리스트를 받아옵니다. 책 검색시 받아온 현재 페이지 데이터 중 찜한 책 리스트에 있는지 확인한 결과 값을 `isWishList`에 할당하여 추가하려 했습니다. includes, find 등 배열 메소드 중의 하나를 사용하여 값을 추가합니다.
`isWishLsit`가 true일 경우 filled인 아이콘을 노출하며 해당 아이콘 클릭시 받은 값을 찜한 리스트에서 제거하는 메소드를 실행합니다. 반대의 경우 lined 아이콘 노출과 함께 찜한 리스트에 추가 메소드를 실행합니다.

#### dto 변환 mapper

현재 컴포넌트에서 dto를 그대로 사용하고 있습니다. mapper 함수를 작성하고 dto를 넘겨 camelCase로 변환하여 사용하려고 하였습니다. 변환할 때는 `change-case` 또는 `humps` 라이브러리를 활용하여 변환할 예정이였습니다.
useQuery에서 select 옵션에서 변환 함수를 값에 넘겨 주고 반환한 값을 사용하려고 했습니다.
mapper 함수는 service 폴더 하위에 위치할 예정입니다.

```ts
 select: (data) => {
      // 해당 위치에 mapper 함수에서 반환한 값을 넣음
      const books = data.pages.flatMap((page) => page.data.documents);
      return {
        books,
        totalCount: data.pages[0].data.meta.total_count,
      };
    },
```

#### 페이지 이동

책 검색시 현재 첫 페이지만 보여주도록 되어있는데 페이지를 추가해 각 페이지를 이동할 때마다 페이지에 맞는 책을 보여주도록 하려고 했습니다.
